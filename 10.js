$('document').ready(function() { 
    $(".todaysDate").prop("readonly", true);
    enableDisable("#p_1390_0_0,#p_1390_0_1,#p_1390_0_2,#p_1390_0_3,#p_1390_0_4,#p_1390_0_5", "#p_1391_0", 'Other', true);
    enableDisable("#p_1413_0_0", "#p_1412_0", 'From the date of this Authorization until', true);
    enableDisable("#p_1363_0_0", "#p_1362_0", 'From the date of this Authorization until', false);
    enableDisable("#p_1413_0_2","#p_1395_0", 'Until the following event occurs', true);
    enableDisable("#p_1413_0_2","#p_1395_0", 'Until the following event occurs', true);
});
