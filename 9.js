$(document).ready(function(){
    $(".todaysDate").prop("readonly", true);
   
    
    enableDisable("#p_1302_0_0,#p_1302_0_1", "#p_1303_0", 'Yes', true);
    enableDisable("#p_1304_0_0,#p_1304_0_1", "#p_1305_0,#p_1306_0,#p_1307_0,#p_1359_0,#p_1309_0", 'Yes', true)
    enableDisable("#p_1304_0_0,#p_1304_0_1", "#p_1306_0", 'Yes', false);
    
    enableDisable("#p_1311_0_0,#p_1311_0_1", "#p_1312_0, #p_1313_0, #p_1314_0", 'Yes', true);
    enableDisable("#p_1314_0_0,#p_1314_0_1", "#p_1315_0", 'Yes', true);
    
    enableDisable("#p_1231_0_select", "#p_1232_0", 'OTHER', true);
    enableDisable("#p_1231_1_select", "#p_1232_1", 'OTHER', true);
    enableDisable("#p_1231_2_select", "#p_1232_2", 'OTHER', true);
    enableDisable("#p_1231_3_select", "#p_1232_3", 'OTHER', true);
    enableDisable("#p_1231_4_select", "#p_1232_4", 'OTHER', true);
    enableDisable("#p_1231_5_select", "#p_1232_5", 'OTHER', true);
    enableDisable("#p_1231_6_select", "#p_1232_6", 'OTHER', true);
    
    enableDisable("#p_1240_0_7", "#p_1241_0", 'Other', true);      
    enableDisable("#p_1240_1_7", "#p_1241_1", 'Other', true);
    enableDisable("#p_1240_2_7", "#p_1241_2", 'Other', true);
    enableDisable("#p_1240_3_7", "#p_1241_3", 'Other', true);
    enableDisable("#p_1240_4_7", "#p_1241_4", 'Other', true);
    enableDisable("#p_1240_5_7", "#p_1241_5", 'Other', true);
    enableDisable("#p_1240_6_7", "#p_1241_6", 'Other', true);
    
    enableDisable("#p_1462_0_0,#p_1462_0_1", "#p_1463_0", 'Yes', true);
    
    enableDisable("p_1463_0_0,#p_1463_0_1,#p_1463_0_2,#p_1463_0_3,#p_1463_0_4,#p_1463_0_5,#p_1463_0_6,#p_1463_0_7,#p_1463_0_8,#p_1463_0_9,#p_1463_0_10,#p_1463_0_11", "#p_1464_0", 'Other', true);
});