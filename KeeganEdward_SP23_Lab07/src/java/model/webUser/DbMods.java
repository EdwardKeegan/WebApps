package model.webUser;

import dbUtils.DbConn;
import dbUtils.FormatUtils;
import dbUtils.ValidationUtils;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DbMods {

    public static StringData findById (DbConn dbc, String id) {
 
        // The find API needs to represent three cases: found web_user, not found, db error. 

        StringData sd = new StringData();
        try {
            String sql = "SELECT web_user_id, user_email, user_password, membership_fee, birthday, image, "
                    + "web_user.user_role_id, user_role_type "
                    + "FROM web_user, user_role WHERE web_user.user_role_id = user_role.user_role_id "
                    + "AND web_user_id = ?";

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

 // class
  public static StringData newFind(DbConn dbc, String minMembership, String maxBirthday) {

        StringData sd = new StringData();

        java.math.BigDecimal myDecimal = ValidationUtils.decimalConversion(minMembership);
        java.sql.Date myDate = ValidationUtils.dateConversion(maxBirthday);
        if ((myDate == null) || (myDecimal == null)) {
            sd.errorMsg = "Error: Must provide a valid dollar amount and a valid date for search";
            return sd;
        }

        try {
            String sql = "SELECT web_user_id, user_email, user_password, membership_fee, birthday, image, "
                    + "web_user.user_role_id, user_role_type "
                    + "FROM web_user, user_role WHERE web_user.user_role_id = user_role.user_role_id "
                    + "AND membership_fee > ? AND birthday < ?";

            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);

            // Encode the user inputs into the select statement
            stmt.setBigDecimal(1, myDecimal);
            stmt.setDate(2, myDate);

            ResultSet results = stmt.executeQuery();
            if (results.next()) {

                // plainInteger returns integer converted to string with no commas.
                sd.webUserId += FormatUtils.plainInteger(results.getObject("web_user_id")) + "\n";
                sd.userEmail += FormatUtils.formatString(results.getObject("user_email")) + "\n";
                sd.userPassword += FormatUtils.formatString(results.getObject("user_password")) + "\n";
                sd.image += FormatUtils.formatString(results.getObject("image")) + "\n";
                sd.birthday += FormatUtils.formatDate(results.getObject("birthday")) + "\n";
                sd.membershipFee += FormatUtils.formatDollar(results.getObject("membership_fee")) + "\n";
                sd.userRoleId += FormatUtils.plainInteger(results.getObject("web_user.user_role_id")) + "\n";
                sd.userRoleType += FormatUtils.formatString(results.getObject("user_role_type")) + "\n";

            }
            results.close();
            stmt.close();

        } catch (Exception e) {
            sd.errorMsg = "Exception thrown in DbMods.newFind(): " + e.getMessage();
        }
        return sd;

    } // newFind

} // class
