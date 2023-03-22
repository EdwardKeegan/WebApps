package model.webUser;

import dbUtils.DbConn;
import dbUtils.FormatUtils;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DbMods {

    public static StringData findById (DbConn dbc, String id) {
 
        // The find API needs to represent three cases: found web_user, not found, db error. 

        StringData sd = new StringData();
        try {
            String sql = "SELECT home_id, home_address, home_type, home_img, price, beds, baths, lot_size_acres, year_built, listing_date, "
                    + "home.web_user_id, user_email, web_user.image "
                    + "FROM home, web_user WHERE home.web_user_id = web_user.web_user_id "
                    + "ORDER BY home_id ";  // you always want to order by something, not just random order.

            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);

            // Encode the id (that the user typed in) into the select statement, into the first (and only) ? 
            stmt.setString(1, id);

            ResultSet results = stmt.executeQuery();
            if (results.next()) { // id is unique, one or zero records expected in result set

                // plainInteger returns integer converted to string with no commas.
                sd.webUserId = FormatUtils.plainInteger(results.getObject("web_user_id"));
                sd.userEmail = FormatUtils.formatString(results.getObject("user_email"));
                sd.userPassword = FormatUtils.formatString(results.getObject("user_password"));
                sd.image = FormatUtils.formatString(results.getObject("image"));
                sd.birthday = FormatUtils.formatDate(results.getObject("birthday"));
                sd.membershipFee = FormatUtils.formatDollar(results.getObject("membership_fee"));
                sd.userRoleId = FormatUtils.plainInteger(results.getObject("web_user.user_role_id"));
                sd.userRoleType = FormatUtils.formatString(results.getObject("user_role_type"));
                
            } else {
                sd.errorMsg = "Web User Not Found.";
            }
            results.close();
            stmt.close();
        } catch (Exception e) {
            sd.errorMsg = "Exception thrown in DbMods.findById(): " + e.getMessage();
        }
        return sd;

    } // findById
    
    

} // class
