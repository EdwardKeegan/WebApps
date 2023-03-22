package model.webUser;

import dbUtils.DbConn;
import dbUtils.FormatUtils;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import dbUtils.ValidationUtils;

public class DbModsTest {
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

            // Encode the id (that the user typed in) into the select statement, into the first (and only) ? 
            stmt.setBigDecimal(1, myDecimal); // 1 means the first  ? in the SQL
            stmt.setDate(2, myDate);          // 2 means the second ? in the SQL 

      
        
        }catch (Exception e) {
            sd.errorMsg = "Exception thrown in DbMods.findById(): " + e.getMessage();

        }
        return sd;

    } // findById

} // class
