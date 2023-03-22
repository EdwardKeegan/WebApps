package view;

// classes imported from java.sql.*
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import model.homes.*;

// classes in my project
import dbUtils.*;

public class HomesView {

    public static StringDataList getAllHomes(DbConn dbc) {

        // sdl will be an empty array and DbError with "" 
        StringDataList sdl = new StringDataList(); 
        
        // sd will have all of it's fields initialized to ""
        StringData sd = new StringData();
        
        try {
            String sql = "SELECT homes_id, homes_address, homes_type, homes_img, price, beds, baths, lot_size_acres, year_built, listing_date, "
                    + "homes.web_user_id, user_email, web_user.image "
                    + "FROM homes, web_user WHERE homes.web_user_id = web_user.web_user_id "
                    + "ORDER BY homes_id ";  // you always want to order by something, not just random order.
            
            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);
            ResultSet results = stmt.executeQuery();

            while (results.next()) {
                
                sd = new StringData();
                
                // the formatUtils methods do not throw exceptions, but if they find illegal data, they write 
                // a message right in the field that they are trying to format.

                // plainInteger returns integer converted to string with no commas.
                sd.homesId = FormatUtils.plainInteger(results.getObject("homes_id"));
                sd.homesAddress = FormatUtils.formatString(results.getObject("homes_address"));
                sd.homesType = FormatUtils.formatString(results.getObject("homes_type"));
                sd.homesImg = FormatUtils.formatString(results.getObject("homes_img"));
                sd.price = FormatUtils.formatDollar(results.getObject("price"));
                sd.beds = FormatUtils.formatInteger(results.getObject("beds"));
                sd.baths = FormatUtils.formatDecimal(results.getObject("baths"));
                sd.lotSizeAcres = FormatUtils.formatDecimal(results.getObject("lot_size_acres"));
                sd.yearBuilt = FormatUtils.plainInteger(results.getObject("year_built"));
                sd.listingDate = FormatUtils.formatDate(results.getObject("listing_date"));
                
                
                sd.webUserId = FormatUtils.plainInteger(results.getObject("web_user_id"));
                sd.userEmail = FormatUtils.formatString(results.getObject("user_email"));
                sd.image = FormatUtils.formatString(results.getObject("image"));
     
                sd.webUserId = FormatUtils.plainInteger(results.getObject("web_user_id"));
               
               // sd.membershipFee = FormatUtils.formatDollar(results.getObject("membership_fee"));
               // sd.userRoleType = FormatUtils.formatString(results.getObject("user_role_type"));
                sdl.add(sd);
            }
            results.close();
            stmt.close();
        } catch (Exception e) {
            sd.errorMsg = "Exception thrown in HomesView.getAllUsers(): " + e.getMessage();
            sdl.add(sd);
        }
        return sdl;
    }
}