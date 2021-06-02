$('document').ready(function() {
    enableDisable("#p_1231_0_21", "#p_1241_0", 'Yes', true);
 
    $(".todaysDate").prop("readonly", true);
    $(".patientLastName").prop("readonly", true);
    $(".patientFirstName").prop("readonly", true);
    $(".patientMiddleNam").prop("readonly", true);
    
    setTimeout(function(){
        enableDisable("#p_610_0_0,#p_610_0_1", "#sec_29", 'Yes', true);
        enableDisable("#p_1252_0_0,#p_1252_0_1", "#sec_17", 'Yes', true);
        enableDisable("#p_1264_0_0,#p_1264_0_1", "#sec_19", 'Yes', true);
        enableDisable("#p_1265_0_0,#p_1265_0_1", "#sec_22", 'Yes', true);
        enableDisable("#p_1429_0_0,#p_1429_0_1", "#sec_24", 'Yes', true);
    }, 1000);
    
    enableDisable("#p_1219_0_select", "#p_1220_0", 'OTHER', true);
    enableDisable("#p_1219_1_select", "#p_1220_1", 'OTHER', true);
    enableDisable("#p_1219_2_select", "#p_1220_2", 'OTHER', true);
    enableDisable("#p_1219_3_select", "#p_1220_3", 'OTHER', true);
    enableDisable("#p_1219_4_select", "#p_1220_4", 'OTHER', true);
    enableDisable("#p_1219_5_select", "#p_1220_5", 'OTHER', true);
    enableDisable("#p_1219_6_select", "#p_1220_6", 'OTHER', true);

    enableDisable("#p_1229_0_7", "#p_1230_0", 'Other', true);      
    enableDisable("#p_1229_1_7", "#p_1230_1", 'Other', true);
    enableDisable("#p_1229_2_7", "#p_1230_2", 'Other', true);
    enableDisable("#p_1229_3_7", "#p_1230_3", 'Other', true);
    enableDisable("#p_1229_4_7", "#p_1230_4", 'Other', true);
    enableDisable("#p_1229_5_7", "#p_1230_5", 'Other', true);
    enableDisable("#p_1229_6_7", "#p_1230_6", 'Other', true);
    
    enableDisable("#p_470_0_0", "#p_1500_0,#p_1435_0,#p_498_0", 'MRI', true);
    enableDisable("#p_471_0_0", "#p_1501_0, #p_1436_0, #p_501_0", 'X-ray', true);
    enableDisable("#p_472_0_0", "#p_1502_0, #p_1437_0, #p_504_0", 'CT scan', true);
    enableDisable("#p_473_0_0", "#p_1243_0, #p_1438_0, #p_507_0", 'EMG/NCV Study', true);
    enableDisable("#p_474_0_0", "#p_1503_0, #p_1439_0, #p_510_0", 'Ultrasound', true); 
    enableDisable("#p_475_0_0", "#p_511_0", 'Other Diagnostic Testing', true);
    
    enableDisable("#p_514_0_0", "#p_515_0, #p_516_0, #p_517_0", 'Discogram', true);
    enableDisable("#p_175_0_0", "#p_176_0, #p_177_0, #p_178_0", 'Epidural Steroid Injection', true);
    enableDisable("#p_180_0_0", "#p_179_0", 'Joint Injection', true);
    enableDisable("#p_1330_0_0", "#p_183_0, #p_184_0, #p_185_0", 'Medial Branch Blocks or Facet Injections', true);
    enableDisable("#p_186_0_0", "#p_187_0", 'Nerve Blocks', true); 
    enableDisable("#p_189_0_0", "#p_190_0, #p_191_0, #p_192_0", 'Radiofrequency Ablation', true);
    enableDisable("#p_193_0_0", "#p_1249_0", 'Spinal Column Stimulator', true);
    enableDisable("#p_197_0_0", "#p_198_0", 'Trigger Point Injection', true);
    enableDisable("#p_200_0_0", "#p_201_0", 'Vertebroplasty/ Kyphoplasty', true);
    enableDisable("#p_203_0_0", "#p_204_0", 'Other', true);
    
    enableDisable("#p_1350_0_0", "#p_1351_0", 'Yes', true);
    enableDisable("#p_1350_0_1", "#p_1351_0", 'Yes', false);
    enableDisable("#p_1351_0_0", "#p_1352_0, #p_1340_0, #p_1341_0, #p_1342_0, #p_1343_0, #p_1344_0", 'Yes', true);
    enableDisable("#p_1351_0_1", "#p_1352_0, #p_1340_0, #p_1341_0, #p_1342_0, #p_1343_0, #p_1344_0", 'Yes', false);
    enableDisable("#p_1353_0_0", "#p_1344_0, #p_1354_0, #p_1355_0, #p_1356_0, #p_1357_0", 'Yes', true);
    enableDisable("#p_1353_0_1", "#p_1344_0, #p_1354_0, #p_1355_0, #p_1356_0, #p_1357_0", 'Yes', false);

    enableDisable("#p_213_0_0", "#p_214_0, #p_215_0", 'Gallbladder Removal', true);
    enableDisable("#p_217_0_0", "#p_218_0, #p_219_0", 'Appendectomy', true);
    enableDisable("#p_220_0_0", "#p_221_0, #p_222_0", 'Other', true);
    enableDisable("#p_224_0_0", "#p_225_0, #p_226_0", 'Caesarean Section', true);
    enableDisable("#p_227_0_0", "#p_228_0, #p_229_0", 'Hysterectomy', true); 
    enableDisable("#p_230_0_0", "#p_231_0, #p_232_0", 'Laparoscopy', true); 
    enableDisable("#p_233_0_0", "#p_234_0, #p_235_0", 'Ovarian', true);
    enableDisable("#p_236_0_0", "#p_237_0, #p_238_0", 'Other', true);
    enableDisable("#p_240_0_0", "#p_613_0, #p_242_0", 'Valve Replacement', true);
    enableDisable("#p_243_0_0", "#p_614_0, #p_245_0", 'Aneurysm Repair', true);
    enableDisable("#p_1251_0_0", "#p_615_0, #p_248_0", 'Stent Placement', true);
    enableDisable("#p_249_0_0", "#p_616_0, #p_251_0", 'Other', true);
    enableDisable("#p_253_0_0", "#p_617_0, #p_255_0", 'Shoulder', true);
    enableDisable("#p_256_0_0", "#p_618_0, #p_258_0", 'Hip', true);
    enableDisable("#p_259_0_0", "#p_619_0, #p_261_0", 'Knee', true);
    enableDisable("#p_263_0_0", "#p_620_0, #p_265_0", 'Discectomy', true);
    enableDisable("#p_266_0_0", "#p_621_0, #p_268_0", 'Laminectomy', true);
    enableDisable("#p_269_0_0", "#p_622_0, #p_271_0", 'Spinal Fusion', true);
    enableDisable("#p_273_0_0", "#p_623_0, #p_275_0", 'Hemorrhoid Surgery', true);
    enableDisable("#p_276_0_0", "#p_624_0, #p_278_0", 'Hernia Repair', true);
    enableDisable("#p_280_0_0", "#p_625_0, #p_282_0", 'Thyroidectomy', true);
    enableDisable("#p_283_0_0", "#p_626_0, #p_285_0", 'Tonsillectomy', true);
    enableDisable("#p_286_0_0", "#p_627_0, #p_288_0", 'Vascular Surgery', true);
    
    enableDisable("#p_289_0_0,#p_289_0_1", "#p_520_0", 'Yes', true);
    
    enableDisable("#p_520_0_11", "#p_291_0", 'Other', true);
    enableDisable("#p_520_0_0", "#p_291_0", 'Other', false);
    enableDisable("#p_520_0_1", "#p_291_0", 'Other', false);
    enableDisable("#p_520_0_2", "#p_291_0", 'Other', false);
    enableDisable("#p_520_0_3", "#p_291_0", 'Other', false);
    enableDisable("#p_520_0_4", "#p_291_0", 'Other', false);
    enableDisable("#p_520_0_5", "#p_291_0", 'Other', false);
    enableDisable("#p_520_0_6", "#p_291_0", 'Other', false);
    enableDisable("#p_520_0_7", "#p_291_0", 'Other', false);
    enableDisable("#p_520_0_8", "#p_291_0", 'Other', false);
    enableDisable("#p_520_0_9", "#p_291_0", 'Other', false);
    enableDisable("#p_520_0_10", "#p_291_0", 'Other', false);

    enableDisable("#p_651_0_0", "#p_306_0", 'Yes', true);
    enableDisable("#p_651_0_1", "#p_306_0", 'Yes', false);
    enableDisable("#p_652_0_0", "#p_304_0", 'Yes', true);
    enableDisable("#p_652_0_1", "#p_304_0", 'Yes', false);

    enableDisable("#p_309_0_0", "#p_521_0", 'Cancer', true);
    enableDisable("#p_311_0_0", "#p_522_0", 'Diabetes', true);
    enableDisable("#p_364_0_0", "#p_654_0", 'Hepatitis A', true);
    enableDisable("#p_366_0_0", "#p_655_0", 'Hepatitis B', true);
    enableDisable("#p_368_0_0", "#p_1269_0", 'Hepatitis C', true);
    enableDisable("#p_383_0_0", "#p_384_0", 'Other diagnosed conditions', true);
    
    hideRelatedInputs("#p_293_0","#p_294_0,#p_295_0", true);
    hideRelatedInputs("#p_293_1","#p_294_1,#p_295_1", true);
    hideRelatedInputs("#p_293_2","#p_294_2,#p_295_2", true);
    hideRelatedInputs("#p_293_3","#p_294_3,#p_295_3", true);
    hideRelatedInputs("#p_293_4","#p_294_4,#p_295_4", true);
    hideRelatedInputs("#p_293_5","#p_294_5,#p_295_5", true);
    hideRelatedInputs("#p_293_6","#p_294_6,#p_295_6", true);
    
    hideRelatedInputs("#p_298_0","#p_299_0", true);
    hideRelatedInputs("#p_298_1","#p_299_1", true);
    hideRelatedInputs("#p_298_2","#p_299_2", true);
    hideRelatedInputs("#p_298_3","#p_299_3", true);
    hideRelatedInputs("#p_298_4","#p_299_4", true);
    hideRelatedInputs("#p_298_5","#p_299_5", true);
    hideRelatedInputs("#p_298_6","#p_299_6", true);
});




