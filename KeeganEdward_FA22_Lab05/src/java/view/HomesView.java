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
            String sql = "SELECT homes_id, homes_address, web_user_id"
                    + "FROM homes"
                    + "ORDER BY homes_id ";  // you always want to order by something, not just random order.
            
            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);
            ResultSet results = stmt.executeQuery();

            while (results.next()) {
                
                sd = new StringData();
                sd.homesId = FormatUtils.plainInteger(results.getObject("homes_id"));
                sd.homesAddress = FormatUtils.formatString(results.getObject("homes_address"));
                
                // Other fields for HW5

                sd.webUserId = FormatUtils.plainInteger(results.getObject("web_user_id"));
              

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