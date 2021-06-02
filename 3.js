$('document').ready(function() {  
    
    setTimeout(function(){ 
        enableDisable("#p_454_0_0,#p_454_0_1", "#sec_7,#p_80_0_0", 'Yes', true);
        enableDisable("#p_1369_0_0,#p_1369_0_1", "#sec_8,#p_90_0_0", 'Yes', true);
    }, 2000);
    
    enableDisable("#p_1231_0_21", "#p_1241_0", 'Yes', true);
    enableDisable("#p_1430_0_0, #p_1430_0_1", "#p_446_0,#p_447_0,#p_448_0,#p_1418_0,#p_450_0", 'No', true);
    enableDisable("#p_1430_0_0, #p_1430_0_1", "#p_447_0", 'No', false);
    enableDisable("#p_60_0_0,#p_60_0_1,#p_60_0_2,#p_60_0_3,#p_60_0_4", "#p_61_0", 'Other', true);
    enableDisable("#p_64_0_0,#p_64_0_1,#p_64_0_2", "#p_65_0", 'Other', true);

    enableDisable("#p_70_0_0,#p_70_0_1,#p_70_0_2,#p_70_0_3", 
        "#p_72_0, #p_453_0, #p_74_0, #p_478_0, #p_75_0", 
        "Spouse,Child,Other", true);
    enableDisable("#p_70_0_0,#p_70_0_1,#p_70_0_2,#p_70_0_3", "#p_75_0", 'Spouse,Child,Other', false);
    enableDisable("#p_70_0_0,#p_70_0_1,#p_70_0_2,#p_70_0_3", "#p_71_0", 'Other', true);
    
    enableDisable("#p_80_0_0,#p_80_0_1,#p_80_0_2,#p_80_0_3", 
        "#p_81_0, #p_82_0, #p_455_0, #p_84_0, #p_479_0, #p_85_0", 
        "Spouse,Child,Other", true);
    enableDisable("#p_80_0_0,#p_80_0_1,#p_80_0_2,#p_80_0_3", "#p_85_0", 'Spouse,Child,Other', false);
    enableDisable("#p_80_0_0,#p_80_0_1,#p_80_0_2,#p_80_0_3", "#p_81_0", 'Other', true);
        
     enableDisable("#p_90_0_0,#p_90_0_1,#p_90_0_2,#p_90_0_3", 
        "#p_91_0, #p_92_0, #p_457_0, #p_94_0, #p_480_0, #p_95_0", 
        "Spouse,Child,Other", true);
    enableDisable("#p_90_0_0,#p_90_0_1,#p_90_0_2,#p_90_0_3", "#p_95_0", 'Spouse,Child,Other', false);
    enableDisable("#p_90_0_0,#p_90_0_1,#p_90_0_2,#p_90_0_3", "#p_91_0", 'Other', true);
    
    enableDisable("#p_96_0_0,#p_96_0_1", "#p_97_0, #p_98_0, #p_99_0, #p_100_0, #p_101_0, #p_102_0, #p_1424_0, #p_104_0, #p_105_0, #p_106_0", 'Yes', true);
    
    enableDisable("#p_117_0_0,#p_117_0_1", "#p_118_0, #p_119_0, #p_120_0, #p_121_0", 'Yes', true);
});