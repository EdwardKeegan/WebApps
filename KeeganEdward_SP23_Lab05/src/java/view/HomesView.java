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
            String sql = "SELECT homes_id, homes_address, web_user_id "
                    + "FROM homes "
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