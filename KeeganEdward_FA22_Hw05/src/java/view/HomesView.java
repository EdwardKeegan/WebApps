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
            String sql = "SELECT home_id, home_address, home_type, home_img, price, beds, baths, lot_size_acres, year_built, listing_date, "
                    + "home.web_user_id, user_email, web_user.image "
                    + "FROM home, web_user WHERE home.web_user_id = web_user.web_user_id "
                    + "ORDER BY home_id ";  // you always want to order by something, not just random order.
            
            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);
            ResultSet results = stmt.executeQuery();

            while (results.next()) {
                
                sd = new StringData();
                sd.homeId = FormatUtils.plainInteger(results.getObject("home_id"));
                sd.homeAddress = FormatUtils.formatString(results.getObject("home_address"));
                
                // Other fields for HW5
                sd.homeType = FormatUtils.formatString(results.getObject("home_type"));
                sd.homeImg = FormatUtils.formatString(results.getObject("home_img"));
                sd.price = FormatUtils.formatDollar(results.getObject("price"));
                sd.beds = FormatUtils.formatInteger(results.getObject("beds"));
                sd.baths = FormatUtils.formatDecimal(results.getObject("baths"));
                sd.lotSizeAcres = FormatUtils.plainInteger(results.getObject("lot_size_acres"));
                sd.yearBuilt = FormatUtils.plainInteger(results.getObject("year_built"));
                sd.listingDate = FormatUtils.formatDate(results.getObject("listing_date"));
                
                
                sd.webUserId = FormatUtils.plainInteger(results.getObject("web_user_id"));
                sd.userEmail = FormatUtils.formatString(results.getObject("user_email"));
                sd.image = FormatUtils.formatString(results.getObject("image"));

                // 1-2 fields from web_user (use_email...)
        
              
                sdl.add(sd);
            }
            results.close();
            stmt.close();
        } catch (Exception e) {
            sd.errorMsg = "Exception thrown in WebUserView.getAllHomes(): " + e.getMessage();
            sdl.add(sd);
        }
        return sdl;
    }
}