(async function() {

    var _E6_96_87_E5_AD_97;
    var _E4_BD_BF_E7_94_A8_E8_80_85_E7_AD_94_E6_A1_88;
    var _E5_B7_B2_E9_81_B8_E6_93_87;
    var _E9_A1_8C_E5_BA_AB_E7_B8_BD_E6_95_B8;
    var _E6_B8_AC_E9_A9_97_E9_A1_8C;
    var _E9_A1_8C_E5_BA_AB;
    var _E5_88_86_E6_95_B8;
    var _E6_96_B0_E9_A1_8C_E5_BA_AB;
    var _E8_83_8C_E6_99_AF_E5_9C_96;
    var _E7_AD_94_E6_A1_88;
    var _E7_B5_90_E6_9D_9F;
    var _E5_95_8F_E9_A1_8C;
    var _E5_95_8F_E9_A1_8C1;
    var _E5_95_8F_E9_A1_8C2;
    var _E5_95_8F_E9_A1_8C3;
    var _E5_95_8F_E9_A1_8C4;
  
    function _E6_80_AA_E7_8D_B8_E5_AE_9A_E4_BD_8D() {
      $demoMonster01.reset();
      $demoMonster02.reset();
      $demoMonster03.reset();
      $demoMonster04.reset();
      $demoMonster01.sizeTo(200);
      $demoMonster02.sizeTo(200);
      $demoMonster03.sizeTo(200);
      $demoMonster04.sizeTo(200);
      $demoMonster01.moveTo(130, 120);
      $demoMonster02.moveTo((($bg.width()) / 3 + 30), 120);
      $demoMonster03.moveTo(((($bg.width()) / 3) * 2 - 70), 120);
      $demoMonster04.moveTo((($bg.width()) - 150), 120);
    }
  
    function _E6_96_87_E5_AD_97_E8_AE_8A_E5_A4_A7(_E6_96_87_E5_AD_97) {
      return ['<h1 style="font-size:40px;">', _E6_96_87_E5_AD_97, '</h1>'].join('');
    }
  
    async function _E5_88_A4_E6_96_B7_E5_B0_8D_E9_8C_AF(_E4_BD_BF_E7_94_A8_E8_80_85_E7_AD_94_E6_A1_88) {
      _E5_B7_B2_E9_81_B8_E6_93_87 = true;
      $demoMonster01.talk('');
      $demoMonster02.talk('');
      $demoMonster03.talk('');
      $demoMonster04.talk('');
      await Nuwa.say(_E4_BD_BF_E7_94_A8_E8_80_85_E7_AD_94_E6_A1_88);
      await delay(1, true); //delay
      if (_E4_BD_BF_E7_94_A8_E8_80_85_E7_AD_94_E6_A1_88 == _E7_AD_94_E6_A1_88) {
        _E5_88_86_E6_95_B8 = _E5_88_86_E6_95_B8 + 1;
        $demoMonster01.talk((await _E6_96_87_E5_AD_97_E8_AE_8A_E5_A4_A7('答對啦！')));
        $demoMonster02.talk((await _E6_96_87_E5_AD_97_E8_AE_8A_E5_A4_A7('答對啦！')));
        $demoMonster03.talk((await _E6_96_87_E5_AD_97_E8_AE_8A_E5_A4_A7('答對啦！')));
        $demoMonster04.talk((await _E6_96_87_E5_AD_97_E8_AE_8A_E5_A4_A7('答對啦！')));
        Nuwa.say('答對啦！');
        $demoMonster01.emotion('1');
        $demoMonster02.emotion('1');
        $demoMonster03.emotion('1');
        $demoMonster04.emotion('1');
        await Nuwa.syncMotionPlay("666_EM_Happy02");
      } else {
        $demoMonster01.talk((await _E6_96_87_E5_AD_97_E8_AE_8A_E5_A4_A7('答錯了啦')));
        $demoMonster02.talk((await _E6_96_87_E5_AD_97_E8_AE_8A_E5_A4_A7('答錯了啦')));
        $demoMonster03.talk((await _E6_96_87_E5_AD_97_E8_AE_8A_E5_A4_A7('答錯了啦')));
        $demoMonster04.talk((await _E6_96_87_E5_AD_97_E8_AE_8A_E5_A4_A7('答錯了啦')));
        Nuwa.say('答錯了啦');
        $demoMonster01.emotion('3');
        $demoMonster02.emotion('3');
        $demoMonster03.emotion('3');
        $demoMonster04.emotion('3');
        await Nuwa.syncMotionPlay("666_BA_Shakehead");
      }
      await delay(4, true); //delay
      if ((_E9_A1_8C_E5_BA_AB.length) > 0) {
        await _E6_B8_AC_E9_A9_97();
      } else {
        $demoMonster01.talk('');
        $demoMonster02.talk('');
        $demoMonster03.talk('');
        $demoMonster04.talk('');
        $demoMonster02.talk((await _E6_96_87_E5_AD_97_E8_AE_8A_E5_A4_A7(['作答完畢，總共答對 ', _E5_88_86_E6_95_B8, ' 題 (', _E5_88_86_E6_95_B8, ' / ', _E9_A1_8C_E5_BA_AB_E7_B8_BD_E6_95_B8, ' )'].join(''))));
        await Nuwa.say((['作答完畢，總共答對 ', _E5_88_86_E6_95_B8, ' 題'].join('')));
        $demoMonster04.talk('點我可以再玩一次');
        _E7_B5_90_E6_9D_9F = true;
      }
    }
  
    function lists_random_item(list, remove) {
      let x = Math.floor(Math.random() * list.length);
      if (remove) {
        return list.splice(x, 1)[0];
      } else {
        return list[x];
      }
    }
  
    async function _E6_B8_AC_E9_A9_97() {
      await _E6_80_AA_E7_8D_B8_E5_AE_9A_E4_BD_8D();
      await Nuwa.say((_E9_A1_8C_E5_BA_AB.length));
      _E6_B8_AC_E9_A9_97_E9_A1_8C = (lists_random_item(_E9_A1_8C_E5_BA_AB, true));
      _E6_96_B0_E9_A1_8C_E5_BA_AB.unshift(_E6_B8_AC_E9_A9_97_E9_A1_8C);
      _E8_83_8C_E6_99_AF_E5_9C_96 = (_E6_B8_AC_E9_A9_97_E9_A1_8C[(1 - 1)]);
      _E7_AD_94_E6_A1_88 = (_E6_B8_AC_E9_A9_97_E9_A1_8C[(2 - 1)]);
      _E5_95_8F_E9_A1_8C = [(_E6_B8_AC_E9_A9_97_E9_A1_8C[(2 - 1)]), (_E6_B8_AC_E9_A9_97_E9_A1_8C[(3 - 1)]), (_E6_B8_AC_E9_A9_97_E9_A1_8C[(4 - 1)]), (_E6_B8_AC_E9_A9_97_E9_A1_8C[(5 - 1)])];
      _E5_95_8F_E9_A1_8C1 = (lists_random_item(_E5_95_8F_E9_A1_8C, true));
      _E5_95_8F_E9_A1_8C2 = (lists_random_item(_E5_95_8F_E9_A1_8C, true));
      _E5_95_8F_E9_A1_8C3 = (lists_random_item(_E5_95_8F_E9_A1_8C, true));
      _E5_95_8F_E9_A1_8C4 = (lists_random_item(_E5_95_8F_E9_A1_8C, true));
      $demoMonster01.talk('');
      $demoMonster02.talk('');
      $demoMonster03.talk('');
      $demoMonster04.talk('');
      $demoMonster01.emotion('0');
      $demoMonster02.emotion('0');
      $demoMonster03.emotion('0');
      $demoMonster04.emotion('0');
      $bg.image(_E8_83_8C_E6_99_AF_E5_9C_96);
      await delay(2, true); //delay
      Nuwa.say('請問，答案是什麼?');
      await delay(4, true); //delay
      _E5_B7_B2_E9_81_B8_E6_93_87 = false;
      $demoMonster01.talk((await _E6_96_87_E5_AD_97_E8_AE_8A_E5_A4_A7(_E5_95_8F_E9_A1_8C1)));
      $demoMonster02.talk((await _E6_96_87_E5_AD_97_E8_AE_8A_E5_A4_A7(_E5_95_8F_E9_A1_8C2)));
      $demoMonster03.talk((await _E6_96_87_E5_AD_97_E8_AE_8A_E5_A4_A7(_E5_95_8F_E9_A1_8C3)));
      $demoMonster04.talk((await _E6_96_87_E5_AD_97_E8_AE_8A_E5_A4_A7(_E5_95_8F_E9_A1_8C4)));
    }
  
  
    await _E6_80_AA_E7_8D_B8_E5_AE_9A_E4_BD_8D();
    sheetInit('https://docs.google.com/spreadsheets/d/1P8pUNu78Nkv1Vo4j5wMqvB2-zzXiOX_7RxsWtUkFKq4/edit?usp=sharing', '工作表1');
    await sheetReadData();
    _E9_A1_8C_E5_BA_AB_E7_B8_BD_E6_95_B8 = _mySheet_.data.lastRow;
    _E9_A1_8C_E5_BA_AB = _mySheet_.data.data;
    _E5_88_86_E6_95_B8 = 0;
    _E6_96_B0_E9_A1_8C_E5_BA_AB = [];
    _E7_B5_90_E6_9D_9F = false;
    await _E6_B8_AC_E9_A9_97();
    $demoMonster01.click(async function() {
      if (_E5_B7_B2_E9_81_B8_E6_93_87 == false) {
        await _E5_88_A4_E6_96_B7_E5_B0_8D_E9_8C_AF(_E5_95_8F_E9_A1_8C1);
      }
    });
    $demoMonster02.click(async function() {
      if (_E5_B7_B2_E9_81_B8_E6_93_87 == false) {
        await _E5_88_A4_E6_96_B7_E5_B0_8D_E9_8C_AF(_E5_95_8F_E9_A1_8C2);
      }
    });
    $demoMonster03.click(async function() {
      if (_E5_B7_B2_E9_81_B8_E6_93_87 == false) {
        await _E5_88_A4_E6_96_B7_E5_B0_8D_E9_8C_AF(_E5_95_8F_E9_A1_8C3);
      }
    });
    $demoMonster04.click(async function() {
      if (_E7_B5_90_E6_9D_9F == true) {
        $demoMonster04.emotion('random');
        _E9_A1_8C_E5_BA_AB = _E6_96_B0_E9_A1_8C_E5_BA_AB;
        _E6_96_B0_E9_A1_8C_E5_BA_AB = [];
        _E5_88_86_E6_95_B8 = 0;
        _E7_B5_90_E6_9D_9F = false;
        await _E6_B8_AC_E9_A9_97();
      } else {
        if (_E5_B7_B2_E9_81_B8_E6_93_87 == false) {
          await _E5_88_A4_E6_96_B7_E5_B0_8D_E9_8C_AF(_E5_95_8F_E9_A1_8C4);
        }
      }
    });
  
  }());