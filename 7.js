$('document').ready(function() {
    $(".todaysDate ").prop("readonly", true);
    enableDisable("#p_1231_0_21", "#p_1241_0", 'Yes', true);
    enableDisable("#p_672_0_0,#p_672_0_1,#p_672_0_1,#p_672_0_2,#p_672_0_3,#p_672_0_4,#p_672_0_5", "#p_673_0", 'Other', true);
    enableDisable("#p_1363_0_0", "#p_1362_0", 'From the date of this Authorization until', true);
    enableDisable("#p_1363_0_0", "#p_1362_0", 'From the date of this Authorization until', false);
    enableDisable("#p_1363_0_2","#p_679_0", 'Until the following event occurs', true);
    enableDisable("#p_1363_0_2","#p_679_0", 'Until the following event occurs', true);
});