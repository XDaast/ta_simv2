// ==UserScript==
// @name            Tiberium Alliances Battle Simulator V2
// @description     Allows you to simulate combat before actually attacking.
// @author          Eistee & TheStriker & VisiG & Lobotommi & XDaast
// @version         15.12.23.01b
// @namespace       https://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @include         https://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @icon            http://eistee82.github.io/ta_simv2/icon.png
// @updateURL       http://eistee82.github.io/ta_simv2/ta_simv2.user.js
// @downloadURL     http://eistee82.github.io/ta_simv2/ta_simv2.user.js
// ==/UserScript==


(function() {
  var v = document.createElement("script");
  v.innerHTML = "(" + function() {
    function v() {
      qx.Class.define("Simulator", {type:"singleton", extend:qx.core.Object, construct:function() {
        try {
          this.armyBar = qx.core.Init.getApplication().getArmySetupAttackBar(), this.playArea = qx.core.Init.getApplication().getMainOverlay(), this.replayBar = qx.core.Init.getApplication().getReportReplayOverlay(), this.isSimButtonDisabled = !1, this.armyTempFormations = [], this.armyTempIdx = 0, this.isSimulation = !1, this.hideArmyTooltips(), this.simBtn = (new qx.ui.form.Button("", "https://www.openmerchantaccount.com/img/simbtnlarge.png")).set({toolTipText:"<center>SIMULTE BATTLE!</center><br>Note: update loot table with 'Update' button in stats window.", 
          width:72, height:56, alignY:"middle", appearance:"button-text-small"}), this.simBtn.addListener("click", function() {
            this.__openSimulatorWindow();
          }, this), this.simBtn.getChildControl("icon").set({width:0, height:40, scale:!0}), this.simBtn.hide(), this.statBtn = (new qx.ui.form.Button("", "https://prodgame04.alliances.commandandconquer.com/237/resource/webfrontend/ui/menues/rankings/msc_timer_circle_anim_shield_up.gif")).set({toolTipText:"PvP Resonator/RP Stats", show:"icon", opacity:.7, width:30, height:30, alignY:"middle", appearance:"button-text-small"}), this.statBtn.getChildControl("icon").set({width:25, height:25, scale:!0}), 
          this.statBtn.addListener("click", function() {
            this.__openStatWindow();
          }, this), this.statBtn.hide(), this.optionBtn = (new qx.ui.form.Button("", "https://www.openmerchantaccount.com/img/options.png")).set({toolTipText:"CDSIM Options", show:"icon", opacity:.7, width:15, height:25, alignY:"middle", appearance:"button-text-small"}), this.optionBtn.addListener("click", function() {
            this.__openOptionWindow();
          }, this), this.optionBtn.getChildControl("icon").set({width:15, height:15, scale:!0}), this.optionBtn.hide(),
          /*this.layoutBtn = (new qx.ui.form.Button("", "https://www.openmerchantaccount.com/img/layoutbtn.png")).set({toolTipText:"Save attack formations", show:"icon", width:66, height:14, opacity:.9, center:!0, gap:0, alignY:"middle", appearance:"button-addpoints"}), this.layoutBtn.getChildControl("icon").set({width:10, height:10, scale:!0}), this.layoutBtn.addListener("click", function() {
            this.__openLayoutWindow();
          }, this), this.layoutBtn.hide(), this.playArea.add(this.layoutBtn, {}),*/ this.shiftUpBtn = (new qx.ui.form.Button("", "https://www.openmerchantaccount.com/img/shiftu.png")).set({toolTipText:"MOVE ALL THEM F*CKIN UNITS ONE SPACE UP!", width:20, height:20, center:!0, gap:0, alignY:"middle", appearance:"button-icon-small", iconPosition:"top", show:"icon"}), this.shiftUpBtn.addListener("click", function() {
            this.shiftFormation("u", 0);
          }, this), this.shiftUpBtn.hide(), this.shiftDownBtn = (new qx.ui.form.Button("", "https://www.openmerchantaccount.com/img/shiftd.png")).set({toolTipText:"MOVE ALL THEM F*CKIN UNITS ONE SPACE DOWN!", width:20, height:20, center:!0, gap:0, alignY:"middle", appearance:"button-text-small", iconPosition:"top", show:"icon"}), this.shiftDownBtn.addListener("click", function() {
            this.shiftFormation("d", 0);
          }, this), this.shiftDownBtn.hide(), this.shiftLeftBtn = (new qx.ui.form.Button("", "https://www.openmerchantaccount.com/img/shiftl.png")).set({toolTipText:"MOVE ALL THEM F*CKIN UNITS ONE SPACE LEFT!", width:20, height:20, center:!0, gap:0, alignY:"middle", appearance:"button-text-small", iconPosition:"top", show:"icon"}), this.shiftLeftBtn.addListener("click", function() {
            this.shiftFormation("l", 0);
          }, this), this.shiftLeftBtn.hide(), this.shiftRightBtn = (new qx.ui.form.Button("", "https://www.openmerchantaccount.com/img/shiftr.png")).set({toolTipText:"MOVE ALL THEM F*CKIN UNITS ONE SPACE RIGHT!", width:20, height:20, center:!0, gap:0, alignY:"middle", appearance:"button-text-small", iconPosition:"top", show:"icon"}), this.shiftRightBtn.addListener("click", function() {
            this.shiftFormation("r", 0);
          }, this), this.shiftRightBtn.hide(), this.mirrorBtnH = (new qx.ui.form.Button("", "https://www.openmerchantaccount.com/img/mirror.png")).set({toolTipText:"FLIP", show:"icon", width:25, height:25, center:!0, alignY:"middle", appearance:"button-text-small"}), this.mirrorBtnH.getChildControl("icon").set({width:15, height:15, scale:!0}), this.mirrorBtnH.addListener("click", function() {
            this.mirrorFormation("h");
          }, this), this.mirrorBtnH.hide(), this.mirrorBtnV = (new qx.ui.form.Button("", "https://www.openmerchantaccount.com/img/flip.png")).set({toolTipText:"MIRROR", show:"icon", width:25, height:25, center:!0, alignY:"middle", appearance:"button-text-small"}), this.mirrorBtnV.getChildControl("icon").set({width:15, height:15, scale:!0}), this.mirrorBtnV.addListener("click", function() {
            this.mirrorFormation("v");
          }, this), this.mirrorBtnV.hide(), this.mirrorBtnC = (new qx.ui.form.Button("3-4", "https://www.openmerchantaccount.com/img/swap3_4.png")).set({toolTipText:"Swaps lines 3&4", show:"icon", width:22, height:22, center:!0, alignY:"middle", appearance:"button-addpoints"}), this.mirrorBtnC.getChildControl("icon").set({width:14, height:14, scale:!0}), this.mirrorBtnC.addListener("click", function() {
            this.mirrorFormation("c");
          }, this), this.mirrorBtnC.hide(), this.playArea.add(this.mirrorBtnC, {left:null, right:20, bottom:227}), this.mirrorBtnK = (new qx.ui.form.Button("1-2", "https://www.openmerchantaccount.com/img/swap1_2.png")).set({toolTipText:"Swaps lines 1&2", show:"icon", width:22, height:22, center:!0, alignY:"middle", appearance:"button-addpoints"}), this.mirrorBtnK.getChildControl("icon").set({width:14, height:14, scale:!0}), this.mirrorBtnK.addListener("click", function() {
            this.swapFormation("k");
          }, this), this.mirrorBtnK.hide(), this.playArea.add(this.mirrorBtnK, {left:null, right:64, bottom:227}), this.mirrorBtnU = (new qx.ui.form.Button("2-3", "https://www.openmerchantaccount.com/img/swap2_3.png")).set({toolTipText:"Swaps lines 2&3", show:"icon", width:22, height:22, opacity:.9, center:!0, alignY:"middle", appearance:"button-addpoints"}), this.mirrorBtnU.getChildControl("icon").set({width:14, height:14, scale:!0}), this.mirrorBtnU.addListener("click", function() {
            this.swapFormationz("z");
          }, this), this.mirrorBtnU.hide(), this.playArea.add(this.mirrorBtnU, {left:null, right:42, bottom:227}), this.disableAllUnitsBtn = new qx.ui.form.ToggleButton("", "https://www.openmerchantaccount.com/img/disableall.png"), this.disableAllUnitsBtn.set({width:25, height:25, appearance:"button-text-small", show:"icon", toolTipText:"F*CKIN TURNS IT ALL OFF!"}), this.disableAllUnitsBtn.getChildControl("icon").set({width:15, height:15, scale:!0}), this.disableAllUnitsBtn.addListener("changeValue", 
          function() {
            var b = this.disableAllUnitsBtn;
            b.getValue() ? (b.setOpacity(.75), b.setToolTipText("F*CKIN TURNS IT ALL ON!")) : (b.setOpacity(1), b.setToolTipText("F*CKIN TURNS IT ALL OFF!"));
          }, this), this.disableAllUnitsBtn.addListener("execute", function() {
            var b = this.disableAllUnitsBtn;
            this.ainfBtn.getValue() !== b.getValue() && this.ainfBtn.setValue(b.getValue());
            this.avehBtn.getValue() !== b.getValue() && this.avehBtn.setValue(b.getValue());
            this.aairBtn.getValue() !== b.getValue() && this.aairBtn.setValue(b.getValue());
          }, this), this.disableAllUnitsBtn.hide(), this.ainfBtn = new qx.ui.form.ToggleButton("", "https://www.openmerchantaccount.com/img/icon_inf.png"), this.ainfBtn.set({width:25, height:25, appearance:"button-text-small", show:"icon", toolTipText:"TURNS OFF YOUR G*D@MN FOOTSOLDIERS!"}), this.ainfBtn.getChildControl("icon").set({width:15, height:15, scale:!0}), this.ainfBtn.addListener("changeValue", function() {
            var b = this.ainfBtn;
            b.getValue() === this.avehBtn.getValue() && b.getValue() === this.aairBtn.getValue() && this.disableAllUnitsBtn.setValue(b.getValue());
            this.activateUnits("inf", !b.getValue());
            b.getValue() ? (b.setOpacity(.75), b.setToolTipText("TURNS ON YOUR G*D@MN FOOTSOLDIERS!")) : (b.setOpacity(1), b.setToolTipText("TURNS OFF YOUR G*D@MN FOOTSOLDIERS!"));
          }, this), this.ainfBtn.hide(), this.avehBtn = new qx.ui.form.ToggleButton("", "https://www.openmerchantaccount.com/img/icon_tnk.png"), this.avehBtn.set({width:25, height:25, appearance:"button-text-small", show:"icon", toolTipText:"TURNS OFF YOUR G*D@MN VEHICULAR OBJECTS!"}), this.avehBtn.getChildControl("icon").set({width:15, height:15, scale:!0}), this.avehBtn.addListener("changeValue", function() {
            var b = this.avehBtn;
            b.getValue() === this.ainfBtn.getValue() && b.getValue() === this.aairBtn.getValue() && this.disableAllUnitsBtn.setValue(b.getValue());
            this.activateUnits("veh", !b.getValue());
            b.getValue() ? (b.setOpacity(.75), b.setToolTipText("TURNS ON YOUR G*D@MN VEHICULAR OBJECTS!")) : (b.setOpacity(1), b.setToolTipText("TURNS OFF YOUR G*D@MN VEHICULAR OBJECTS!"));
          }, this), this.avehBtn.hide(), this.aairBtn = new qx.ui.form.ToggleButton("", "https://www.openmerchantaccount.com/img/icon_air.png"), this.aairBtn.set({width:25, height:25, appearance:"button-text-small", show:"icon", toolTipText:"TURNS OFF YOUR G*D@MN AIRCRAFT THANGS!"}), this.aairBtn.getChildControl("icon").set({width:15, height:15, scale:!0}), this.aairBtn.addListener("changeValue", function() {
            var b = this.aairBtn;
            b.getValue() === this.ainfBtn.getValue() && b.getValue() === this.avehBtn.getValue() && this.disableAllUnitsBtn.setValue(b.getValue());
            this.activateUnits("air", !b.getValue());
            b.getValue() ? (b.setOpacity(.75), b.setToolTipText("TURNS ON YOUR G*D@MN AIRCRAFT THANGS!")) : (b.setOpacity(1), b.setToolTipText("TURNS OFF YOUR G*D@MN AIRCRAFT THANGS!"));
          }, this), this.aairBtn.hide(), this.armyUndoBtn = (new qx.ui.form.Button("", "https://www.openmerchantaccount.com/img/icon_undo.png")).set({toolTipText:"Undo's formation to previous saved formation.<br>Save formations by hitting<br>the Update or Simulate button.", show:"icon", width:25, height:25, center:!0, alignY:"middle", appearance:"button-text-small"}), this.armyUndoBtn.getChildControl("icon").set({width:15, height:15, scale:!0}), this.armyUndoBtn.addListener("click", function() {
            this.undoCurrentFormation();
          }, this), this.armyUndoBtn.setEnabled(!1), this.armyUndoBtn.hide();
        } catch (b) {
          console.log("Error setting up Simulator Constructor: "), console.log(b.toString());
        }
      }, destruct:function() {
      }, members:{armyBar:null, playArea:null, replayBar:null, isSimButtonDisabled:null, armyTempFormations:null, armyTempIdx:null, isSimulation:null, simBtn:null, optionBtn:null, statBtn:null, layoutBtn:null, unlockCmtBtn:null, unlockRTBtn:null, shiftUpBtn:null, shiftDownBtn:null, shiftLeftBtn:null, shiftRightBtn:null, disableAllUnitsBtn:null, aairBtn:null, avehBtn:null, ainfBtn:null, mirrorBtnH:null, mirrorBtnV:null, mirrorBtnC:null, mirrorBtnK:null, mirrorBtnU:null, armyUndoBtn:null, quickSaveBtn:null, 
      backBtn:null, replayStatBtn:null, __openSimulatorWindow:function() {
        var b = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
        if (null != b) {
          var d = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();
          this.isSimulation = !0;
          this.saveTempFormation();
          localStorage.ta_sim_last_city = b.get_Id();
          d.get_CityArmyFormationsManager().set_CurrentTargetBaseId(b.get_Id());
          ClientLib.API.Battleground.GetInstance().SimulateBattle();
          qx.core.Init.getApplication().getPlayArea().setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay, b.get_Id(), 0, 0);
          b = localStorage.autoSimulate;
          if (void 0 !== b && "yes" == b) {
            var e = localStorage.simulateSpeed;
            setTimeout(function() {
              var b = ClientLib.Vis.VisMain.GetInstance().get_Battleground();
              b.RestartReplay();
              b.set_ReplaySpeed(parseInt(e, 10));
            }, 1E3);
          }
          0 == this.isSimButtonDisabled && (this.disableSimulateButtonTimer(1E4), "function" === typeof Simulator.StatWindow.getInstance().disableSimulateStatButtonTimer && Simulator.StatWindow.getInstance().disableSimulateStatButtonTimer(1E4));
          setTimeout(function() {
            var b = ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_BattleDuration(), b = phe.cnc.Util.getTimespanString(b);
            Simulator.StatWindow.getInstance().sim[Simulator.StatWindow.getInstance().simSelected].Label.Battle.Duration.setValue(b);
          }, 10);
          0 == Simulator.StatWindow.getInstance().simReplayBtn.getEnabled() && Simulator.StatWindow.getInstance().simReplayBtn.setEnabled(!0);
        }
      }, __openOptionWindow:function() {
        try {
          Simulator.OptionWindow.getInstance().isVisible() ? (console.log("Closing Option Window"), Simulator.OptionWindow.getInstance().close()) : (console.log("Opening Option Window"), Simulator.OptionWindow.getInstance().open());
        } catch (b) {
          console.log("Error Opening or Closing Option Window"), console.log(b.toString());
        }
      }, __openStatWindow:function() {
        try {
          Simulator.StatWindow.getInstance().isVisible() ? (console.log("Closing Stat Window"), Simulator.StatWindow.getInstance().close()) : (console.log("Opening Stat Window"), Simulator.StatWindow.getInstance().open(), Simulator.StatWindow.getInstance().calcResources());
        } catch (b) {
          console.log("Error Opening or Closing Stat Window"), console.log(b.toString());
        }
      }, __openLayoutWindow:function() {
        try {
          Simulator.LayoutWindow.getInstance().isVisible() ? (console.log("Closing Layout Window"), Simulator.LayoutWindow.getInstance().close()) : (console.log("Opening LayoutWindow"), Simulator.LayoutWindow.getInstance().updateLayoutList(), Simulator.LayoutWindow.getInstance().layoutTextBox.setValue(""), Simulator.LayoutWindow.getInstance().persistentCheck.setValue(!1), Simulator.LayoutWindow.getInstance().open());
        } catch (b) {
          console.log("Error Opening or Closing Layout Window"), console.log(b.toString());
        }
      }, saveTempFormation:function() {
        try {
          var b = this.getCityPreArmyUnits().get_ArmyUnits().l;
          if (0 != this.armyTempFormations.length) {
            for (var d = 0;d < b.length;d++) {
              var e = this.armyTempFormations[this.armyTempIdx][d];
              if (b[d].get_CoordX() != e.x || b[d].get_CoordY() != e.y) {
                break;
              } else {
                if (d + 1 == b.length) {
                  return;
                }
              }
            }
          }
          e = [];
          for (d = 0;d < b.length;d++) {
            var g = b[d], f = {};
            f.x = g.get_CoordX();
            f.y = g.get_CoordY();
            f.id = g.get_Id();
            f.enabled = g.get_Enabled();
            e.push(f);
          }
          this.armyTempFormations.push(e);
          this.armyTempIdx = this.armyTempFormations.length - 1;
          1 < this.armyTempFormations.length && this.armyUndoBtn.setEnabled(!0);
        } catch (k) {
          console.log("Error Saving Temp Formation"), console.log(k.toString());
        }
      }, undoCurrentFormation:function() {
        try {
          this.restoreFormation(this.armyTempFormations[this.armyTempIdx - 1]), this.armyTempFormations.splice(this.armyTempIdx, 1), this.armyTempIdx--, 1 == this.armyTempFormations.length && this.armyUndoBtn.setEnabled(!1);
        } catch (b) {
          console.log("Error undoing formation"), console.log(b.toString());
        }
      }, mirrorFormation:function(b) {
        try {
          console.log("Shifting Unit Formation");
          for (var d = this.getCityPreArmyUnits().get_ArmyUnits().l, e = [], g = 0;g < d.length;g++) {
            var f = d[g], k = {}, l = f.get_CoordX(), h = f.get_CoordY();
            "h" == b && (l = Math.abs(l - 8));
            "v" == b && (h = Math.abs(h - 3));
            "c" == b && (h = Math.abs(h - 5));
            k.x = l;
            k.y = h;
            k.id = f.get_Id();
            k.enabled = f.get_Enabled();
            e.push(k);
          }
          this.restoreFormation(e);
        } catch (m) {
          console.log("Error Mirroring Formation"), console.log(m.toString());
        }
      }, swapFormation:function(b, d) {
        try {
          
          var e = 0, g = 0;
          "z" == b && (e = 2);
          "k" == b && (e = 1);
          "l" == b && (g = -1);
          "r" == b && (g = 1);
          if (0 != e || 0 != g || "n" == b) {
            for (var f = this.getCityPreArmyUnits().get_ArmyUnits().l, k = [], l = 0;l < f.length;l++) {
              var h = f[l], m = {}, q = h.get_CoordX() + g;
              switch(q) {
                case 9:
                  q = 0;
                  break;
                case -1:
                  q = 8;
              }
              var n = h.get_CoordY() + e;
              switch(n) {
                case 2:
                  n = 0;
                  break;
                case 3:
                  n = 2;
                  break;
                case -1:
                  n = 3;
              }
              0 == d || h.get_CoordX() == d - 1 || "u" != b && "d" != b ? m.y = n : m.y = h.get_CoordY();
              0 == d || h.get_CoordY() == d - 1 || "l" != b && "r" != b ? m.x = q : m.x = h.get_CoordX();
              m.id = h.get_Id();
              "n" == b && (m.enabled = void 0 !== localStorage.allUnitsDisabled ? "yes" == localStorage.allUnitsDisabled ? h.set_Enabled(!0) : h.set_Enabled(!1) : h.set_Enabled(!1));
              m.enabled = h.get_Enabled();
              k.push(m);
            }
            "n" == b && (localStorage.allUnitsDisabled = "yes" == localStorage.allUnitsDisabled ? "no" : "yes");
            this.restoreFormation(k);
          }
        } catch (p) {
          console.log("Error Swapping Units"), console.log(p.toString());
        }
      }, swapFormationz:function(b, d) {
        try {
          console.log("Swaping Unit Formation: direction:" + b + ", sel:" + d);
          var e = 0, g = 0;
          "z" == b && (e = 2);
          "k" == b && (e = 1);
          "l" == b && (g = -1);
          "r" == b && (g = 1);
          if (0 != e || 0 != g || "n" == b) {
            for (var f = this.getCityPreArmyUnits().get_ArmyUnits().l, k = [], l = 0;l < f.length;l++) {
              var h = f[l], m = {}, q = h.get_CoordX() + g;
              switch(q) {
                case 9:
                  q = 0;
                  break;
                case -1:
                  q = 8;
              }
              var n = h.get_CoordY() + e;
              switch(n) {
                case 2:
                  n = 0;
                  break;
                case 3:
                  n = 2;
                  break;
                case 4:
                  n = 1;
                  break;
                case -1:
                  n = 3;
              }
              0 == d || h.get_CoordX() == d - 1 || "u" != b && "d" != b ? m.y = n : m.y = h.get_CoordY();
              0 == d || h.get_CoordY() == d - 1 || "l" != b && "r" != b ? m.x = q : m.x = h.get_CoordX();
              m.id = h.get_Id();
              "n" == b && (m.enabled = void 0 !== localStorage.allUnitsDisabled ? "yes" == localStorage.allUnitsDisabled ? h.set_Enabled(!0) : h.set_Enabled(!1) : h.set_Enabled(!1));
              m.enabled = h.get_Enabled();
              k.push(m);
            }
            "n" == b && (localStorage.allUnitsDisabled = "yes" == localStorage.allUnitsDisabled ? "no" : "yes");
            this.restoreFormation(k);
          }
        } catch (p) {
          console.log("Error Swapping Units"), console.log(p.toString());
        }
      }, shiftFormation:function(b, d) {
        try {
          console.log("Shifting Unit Formation: direction:" + b + ", sel:" + d);
          var e = 0, g = 0;
          "u" == b && (e = -1);
          "d" == b && (e = 1);
          "l" == b && (g = -1);
          "r" == b && (g = 1);
          if (0 != e || 0 != g || "n" == b) {
            for (var f = this.getCityPreArmyUnits().get_ArmyUnits().l, k = [], l = 0;l < f.length;l++) {
              var h = f[l], m = {}, q = h.get_CoordX() + g;
              switch(q) {
                case 9:
                  q = 0;
                  break;
                case -1:
                  q = 8;
              }
              var n = h.get_CoordY() + e;
              switch(n) {
                case 4:
                  n = 0;
                  break;
                case -1:
                  n = 3;
              }
              0 == d || h.get_CoordX() == d - 1 || "u" != b && "d" != b ? m.y = n : m.y = h.get_CoordY();
              0 == d || h.get_CoordY() == d - 1 || "l" != b && "r" != b ? m.x = q : m.x = h.get_CoordX();
              m.id = h.get_Id();
              "n" == b && (m.enabled = void 0 !== localStorage.allUnitsDisabled ? "yes" == localStorage.allUnitsDisabled ? h.set_Enabled(!0) : h.set_Enabled(!1) : h.set_Enabled(!1));
              m.enabled = h.get_Enabled();
              k.push(m);
            }
            "n" == b && (localStorage.allUnitsDisabled = "yes" == localStorage.allUnitsDisabled ? "no" : "yes");
            this.restoreFormation(k);
          }
        } catch (p) {
          console.log("Error Shifting Units"), console.log(p.toString());
        }
      }, restoreFormation:function(b) {
        try {
          for (var d = this.getCityPreArmyUnits(), e = d.get_ArmyUnits().l, g = 0;g < b.length;g++) {
            for (var f = b[g], k = f.id, l = 0;l < e.length;l++) {
              e[l].get_Id() === k && (e[l].MoveBattleUnit(f.x, f.y), void 0 === f.enabled ? e[l].get_Enabled(!0) : e[l].get_Enabled(f.enabled));
            }
          }
          d.UpdateFormation(!0);
        } catch (h) {
          console.log("Error Restoring Formation"), console.log(h.toString());
        }
      }, getCityPreArmyUnits:function() {
        var b = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity(), d = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity(), e = d.get_CityArmyFormationsManager();
        d.get_CityArmyFormationsManager().set_CurrentTargetBaseId(b.get_Id());
        return e.GetFormationByTargetBaseId(e.get_CurrentTargetBaseId());
      }, activateUnits:function(b, d) {
        try {
          for (var e = this.getCityPreArmyUnits().get_ArmyUnits().l, g = [], f = 0;f < e.length;f++) {
            var k = e[f], l = {};
            switch(b) {
              case "air":
                k.get_UnitGameData_Obj().mt !== ClientLib.Base.EUnitMovementType.Air && k.get_UnitGameData_Obj().mt !== ClientLib.Base.EUnitMovementType.Air2 || k.set_Enabled(d);
                break;
              case "inf":
                k.get_UnitGameData_Obj().mt === ClientLib.Base.EUnitMovementType.Feet && k.set_Enabled(d);
                break;
              case "veh":
                k.get_UnitGameData_Obj().mt !== ClientLib.Base.EUnitMovementType.Wheel && k.get_UnitGameData_Obj().mt !== ClientLib.Base.EUnitMovementType.Track || k.set_Enabled(d);
            }
            l.x = k.get_CoordX();
            l.y = k.get_CoordY();
            l.e = k.get_Enabled();
            l.id = k.get_Id();
            g.push(l);
          }
          this.restoreFormation(g);
        } catch (h) {
          console.log(h);
        }
      }, timeoutCmtBtn:function() {
        this.armyBar.remove(this.unlockCmtBtn);
        setTimeout(function() {
          Simulator.getInstance().armyBar.add(Simulator.getInstance().unlockCmtBtn, {left:null, right:7, bottom:5});
        }, 2E3);
      }, timeoutRTBtn:function() {
        this.armyBar.remove(this.unlockRTBtn);
        setTimeout(function() {
          Simulator.getInstance().armyBar.add(Simulator.getInstance().unlockRTBtn, {left:null, right:7, bottom:97});
        }, 2E3);
      }, backToCombatSetup:function() {
        try {
          var b = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
          null != b && qx.core.Init.getApplication().getPlayArea().setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense, b.get_Id(), 0, 0);
        } catch (d) {
          console.log("Error closing Simulation Window"), console.log(d.toString());
        }
      }, disableSimulateButtonTimer:function(b) {
        try {
          1E3 <= b ? (this.isSimButtonDisabled = !0, this.simBtn.setEnabled(!1), this.simBtn.setLabel(Math.floor(b / 1E3)), b -= 1E3, setTimeout(function() {
            Simulator.getInstance().disableSimulateButtonTimer(b);
          }, 1E3)) : (setTimeout(function() {
            Simulator.getInstance().simBtn.setEnabled(!0);
            Simulator.OptionWindow.getInstance()._buttonSizeCB.getValue() ? Simulator.getInstance().simBtn.setLabel("Simulate") : Simulator.getInstance().simBtn.setLabel("S");
          }, b), this.isSimButtonDisabled = !1);
        } catch (d) {
          console.log("Error disabling simulator button"), console.log(d.toString());
        }
      }, hideArmyTooltips:function() {
        try {
          void 0 === localStorage.ArmyUnitTooltipDisabled && (localStorage.ArmyUnitTooltipDisabled = "yes");
          for (var b in ClientLib.Vis.BaseView.BaseView.prototype) {
            if ("function" === typeof ClientLib.Vis.BaseView.BaseView.prototype[b] && -1 < ClientLib.Vis.BaseView.BaseView.prototype[b].toString().indexOf(ClientLib.Vis.BaseView.BaseView.prototype.ShowToolTip.toString())) {
              Function("", "ClientLib.Vis.BaseView.BaseView.prototype.ShowToolTip_Original = ClientLib.Vis.BaseView.BaseView.prototype." + b)();
              Function("", "ClientLib.Vis.BaseView.BaseView.prototype." + b + " = function (a) { if(ClientLib.Vis.VisMain.GetInstance().get_Mode()==7 && localStorage['ArmyUnitTooltipDisabled']=='yes') { return; } else { this.ShowToolTip_Original(a); } };")();
              break;
            }
          }
          qx.core.Init.getApplication().getArmyUnitTooltipOverlay().setVisibility_Original = qx.core.Init.getApplication().getArmyUnitTooltipOverlay().setVisibility;
          qx.core.Init.getApplication().getArmyUnitTooltipOverlay().setVisibility = function(b) {
            "yes" == localStorage.ArmyUnitTooltipDisabled ? qx.core.Init.getApplication().getArmyUnitTooltipOverlay().setVisibility_Original(!1) : qx.core.Init.getApplication().getArmyUnitTooltipOverlay().setVisibility_Original(b);
          };
        } catch (d) {
          console.log("Error hideArmyUnitTooltips()"), console.log(d.toString());
        }
      }}});
      qx.Class.define("Simulator.StatWindow", {type:"singleton", extend:qx.ui.window.Window, construct:function() {
        try {
          this.base(arguments);
          this.set({layout:(new qx.ui.layout.VBox).set({spacing:0}), caption:"PvP/RP Stats", icon:"https://prodgame04.alliances.commandandconquer.com/237/resource/webfrontend/ui/menues/rankings/msc_timer_circle_anim_shield_up.gif", contentPadding:5, contentPaddingTop:0, allowMaximize:!1, showMaximize:!1, allowMinimize:!1, showMinimize:!1, resizable:!0, resizableTop:!1, resizableBottom:!1});
          this.getChildControl("icon").set({width:18, height:18, scale:!0, alignY:"middle"});
          if (void 0 !== localStorage.statWindowPosRight) {
            var b = parseInt(localStorage.statWindowPosRight, 10), d = parseInt(localStorage.statWindowPosTop, 10);
            this.moveTo(b, d);
          } else {
            this.moveTo(99E8, 31);
          }
          this.simViews = void 0 !== localStorage.simViews ? parseInt(localStorage.simViews, 10) : 2;
          var e = qx.core.Init.getApplication();
          this.isSimStatButtonDisabled = !1;
          this.Battle = (new qx.ui.container.Composite(new qx.ui.layout.HBox(-3))).set({decorator:"pane-light-plain", allowGrowX:!0, marginLeft:0, marginRight:0});
          var g = (new qx.ui.container.Composite(new qx.ui.layout.VBox)).set({width:29, padding:5, allowGrowX:!0, marginLeft:0, marginRight:0}), f = (new qx.ui.basic.Label("O")).set({toolTipText:e.tr("tnf:combat report"), alignX:"center", alignY:"middle"}), k = (new qx.ui.basic.Label("D")).set({toolTipText:e.tr("tnf:combat timer npc: %1", ""), alignX:"center", alignY:"middle"}), l = (new qx.ui.basic.Label("B")).set({toolTipText:e.tr("tnf:base"), alignX:"center", alignY:"middle"});
          g.add(f);
          g.add(k);
          g.add(l);
          this.Battle.add(g);
          this.add(this.Battle);
          var h = (new qx.ui.container.Composite(new qx.ui.layout.VBox(5))).set({decorator:"pane-light-opaque"});
          h.add((new qx.ui.basic.Label(e.tr("tnf:combat target"))).set({alignX:"center", alignY:"middle", paddingBottom:5, font:"font_size_13_bold"}));
          this.add(h);
          this.EnemyHealth = (new qx.ui.container.Composite(new qx.ui.layout.HBox(-3))).set({decorator:"pane-light-plain", allowGrowX:!0, marginLeft:0, marginRight:0});
          var m = (new qx.ui.container.Composite(new qx.ui.layout.VBox)).set({width:29, padding:5, allowGrowX:!0, marginLeft:0, marginRight:0}), q = (new qx.ui.basic.Atom(" ", "FactionUI/icons/icon_arsnl_show_all.png")).set({toolTipText:e.tr("tnf:total"), toolTipIcon:"FactionUI/icons/icon_arsnl_show_all.png", alignX:"center", alignY:"middle", gap:0, iconPosition:"top"}), n = (new qx.ui.basic.Atom(" ", "FactionUI/icons/icon_arsnl_base_buildings.png")).set({toolTipText:e.tr("tnf:base"), toolTipIcon:"FactionUI/icons/icon_arsnl_base_buildings.png", 
          alignX:"center", alignY:"middle", gap:0, iconPosition:"top"}), p = (new qx.ui.basic.Atom(" ", "FactionUI/icons/icon_def_army_points.png")).set({toolTipText:e.tr("tnf:defense"), toolTipIcon:"FactionUI/icons/icon_def_army_points.png", alignX:"center", alignY:"middle", gap:0, iconPosition:"top"}), r = (new qx.ui.basic.Label("CY")).set({toolTipText:GAMEDATA.Tech[1].dn, alignX:"center", alignY:"middle"}), t = (new qx.ui.basic.Label("DF")).set({toolTipText:GAMEDATA.Tech[42].dn, alignX:"center", 
          alignY:"middle"}), E = (new qx.ui.basic.Label("CC")).set({toolTipText:GAMEDATA.Tech[24].dn, alignX:"center", alignY:"middle"});
          q.getChildControl("icon").set({width:18, height:18, scale:!0, alignY:"middle"});
          n.getChildControl("icon").set({width:18, height:18, scale:!0, alignY:"middle"});
          p.getChildControl("icon").set({width:18, height:18, scale:!0, alignY:"middle"});
          m.add(q);
          m.add(n);
          m.add(p);
          m.add(r);
          m.add(t);
          m.add(E);
          this.EnemyHealth.add(m);
          this.add(this.EnemyHealth);
          var F = (new qx.ui.container.Composite(new qx.ui.layout.VBox(5))).set({decorator:"pane-light-opaque"});
          F.add((new qx.ui.basic.Label(e.tr("tnf:own repair cost"))).set({alignX:"center", alignY:"middle", paddingBottom:5, font:"font_size_13_bold"}));
          this.add(F);
          this.Repair = (new qx.ui.container.Composite(new qx.ui.layout.HBox(-3))).set({decorator:"pane-light-plain", allowGrowX:!0, marginLeft:0, marginRight:0});
          var w = (new qx.ui.container.Composite(new qx.ui.layout.VBox)).set({width:29, padding:5, allowGrowX:!0, marginLeft:0, marginRight:0}), y = (new qx.ui.basic.Atom(" ", "webfrontend/ui/icons/icn_repair_points.png")).set({toolTipText:e.tr("tnf:offense repair time"), toolTipIcon:"webfrontend/ui/icons/icn_repair_points.png", alignX:"center", alignY:"middle", gap:0, iconPosition:"top"}), A = (new qx.ui.basic.Atom(" ", "webfrontend/ui/icons/icn_repair_off_points.png")).set({toolTipText:e.tr("tnf:repair points"), 
          toolTipIcon:"webfrontend/ui/icons/icn_repair_off_points.png", alignX:"center", alignY:"middle", gap:0, iconPosition:"top"}), z = (new qx.ui.basic.Atom(" ", "webfrontend/ui/icons/icon_res_repair_inf.png")).set({toolTipText:e.tr("tnf:infantry repair title"), toolTipIcon:"webfrontend/ui/icons/icon_res_repair_inf.png", alignX:"center", alignY:"middle", gap:0, iconPosition:"top"}), v = (new qx.ui.basic.Atom(" ", "webfrontend/ui/icons/icon_res_repair_tnk.png")).set({toolTipText:e.tr("tnf:vehicle repair title"), 
          toolTipIcon:"webfrontend/ui/icons/icon_res_repair_tnk.png", alignX:"center", alignY:"middle", gap:0, iconPosition:"top"}), D = (new qx.ui.basic.Atom(" ", "webfrontend/ui/icons/icon_res_repair_air.png")).set({toolTipText:e.tr("tnf:aircraft repair title"), toolTipIcon:"webfrontend/ui/icons/icon_res_repair_air.png", alignX:"center", alignY:"middle", gap:0, iconPosition:"top"});
          y.getChildControl("icon").set({width:18, height:18, scale:!0, alignY:"middle"});
          A.getChildControl("icon").set({width:18, height:18, scale:!0, alignY:"middle"});
          z.getChildControl("icon").set({width:18, height:18, scale:!0, alignY:"middle"});
          v.getChildControl("icon").set({width:18, height:18, scale:!0, alignY:"middle"});
          D.getChildControl("icon").set({width:18, height:18, scale:!0, alignY:"middle"});
          w.add(y);
          w.add(A);
          w.add(z);
          w.add(v);
          w.add(D);
          this.Repair.add(w);
          this.add(this.Repair);
          var u = (new qx.ui.container.Composite(new qx.ui.layout.VBox(5))).set({decorator:"pane-light-opaque"});
          u.add((new qx.ui.basic.Label(e.tr("tnf:lootable resources:"))).set({alignX:"center", alignY:"middle", paddingBottom:5, font:"font_size_13_bold"}));
          this.add(u);
          this.Loot = (new qx.ui.container.Composite(new qx.ui.layout.HBox(-3))).set({decorator:"pane-light-plain", allowGrowX:!0, marginLeft:0, marginRight:0});
          var B = (new qx.ui.container.Composite(new qx.ui.layout.VBox)).set({width:29, padding:5, allowGrowX:!0, marginLeft:0, marginRight:0}), x = (new qx.ui.basic.Atom(" ", "webfrontend/ui/common/icn_res_tiberium.png")).set({toolTipText:e.tr("tnf:tiberium"), toolTipIcon:"webfrontend/ui/common/icn_res_tiberium.png", alignX:"center", alignY:"middle", gap:0, iconPosition:"top"}), H = (new qx.ui.basic.Atom(" ", "webfrontend/ui/common/icn_res_chrystal.png")).set({toolTipText:e.tr("tnf:crystals"), toolTipIcon:"webfrontend/ui/common/icn_res_chrystal.png", 
          alignX:"center", alignY:"middle", gap:0, iconPosition:"top"}), I = (new qx.ui.basic.Atom(" ", "webfrontend/ui/common/icn_res_dollar.png")).set({toolTipText:e.tr("tnf:credits"), toolTipIcon:"webfrontend/ui/common/icn_res_dollar.png", alignX:"center", alignY:"middle", gap:0, iconPosition:"top"}), J = (new qx.ui.basic.Atom(" ", "webfrontend/ui/common/icn_res_research_mission.png")).set({toolTipText:e.tr("tnf:research points"), toolTipIcon:"webfrontend/ui/common/icn_res_research_mission.png", 
          alignX:"center", alignY:"middle", gap:0, iconPosition:"top"}), K = (new qx.ui.basic.Atom(" ", "FactionUI/icons/icon_transfer_resource.png")).set({toolTipText:e.tr("tnf:total") + " " + e.tr("tnf:loot"), toolTipIcon:"FactionUI/icons/icon_transfer_resource.png", alignX:"center", alignY:"middle", gap:0, iconPosition:"top"});
          x.getChildControl("icon").set({width:18, height:18, scale:!0, alignY:"middle"});
          H.getChildControl("icon").set({width:18, height:18, scale:!0, alignY:"middle"});
          I.getChildControl("icon").set({width:18, height:18, scale:!0, alignY:"middle"});
          J.getChildControl("icon").set({width:18, height:18, scale:!0, alignY:"middle"});
          K.getChildControl("icon").set({width:18, height:18, scale:!0, alignY:"middle"});
          B.add(x);
          B.add(H);
          B.add(I);
          B.add(J);
          B.add(K);
          this.Loot.add(B);
          this.add(this.Loot);
          var G = (new qx.ui.container.Composite(new qx.ui.layout.HBox(5))).set({decorator:"pane-light-opaque", allowGrowX:!0, marginLeft:0, marginRight:0, padding:5});
          this.add(G);
          this.simStatBtn = (new qx.ui.form.Button(e.tr("tnf:update"))).set({allowGrowX:!1});
          this.simStatBtn.setToolTipText("Updates Stats per click");
          this.simStatBtn.addListener("click", this.simulateStats, this);
          this.simReplayBtn = (new qx.ui.form.Button(e.tr("tnf:show combat"))).set({allowGrowX:!1});
          this.simReplayBtn.setToolTipText(e.tr("tnf:show battle replay"));
          this.simReplayBtn.addListener("click", this.doSimReplay, this);
          this.simReplayBtn.setEnabled(!1);
          G.add(this.simStatBtn, {width:"50%"});
          G.add(this.simReplayBtn, {width:"50%"});
          h.addListener("click", function() {
            this.EnemyHealth.isVisible() ? this.EnemyHealth.exclude() : this.EnemyHealth.show();
          }, this);
          F.addListener("click", function() {
            this.Repair.isVisible() ? this.Repair.exclude() : this.Repair.show();
          }, this);
          u.addListener("click", function() {
            this.Loot.isVisible() ? this.Loot.exclude() : this.Loot.show();
          }, this);
          void 0 !== localStorage.hideHealth && "yes" == localStorage.hideHealth && this.EnemyHealth.exclude();
          void 0 !== localStorage.hideRepair && "yes" == localStorage.hideRepair && this.Repair.exclude();
          void 0 !== localStorage.hideLoot && "yes" == localStorage.hideLoot && this.Loot.exclude();
          for (b = 0;b < this.simViews;b++) {
            this.sim[b] = new this.Simulation(b), this.sim[b].Select(this.simSelected), this.Battle.add(this.sim[b].Label.Battle.container, {flex:1}), this.EnemyHealth.add(this.sim[b].Label.EnemyHealth.container, {flex:1}), this.Repair.add(this.sim[b].Label.Repair.container, {flex:1}), this.Loot.add(this.sim[b].Label.Loot.container, {flex:1});
          }
          phe.cnc.Util.attachNetEvent(ClientLib.API.Battleground.GetInstance(), "OnSimulateBattleFinished", ClientLib.API.OnSimulateBattleFinished, this, this.__OnSimulateBattleFinished);
          phe.cnc.base.Timer.getInstance().addListener("uiTick", this._onTick, this);
        } catch (C) {
          console.log("Error setting up Simulator.StatWindow Constructor: "), console.log(C.toString());
        }
      }, destruct:function() {
      }, members:{Battle:null, EnemyHealth:null, Repair:null, Loot:null, simStatBtn:null, simReplayBtn:null, isSimStatButtonDisabled:null, simSelected:0, simViews:3, sim:[], Simulation:function(b) {
        try {
          var d = !1, e = this.OwnCity = this.TargetCity = null, g = null;
          this.Label = {Battle:{container:(new qx.ui.container.Composite(new qx.ui.layout.VBox)).set({width:65, padding:5, allowGrowX:!0, marginLeft:0, marginRight:0, decorator:"pane-light-opaque"}), Outcome:(new qx.ui.basic.Atom("-", null)).set({alignX:"center", alignY:"middle", gap:0, iconPosition:"top", show:"label"}), Duration:(new qx.ui.basic.Label("-:--")).set({alignX:"center", alignY:"middle"}), OwnCity:(new qx.ui.basic.Label("-")).set({alignX:"center", alignY:"middle"})}, EnemyHealth:{container:(new qx.ui.container.Composite(new qx.ui.layout.VBox)).set({width:65, 
          padding:5, allowGrowX:!0, marginLeft:0, marginRight:0, decorator:"pane-light-opaque"}), Overall:(new qx.ui.basic.Label("-")).set({alignX:"right", alignY:"middle"}), Base:(new qx.ui.basic.Label("-")).set({alignX:"right", alignY:"middle"}), Defense:(new qx.ui.basic.Label("-")).set({alignX:"right", alignY:"middle"}), CY:(new qx.ui.basic.Label("-")).set({alignX:"right", alignY:"middle"}), DF:(new qx.ui.basic.Label("-")).set({alignX:"right", alignY:"middle"}), CC:(new qx.ui.basic.Label("-")).set({alignX:"right", 
          alignY:"middle"})}, Repair:{container:(new qx.ui.container.Composite(new qx.ui.layout.VBox)).set({width:65, padding:5, allowGrowX:!0, marginLeft:0, marginRight:0, decorator:"pane-light-opaque"}), Storage:(new qx.ui.basic.Label("-")).set({alignX:"right", alignY:"middle"}), Overall:(new qx.ui.basic.Label("-")).set({alignX:"right", alignY:"middle"}), Inf:(new qx.ui.basic.Label("-")).set({alignX:"right", alignY:"middle"}), Vehi:(new qx.ui.basic.Label("-")).set({alignX:"right", alignY:"middle"}), 
          Air:(new qx.ui.basic.Label("-")).set({alignX:"right", alignY:"middle"})}, Loot:{container:(new qx.ui.container.Composite(new qx.ui.layout.VBox)).set({width:65, padding:5, allowGrowX:!0, marginLeft:0, marginRight:0, decorator:"pane-light-opaque"}), Tib:(new qx.ui.basic.Label("-")).set({alignX:"right", alignY:"middle"}), Cry:(new qx.ui.basic.Label("-")).set({alignX:"right", alignY:"middle"}), Cred:(new qx.ui.basic.Label("-")).set({alignX:"right", alignY:"middle"}), RP:(new qx.ui.basic.Label("-")).set({alignX:"right", 
          alignY:"middle"}), Overall:(new qx.ui.basic.Label("-")).set({alignX:"right", alignY:"middle"})}};
          var f = function() {
            this.RT = this.Cry = this.Tib = this.MaxHealth = this.EndHealth = this.StartHealth = 0;
            this.getHP = function() {
              return 0 == this.EndHealth && 0 == this.StartHealth ? 0 : 0 == this.MaxHealth ? 100 : this.EndHealth / this.MaxHealth * 100;
            };
            this.getHPrel = function() {
              return 0 == this.StartHealth ? 0 : 0 == this.MaxHealth ? -100 : (this.StartHealth - this.EndHealth) / this.MaxHealth * -100;
            };
          }, k = function() {
            this.Battle = this.Base = 0;
          };
          this.Stats = {Battle:{Outcome:0, Duration:0, OwnCity:""}, EnemyHealth:{Overall:new f, Base:new f, Defense:new f, CY:new f, DF:new f, CC:new f}, Repair:{Storage:0, Overall:new f, Inf:new f, Vehi:new f, Air:new f}, Loot:{Tib:new k, Cry:new k, Cred:new k, RP:new k, Overall:new k}};
          this.setSimulation = function(b) {
            d = !0;
            this.TargetCity = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
            this.OwnCity = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();
            this.Stats.Battle.OwnCity = this.OwnCity.get_Name();
            this.saveFormation();
            g = [];
            for (var e = 0;e < b.length;e++) {
              g.push(b[e].Value);
            }
          };
          this.UpdateLabels = function() {
            var b = qx.core.Init.getApplication(), e = function(b) {
              return phe.cnc.Util.getTimespanString(b);
            }, f = function(b, d) {
              25 > d ? b.setTextColor("red") : 75 > d ? b.setTextColor("orangered") : b.setTextColor("darkgreen");
            }, g = function(b, d) {
              25 > d ? b.setTextColor("darkgreen") : 75 > d ? b.setTextColor("orangered") : b.setTextColor("red");
            };
            if (d) {
              switch(this.Stats.Battle.Outcome) {
                case 1:
                  this.Label.Battle.Outcome.resetLabel();
                  this.Label.Battle.Outcome.set({show:"icon"});
                  this.Label.Battle.Outcome.setIcon("FactionUI/icons/icon_reports_total_defeat.png");
                  this.Label.Battle.Outcome.setToolTipIcon("FactionUI/icons/icon_reports_total_defeat.png");
                  this.Label.Battle.Outcome.setToolTipText(b.tr("tnf:total defeat"));
                  break;
                case 2:
                  this.Label.Battle.Outcome.resetLabel();
                  this.Label.Battle.Outcome.set({show:"icon"});
                  this.Label.Battle.Outcome.setIcon("FactionUI/icons/icon_reports_victory.png");
                  this.Label.Battle.Outcome.setToolTipIcon("FactionUI/icons/icon_reports_victory.png");
                  this.Label.Battle.Outcome.setToolTipText(b.tr("tnf:victory"));
                  break;
                case 3:
                  this.Label.Battle.Outcome.resetLabel(), this.Label.Battle.Outcome.set({show:"icon"}), this.Label.Battle.Outcome.setIcon("FactionUI/icons/icon_reports_total_victory.png"), this.Label.Battle.Outcome.setToolTipIcon("FactionUI/icons/icon_reports_total_victory.png"), this.Label.Battle.Outcome.setToolTipText(b.tr("tnf:total victory"));
              }
              this.Label.Battle.Duration.setValue(e(this.Stats.Battle.Duration / 1E3));
              null != this.OwnCity && (this.Stats.Battle.OwnCity = this.OwnCity.get_Name());
              this.Label.Battle.OwnCity.setValue(this.Stats.Battle.OwnCity);
              switch(localStorage.getEHSelection) {
                case "hp rel":
                  this.Label.EnemyHealth.Overall.setValue(this.Stats.EnemyHealth.Overall.getHPrel().toFixed(2) + "%");
                  this.Label.EnemyHealth.Overall.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.EnemyHealth.Overall.RT) + "<br>" + b.tr("tnf:tiberium") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.EnemyHealth.Overall.Tib) + "<br>" + b.tr("tnf:crystals") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.EnemyHealth.Overall.Cry));
                  this.Label.EnemyHealth.Base.setValue(this.Stats.EnemyHealth.Base.getHPrel().toFixed(2) + "%");
                  this.Label.EnemyHealth.Base.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.EnemyHealth.Base.RT) + "<br>" + b.tr("tnf:tiberium") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.EnemyHealth.Base.Tib));
                  this.Label.EnemyHealth.Defense.setValue(this.Stats.EnemyHealth.Defense.getHPrel().toFixed(2) + "%");
                  this.Label.EnemyHealth.Defense.setToolTipText(b.tr("tnf:tiberium") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.EnemyHealth.Defense.Tib) + "<br>" + b.tr("tnf:crystals") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.EnemyHealth.Defense.Cry));
                  this.Label.EnemyHealth.CY.setValue(this.Stats.EnemyHealth.CY.getHPrel().toFixed(2) + "%");
                  this.Label.EnemyHealth.CY.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.EnemyHealth.CY.RT) + "<br>" + b.tr("tnf:tiberium") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.EnemyHealth.CY.Tib));
                  this.Label.EnemyHealth.DF.setValue(this.Stats.EnemyHealth.DF.getHPrel().toFixed(2) + "%");
                  this.Label.EnemyHealth.DF.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.EnemyHealth.DF.RT) + "<br>" + b.tr("tnf:tiberium") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.EnemyHealth.DF.Tib));
                  this.Label.EnemyHealth.CC.setValue(this.Stats.EnemyHealth.CC.getHPrel().toFixed(2) + "%");
                  this.Label.EnemyHealth.CC.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.EnemyHealth.CC.RT) + "<br>" + b.tr("tnf:tiberium") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.EnemyHealth.CC.Tib));
                  break;
                default:
                  this.Label.EnemyHealth.Overall.setValue(this.Stats.EnemyHealth.Overall.getHP().toFixed(2) + "%"), this.Label.EnemyHealth.Overall.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.EnemyHealth.Overall.RT) + "<br>" + b.tr("tnf:tiberium") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.EnemyHealth.Overall.Tib) + "<br>" + b.tr("tnf:crystals") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.EnemyHealth.Overall.Cry)), this.Label.EnemyHealth.Base.setValue(this.Stats.EnemyHealth.Base.getHP().toFixed(2) + 
                  "%"), this.Label.EnemyHealth.Base.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.EnemyHealth.Base.RT) + "<br>" + b.tr("tnf:tiberium") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.EnemyHealth.Base.Tib)), this.Label.EnemyHealth.Defense.setValue(this.Stats.EnemyHealth.Defense.getHP().toFixed(2) + "%"), this.Label.EnemyHealth.Defense.setToolTipText(b.tr("tnf:tiberium") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.EnemyHealth.Defense.Tib) + 
                  "<br>" + b.tr("tnf:crystals") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.EnemyHealth.Defense.Cry)), this.Label.EnemyHealth.CY.setValue(this.Stats.EnemyHealth.CY.getHP().toFixed(2) + "%"), this.Label.EnemyHealth.CY.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.EnemyHealth.CY.RT) + "<br>" + b.tr("tnf:tiberium") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.EnemyHealth.CY.Tib)), this.Label.EnemyHealth.DF.setValue(this.Stats.EnemyHealth.DF.getHP().toFixed(2) + 
                  "%"), this.Label.EnemyHealth.DF.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.EnemyHealth.DF.RT) + "<br>" + b.tr("tnf:tiberium") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.EnemyHealth.DF.Tib)), this.Label.EnemyHealth.CC.setValue(this.Stats.EnemyHealth.CC.getHP().toFixed(2) + "%"), this.Label.EnemyHealth.CC.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.EnemyHealth.CC.RT) + "<br>" + b.tr("tnf:tiberium") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.EnemyHealth.CC.Tib));
              }
              g(this.Label.EnemyHealth.Overall, this.Stats.EnemyHealth.Overall.getHP());
              g(this.Label.EnemyHealth.Base, this.Stats.EnemyHealth.Base.getHP());
              g(this.Label.EnemyHealth.Defense, this.Stats.EnemyHealth.Defense.getHP());
              g(this.Label.EnemyHealth.CY, this.Stats.EnemyHealth.CY.getHP());
              g(this.Label.EnemyHealth.DF, this.Stats.EnemyHealth.DF.getHP());
              g(this.Label.EnemyHealth.CC, this.Stats.EnemyHealth.CC.getHP());
              null != this.OwnCity && (this.Stats.Repair.Storage = Math.min(this.OwnCity.GetResourceCount(ClientLib.Base.EResourceType.RepairChargeInf), this.OwnCity.GetResourceCount(ClientLib.Base.EResourceType.RepairChargeVeh), this.OwnCity.GetResourceCount(ClientLib.Base.EResourceType.RepairChargeAir)));
              this.Label.Repair.Storage.setValue(phe.cnc.Util.getTimespanString(ClientLib.Data.MainData.GetInstance().get_Time().GetTimeSpan(this.Stats.Repair.Storage)));
              this.Label.Repair.Storage.setTextColor(this.Stats.Repair.Storage > this.Stats.Repair.Overall.RT ? "darkgreen" : "red");
              switch(localStorage.getRTSelection) {
                case "cry":
                  this.Label.Repair.Overall.setValue(phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Repair.Overall.Cry));
                  this.Label.Repair.Overall.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.Repair.Overall.RT) + "</br>" + b.tr("tnf:health") + ": " + this.Stats.Repair.Overall.getHP().toFixed(2) + "%");
                  this.Label.Repair.Inf.setValue(phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Repair.Inf.Cry));
                  this.Label.Repair.Inf.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.Repair.Inf.RT) + "</br>" + b.tr("tnf:health") + ": " + this.Stats.Repair.Inf.getHP().toFixed(2) + "%");
                  this.Label.Repair.Vehi.setValue(phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Repair.Vehi.Cry));
                  this.Label.Repair.Vehi.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.Repair.Vehi.RT) + "</br>" + b.tr("tnf:health") + ": " + this.Stats.Repair.Vehi.getHP().toFixed(2) + "%");
                  this.Label.Repair.Air.setValue(phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Repair.Air.Cry));
                  this.Label.Repair.Air.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.Repair.Air.RT) + "</br>" + b.tr("tnf:health") + ": " + this.Stats.Repair.Air.getHP().toFixed(2) + "%");
                  break;
                case "hp":
                  this.Label.Repair.Overall.setValue(this.Stats.Repair.Overall.getHP().toFixed(2) + "%");
                  this.Label.Repair.Overall.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.Repair.Overall.RT) + "</br>" + b.tr("tnf:crystals") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Repair.Overall.Cry));
                  this.Label.Repair.Inf.setValue(this.Stats.Repair.Inf.getHP().toFixed(2) + "%");
                  this.Label.Repair.Inf.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.Repair.Inf.RT) + "</br>" + b.tr("tnf:crystals") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Repair.Inf.Cry));
                  this.Label.Repair.Vehi.setValue(this.Stats.Repair.Vehi.getHP().toFixed(2) + "%");
                  this.Label.Repair.Vehi.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.Repair.Vehi.RT) + "</br>" + b.tr("tnf:crystals") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Repair.Vehi.Cry));
                  this.Label.Repair.Air.setValue(this.Stats.Repair.Air.getHP().toFixed(2) + "%");
                  this.Label.Repair.Air.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.Repair.Air.RT) + "</br>" + b.tr("tnf:crystals") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Repair.Air.Cry));
                  break;
                case "hp rel":
                  this.Label.Repair.Overall.setValue(this.Stats.Repair.Overall.getHPrel().toFixed(2) + "%");
                  this.Label.Repair.Overall.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.Repair.Overall.RT) + "</br>" + b.tr("tnf:crystals") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Repair.Overall.Cry));
                  this.Label.Repair.Inf.setValue(this.Stats.Repair.Inf.getHPrel().toFixed(2) + "%");
                  this.Label.Repair.Inf.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.Repair.Inf.RT) + "</br>" + b.tr("tnf:crystals") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Repair.Inf.Cry));
                  this.Label.Repair.Vehi.setValue(this.Stats.Repair.Vehi.getHPrel().toFixed(2) + "%");
                  this.Label.Repair.Vehi.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.Repair.Vehi.RT) + "</br>" + b.tr("tnf:crystals") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Repair.Vehi.Cry));
                  this.Label.Repair.Air.setValue(this.Stats.Repair.Air.getHPrel().toFixed(2) + "%");
                  this.Label.Repair.Air.setToolTipText(b.tr("tnf:repair points") + ": " + e(this.Stats.Repair.Air.RT) + "</br>" + b.tr("tnf:crystals") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Repair.Air.Cry));
                  break;
                default:
                  this.Label.Repair.Overall.setValue(e(this.Stats.Repair.Overall.RT)), this.Label.Repair.Overall.setToolTipText(b.tr("tnf:crystals") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Repair.Overall.Cry) + "</br>" + b.tr("tnf:health") + ": " + this.Stats.Repair.Overall.getHP().toFixed(2) + "%"), this.Label.Repair.Inf.setValue(e(this.Stats.Repair.Inf.RT)), this.Label.Repair.Inf.setToolTipText(b.tr("tnf:crystals") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Repair.Inf.Cry) + 
                  "</br>" + b.tr("tnf:health") + ": " + this.Stats.Repair.Inf.getHP().toFixed(2) + "%"), this.Label.Repair.Vehi.setValue(e(this.Stats.Repair.Vehi.RT)), this.Label.Repair.Vehi.setToolTipText(b.tr("tnf:crystals") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Repair.Vehi.Cry) + "</br>" + b.tr("tnf:health") + ": " + this.Stats.Repair.Vehi.getHP().toFixed(2) + "%"), this.Label.Repair.Air.setValue(e(this.Stats.Repair.Air.RT)), this.Label.Repair.Air.setToolTipText(b.tr("tnf:crystals") + 
                  ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Repair.Air.Cry) + "</br>" + b.tr("tnf:health") + ": " + this.Stats.Repair.Air.getHP().toFixed(2) + "%");
              }
              f(this.Label.Repair.Overall, this.Stats.Repair.Overall.getHP());
              f(this.Label.Repair.Inf, this.Stats.Repair.Inf.getHP());
              this.Stats.Repair.Inf.RT === this.Stats.Repair.Overall.RT && 100 > this.Stats.Repair.Inf.getHP() && this.Label.Repair.Inf.setTextColor("black");
              f(this.Label.Repair.Vehi, this.Stats.Repair.Vehi.getHP());
              this.Stats.Repair.Vehi.RT === this.Stats.Repair.Overall.RT && 100 > this.Stats.Repair.Vehi.getHP() && this.Label.Repair.Vehi.setTextColor("black");
              f(this.Label.Repair.Air, this.Stats.Repair.Air.getHP());
              this.Stats.Repair.Air.RT === this.Stats.Repair.Overall.RT && 100 > this.Stats.Repair.Air.getHP() && this.Label.Repair.Air.setTextColor("black");
              this.Label.Loot.Tib.setToolTipText((this.Stats.Loot.Tib.Battle / this.Stats.Loot.Tib.Base * 100).toFixed(2) + "%<br>" + b.tr("tnf:base") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Loot.Tib.Base));
              this.Label.Loot.Tib.setValue(phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Loot.Tib.Battle));
              this.Label.Loot.Cry.setToolTipText((this.Stats.Loot.Cry.Battle / this.Stats.Loot.Cry.Base * 100).toFixed(2) + "%<br>" + b.tr("tnf:base") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Loot.Cry.Base));
              this.Label.Loot.Cry.setValue(phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Loot.Cry.Battle));
              this.Label.Loot.Cred.setToolTipText((this.Stats.Loot.Cred.Battle / this.Stats.Loot.Cred.Base * 100).toFixed(2) + "%<br>" + b.tr("tnf:base") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Loot.Cred.Base));
              this.Label.Loot.Cred.setValue(phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Loot.Cred.Battle));
              this.Label.Loot.RP.setToolTipText((this.Stats.Loot.RP.Battle / this.Stats.Loot.RP.Base * 100).toFixed(2) + "%<br>" + b.tr("tnf:base") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Loot.RP.Base));
              this.Label.Loot.RP.setValue(phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Loot.RP.Battle));
              this.Label.Loot.Overall.setToolTipText((this.Stats.Loot.Overall.Battle / this.Stats.Loot.Overall.Base * 100).toFixed(2) + "%<br>" + b.tr("tnf:base") + ": " + phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Loot.Overall.Base));
              this.Label.Loot.Overall.setValue(phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Loot.Overall.Battle));
            } else {
              if (0 < this.Stats.Loot.Tib.Base || 0 < this.Stats.Loot.Cry.Base || 0 < this.Stats.Loot.Cred.Base || 0 < this.Stats.Loot.RP.Base || 0 < this.Stats.Loot.Overall.Base) {
                this.Label.Loot.Tib.resetToolTipText(), this.Label.Loot.Tib.setValue(phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Loot.Tib.Base)), this.Label.Loot.Cry.resetToolTipText(), this.Label.Loot.Cry.setValue(phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Loot.Cry.Base)), this.Label.Loot.Cred.resetToolTipText(), this.Label.Loot.Cred.setValue(phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Loot.Cred.Base)), this.Label.Loot.RP.resetToolTipText(), this.Label.Loot.RP.setValue(phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Loot.RP.Base)), 
                this.Label.Loot.Overall.resetToolTipText(), this.Label.Loot.Overall.setValue(phe.cnc.gui.util.Numbers.formatNumbersCompact(this.Stats.Loot.Overall.Base));
              }
            }
          };
          this.ResetStats = function() {
            this.Stats.Battle.Outcome = 0;
            this.Stats.Battle.Duration = 0;
            this.Stats.Battle.OwnCity = "";
            this.Stats.EnemyHealth.Overall = new f;
            this.Stats.EnemyHealth.Base = new f;
            this.Stats.EnemyHealth.Defense = new f;
            this.Stats.EnemyHealth.CY = new f;
            this.Stats.EnemyHealth.DF = new f;
            this.Stats.EnemyHealth.CC = new f;
            this.Stats.Repair.Storage = 0;
            this.Stats.Repair.Overall = new f;
            this.Stats.Repair.Inf = new f;
            this.Stats.Repair.Vehi = new f;
            this.Stats.Repair.Air = new f;
            this.Stats.Loot.Tib.Battle = 0;
            this.Stats.Loot.Cry.Battle = 0;
            this.Stats.Loot.Cred.Battle = 0;
            this.Stats.Loot.RP.Battle = 0;
            this.Stats.Loot.Overall.Battle = 0;
          };
          this.ResetLabels = function() {
            this.Label.Battle.Outcome.resetIcon();
            this.Label.Battle.Outcome.resetToolTipIcon();
            this.Label.Battle.Outcome.resetToolTipText();
            this.Label.Battle.Outcome.setShow("label");
            this.Label.Battle.Outcome.setLabel("-");
            this.Label.Battle.Duration.setValue("-:--");
            this.Label.Battle.OwnCity.setValue("-");
            this.Label.EnemyHealth.Overall.setValue("-");
            this.Label.EnemyHealth.Overall.resetToolTipText();
            this.Label.EnemyHealth.Overall.resetTextColor();
            this.Label.EnemyHealth.Base.setValue("-");
            this.Label.EnemyHealth.Base.resetToolTipText();
            this.Label.EnemyHealth.Base.resetTextColor();
            this.Label.EnemyHealth.Defense.setValue("-");
            this.Label.EnemyHealth.Defense.resetToolTipText();
            this.Label.EnemyHealth.Defense.resetTextColor();
            this.Label.EnemyHealth.CY.setValue("-");
            this.Label.EnemyHealth.CY.resetToolTipText();
            this.Label.EnemyHealth.CY.resetTextColor();
            this.Label.EnemyHealth.DF.setValue("-");
            this.Label.EnemyHealth.DF.resetToolTipText();
            this.Label.EnemyHealth.DF.resetTextColor();
            this.Label.EnemyHealth.CC.setValue("-");
            this.Label.EnemyHealth.CC.resetToolTipText();
            this.Label.EnemyHealth.CC.resetTextColor();
            this.Label.Repair.Storage.setValue("-");
            this.Label.Repair.Storage.resetToolTipText();
            this.Label.Repair.Storage.resetTextColor();
            this.Label.Repair.Overall.setValue("-");
            this.Label.Repair.Overall.resetToolTipText();
            this.Label.Repair.Overall.resetTextColor();
            this.Label.Repair.Inf.setValue("-");
            this.Label.Repair.Inf.resetToolTipText();
            this.Label.Repair.Inf.resetTextColor();
            this.Label.Repair.Vehi.setValue("-");
            this.Label.Repair.Vehi.resetToolTipText();
            this.Label.Repair.Vehi.resetTextColor();
            this.Label.Repair.Air.setValue("-");
            this.Label.Repair.Air.resetToolTipText();
            this.Label.Repair.Air.resetTextColor();
            this.Label.Loot.Tib.setValue("-");
            this.Label.Loot.Tib.resetToolTipText();
            this.Label.Loot.Tib.resetTextColor();
            this.Label.Loot.Cry.setValue("-");
            this.Label.Loot.Cry.resetToolTipText();
            this.Label.Loot.Cry.resetTextColor();
            this.Label.Loot.Cred.setValue("-");
            this.Label.Loot.Cred.resetToolTipText();
            this.Label.Loot.Cred.resetTextColor();
            this.Label.Loot.RP.setValue("-");
            this.Label.Loot.RP.resetToolTipText();
            this.Label.Loot.RP.resetTextColor();
            this.Label.Loot.Overall.setValue("-");
            this.Label.Loot.Overall.resetToolTipText();
            this.Label.Loot.Overall.resetTextColor();
          };
          this.Reset = function() {
            var b = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();
            if (null === this.TargetCity || b.get_CityArmyFormationsManager().get_CurrentTargetBaseId() != this.TargetCity.get_Id()) {
              d = !1, this.OwnCity = this.TargetCity = null, this.ResetStats(), this.Stats.Loot.Tib.Base = 0, this.Stats.Loot.Cry.Base = 0, this.Stats.Loot.Cred.Base = 0, this.Stats.Loot.RP.Base = 0, this.Stats.Loot.Overall.Base = 0, this.ResetLabels();
            }
          };
          this.Select = function(d) {
            if (d == b) {
              d = "pane-light-opaque";
              var e = 1;
            } else {
              d = "pane-light-plain", e = .6;
            }
            this.Label.Battle.container.set({decorator:d, opacity:e});
            this.Label.EnemyHealth.container.set({decorator:d, opacity:e});
            this.Label.Repair.container.set({decorator:d, opacity:e});
            this.Label.Loot.container.set({decorator:d, opacity:e});
          };
          this.saveFormation = function() {
            try {
              e = [];
              for (var b = Simulator.getInstance().getCityPreArmyUnits().get_ArmyUnits().l, d = 0;d < b.length;d++) {
                var f = b[d], g = {};
                g.x = f.get_CoordX();
                g.y = f.get_CoordY();
                g.id = f.get_Id();
                g.enabled = f.get_Enabled();
                e.push(g);
              }
            } catch (k) {
              console.log("Error Saving Stat Formation"), console.log(k.toString());
            }
          };
          this.loadFormation = function() {
            try {
              ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentOwnCityId(this.OwnCity.get_Id()), Simulator.getInstance().restoreFormation(e);
            } catch (b) {
              console.log("Error loading Stat Formation"), console.log(b.toString());
            }
          };
          this.Label.Battle.Outcome.getChildControl("icon").set({width:18, height:18, scale:!0, alignY:"middle"});
          this.Label.Battle.container.add(this.Label.Battle.Outcome);
          this.Label.Battle.container.add(this.Label.Battle.Duration);
          this.Label.Battle.container.add(this.Label.Battle.OwnCity);
          this.Label.EnemyHealth.container.add(this.Label.EnemyHealth.Overall);
          this.Label.EnemyHealth.container.add(this.Label.EnemyHealth.Base);
          this.Label.EnemyHealth.container.add(this.Label.EnemyHealth.Defense);
          this.Label.EnemyHealth.container.add(this.Label.EnemyHealth.CY);
          this.Label.EnemyHealth.container.add(this.Label.EnemyHealth.DF);
          this.Label.EnemyHealth.container.add(this.Label.EnemyHealth.CC);
          this.Label.Repair.container.add(this.Label.Repair.Storage);
          this.Label.Repair.container.add(this.Label.Repair.Overall);
          this.Label.Repair.container.add(this.Label.Repair.Inf);
          this.Label.Repair.container.add(this.Label.Repair.Vehi);
          this.Label.Repair.container.add(this.Label.Repair.Air);
          this.Label.Loot.container.add(this.Label.Loot.Tib);
          this.Label.Loot.container.add(this.Label.Loot.Cry);
          this.Label.Loot.container.add(this.Label.Loot.Cred);
          this.Label.Loot.container.add(this.Label.Loot.RP);
          this.Label.Loot.container.add(this.Label.Loot.Overall);
          this.Label.Battle.container.addListener("click", function() {
            Simulator.StatWindow.getInstance().simSelected = b;
            for (var d = 0;d < Simulator.StatWindow.getInstance().sim.length;d++) {
              Simulator.StatWindow.getInstance().sim[d].Select(b);
            }
          }, this);
          this.Label.EnemyHealth.container.addListener("click", function() {
            Simulator.StatWindow.getInstance().simSelected = b;
            for (var d = 0;d < Simulator.StatWindow.getInstance().sim.length;d++) {
              Simulator.StatWindow.getInstance().sim[d].Select(b);
            }
          }, this);
          this.Label.Repair.container.addListener("click", function() {
            Simulator.StatWindow.getInstance().simSelected = b;
            for (var d = 0;d < Simulator.StatWindow.getInstance().sim.length;d++) {
              Simulator.StatWindow.getInstance().sim[d].Select(b);
            }
          }, this);
          this.Label.Loot.container.addListener("click", function() {
            Simulator.StatWindow.getInstance().simSelected = b;
            for (var d = 0;d < Simulator.StatWindow.getInstance().sim.length;d++) {
              Simulator.StatWindow.getInstance().sim[d].Select(b);
            }
          }, this);
          this.Label.Battle.container.addListener("dblclick", function() {
            this.loadFormation();
          }, this);
          this.Label.EnemyHealth.container.addListener("dblclick", function() {
            this.loadFormation();
          }, this);
          this.Label.Repair.container.addListener("dblclick", function() {
            this.loadFormation();
          }, this);
          this.Label.Loot.container.addListener("dblclick", function() {
            this.loadFormation();
          }, this);
          this.Label.EnemyHealth.container.addListener("contextmenu", function() {
            localStorage.getEHSelection = "hp rel" == localStorage.getEHSelection ? "hp" : "hp rel";
          }, this);
          this.Label.Repair.container.addListener("contextmenu", function() {
            localStorage.getRTSelection = "cry" == localStorage.getRTSelection ? "rt" : "hp" == localStorage.getRTSelection ? "hp rel" : "hp rel" == localStorage.getRTSelection ? "cry" : "hp";
          }, this);
        } catch (l) {
          console.log("Error init Simulation"), console.log(l.toString());
        }
      }, simulateStats:function() {
        console.log("Simulating Stats");
        var b = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
        null != b && (Simulator.getInstance().isSimulation = !0, Simulator.getInstance().saveTempFormation(), localStorage.ta_sim_last_city = b.get_Id(), ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity().get_CityArmyFormationsManager().set_CurrentTargetBaseId(b.get_Id()), ClientLib.API.Battleground.GetInstance().SimulateBattle());
      }, doSimReplay:function() {
        try {
          if (Simulator.getInstance().isSimulation = !0, qx.core.Init.getApplication().getPlayArea().setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay, localStorage.ta_sim_last_city, 0, 0), void 0 !== localStorage.autoSimulate && "yes" == localStorage.autoSimulate) {
            var b = localStorage.simulateSpeed;
            setTimeout(function() {
              var d = ClientLib.Vis.VisMain.GetInstance().get_Battleground();
              d.RestartReplay();
              d.set_ReplaySpeed(parseInt(b, 10));
            }, 1E3);
          }
        } catch (d) {
          console.log("Error attempting to show Simulation Replay"), console.log(d.toString());
        }
      }, calculateRepairCosts:function(b, d, e, g, f) {
        var k = {RT:0, Cry:0, Tib:0};
        if (e != g) {
          for (b = ClientLib.API.Util.GetUnitRepairCosts(d, b, (e - g) / f), d = 0;d < b.length;d++) {
            switch(e = b[d], parseInt(e.Type, 10)) {
              case ClientLib.Base.EResourceType.Tiberium:
                k.Tib += e.Count;
                break;
              case ClientLib.Base.EResourceType.Crystal:
                k.Cry += e.Count;
                break;
              case ClientLib.Base.EResourceType.RepairChargeBase:
              ;
              case ClientLib.Base.EResourceType.RepairChargeInf:
              ;
              case ClientLib.Base.EResourceType.RepairChargeVeh:
              ;
              case ClientLib.Base.EResourceType.RepairChargeAir:
                k.RT += e.Count;
            }
          }
        }
        return k;
      }, _onTick:function() {
        for (var b = 0;b < this.sim.length;b++) {
          this.sim[b].UpdateLabels();
        }
      }, __OnSimulateBattleFinished:function(b) {
        0 == this.isSimStatButtonDisabled && (this.disableSimulateStatButtonTimer(1E4), "function" === typeof Simulator.getInstance().disableSimulateButtonTimer && Simulator.getInstance().disableSimulateButtonTimer(1E4));
        0 == this.simReplayBtn.getEnabled() && this.simReplayBtn.setEnabled(!0);
        this.getSimulationInfo(b, this.sim[this.simSelected]);
        this.sim[this.simSelected].setSimulation(b);
      }, getSimulationInfo:function(b, d) {
        console.log("Getting Player Unit Damage");
        try {
          d.ResetStats();
          for (var e = {}, g = [], f = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity(), k = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity(), l = f.get_CityFaction(), f = 0;f < b.length;f++) {
            var h = b[f].Value, m = h.t, q = ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(m), n = h.l, p = Math.floor(h.sh), r = Math.floor(h.h), t = Math.floor(16 * ClientLib.API.Util.GetUnitMaxHealthByLevel(n, q, !1)), E = q.pt, v = q.mt;
            g.push(h);
            switch(l) {
              case ClientLib.Base.EFactionType.GDIFaction:
              ;
              case ClientLib.Base.EFactionType.NODFaction:
                switch(E) {
                  case ClientLib.Base.EPlacementType.Defense:
                  ;
                  case ClientLib.Base.EPlacementType.Structure:
                    t = Math.floor(16 * ClientLib.API.Util.GetUnitMaxHealthByLevel(n, q, !0));
                }
              ;
            }
            e = this.calculateRepairCosts(m, n, p, r, t);
            switch(E) {
              case ClientLib.Base.EPlacementType.Defense:
                d.Stats.EnemyHealth.Overall.StartHealth += p;
                d.Stats.EnemyHealth.Overall.EndHealth += r;
                d.Stats.EnemyHealth.Overall.MaxHealth += t;
                d.Stats.EnemyHealth.Overall.Tib += e.Tib;
                d.Stats.EnemyHealth.Overall.Cry += e.Cry;
                d.Stats.EnemyHealth.Defense.StartHealth += p;
                d.Stats.EnemyHealth.Defense.EndHealth += r;
                d.Stats.EnemyHealth.Defense.MaxHealth += t;
                d.Stats.EnemyHealth.Defense.Tib += e.Tib;
                d.Stats.EnemyHealth.Defense.Cry += e.Cry;
                break;
              case ClientLib.Base.EPlacementType.Offense:
                d.Stats.Repair.Overall.StartHealth += p;
                d.Stats.Repair.Overall.EndHealth += r;
                d.Stats.Repair.Overall.MaxHealth += t;
                d.Stats.Repair.Overall.Tib += e.Tib;
                d.Stats.Repair.Overall.Cry += e.Cry;
                switch(v) {
                  case ClientLib.Base.EUnitMovementType.Feet:
                    d.Stats.Repair.Inf.StartHealth += p;
                    d.Stats.Repair.Inf.EndHealth += r;
                    d.Stats.Repair.Inf.MaxHealth += t;
                    d.Stats.Repair.Inf.RT += e.RT;
                    d.Stats.Repair.Inf.Tib += e.Tib;
                    d.Stats.Repair.Inf.Cry += e.Cry;
                    break;
                  case ClientLib.Base.EUnitMovementType.Wheel:
                  ;
                  case ClientLib.Base.EUnitMovementType.Track:
                    d.Stats.Repair.Vehi.StartHealth += p;
                    d.Stats.Repair.Vehi.EndHealth += r;
                    d.Stats.Repair.Vehi.MaxHealth += t;
                    d.Stats.Repair.Vehi.RT += e.RT;
                    d.Stats.Repair.Vehi.Tib += e.Tib;
                    d.Stats.Repair.Vehi.Cry += e.Cry;
                    break;
                  case ClientLib.Base.EUnitMovementType.Air:
                  ;
                  case ClientLib.Base.EUnitMovementType.Air2:
                    d.Stats.Repair.Air.StartHealth += p, d.Stats.Repair.Air.EndHealth += r, d.Stats.Repair.Air.MaxHealth += t, d.Stats.Repair.Air.RT += e.RT, d.Stats.Repair.Air.Tib += e.Tib, d.Stats.Repair.Air.Cry += e.Cry;
                }
                break;
              case ClientLib.Base.EPlacementType.Structure:
                switch(d.Stats.EnemyHealth.Overall.StartHealth += p, d.Stats.EnemyHealth.Overall.EndHealth += r, d.Stats.EnemyHealth.Overall.MaxHealth += t, d.Stats.EnemyHealth.Overall.RT += e.RT, d.Stats.EnemyHealth.Overall.Tib += e.Tib, d.Stats.EnemyHealth.Overall.Cry += e.Cry, d.Stats.EnemyHealth.Base.StartHealth += p, d.Stats.EnemyHealth.Base.EndHealth += r, d.Stats.EnemyHealth.Base.MaxHealth += t, d.Stats.EnemyHealth.Base.RT += e.RT, d.Stats.EnemyHealth.Base.Tib += e.Tib, d.Stats.EnemyHealth.Base.Cry += 
                e.Cry, m) {
                  case 112:
                  ;
                  case 151:
                  ;
                  case 177:
                  ;
                  case 233:
                    d.Stats.EnemyHealth.CY.StartHealth += p;
                    d.Stats.EnemyHealth.CY.EndHealth += r;
                    d.Stats.EnemyHealth.CY.MaxHealth += t;
                    d.Stats.EnemyHealth.CY.RT += e.RT;
                    d.Stats.EnemyHealth.CY.Tib += e.Tib;
                    d.Stats.EnemyHealth.CY.Cry += e.Cry;
                    break;
                  case 131:
                  ;
                  case 158:
                  ;
                  case 195:
                    d.Stats.EnemyHealth.DF.StartHealth += p;
                    d.Stats.EnemyHealth.DF.EndHealth += r;
                    d.Stats.EnemyHealth.DF.MaxHealth += t;
                    d.Stats.EnemyHealth.DF.RT += e.RT;
                    d.Stats.EnemyHealth.DF.Tib += e.Tib;
                    d.Stats.EnemyHealth.DF.Cry += e.Cry;
                    break;
                  case 111:
                  ;
                  case 196:
                  ;
                  case 159:
                    d.Stats.EnemyHealth.CC.StartHealth += p, d.Stats.EnemyHealth.CC.EndHealth += r, d.Stats.EnemyHealth.CC.MaxHealth += t, d.Stats.EnemyHealth.CC.RT += e.RT, d.Stats.EnemyHealth.CC.Tib += e.Tib, d.Stats.EnemyHealth.CC.Cry += e.Cry;
                }
              ;
            }
          }
          d.Stats.Repair.Overall.RT = Math.max(d.Stats.Repair.Inf.RT, d.Stats.Repair.Vehi.RT, d.Stats.Repair.Air.RT);
          d.Stats.Battle.Outcome = 0 === d.Stats.Repair.Overall.EndHealth ? 1 : 0 === d.Stats.EnemyHealth.CY.EndHealth ? 3 : 2;
          d.Stats.Repair.Storage = Math.min(k.GetResourceCount(8), k.GetResourceCount(9), k.GetResourceCount(10));
          this.calcResources(g, d);
          setTimeout(function() {
            var b = ClientLib.Vis.VisMain.GetInstance().get_Battleground();
            Simulator.StatWindow.getInstance().sim[Simulator.StatWindow.getInstance().simSelected].Stats.Battle.Duration = b.get_BattleDuration();
          }, 1);
        } catch (w) {
          console.log("Error Getting Player Unit Damage"), console.log(w.toString());
        }
      }, calcResources:function(b, d) {
        try {
          var e = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity().get_CityFaction(), g = {1:0, 2:0, 3:0, 6:0}, f, k, l, h = -1, m = -1;
          for (k = 0;9 > k;k++) {
            for (l = 0;8 > l;l++) {
              var q = ClientLib.Vis.VisMain.GetInstance().get_City().get_GridWidth(), n = ClientLib.Vis.VisMain.GetInstance().get_City().get_GridHeight(), p = ClientLib.Vis.VisMain.GetInstance().GetObjectFromPosition(k * q, l * n);
              if (null !== p && "function" === typeof p.get_BuildingName) {
                try {
                  if (void 0 !== b) {
                    for (f = 0;f < b.length;f++) {
                      var r = b[f], t = ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(r.t);
                      if (t.dn == p.get_BuildingName()) {
                        var v = Math.floor(16 * ClientLib.API.Util.GetUnitMaxHealthByLevel(r.l, t, !1));
                        switch(e) {
                          case ClientLib.Base.EFactionType.GDIFaction:
                          ;
                          case ClientLib.Base.EFactionType.NODFaction:
                            switch(t.pt) {
                              case ClientLib.Base.EPlacementType.Defense:
                              ;
                              case ClientLib.Base.EPlacementType.Structure:
                                v = Math.floor(16 * ClientLib.API.Util.GetUnitMaxHealthByLevel(r.l, t, !0));
                            }
                          ;
                        }
                        h = (r.sh - r.h) / v;
                        "Harvester" == t.dn && (m = p.get_BuildingDetails().get_HitpointsPercent(), Math.round(100 * m) != Math.round(100 * h) && (h = m));
                        b.splice(f, 1);
                        break;
                      }
                    }
                  }
                } catch (u) {
                  console.log("Error Calculating Resources 2"), console.log(u), console.log(u.name + " " + u.message);
                }
                try {
                  var x = p.get_BuildingDetails();
                  -1 == h && (h = x.get_HitpointsPercent(), "Harvester" == p.get_BuildingName() && (m = p.get_BuildingDetails().get_HitpointsPercent(), Math.round(100 * m) != Math.round(100 * h) && (h = m)));
                } catch (u) {
                  console.log("Error Calculating Resources 3"), console.log(u), console.log(u.name + " " + u.message);
                }
                var w = x.get_UnitLevelRepairRequirements();
                for (f = 0;f < w.length;f++) {
                  var y = w[f].Type, A = w[f].Count;
                  g[y] += Math.round(h * A - .5);
                }
                h = -1;
              }
            }
          }
          for (k = 0;9 > k;k++) {
            for (l = 8;16 > l;l++) {
              try {
                q = ClientLib.Vis.VisMain.GetInstance().get_DefenseSetup().get_GridWidth();
                n = ClientLib.Vis.VisMain.GetInstance().get_DefenseSetup().get_GridHeight();
                8 == l && (q += 1, n += 1);
                var z = ClientLib.Vis.VisMain.GetInstance().GetObjectFromPosition(k * q, l * n);
                if (null !== z && z.get_VisObjectType() != ClientLib.Vis.VisObject.EObjectType.CityBuildingType && "function" === typeof z.get_UnitDetails) {
                  if (void 0 !== b) {
                    for (f = 0;f < b.length;f++) {
                      if (r = b[f], t = ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(r.t), t.dn == z.get_UnitName()) {
                        v = Math.floor(16 * ClientLib.API.Util.GetUnitMaxHealthByLevel(r.l, t, !1));
                        switch(e) {
                          case ClientLib.Base.EFactionType.GDIFaction:
                          ;
                          case ClientLib.Base.EFactionType.NODFaction:
                            switch(t.pt) {
                              case ClientLib.Base.EPlacementType.Defense:
                              ;
                              case ClientLib.Base.EPlacementType.Structure:
                                v = Math.floor(16 * ClientLib.API.Util.GetUnitMaxHealthByLevel(r.l, t, !0));
                            }
                          ;
                        }
                        h = (r.sh - r.h) / v;
                        b.splice(f, 1);
                        break;
                      }
                    }
                  }
                  var C = z.get_UnitDetails();
                  -1 == h && (h = C.get_HitpointsPercent());
                  w = C.get_UnitLevelRepairRequirements();
                  for (f = 0;f < w.length;f++) {
                    y = w[f].Type, A = w[f].Count, g[y] += Math.round(h * A - .5);
                  }
                  h = -1;
                }
              } catch (u) {
                console.log("Error Calculating Resources 4"), console.log(u), console.log(u.name + " " + u.message);
              }
            }
          }
          var D = g[1] + g[2] + g[3] + g[6];
          if (void 0 === b) {
            for (f = 0;f < this.sim.length;f++) {
              this.sim[f].Reset(), this.sim[f].Stats.Loot.Overall.Base = D, this.sim[f].Stats.Loot.Tib.Base = g[1], this.sim[f].Stats.Loot.Cry.Base = g[2], this.sim[f].Stats.Loot.Cred.Base = g[3], this.sim[f].Stats.Loot.RP.Base = g[6];
            }
          } else {
            3 === d.Stats.Battle.Outcome ? (d.Stats.Loot.Overall.Battle = d.Stats.Loot.Overall.Base, d.Stats.Loot.Tib.Battle = d.Stats.Loot.Tib.Base, d.Stats.Loot.Cry.Battle = d.Stats.Loot.Cry.Base, d.Stats.Loot.Cred.Battle = d.Stats.Loot.Cred.Base, d.Stats.Loot.RP.Battle = d.Stats.Loot.RP.Base) : (d.Stats.Loot.Overall.Battle = D, d.Stats.Loot.Tib.Battle = g[1], d.Stats.Loot.Cry.Battle = g[2], d.Stats.Loot.Cred.Battle = g[3], d.Stats.Loot.RP.Battle = g[6]);
          }
        } catch (u) {
          console.log("Error Calculating Resources"), console.log(u), console.log(u.name + " " + u.message);
        }
      }, disableSimulateStatButtonTimer:function(b) {
        try {
          1E3 <= b ? (this.isSimStatButtonDisabled = !0, this.simStatBtn.setEnabled(!1), this.simStatBtn.setLabel(Math.floor(b / 1E3)), b -= 1E3, setTimeout(function() {
            Simulator.StatWindow.getInstance().disableSimulateStatButtonTimer(b);
          }, 1E3)) : (setTimeout(function() {
            Simulator.StatWindow.getInstance().simStatBtn.setEnabled(!0);
            Simulator.StatWindow.getInstance().simStatBtn.setLabel("Update");
          }, b), this.isSimStatButtonDisabled = !1);
        } catch (d) {
          console.log("Error disabling simulator button"), console.log(d.toString());
        }
      }}});
      qx.Class.define("Simulator.OptionWindow", {type:"singleton", extend:qx.ui.window.Window, construct:function() {
        this.base(arguments);
        this.setLayout(new qx.ui.layout.VBox(5));
        this.addListener("resize", function() {
          this.center();
        }, this);
        this.set({caption:"THE OPTIONS BRO!", allowMaximize:!1, showMaximize:!1, allowMinimize:!1, showMinimize:!1});
        var b = qx.core.Init.getApplication(), d = new qx.ui.tabview.TabView, e = new qx.ui.tabview.Page("General");
        genLayout = new qx.ui.layout.VBox(5);
        e.setLayout(genLayout);
        var g = new qx.ui.container.Composite(new qx.ui.layout.HBox(5));
        g.setThemedFont("bold");
        var f = new qx.ui.basic.Label("Button Layouts:");
        g.add(f);
        e.add(g);
        g = new qx.ui.container.Composite(new qx.ui.layout.VBox(5));
        this._buttonLocCB = new qx.ui.form.CheckBox("Right/Left Sim Window");
        this._buttonLocCB.set({toolTipText:"SWITCHES BETWEEN THE RIGHT AND LEFT SIDE OF THE SIM WINDOW DUH!"});
        this._buttonLoc2CB = new qx.ui.form.CheckBox("CombatBar/Right");
        this._buttonLoc2CB.set({toolTipText:"RECOMMENDED FOR HD DISPLAYS ONLY! SWITCHES BETWEEN RIGHT SIDE AND COMBAT BAR."});
        this._buttonSizeCB = new qx.ui.form.CheckBox("Change SimBtn Size");
        this._buttonLocCB.addListener("changeValue", this._onButtonLocChange, this);
        this._buttonLoc2CB.addListener("changeValue", this._onButtonLocChange2, this);
        this._buttonSizeCB.addListener("changeValue", this._onButtonSizeChange, this);
        void 0 !== localStorage.isBtnRight && ("yes" == localStorage.isBtnRight ? this._buttonLocCB.setValue(!0) : this._buttonLocCB.setValue(!1));
        void 0 !== localStorage.isBtnCmd && ("yes" == localStorage.isBtnCmd ? this._buttonLoc2CB.setValue(!0) : this._buttonLoc2CB.setValue(!1));
        void 0 !== localStorage.isBtnNorm && ("yes" == localStorage.isBtnNorm ? this._buttonSizeCB.setValue(!0) : this._buttonSizeCB.setValue(!1), this.setButtonSize());
        this._disableRTBtnCB = new qx.ui.form.CheckBox("Disable Repair Button");
        this._disableRTBtnCB.addListener("changeValue", this._onDisableRTBtnChange, this);
        void 0 !== localStorage.isRTBtnDisabled && ("yes" == localStorage.isRTBtnDisabled ? this._disableRTBtnCB.setValue(!0) : this._disableRTBtnCB.setValue(!1));
        this._disableCmtBtnCB = new qx.ui.form.CheckBox("Disable Combat Button");
        this._disableCmtBtnCB.addListener("changeValue", this._onDisableCmtBtnChange, this);
        void 0 !== localStorage.isCmtBtnDisabled && ("yes" == localStorage.isCmtBtnDisabled ? this._disableCmtBtnCB.setValue(!0) : this._disableCmtBtnCB.setValue(!1));
        this._ArmyUnitTooltip = new qx.ui.form.CheckBox("Disable Army Unit Tooltip");
        this._ArmyUnitTooltip.addListener("changeValue", this._onArmyUnitTooltipChange, this);
        void 0 !== localStorage.ArmyUnitTooltipDisabled && ("yes" == localStorage.ArmyUnitTooltipDisabled ? this._ArmyUnitTooltip.setValue(!0) : this._ArmyUnitTooltip.setValue(!1));
        g.add(this._disableRTBtnCB);
        g.add(this._disableCmtBtnCB);
        g.add(this._ArmyUnitTooltip);
        e.add(g);
        g = (new qx.ui.container.Composite(new qx.ui.layout.HBox(5))).set({marginTop:10});
        g.setThemedFont("bold");
        f = new qx.ui.basic.Label("Simulator:");
        g.add(f);
        e.add(g);
        g = new qx.ui.container.Composite(new qx.ui.layout.VBox(5));
        this._autoSimulateCB = new qx.ui.form.CheckBox("Auto Start Simulation");
        void 0 !== localStorage.autoSimulate && "yes" == localStorage.autoSimulate && this._autoSimulateCB.setValue(!0);
        var k = (new qx.ui.container.Composite(new qx.ui.layout.Grid(5))).set({marginLeft:20}), l = new qx.ui.form.RadioButton("x1"), h = new qx.ui.form.RadioButton("x2"), m = new qx.ui.form.RadioButton("x4");
        this._simSpeedGroup = new qx.ui.form.RadioGroup(l, h, m);
        this._simSpeedGroup.addListener("changeSelection", this._onSimSpeedChange, this);
        this._autoSimulateCB.addListener("changeValue", this._onAutoSimulateChange, this);
        void 0 !== localStorage.simulateSpeed && (f = this._simSpeedGroup.getSelectables(!1), "2" == localStorage.simulateSpeed ? f[1].setValue(!0) : "4" == localStorage.simulateSpeed ? f[2].setValue(!0) : f[0].setValue(!0));
        0 == this._autoSimulateCB.getValue() && this._simSpeedGroup.setEnabled(!1);
        k.add(l, {row:0, column:0});
        k.add(h, {row:0, column:1});
        k.add(m, {row:0, column:2});
        g.add(this._autoSimulateCB);
        g.add(k);
        e.add(g);
        g = new qx.ui.tabview.Page("Stats");
        statsLayout = new qx.ui.layout.VBox(5);
        g.setLayout(statsLayout);
        f = new qx.ui.container.Composite(new qx.ui.layout.HBox(5));
        f.setThemedFont("bold");
        k = new qx.ui.basic.Label("Stat Window:");
        f.add(k);
        g.add(f);
        f = new qx.ui.container.Composite(new qx.ui.layout.VBox(5));
        this._autoOpenCB = new qx.ui.form.CheckBox("Auto Open");
        this._autoOpenCB.addListener("changeValue", this._onAutoOpenStatsChange, this);
        void 0 !== localStorage.autoOpenStat && ("n" == localStorage.autoOpenStat ? this._autoOpenCB.setValue(!0) : this._autoOpenCB.setValue(!1));
        f.add(this._autoOpenCB);
        g.add(f);
        f = (new qx.ui.container.Composite(new qx.ui.layout.HBox(5))).set({marginTop:10});
        f.setThemedFont("bold");
        k = new qx.ui.basic.Label(b.tr("tnf:combat target"));
        f.add(k);
        g.add(f);
        k = new qx.ui.container.Composite(new qx.ui.layout.HBox(5));
        l = new qx.ui.form.RadioButton("HP abs");
        h = new qx.ui.form.RadioButton("HP rel");
        this._EnemyHealthSecGroup = new qx.ui.form.RadioGroup(l, h);
        this._EnemyHealthSecGroup.addListener("changeSelection", this._onEnemyHealthSelectionChange, this);
        void 0 !== localStorage.getEHSelection && (f = this._EnemyHealthSecGroup.getSelectables(!1), "hp" == localStorage.getEHSelection ? f[0].setValue(!0) : "hp rel" == localStorage.getEHSelection ? f[1].setValue(!0) : f[0].setValue(!0));
        k.add(l);
        k.add(h);
        g.add(k);
        f = (new qx.ui.container.Composite(new qx.ui.layout.HBox(5))).set({marginTop:10});
        f.setThemedFont("bold");
        b = new qx.ui.basic.Label(b.tr("tnf:own repair cost"));
        f.add(b);
        g.add(f);
        b = new qx.ui.container.Composite(new qx.ui.layout.HBox(5));
        k = new qx.ui.form.RadioButton("RT");
        l = new qx.ui.form.RadioButton("C");
        h = new qx.ui.form.RadioButton("HP abs");
        m = new qx.ui.form.RadioButton("HP rel");
        this._repairSecGroup = new qx.ui.form.RadioGroup(k, l, h, m);
        this._repairSecGroup.addListener("changeSelection", this._onRepairSelectionChange, this);
        void 0 !== localStorage.getRTSelection && (f = this._repairSecGroup.getSelectables(!1), "rt" == localStorage.getRTSelection ? f[0].setValue(!0) : "cry" == localStorage.getRTSelection ? f[1].setValue(!0) : "hp" == localStorage.getRTSelection ? f[2].setValue(!0) : "hp rel" == localStorage.getRTSelection ? f[3].setValue(!0) : f[0].setValue(!0));
        b.add(k);
        b.add(l);
        b.add(h);
        b.add(m);
        g.add(b);
        b = (new qx.ui.container.Composite(new qx.ui.layout.HBox(5))).set({marginTop:10});
        b.setThemedFont("bold");
        f = new qx.ui.basic.Label("Simulations shown");
        b.add(f);
        g.add(b);
        b = new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
        this._simViews = (new qx.ui.form.Spinner).set({minimum:2});
        void 0 !== localStorage.simViews && (isNaN(parseInt(localStorage.simViews, 10)) ? this._simViews.setValue(Simulator.StatWindow.getInstance().simViews) : this._simViews.setValue(parseInt(localStorage.simViews, 10)));
        this._simViews.addListener("changeValue", this._onSimViewsChanged, this);
        b.add(this._simViews);
        g.add(b);
        b = (new qx.ui.container.Composite(new qx.ui.layout.HBox(5))).set({marginTop:10});
        b.setThemedFont("bold");
        f = new qx.ui.basic.Label("Hide Sections (on Startup):");
        b.add(f);
        g.add(b);
        b = new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
        this._hideHealthCB = new qx.ui.form.CheckBox("Health");
        this._hideRepairCB = new qx.ui.form.CheckBox("Repair");
        this._hideLootCB = new qx.ui.form.CheckBox("Loot");
        this._hideHealthCB.addListener("changeValue", this._onHideEHChange, this);
        this._hideRepairCB.addListener("changeValue", this._onHideRTChange, this);
        this._hideLootCB.addListener("changeValue", this._onHideLootChange, this);
        void 0 !== localStorage.hideHealth && ("yes" == localStorage.hideHealth ? this._hideHealthCB.setValue(!0) : this._hideHealthCB.setValue(!1));
        void 0 !== localStorage.hideRepair && ("yes" == localStorage.hideRepair ? this._hideRepairCB.setValue(!0) : this._hideRepairCB.setValue(!1));
        void 0 !== localStorage.hideLoot && ("yes" == localStorage.hideLoot ? this._hideLootCB.setValue(!0) : this._hideLootCB.setValue(!1));
        b.add(this._hideHealthCB);
        b.add(this._hideRepairCB);
        b.add(this._hideLootCB);
        g.add(b);
        b = (new qx.ui.container.Composite(new qx.ui.layout.HBox(5))).set({marginTop:10});
        f = (new qx.ui.basic.Label("Set Stat Window Position:")).set({alignY:"middle"});
        f.setFont("bold");
        k = (new qx.ui.form.Button("Set")).set({allowGrowX:!1, allowGrowY:!1, height:20});
        k.addListener("click", this._onSetStatWindowPositionChange, this);
        b.add(f);
        b.add(k);
        g.add(b);
        d.add(e);
        d.add(g);
        this.add(d);
      }, destruct:function() {
      }, members:{_buttonSizeCB:null, _buttonLocCB:null, _buttonLoc2CB:null, _disableRTBtnCB:null, _disableCmtBtnCB:null, _autoOpenCB:null, _autoSimulateCB:null, _simSpeedGroup:null, _repairSecGroup:null, _EnemyHealthSecGroup:null, _simViews:null, _hideHealthCB:null, _hideRepairCB:null, _hideLootCB:null, _ArmyUnitTooltip:null, _onButtonSizeChange:function() {
        try {
          1 == this._buttonSizeCB.getValue() ? localStorage.isBtnNorm = "yes" : localStorage.isBtnNorm = "no", this.setButtonSize();
        } catch (b) {
          console.log("Error Button Size Change: " + b.toString());
        }
      }, _onButtonLocChange:function() {
        try {
          1 == this._buttonLocCB.getValue() ? localStorage.isBtnRight = "yes" : localStorage.isBtnRight = "no", this.setButtonLoc();
        } catch (b) {
          console.log("Error Button Location Change: " + b.toString());
        }
      }, _onButtonLocChange2:function() {
        try {
          1 == this._buttonLoc2CB.getValue() ? localStorage.isBtnCmd = "yes" : localStorage.isBtnCmd = "no", this.setButtonLoc2();
        } catch (b) {
          console.log("Error Button Location Change: " + b.toString());
        }
      }, _onDisableRTBtnChange:function() {
        try {
          var b = this._disableRTBtnCB.getValue();
          localStorage.isRTBtnDisabled = 1 == b ? "yes" : "no";
          this.setRTBtn(b);
        } catch (d) {
          console.log("Error Disable RT Button Change: " + d.toString());
        }
      }, _onDisableCmtBtnChange:function() {
        try {
          var b = this._disableCmtBtnCB.getValue();
          localStorage.isCmtBtnDisabled = 1 == b ? "yes" : "no";
          this.setCmtBtn(b);
        } catch (d) {
          console.log("Error Disable Cmt Button Change: " + d.toString());
        }
      }, _onEnemyHealthSelectionChange:function(b) {
        try {
          var d = b.getData()[0].getLabel();
          localStorage.getEHSelection = "HP abs" == d ? "hp" : "HP rel" == d ? "hp rel" : "hp";
        } catch (e) {
          console.log("Error Enemy Health Section Selection Change: " + e.toString());
        }
      }, _onRepairSelectionChange:function(b) {
        try {
          var d = b.getData()[0].getLabel();
          localStorage.getRTSelection = "RT" == d ? "rt" : "HP abs" == d ? "hp" : "HP rel" == d ? "hp rel" : "C" == d ? "cry" : "rt";
        } catch (e) {
          console.log("Error Repair Section Selection Change: " + e.toString());
        }
      }, _onAutoOpenStatsChange:function() {
        try {
          0 == this._autoOpenCB.getValue() ? localStorage.autoOpenStat = "no" : localStorage.autoOpenStat = "yes";
        } catch (b) {
          console.log("Error Auto Open Stats Change: " + b.toString());
        }
      }, _onArmyUnitTooltipChange:function() {
        try {
          0 == this._ArmyUnitTooltip.getValue() ? localStorage.ArmyUnitTooltipDisabled = "no" : localStorage.ArmyUnitTooltipDisabled = "yes";
        } catch (b) {
          console.log("Error Army Unit Tooltip Change: " + b.toString());
        }
      }, _onAutoSimulateChange:function() {
        try {
          0 == this._autoSimulateCB.getValue() ? (this._simSpeedGroup.setEnabled(!1), localStorage.autoSimulate = "no") : (this._simSpeedGroup.setEnabled(!0), localStorage.autoSimulate = "yes");
        } catch (b) {
          console.log("Error Auto Simulate Change: " + b.toString());
        }
      }, _onSimSpeedChange:function(b) {
        try {
          var d = b.getData()[0].getLabel();
          localStorage.simulateSpeed = "x1" == d ? "1" : "x2" == d ? "2" : "4";
        } catch (e) {
          console.log("Error Sim Speed Change: " + e.toString());
        }
      }, _onSimViewsChanged:function() {
        try {
          var b = parseInt(this._simViews.getValue(), 10);
          if (!isNaN(b) && 0 < b) {
            localStorage.simViews = b.toString();
            Simulator.StatWindow.getInstance().simViews = b;
            for (var d = Simulator.StatWindow.getInstance().sim.length - 1;0 <= d;d--) {
              d > b - 1 && (Simulator.StatWindow.getInstance().Battle.remove(Simulator.StatWindow.getInstance().sim[d].Label.Battle.container), Simulator.StatWindow.getInstance().EnemyHealth.remove(Simulator.StatWindow.getInstance().sim[d].Label.EnemyHealth.container), Simulator.StatWindow.getInstance().Repair.remove(Simulator.StatWindow.getInstance().sim[d].Label.Repair.container), Simulator.StatWindow.getInstance().Loot.remove(Simulator.StatWindow.getInstance().sim[d].Label.Loot.container), Simulator.StatWindow.getInstance().sim.pop())
              ;
            }
            for (d = 0;d < b;d++) {
              d == Simulator.StatWindow.getInstance().sim.length && (Simulator.StatWindow.getInstance().sim.push(new (Simulator.StatWindow.getInstance().Simulation)(d)), Simulator.StatWindow.getInstance().Battle.add(Simulator.StatWindow.getInstance().sim[d].Label.Battle.container, {flex:1}), Simulator.StatWindow.getInstance().EnemyHealth.add(Simulator.StatWindow.getInstance().sim[d].Label.EnemyHealth.container, {flex:1}), Simulator.StatWindow.getInstance().Repair.add(Simulator.StatWindow.getInstance().sim[d].Label.Repair.container, 
              {flex:1}), Simulator.StatWindow.getInstance().Loot.add(Simulator.StatWindow.getInstance().sim[d].Label.Loot.container, {flex:1}), Simulator.StatWindow.getInstance().sim[d].Select(Simulator.StatWindow.getInstance().simSelected));
            }
            if (b - 1 < Simulator.StatWindow.getInstance().simSelected) {
              for (d = Simulator.StatWindow.getInstance().simSelected = 0;d < Simulator.StatWindow.getInstance().sim.length;d++) {
                Simulator.StatWindow.getInstance().sim[d].Select(0);
              }
            }
          }
        } catch (e) {
          console.log("Error Simulation Views Change: " + e.toString());
        }
      }, _onHideEHChange:function() {
        try {
          1 == this._hideHealthCB.getValue() ? localStorage.hideHealth = "yes" : localStorage.hideHealth = "no";
        } catch (b) {
          console.log("Error Hide Enemy Base Health Change: " + b.toString());
        }
      }, _onHideRTChange:function() {
        try {
          1 == this._hideRepairCB.getValue() ? localStorage.hideRepair = "yes" : localStorage.hideRepair = "no";
        } catch (b) {
          console.log("Error Hide Repair Times Change: " + b.toString());
        }
      }, _onHideLootChange:function() {
        try {
          1 == this._hideLootCB.getValue() ? localStorage.hideLoot = "yes" : localStorage.hideLoot = "no";
        } catch (b) {
          console.log("Error Hide Loot Change: " + b.toString());
        }
      }, _onSetStatWindowPositionChange:function() {
        try {
          Simulator.StatWindow.getInstance().getLayoutProperties(), localStorage.statWindowPosRight = 500, localStorage.statWindowPosTop = 500;
        } catch (b) {
          console.log("Error Stat Window Position Change: " + b.toString());
        }
      }, setRTBtn:function(b) {
        1 == b ? Simulator.getInstance().unlockRTBtn.hide() : Simulator.getInstance().unlockRTBtn.show();
      }, setCmtBtn:function(b) {
        1 == b ? Simulator.getInstance().unlockCmtBtn.hide() : Simulator.getInstance().unlockCmtBtn.show();
      }, setButtonLoc:function() {
        try {
          1 == this._buttonLocCB.getValue() ? (a = null, Simulator.getInstance().playArea.add(Simulator.getInstance().statBtn, {left:a, right:30, bottom:389}), Simulator.getInstance().playArea.add(Simulator.getInstance().optionBtn, {left:a, right:3, bottom:414}), Simulator.getInstance().playArea.add(Simulator.getInstance().layoutBtn, {left:a, right:3, bottom:389}), Simulator.getInstance().playArea.add(Simulator.getInstance().shiftUpBtn, {left:a, right:19, bottom:219.2}), Simulator.getInstance().playArea.add(Simulator.getInstance().shiftDownBtn, 
          {left:a, right:19, bottom:192.9}), Simulator.getInstance().playArea.add(Simulator.getInstance().shiftLeftBtn, {left:a, right:36.5, bottom:206}), Simulator.getInstance().playArea.add(Simulator.getInstance().shiftRightBtn, {left:a, right:5, bottom:206}), Simulator.getInstance().playArea.add(Simulator.getInstance().disableAllUnitsBtn, {left:a, right:30, bottom:364}), Simulator.getInstance().playArea.add(Simulator.getInstance().mirrorBtnH, {left:a, right:3, bottom:289.5}), Simulator.getInstance().playArea.add(Simulator.getInstance().mirrorBtnV, 
          {left:a, right:30, bottom:289.5}), Simulator.getInstance().playArea.add(Simulator.getInstance().armyUndoBtn, {left:a, right:30, bottom:314.5}), Simulator.getInstance().playArea.add(Simulator.getInstance().quickSaveBtn, {left:a, right:3, bottom:314.5}), Simulator.getInstance().playArea.add(Simulator.getInstance().mirrorBtnC, {left:a, right:3, bottom:239.5}), Simulator.getInstance().mirrorBtnC.getChildControl("icon").set({width:19, height:23, scale:!0}), Simulator.getInstance().playArea.add(Simulator.getInstance().mirrorBtnK, 
          {left:a, right:18.5, bottom:264.5}), Simulator.getInstance().mirrorBtnK.getChildControl("icon").set({width:19, height:23, scale:!0}), Simulator.getInstance().playArea.add(Simulator.getInstance().mirrorBtnU, {left:a, right:35, bottom:239.5}), Simulator.getInstance().mirrorBtnU.getChildControl("icon").set({width:19, height:23, scale:!0}), Simulator.getInstance().playArea.add(Simulator.getInstance().ainfBtn, {left:a, right:3, bottom:364}), Simulator.getInstance().ainfBtn.set({width:25, height:25}), 
          Simulator.getInstance().ainfBtn.getChildControl("icon").set({width:15, height:15, scale:!0}), Simulator.getInstance().playArea.add(Simulator.getInstance().avehBtn, {left:a, right:30, bottom:339.5}), Simulator.getInstance().avehBtn.set({width:25, height:25}), Simulator.getInstance().avehBtn.getChildControl("icon").set({width:15, height:15, scale:!0}), Simulator.getInstance().playArea.add(Simulator.getInstance().aairBtn, {left:a, right:3, bottom:339.5}), Simulator.getInstance().aairBtn.set({width:25, 
          height:25}), Simulator.getInstance().aairBtn.getChildControl("icon").set({width:15, height:15, scale:!0})) : (c = null, Simulator.getInstance().playArea.add(Simulator.getInstance().simBtn, {right:c, left:3, bottom:136}), Simulator.getInstance().playArea.add(Simulator.getInstance().statBtn, {right:c, left:30, bottom:389}), Simulator.getInstance().playArea.add(Simulator.getInstance().optionBtn, {right:c, left:3, bottom:414}), Simulator.getInstance().playArea.add(Simulator.getInstance().layoutBtn, 
          {right:c, left:3, bottom:389}), Simulator.getInstance().playArea.add(Simulator.getInstance().shiftUpBtn, {right:c, left:19, bottom:219.2}), Simulator.getInstance().playArea.add(Simulator.getInstance().shiftDownBtn, {right:c, left:19, bottom:192.9}), Simulator.getInstance().playArea.add(Simulator.getInstance().shiftLeftBtn, {right:c, left:5, bottom:206}), Simulator.getInstance().playArea.add(Simulator.getInstance().shiftRightBtn, {right:c, left:35.8, bottom:206}), Simulator.getInstance().playArea.add(Simulator.getInstance().disableAllUnitsBtn, 
          {right:c, left:30, bottom:364}), Simulator.getInstance().playArea.add(Simulator.getInstance().mirrorBtnH, {right:c, left:3, bottom:289.5}), Simulator.getInstance().playArea.add(Simulator.getInstance().mirrorBtnV, {right:c, left:30, bottom:289.5}), Simulator.getInstance().playArea.add(Simulator.getInstance().armyUndoBtn, {right:c, left:30, bottom:314.5}), Simulator.getInstance().playArea.add(Simulator.getInstance().quickSaveBtn, {right:c, left:3, bottom:314.5}), Simulator.getInstance().playArea.add(Simulator.getInstance().ainfBtn, 
          {right:c, left:3, bottom:364}), Simulator.getInstance().ainfBtn.set({width:25, height:25}), Simulator.getInstance().ainfBtn.getChildControl("icon").set({width:15, height:15, scale:!0}), Simulator.getInstance().playArea.add(Simulator.getInstance().avehBtn, {right:c, left:30, bottom:339.5}), Simulator.getInstance().avehBtn.set({width:25, height:25}), Simulator.getInstance().avehBtn.getChildControl("icon").set({width:15, height:15, scale:!0}), Simulator.getInstance().playArea.add(Simulator.getInstance().aairBtn, 
          {right:c, left:3, bottom:339.5}), Simulator.getInstance().aairBtn.set({width:25, height:25}), Simulator.getInstance().aairBtn.getChildControl("icon").set({width:15, height:15, scale:!0}), Simulator.getInstance().playArea.add(Simulator.getInstance().mirrorBtnC, {right:c, left:3, bottom:239.5}), Simulator.getInstance().mirrorBtnC.getChildControl("icon").set({width:19, height:23, scale:!0}), Simulator.getInstance().playArea.add(Simulator.getInstance().mirrorBtnK, {right:c, left:18.5, bottom:264.5}), 
          Simulator.getInstance().mirrorBtnK.getChildControl("icon").set({width:19, height:23, scale:!0}), Simulator.getInstance().playArea.add(Simulator.getInstance().mirrorBtnU, {right:c, left:35, bottom:239.5}), Simulator.getInstance().mirrorBtnU.getChildControl("icon").set({width:19, height:23, scale:!0}));
        } catch (b) {
          console.log("Error Setting Button Location: " + b.toString());
        }
      }, setButtonLoc2:function() {
        try {
          1 == this._buttonLoc2CB.getValue() ? (a = null, Simulator.getInstance().playArea.add(Simulator.getInstance().simBtn, {left:a, right:3, bottom:136}), Simulator.getInstance().playArea.add(Simulator.getInstance().statBtn, {left:a, right:30, bottom:389}), Simulator.getInstance().playArea.add(Simulator.getInstance().optionBtn, {left:a, right:3, bottom:414}), Simulator.getInstance().playArea.add(Simulator.getInstance().layoutBtn, {left:a, right:3, bottom:389}), Simulator.getInstance().playArea.add(Simulator.getInstance().shiftUpBtn, 
          {left:a, right:19, bottom:219.2}), Simulator.getInstance().playArea.add(Simulator.getInstance().shiftDownBtn, {left:a, right:19, bottom:192.9}), Simulator.getInstance().playArea.add(Simulator.getInstance().shiftLeftBtn, {left:a, right:36.5, bottom:206}), Simulator.getInstance().playArea.add(Simulator.getInstance().shiftRightBtn, {left:a, right:5, bottom:206}), Simulator.getInstance().playArea.add(Simulator.getInstance().disableAllUnitsBtn, {left:a, right:30, bottom:364}), Simulator.getInstance().playArea.add(Simulator.getInstance().mirrorBtnH, 
          {left:a, right:3, bottom:289.5}), Simulator.getInstance().playArea.add(Simulator.getInstance().mirrorBtnV, {left:a, right:30, bottom:289.5}), Simulator.getInstance().playArea.add(Simulator.getInstance().armyUndoBtn, {left:a, right:30, bottom:314.5}), Simulator.getInstance().playArea.add(Simulator.getInstance().quickSaveBtn, {left:a, right:3, bottom:314.5}), Simulator.getInstance().playArea.add(Simulator.getInstance().ainfBtn, {left:a, right:3, bottom:364}), Simulator.getInstance().ainfBtn.set({width:25, 
          height:25}), Simulator.getInstance().ainfBtn.getChildControl("icon").set({width:15, height:15, scale:!0}), Simulator.getInstance().playArea.add(Simulator.getInstance().avehBtn, {left:a, right:30, bottom:339.5}), Simulator.getInstance().avehBtn.set({width:25, height:25}), Simulator.getInstance().avehBtn.getChildControl("icon").set({width:15, height:15, scale:!0}), Simulator.getInstance().playArea.add(Simulator.getInstance().aairBtn, {left:a, right:3, bottom:339.5}), Simulator.getInstance().aairBtn.set({width:25, 
          height:25}), Simulator.getInstance().aairBtn.getChildControl("icon").set({width:15, height:15, scale:!0}), Simulator.getInstance().playArea.add(Simulator.getInstance().mirrorBtnC, {left:a, right:3, bottom:239.5}), Simulator.getInstance().mirrorBtnC.getChildControl("icon").set({width:19, height:23, scale:!0}), Simulator.getInstance().playArea.add(Simulator.getInstance().mirrorBtnK, {left:a, right:18.5, bottom:264.5}), Simulator.getInstance().mirrorBtnK.getChildControl("icon").set({width:19, 
          height:23, scale:!0}), Simulator.getInstance().playArea.add(Simulator.getInstance().mirrorBtnU, {left:a, right:35, bottom:239.5}), Simulator.getInstance().mirrorBtnU.getChildControl("icon").set({width:19, height:23, scale:!0})) : (a = null, Simulator.getInstance().armyBar.add(Simulator.getInstance().quickSaveBtn, {left:82, right:a, bottom:45}), Simulator.getInstance().playArea.add(Simulator.getInstance().statBtn, {left:a, right:3, bottom:181}), Simulator.getInstance().playArea.add(Simulator.getInstance().optionBtn, 
          {left:a, right:3, bottom:134}), Simulator.getInstance().armyBar.add(Simulator.getInstance().layoutBtn, {left:82, right:a, bottom:7}), Simulator.getInstance().armyBar.add(Simulator.getInstance().simBtn, {left:a, right:60, bottom:13}), Simulator.getInstance().armyBar.add(Simulator.getInstance().armyUndoBtn, {left:82, right:a, bottom:121.5}), Simulator.getInstance().armyBar.add(Simulator.getInstance().disableAllUnitsBtn, {left:82, right:a, bottom:83}), Simulator.getInstance().armyBar.add(Simulator.getInstance().shiftUpBtn, 
          {left:a, right:78.5, bottom:134}), Simulator.getInstance().armyBar.add(Simulator.getInstance().shiftDownBtn, {left:a, right:78.5, bottom:108}), Simulator.getInstance().armyBar.add(Simulator.getInstance().shiftLeftBtn, {left:a, right:95.7, bottom:121}), Simulator.getInstance().armyBar.add(Simulator.getInstance().shiftRightBtn, {left:a, right:64.5, bottom:121}), Simulator.getInstance().armyBar.add(Simulator.getInstance().mirrorBtnH, {left:a, right:63, bottom:83}), Simulator.getInstance().armyBar.add(Simulator.getInstance().mirrorBtnV, 
          {left:a, right:90, bottom:83}), Simulator.getInstance().armyBar.add(Simulator.getInstance().ainfBtn, {right:a, left:61, bottom:106}), Simulator.getInstance().ainfBtn.set({width:12, height:12}), Simulator.getInstance().armyBar.add(Simulator.getInstance().avehBtn, {right:a, left:61, bottom:68}), Simulator.getInstance().avehBtn.set({width:12, height:12}), Simulator.getInstance().armyBar.add(Simulator.getInstance().aairBtn, {right:a, left:61, bottom:30}), Simulator.getInstance().aairBtn.set({width:12, 
          height:12}), Simulator.getInstance().armyBar.add(Simulator.getInstance().mirrorBtnC, {left:32, right:a, bottom:29}), Simulator.getInstance().mirrorBtnC.getChildControl("icon").set({width:12, height:18, scale:!0}), Simulator.getInstance().armyBar.add(Simulator.getInstance().mirrorBtnK, {left:32, right:a, bottom:105}), Simulator.getInstance().mirrorBtnK.getChildControl("icon").set({width:12, height:18, scale:!0}), Simulator.getInstance().armyBar.add(Simulator.getInstance().mirrorBtnU, {left:32, 
          right:a, bottom:67}), Simulator.getInstance().mirrorBtnU.getChildControl("icon").set({width:12, height:18, scale:!0}));
        } catch (b) {
          console.log("Error Setting Button Location: " + b.toString());
        }
      }, setButtonSize:function() {
        try {
          value = this._buttonSizeCB.getValue(), 1 == value ? (Simulator.getInstance().simBtn.setLabel("S", "https://www.openmerchantaccount.com/img/simbtnlarge.png"), Simulator.getInstance().simBtn.getChildControl("icon").set({width:45, height:45, scale:!0}), Simulator.getInstance().simBtn.setWidth(45)) : (Simulator.getInstance().simBtn.setLabel("S", "https://www.openmerchantaccount.com/img/simbtnlarge.png"), Simulator.getInstance().simBtn.getChildControl("icon").set({width:72, height:46, scale:!0}), 
          Simulator.getInstance().simBtn.setWidth(72)), Simulator.getInstance().statBtn.setLabel("", "https://www.openmerchantaccount.com/img/stats.png"), Simulator.getInstance().statBtn.setWidth(25), Simulator.getInstance().statBtn.setHeight(25), Simulator.getInstance().optionBtn.setLabel("Options"), Simulator.getInstance().optionBtn.setWidth(45), Simulator.getInstance().layoutBtn.setLabel(""), Simulator.getInstance().layoutBtn.setWidth(25), Simulator.getInstance().layoutBtn.setHeight(25);
        } catch (b) {
          console.log("Error Setting Button Size: " + b.toString());
        }
      }}});
      qx.Class.define("Simulator.LayoutWindow", {type:"singleton", extend:webfrontend.gui.CustomWindow, construct:function() {
        this.base(arguments);
        this.setLayout(new qx.ui.layout.VBox);
        this.set({width:200, caption:"YOUR PRETTY LAYOUTS", padding:2, allowMaximize:!1, showMaximize:!1, allowMinimize:!1, showMinimize:!1});
        var b = (new qx.ui.container.Composite(new qx.ui.layout.VBox(5))).set({decorator:"pane-light-opaque"}), d = (new qx.ui.basic.Label("SAVED FORMATIONS")).set({alignX:"center", alignY:"top", font:"font_size_14_bold"});
        b.add(d);
        this.add(b);
        this.layoutList = new qx.ui.form.List;
        this.layoutList.set({selectionMode:"one", height:100, width:150, margin:5});
        this.add(this.layoutList);
        b = new qx.ui.container.Composite;
        d = new qx.ui.layout.HBox(5, "center");
        b.setLayout(d);
        var d = new qx.ui.form.Button("Load"), e = new qx.ui.form.Button("Delete");
        d.set({height:15, width:70, alignX:"center"});
        d.addListener("click", this.loadLayout, this);
        e.set({height:15, width:70, alignX:"center"});
        e.addListener("click", this.deleteLayout, this);
        b.add(d);
        b.add(e);
        this.add(b);
        b = (new qx.ui.container.Composite((new qx.ui.layout.HBox).set({spacing:10}))).set({marginTop:20, marginLeft:5});
        this.layoutTextBox = (new qx.ui.form.TextField("")).set({width:75, maxLength:15});
        d = new qx.ui.form.Button("Save");
        d.set({height:10, width:70, alignX:"center"});
        d.addListener("click", this.saveNewLayout, this);
        b.add(this.layoutTextBox);
        b.add(d);
        this.add(b);
        b = (new qx.ui.container.Composite((new qx.ui.layout.HBox).set({spacing:10}))).set({marginTop:10, marginLeft:5});
        this.persistentCheck = new qx.ui.form.CheckBox("Make Persistent");
        this.persistentCheck.setTextColor("white");
        this.persistentCheck.setFont("bold");
        this.persistentCheck.setToolTipText("If checked, formation will be saved and can be used by this city in any other city");
        b.add(this.persistentCheck);
        this.add(b);
        b = (new qx.ui.container.Composite(new qx.ui.layout.HBox)).set({marginTop:5, marginLeft:5});
        d = (new qx.ui.basic.Label("")).set({alignX:"center", alignY:"top"});
        d.setValue(" <align='justify'><b>If formation does not change on load, try moving one unit first, then try again.</b></p>");
        d.set({rich:!0, wrap:!0, width:165, textColor:"white"});
        b.add(d);
        this.add(b);
        b = (new qx.ui.container.Composite(new qx.ui.layout.VBox)).set({alignX:"center", marginTop:5, marginLeft:5, allowGrowX:!1});
        d = (new qx.ui.form.Button("Clear All")).set({alignX:"center", width:70});
        d.addListener("click", this.clearAllLayouts, this);
        b.add(d);
        this.add(b);
        this.layoutsArray = [];
      }, destruct:function() {
      }, members:{layoutList:null, layoutTextBox:null, layoutsArray:null, persistentCheck:null, saveNewLayout:function(b) {
        try {
          console.log("Saving Layout");
          if (void 0 !== b && 1 == b || "" == this.layoutTextBox.getValue()) {
            var d = new Date, e = d.getDate(), g = d.getMonth() + 1, f = 10 > d.getHours() ? "0" + d.getHours() : d.getHours(), k = 10 > d.getMinutes() ? "0" + d.getMinutes() : d.getMinutes(), l = 10 > d.getSeconds() ? "0" + d.getSeconds() : d.getSeconds(), h = g + "/" + e + "@" + f + ":" + k + ":" + l
          } else {
            h = this.layoutTextBox.getValue();
          }
          var m = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId(), q = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId() + "." + m + "." + h, n = this.layoutList.getChildren();
          for (b = 0;b < n.length;b++) {
            if (thisItem = n[b].getModel(), thisItem == q) {
              alert("Save Failed: Duplicate Name");
              return;
            }
          }
          var p = Simulator.getInstance().getCityPreArmyUnits().get_ArmyUnits().l, p = this.prepareLayout(p), n = {}, n = 1 == this.persistentCheck.getValue() ? {id:q, label:h, formation:p, pers:"yes"} : {id:q, label:h, formation:p, pers:"no"};
          this.layoutsArray.push(n);
          this.layoutList.add(new qx.ui.form.ListItem(n.label, null, n.id));
          this.layoutTextBox.setValue("");
          Simulator.getInstance().quickSaveBtn.setLabel("?");
          setTimeout(function() {
            Simulator.getInstance().quickSaveBtn.setLabel("QS");
          }, 2E3);
          this.updateStorage();
        } catch (r) {
          console.log("Error Saving Layout"), console.log(r);
        }
      }, loadLayout:function() {
        try {
          console.log("Loading Layout");
          ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId();
          var b = this.layoutList.getSelection()[0].getModel(), d;
          for (d in this.layoutsArray) {
            if (this.layoutsArray[d].id == b) {
              Simulator.getInstance().restoreFormation(this.layoutsArray[d].formation);
              break;
            }
          }
        } catch (e) {
          console.log("Error Loading Layout"), console.log(e);
        }
      }, deleteLayout:function() {
        try {
          if (console.log("Deleting Layout"), confirm("Are you sure you want to delete this layout?")) {
            for (var b in this.layoutsArray) {
              this.layoutsArray[b].id == this.layoutList.getSelection()[0].getModel() && (this.layoutsArray.splice(b, 1), this.updateStorage());
            }
            this.updateLayoutList();
          }
        } catch (d) {
          console.log("Error Deleting Layout"), console.log(d);
        }
      }, updateStorage:function() {
        try {
          console.log("Updating Storage"), localStorage.savedFormations = JSON.stringify(this.layoutsArray);
        } catch (b) {
          console.log("Error updating localStorage"), console.log(b);
        }
      }, updateLayoutList:function() {
        try {
          console.log("Updating Layout List");
          var b = localStorage.savedFormations;
          void 0 !== b && (this.layoutsArray = JSON.parse(b));
          this.layoutList.removeAll();
          var d = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId(), e = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId(), b = e + "." + d, g;
          for (g in this.layoutsArray) {
            var f = this.layoutsArray[g].label, d = b + "." + f, k = this.layoutsArray[g].pers, l = this.layoutsArray[g].id.match(e.toString());
            (d == this.layoutsArray[g].id || void 0 !== k && "yes" == k && null != l) && this.layoutList.add(new qx.ui.form.ListItem(f, null, this.layoutsArray[g].id));
          }
        } catch (h) {
          console.log("Error Updating Layout List"), console.log(h);
        }
      }, prepareLayout:function(b) {
        try {
          console.log("Preparing Layout for Saving");
          saved_units = [];
          for (var d = 0;d < b.length;d++) {
            var e = b[d], g = {};
            g.x = e.get_CoordX();
            g.y = e.get_CoordY();
            g.id = e.get_Id();
            g.enabled = e.get_Enabled();
            saved_units.push(g);
          }
          return saved_units;
        } catch (f) {
          console.log("Error Preparing Unit Layout"), console.log(f);
        }
      }, clearAllLayouts:function() {
        try {
          console.log("Clearing All Layouts"), confirm("Clicking OK will delete all of your saved layouts from every base!") ? (localStorage.removeItem("savedFormations"), this.layoutsArray = [], alert("All saved layouts have been deleted."), this.updateLayoutList()) : alert("No layouts were deleted.");
        } catch (b) {
          console.log("Error Clearing All Layouts"), console.log(b);
        }
      }}});
    }
    function C(b, d) {
      setTimeout(function() {
        try {
          if (console.log("View Changed"), Simulator.OptionWindow.getInstance().close(), Simulator.LayoutWindow.getInstance().close(), d != ClientLib.Vis.Mode.CombatSetup && d != ClientLib.Vis.Mode.Battleground ? (Simulator.StatWindow.getInstance().close(), Simulator.getInstance().armyTempFormations = [], Simulator.getInstance().armyTempIdx = 0, Simulator.getInstance().armyUndoBtn.setEnabled(!1), Simulator.getInstance().isSimulation = !1) : d == ClientLib.Vis.Mode.CombatSetup && (void 0 !== localStorage.autoOpenStat ? 
          "yes" == localStorage.autoOpenStat ? Simulator.StatWindow.getInstance().open() : Simulator.StatWindow.getInstance().close() : (Simulator.StatWindow.getInstance().open(), localStorage.autoOpenStat = "yes"), localStorage.allUnitsDisabled = "no", 0 == Simulator.getInstance().isSimulation ? setTimeout(function() {
            Simulator.StatWindow.getInstance().calcResources();
          }, 2E3) : Simulator.getInstance().isSimulation = !1, b != ClientLib.Vis.Mode.Battleground && Simulator.getInstance().saveTempFormation()), null != ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity()) {
            var e = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity().get_Name(), g = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity().get_Name();
            d == ClientLib.Vis.Mode.Battleground || e == g ? (Simulator.getInstance().simBtn.hide(), Simulator.getInstance().shiftUpBtn.hide(), Simulator.getInstance().shiftDownBtn.hide(), Simulator.getInstance().shiftLeftBtn.hide(), Simulator.getInstance().shiftRightBtn.hide(), Simulator.getInstance().disableAllUnitsBtn.hide(), Simulator.getInstance().mirrorBtnH.hide(), Simulator.getInstance().mirrorBtnV.hide(), Simulator.getInstance().mirrorBtnC.hide(), Simulator.getInstance().mirrorBtnK.hide(), 
            Simulator.getInstance().mirrorBtnU.hide(), Simulator.getInstance().layoutBtn.hide(), Simulator.getInstance().optionBtn.hide(), Simulator.getInstance().statBtn.hide(), Simulator.getInstance().quickSaveBtn.hide(), Simulator.getInstance().armyUndoBtn.hide(), Simulator.getInstance().ainfBtn.hide(), Simulator.getInstance().avehBtn.hide(), Simulator.getInstance().aairBtn.hide()) : e != g && (Simulator.getInstance().simBtn.show(), Simulator.getInstance().shiftUpBtn.show(), Simulator.getInstance().shiftDownBtn.show(), 
            Simulator.getInstance().shiftLeftBtn.show(), Simulator.getInstance().shiftRightBtn.show(), Simulator.getInstance().mirrorBtnH.show(), Simulator.getInstance().mirrorBtnV.show(), Simulator.getInstance().mirrorBtnC.show(), Simulator.getInstance().mirrorBtnK.show(), Simulator.getInstance().mirrorBtnU.show(), Simulator.getInstance().armyUndoBtn.show(), Simulator.getInstance().layoutBtn.show(), Simulator.getInstance().optionBtn.show(), Simulator.getInstance().statBtn.show(), Simulator.getInstance().quickSaveBtn.show(), 
            Simulator.getInstance().disableAllUnitsBtn.show(), Simulator.getInstance().ainfBtn.show(), Simulator.getInstance().avehBtn.show(), Simulator.getInstance().aairBtn.show());
          }
        } catch (f) {
          console.log("Error closing windows or hiding buttons on view change"), console.log(f.toString());
        }
      }, 500);
    }
    function x() {
      try {
        if ("undefined" !== typeof qx && "undefined" !== typeof qx.core && "undefined" !== typeof qx.core.Init && "undefined" !== typeof ClientLib && "undefined" !== typeof phe) {
          if (1 == qx.core.Init.getApplication().initDone) {
            try {
              console.log("CENTER DRIVEN - Tiberium Alliances Combat Simulator: Loading");
              v();
              if (392583 <= PerforceChangelist) {
                var b = "" + ClientLib.Data.Cities.prototype.get_CurrentCity, d;
                for (d in ClientLib.Data.Cities.prototype) {
                  if (ClientLib.Data.Cities.prototype.hasOwnProperty(d) && "function" == typeof ClientLib.Data.Cities.prototype[d] && -1 < ("" + ClientLib.Data.Cities.prototype[d]).indexOf(b) && 6 == d.length) {
                    b = d;
                    break;
                  }
                }
                var e = "" + ClientLib.Data.Cities.prototype.get_CurrentOwnCity, g;
                for (g in ClientLib.Data.Cities.prototype) {
                  if (ClientLib.Data.Cities.prototype.hasOwnProperty(g) && "function" == typeof ClientLib.Data.Cities.prototype[g] && -1 < ("" + ClientLib.Data.Cities.prototype[g]).indexOf(e) && 6 == g.length) {
                    e = g;
                    break;
                  }
                }
                var f = "" + ClientLib.API.Util.GetUnitRepairCosts, f = f.replace(b, e), k = f.substring(f.indexOf("{") + 1, f.lastIndexOf("}")), l = Function("a,b,c", k);
                ClientLib.API.Util.GetUnitRepairCosts = l;
              }
              Simulator.getInstance();
              Simulator.StatWindow.getInstance();
              Simulator.OptionWindow.getInstance();
              Simulator.LayoutWindow.getInstance();
              phe.cnc.Util.attachNetEvent(ClientLib.Vis.VisMain.GetInstance(), "ViewModeChange", ClientLib.Vis.ViewModeChange, this, C);
              console.log("CENTER DRIVEN - Tiberium Alliances Combat Simulator: Loaded");
            } catch (h) {
              console.log("CENTER DRIVEN - Tiberium Alliances Combat Simulator initialization error:"), console.log(h);
            }
          } else {
            window.setTimeout(x, 1E3);
          }
        } else {
          window.setTimeout(x, 1E3);
        }
      } catch (h) {
        console.log(h);
      }
    }
    window.setTimeout(x, 1E3);
  }.toString() + ")();";
  v.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(v);
})();(function () {
	var script = document.createElement("script");
	script.innerHTML = "(" + function () {
		function createClasses() {
			qx.Class.define("qx.ui.form.ModelButton", {					//				qx.ui.form.Button with model property
				extend : qx.ui.form.Button,
				include : [qx.ui.form.MModelProperty],
				implement : [qx.ui.form.IModel]
			});
			qx.Class.define("STATS", {									// [singleton]	Main Class
				type : "singleton",
				extend : qx.core.Object,
				construct : function () {
					try {
                        this.base(arguments);
						this.self(arguments).Init();
						
					} catch (e) {
						console.group("CDSIM REAL TIME");
						console.error("Error setting up STATS constructor", e);
						console.groupEnd();
					}
				},
				statics : {
					_Init : [],
					addInit : function (func) {
						this._Init.push(func);
					},
					Init : function () {
						for (var i in this._Init)
							qx.Class.getByName(this._Init[i]).getInstance();
					}
				}
			});
			qx.Class.define("STATS.RES", {								// [static]		Rez
				type : "static",
				statics : {
					getDisplayName : function (ETechName, EFactionType) {
						return ClientLib.Base.Tech.GetTechDisplayNameFromTechId(ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ETechName, EFactionType));
					}
				}
			});
			qx.Class.define("STATS.RES.IMG", {							// [static]		Rez: Images
				type : "static",
				statics : {
					Menu : "https://www.openmerchantaccount.com/img2/cdicon.png",
					Stats : "https://www.openmerchantaccount.com/img/stats.png",
					Stop : "FactionUI/icons/icon_replay_stop_button.png",
					Arrange : {
						Left : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAA+VBMVEUAAABkZGT19fX39/fj4+MVFRXc3NwZGRlLS0sVFRXd3d0LCwvu7u7JycmioqKIiIgkJCSIiIj///9WVlb7+/vW1tbx8fHo6Ohqampubm7MzMx1dXX///+tra0eHh6srKyzs7N6enrNzc309PS7u7v7+/vQ0NC/v7/ExMT7+/tgYGChoaHu7u5bW1vs7OzAwMB0dHSsrKzS0tJ1dXWsrKxFRUUpKSkmJiahoaHAwMCampomJibV1dWJiYm5ubk0NDQ3Nzfp6en///+vr69BQUGTk5NBQUHj4+PX19f+/v7Jycnj4+PR0dHc3NyXl5eMjIz09PSCgoIyMjIoy70QAAAAU3RSTlMADweHhxMFCgIDhwUbAgsODh4UHoeHh4cFCgQUChQeD4cchw6HDw8ehx4vOoc8hzw6PDwKhxQaKB4UGh4ZKCgyHhQoNSgyOSiHNYc8hzU8PDw8EBrmavEAAACkSURBVAjXJYtVFoJQAEQfgoh0iYggIgJSit3dHftfjI/D/M3cO4DBddtxbNc1TY7rqwTQdJH2fZr2vIlgVSsEyImyjKKK0i5jZKmBqHDYXT/3XqcbHpeZQaNQiFIeSMNCEeS25yfkr28SHOb5dFgoUfZvNeuDHwXw6WofvpM4Pq3HtdTADQwjL48b5LBTBGBYYyZYkrQZpRiG0ViWQxCE5yGG/Q+LDRO5PtzwzwAAAABJRU5ErkJggg==",
						Center : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAA51BMVEU6OjpTU1P///9MTEz39/f8/Pz+/v7///9TU1MAAADv7+/7+/uVlZWDg4MvLy/39/fj4+MvLy/9/f3e3t7X19c9PT3U1NStra2ZmZlkZGTo6Oj09PRxcXGVlZXOzs7Ly8t+fn7c3NyZmZnc3NyysrL8/Pyenp6JiYlZWVm/v7/Pz8+7u7vo6Oj4+PiTk5Pj4+PT09Ps7Ozv7+/JycnT09PAwMB+fn7b29t1dXWTk5P////j4+M+Pj5PT0////+kpKSFhYWenp7Kysq1tbX////+/v62trbBwcHf39/CwsLk5ORubm5TU1MeHJAiAAAATXRSTlMCHocFAgoPAw0AhwUNDw8NDR4eh4c7Hjs8O4eHCgoFChkDDxOHhx4eLw+Hhx6HOoeHhzqHOjw8hxQUFBkSGhoaIy8vhy8jHocvh4c8PH2ldZMAAACpSURBVAjXHYzXAkIAFECvvUIUJRWZmYnS3nv8//dEz2cAzhEiSYrNILAsvo8BUMR6L8uxqt4931z2ATjSdZNEZ6e9Sasd8hhQonzN89m80+2mJ69RJeQN1XW29261M/TIA4ya8bPm5UfTxggNMLTZul9kYfGInC1WGeq5k5baV1GUv4ETG7TaF6/o4qDmAIChCPvgI4gkSbuVQTHA4JzR4GlaEAR6MMSZHypxEyTcEZPmAAAAAElFTkSuQmCC",
						Right : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAA9lBMVEXw8PAODg7s7OzW1tbs7OxgYGD9/f0AAABPT08VFRUBAQHU1NTk5OQAAABwcHD9/f38/PxfX1/7+/v9/f3S0tKjo6MRERE/Pz/AwMDp6enIyMh0dHRubm709PTR0dGSkpKmpqZBQUFubm66urro6OjOzs6xsbH19fXd3d3Hx8dBQUGhoaGGhobw8PBWVlb///8AAAB1dXWenp6vr69nZ2cAAAAKCgoiIiIHBwetra1dXV2hoaFnZ2e1tbUpKSmxsbEVFRX39/fPz8+MjIw3Nze6uropKSnY2NjY2Njj4+NkZGTQ0NDe3t6ysrKvr6/R0dGXl5fDw8OkAsOLAAAAUnRSTlMCDoeHBQUKAAIGCQqHFAoPFBSHHg8PHhyHh4c7DQ4UHocPGh4ehyiHhx48OjyHPBoaFIcSCigZFDWHKB41hyiHPCiHMjWHPB4tMjyHhzI8OTw8yAOJWAAAAKdJREFUCNcli1UCgkAABVcBWVBBGglJQULs7u66/2UEfZ/zZgBACzpN6zwvCIJGYRCAQqXFce4pcGaG3aEgQGmWZX2/ma+WGkidwTKD21xen2cUq/PpH7jn7L8jN0WWCACKtcB7RO9YTcL9ckQAlM9nd9or8mIyJDPD8XbqNQmP6/GgnCZosWcgW0U+rEyzmwIcxyHF2JIkimK7TMIfwPqaZeXSkQT8Aiw9E02m3A8KAAAAAElFTkSuQmCC"
					},
					Arrows : {
						Up : "https://www.openmerchantaccount.com/img/shiftu.png",
						Down : "https://www.openmerchantaccount.com/img/shiftd.png",
						Left : "https://www.openmerchantaccount.com/img/shiftl.png",
						Right : "https://www.openmerchantaccount.com/img/shiftr.png"
					},
					Flip : {
						H : "https://www.openmerchantaccount.com/img/mirror.png",
						V : "https://www.openmerchantaccount.com/img/flip.png"
                                        },
					DisableUnit : "https://www.openmerchantaccount.com/img/disableall.png",
					Undo : "https://www.openmerchantaccount.com/img/undo.png",
					Outcome : {
						total_defeat : "FactionUI/icons/icon_reports_total_defeat.png",
						victory : "FactionUI/icons/icon_reports_victory.png",
						total_victory : "FactionUI/icons/icon_reports_total_victory.png"
					},
					Enemy : {
						All : "FactionUI/icons/icon_arsnl_show_all.png",
						Base : "FactionUI/icons/icon_arsnl_base_buildings.png",
						Defense : "FactionUI/icons/icon_def_army_points.png"
					},
					Defense : {
						Infantry : "FactionUI/icons/icon_arsnl_def_squad.png",
						Vehicle : "FactionUI/icons/icon_arsnl_def_vehicle.png",
						Building : "FactionUI/icons/icon_arsnl_def_building.png"
					},
					Offense : {
						Infantry : "https://www.openmerchantaccount.com/img/icon_inf.png",
						Vehicle : "https://www.openmerchantaccount.com/img/icon_tnk.png",
						Aircraft : "https://www.openmerchantaccount.com/img/icon_air.png"
					},
					RepairCharge : {
						Base : "webfrontend/ui/icons/icn_repair_points.png",
						Offense : "webfrontend/ui/icons/icn_repair_off_points.png",
						Infantry : "webfrontend/ui/icons/icon_res_repair_inf.png",
						Vehicle : "webfrontend/ui/icons/icon_res_repair_tnk.png",
						Aircraft : "webfrontend/ui/icons/icon_res_repair_air.png"
					},
					Resource : {
						Tiberium : "webfrontend/ui/common/icn_res_tiberium.png",
						Crystal : "webfrontend/ui/common/icn_res_chrystal.png",
						Credits : "webfrontend/ui/common/icn_res_dollar.png",
						Power : "webfrontend/ui/common/icn_res_power.png",
						ResearchPoints : "webfrontend/ui/common/icn_res_research_mission.png",
						Transfer : "FactionUI/icons/icon_transfer_resource.png"
					},
					Simulate : "https://www.openmerchantaccount.com/img/simbtnsmall.png",
					CNCOpt : "http://cncopt.com/favicon.ico",
                                        one : "https://www.openmerchantaccount.com/img/swap1_2.png",
                                        two : "https://www.openmerchantaccount.com/img/swap2_3.png",
                                        three : "https://www.openmerchantaccount.com/img/swap3_4.png"
				}
			});
			qx.Class.define("STATS.SETTINGS", {							// [static]		Settings
				type : "static",
				statics : {
					__name : null,
					__store : null,
					__upload : null,
					__file : null,
					__reader : null,
					_Init : function () {
						var localStorage = ClientLib.Base.LocalStorage,
							player = ClientLib.Data.MainData.GetInstance().get_Player(),
							server = ClientLib.Data.MainData.GetInstance().get_Server();
						this.__name = "STATS.SETTINGS." + player.get_Id() + "." + server.get_WorldId();
						if (this.__store === null) {
							if (localStorage.get_IsSupported() && localStorage.GetItem(this.__name) !== null)
								this.__store = localStorage.GetItem(this.__name);
							else
								this.__store = {};
						}
						this.__store.$$Player = player.get_Name();
						this.__store.$$Server = server.get_Name();
						this.__store.$$Update = Date.now();
						if (localStorage.get_IsSupported())
							localStorage.SetItem(this.__name, this.__store);
					},
					get : function (prop, init) { //get or initialize a prop
						this._Init();
						if (this.__store[prop] === undefined && init !== undefined) {
							this.__store[prop] = init;
							this._Init();
						}
						return this.__store[prop];
					},
					set : function (prop, value) {
						this._Init();
						this.__store[prop] = value;
						this._Init();
						return value;
					},
					"delete" : function (prop) {
						this._Init();
						delete this.__store[prop];
						this._Init();
						return true;
					},
					reset : function () {
						var player = ClientLib.Data.MainData.GetInstance().get_Player(),
							server = ClientLib.Data.MainData.GetInstance().get_Server();
						this.__name = "STATS.SETTINGS." + player.get_Id() + "." + server.get_WorldId();
						window.localStorage.removeItem(this.__name);
						this.__store = null;
						this.__name = null;
						this._Init();
					},
					save : function () {
						var textFileAsBlob = new Blob([JSON.stringify(this.__store)], {
								type : 'text/plain'
							}),
							downloadLink = document.createElement("a");
						downloadLink.download = "STATS_Backup.json";
						if (window.webkitURL !== undefined)
							downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
						else {
							downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
							downloadLink.style.display = "none";
							document.body.appendChild(downloadLink);
						}
						downloadLink.click();
					},
					load : function () {
						if (this.__upload === null) {
							this.__upload = document.createElement("input");
							this.__upload.type = "file";
							this.__upload.id = "files";
							this.__upload.addEventListener('change', (function (e) {
									var files = e.target.files;
									if (files.length > 0)
										this.__reader.readAsText(files[0], 'UTF-8');
								}).bind(this), false);
							this.__upload.style.display = "none";
							document.body.appendChild(this.__upload);
						}
						if (this.__reader === null) {
							this.__reader = new FileReader();
							this.__reader.addEventListener("load", (function (e) {
									var fileText = e.target.result;
									try {
										var fileObject = JSON.parse(fileText);
										this.reset();
										for (var i in fileObject)
											this.set(i, fileObject[i]);
										alert("Game will reload now.");
										window.location.reload();
									} catch (f) {
										console.group("CDSIM REAL TIME");
										console.error("Error loading file", f);
										console.groupEnd();
									}
								}).bind(this), false);
						}
						this.__upload.click();
					}
				}
			});
			qx.Class.define("STATS.UTIL.Formation", {					// [static]		Utilities for Army Formation
				type : "static",
				statics : {
					GetFormation : function (cityid, ownid) {
						var CityId = ((cityid !== undefined && cityid !== null) ? cityid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId()),
							OwnCity = ((ownid !== undefined && ownid !== null) ? ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(ownid) : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity());
						if (OwnCity !== null)
							return OwnCity.get_CityArmyFormationsManager().GetFormationByTargetBaseId(CityId);
						else
							return null;
					},
					GetUnits : function (cityid, ownid) {
						var formation = this.GetFormation(cityid, ownid);
						if (formation !== null) {
							var units = formation.get_ArmyUnits();
							if (units !== null)
								return units.l;
						}
						return null;
					},
					GetUnitById : function (id, cityid, ownid) {
						var units = this.GetUnits(cityid, ownid);
						if (units !== null)
							for (var i = 0; i < units.length; i++)
								if (units[i].get_Id() == id)
									return units[i];
						return null;
					},
					Get : function (cityid, ownid) {
						/**
						 *	[{
						 *		id: [Number],		// UnitId (internal)
						 *		gid: [Number],		// Garnison Id (internal)
						 *		gs: [Number],		// Garnison State
						 *		i: [Number],		// MdbId
						 *		l: [Number],		// Level
						 *		h: [Number],		// Health
						 *		enabled: [Bool],	// Enabled (internal)
						 *		x: [Number],		// CoordX
						 *		y: [Number],		// CoordY
						 *		t: [Bool]			// IsTransportedCityEntity (internal/todo:kommt weg)
						 *	},{...}]
						 */
						var units = this.GetUnits(cityid, ownid),
							formation = [];
						if (units !== null) {
							for (var i = 0; i < units.length; i++) {
								formation.push({
									id : units[i].get_Id(),
									gid : (units[i].get_IsTransportedCityEntity() ? units[i].get_TransporterCityEntity().get_Id() : (units[i].get_TransportedCityEntity() !== null ? units[i].get_TransportedCityEntity().get_Id() : 0)),
									gs : (units[i].get_IsTransportedCityEntity() ? 2 : (units[i].get_TransportedCityEntity() !== null ? 1 : 0)),
									i : units[i].get_MdbUnitId(),
									l : units[i].get_CurrentLevel(),
									h : Math.ceil(units[i].get_Health()),
									enabled : units[i].get_Enabled(),
									x : units[i].get_CoordX(),
									y : units[i].get_CoordY(),
									t : units[i].get_IsTransportedCityEntity()
								});
							}
							return formation;
						}
						return null;
					},
					Set : function (formation, cityid, ownid) {
						/**
						 *	[{
						 *		id: [Number],		// UnitId
						 *		enabled: [Bool],	// Enabled
						 *		x: [Number],		// CoordX
						 *		y: [Number],		// CoordY
						 *		t: [Bool]			// IsTransportedCityEntity
						 *	},{...}]
						 */
						var CityId = ((cityid !== undefined && cityid !== null) ? cityid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId()),
							OwnId = ((ownid !== undefined && ownid !== null) ? ownid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId()),
							unit,
							target,
							freePos,
							transported = [],
							i,
							targetFormation = this.GetFormation(CityId, OwnId),
							getFreePos = function (formation) {
								for (var x = 0; x < ClientLib.Base.Util.get_ArmyMaxSlotCountX(); x++) {
									for (var y = 0; y < ClientLib.Base.Util.get_ArmyMaxSlotCountY(); y++) {
										if (formation.GetUnitByCoord(x, y) === null)
											return {
												x : x,
												y : y
											};
									}
								}
								return null;
							},
							freeTransported = function (unit, freePos) {
								if (unit.get_TransportedCityEntity() !== null)
									unit = unit.get_TransportedCityEntity();
								if (unit.get_IsTransportedCityEntity() && freePos !== null)
									unit.MoveBattleUnit(freePos.x, freePos.y);
							};
						if (targetFormation !== null) {
							for (i = 0; i < formation.length; i++) {
								unit = this.GetUnitById(formation[i].id, CityId, OwnId);
								if (formation[i].gs == 2) {
									transported.push(formation[i]);
									continue;
								}

								target = targetFormation.GetUnitByCoord(formation[i].x, formation[i].y);
								freePos = getFreePos(targetFormation);
								if (freePos !== null && target !== null)
									freeTransported(target, freePos);

								freePos = getFreePos(targetFormation);
								if (freePos !== null)
									freeTransported(unit, freePos);

								unit.set_Enabled(formation[i].enabled);
								target = targetFormation.GetUnitByCoord(formation[i].x, formation[i].y);
								if (target !== null && ClientLib.Base.Unit.CanBeTransported(target.get_UnitGameData_Obj(), unit.get_UnitGameData_Obj()))
									target.MoveBattleUnit(unit.get_CoordX(), unit.get_CoordY());
								else
									unit.MoveBattleUnit(formation[i].x, formation[i].y);
							}
							//transported units
							for (i = 0; i < transported.length; i++) {
								unit = this.GetUnitById(transported[i].id, CityId, OwnId);
								target = targetFormation.GetUnitByCoord(transported[i].x, transported[i].y);

								freePos = getFreePos(targetFormation);
								if (freePos !== null && target !== null)
									freeTransported(target, freePos);

								freePos = getFreePos(targetFormation);
								if (freePos !== null)
									freeTransported(unit, freePos);

								target = targetFormation.GetUnitByCoord(transported[i].x, transported[i].y);
								if (target !== null)
									target.set_Enabled(true);

								unit.set_Enabled(true);
								unit.MoveBattleUnit(transported[i].x, transported[i].y);
								if (target !== null)
									target.set_Enabled(transported[i].enabled);
                                else
                                    unit.set_Enabled(transported[i].enabled);
								if (target !== null)
                                    target.MoveBattleUnit(transported[i].x, transported[i].y);
							}
						}
					},
					Merge : function (formation, attacker) {
						for (var i in formation) {
							for (var j in attacker) {
								if (formation[i].gs == attacker[j].gs &&
									formation[i].i == attacker[j].i &&
									formation[i].l == attacker[j].l &&
									formation[i].x == attacker[j].x &&
									formation[i].y == attacker[j].y) {
									for (var k in attacker[j])
										formation[i][k] = attacker[j][k];
								}
							}
						}
						return formation;
					},
					IsFormationInCache : function () {
						var cache = STATS.CACHE.getInstance().check(this.Get());
						return (cache.result !== null);
					},
                                      
                                      
                                        
					Mirror : function (formation, pos, sel) {
						switch (pos) {
						case "h":
						case "v":
                                                case "c":
                                                case "k":
                                                case "z":
							break;
						default:
							return;
						}

						for (var i = 0; i < formation.length; i++) {
							if ((sel === null || formation[i].y == sel) && pos == "h")
								formation[i].x = Math.abs(formation[i].x - ClientLib.Base.Util.get_ArmyMaxSlotCountX() + 1);

							if ((sel === null || formation[i].x == sel) && pos == "v")
								formation[i].y = Math.abs(formation[i].y - ClientLib.Base.Util.get_ArmyMaxSlotCountY() + 1);
                                                                
                                                        if ((sel === null || formation[i].x == sel) && pos == "c")
								formation[i].y = Math.abs(formation[i].y - 5);
                                                        if ((sel === null || formation[i].y == sel) && pos == "k")
								formation[i].y = Math.abs(formation[i].x == 2);
                                                        if ((sel === null || formation[i].x == sel) && pos == "z")
								formation[i].y = Math.abs(formation[i].x == 4);;
						}
						return formation;
					},
                                        
					Shift : function (formation, pos, sel) {
						var v_shift = 0,
						h_shift = 0;

						switch (pos) {
						case "u":
							v_shift = -1;
							break;
						case "d":
							v_shift = 1;
							break;
						case "l":
							h_shift = -1;
							break;
						case "r":
							h_shift = 1;
							break;
                                                case "k":
							v_shift = 1;
							break;
                                                case "z":
                                                        v_shift = 2;
						default:
							return;
						}

						for (var i = 0; i < formation.length; i++) {
							if ((sel === null || formation[i].y === sel) && (pos == "l" || pos == "r"))
								formation[i].x += h_shift;

							if ((sel === null || formation[i].x === sel) && (pos == "u" || pos == "d"))
								formation[i].y += v_shift;

							switch (formation[i].x) {
							case ClientLib.Base.Util.get_ArmyMaxSlotCountX():
								formation[i].x = 0;
								break;
							case -1:
								formation[i].x = ClientLib.Base.Util.get_ArmyMaxSlotCountX() - 1;
								break;
							}

							switch (formation[i].y) {
							case ClientLib.Base.Util.get_ArmyMaxSlotCountY():
								formation[i].y = 0;
								break;
							case -1:
								formation[i].y = ClientLib.Base.Util.get_ArmyMaxSlotCountY() - 1;
								break;
							}
						}
						return formation;
					},
                                        Shiftz : function(d, b) {
        try {
          console.log("Swaping Unit Formation: direction:" + d + ", sel:" + b);
          var e = 0, g = 0;
          "z" == d && (e = 2);
          "k" == d && (e = 1);
          "l" == d && (g = -1);
          "r" == d && (g = 1);
          if (0 != e || 0 != g || "n" == d) {
            for (var f = this.getCityPreArmyUnits().get_ArmyUnits().l, k = [], l = 0;l < f.length;l++) {
              var h = f[l], m = {}, q = h.get_CoordX() + g;
              switch(q) {
                case 9:
                  q = 0;
                  break;
                case -1:
                  q = 8;
              }
              var n = h.get_CoordY() + e;
              switch(n) {
                case 2:
                  n = 0;
                  break;
                case 3:
                  n = 2;
                  break;
                case -1:
                  n = 3;
              }
              0 == b || h.get_CoordX() == b - 1 || "u" != d && "d" != d ? m.y = n : m.y = h.get_CoordY();
              0 == b || h.get_CoordY() == b - 1 || "l" != d && "r" != d ? m.x = q : m.x = h.get_CoordX();
              m.id = h.get_Id();
              "n" == d && (m.enabled = void 0 !== localStorage.allUnitsDisabled ? "yes" == localStorage.allUnitsDisabled ? h.set_Enabled(!0) : h.set_Enabled(!1) : h.set_Enabled(!1));
              m.enabled = h.get_Enabled();
              k.push(m);
            }
            "n" == d && (localStorage.allUnitsDisabled = "yes" == localStorage.allUnitsDisabled ? "no" : "yes");
            this.restoreFormation(k);
          }
        } catch (p) {
          console.log("Error Swapping Units"), console.log(p.toString());
        }
      }, 
                                        Shifts : function (formation, pos, sel) {
						var v_shift = 0,
						h_shift = 0;

						switch (pos) {
						case "z":
                                                        v_shift = 2;
							break;
						case "k":
							v_shift = 1;
							break;
						case "l":
							h_shift = -1;
							break;
						case "r":
							h_shift = 1;
							break;
                                                                                                
						default:
							return;
						}

						for (var i = 0; i < formation.length; i++) {
							if ((sel === null || formation[i].y === sel) && (pos == "z" || pos == "k"))
								formation[i].x += h_shift;

							if ((sel === null || formation[i].x === sel) && (pos == "z" || pos == "k"))
								formation[i].y += v_shift;

							switch (formation[i].x) {
							case ClientLib.Base.Util.get_ArmyMaxSlotCountX():
								formation[i].x = 0;
								break;
                                                     
                                                        case -1:
								formation[i].x = 0;
								break;
							}

							switch (formation[i].y) {
							case ClientLib.Base.Util.get_ArmyMaxSlotCountY():
								formation[i].y = 2;
								break;
							case 3: formation[i].y = 2;
                                                                break;
                                                        case 4: formation[i].y = 4;
                                                                break;
                                                      
                                                        
                                                        
							}
						}
						return formation;
					},
					set_Enabled : function (formation, set, EUnitGroup) {
						if (set === null)
							set = true;
						var all = (EUnitGroup != ClientLib.Data.EUnitGroup.Infantry && EUnitGroup != ClientLib.Data.EUnitGroup.Vehicle && EUnitGroup != ClientLib.Data.EUnitGroup.Aircraft);
						for (var i = 0; i < formation.length; i++) {
							var unitGroup = this.GetUnitGroupTypeFromUnit(ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(formation[i].i));
							if (all || (EUnitGroup == unitGroup && formation[i].gs === 0))
								formation[i].enabled = set;
						}

						return formation;
					},
					toggle_Enabled : function (formation, EUnitGroup) {
						var all = (EUnitGroup != ClientLib.Data.EUnitGroup.Infantry && EUnitGroup != ClientLib.Data.EUnitGroup.Vehicle && EUnitGroup != ClientLib.Data.EUnitGroup.Aircraft);
						for (var i = 0, num_total = 0, num_enabled = 0; i < formation.length; i++) {
							var unitGroup = this.GetUnitGroupTypeFromUnit(ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(formation[i].i));
							if (all || (EUnitGroup == unitGroup && formation[i].gs === 0)) {
								num_total++;
								if (formation[i].enabled)
									num_enabled++;
							}
						}

						return this.set_Enabled(formation, (num_enabled < (num_total / 2)), EUnitGroup);
					},
					GetUnitGroupTypeFromUnit : function (unit) {
						if (unit === null)
							return ClientLib.Data.EUnitGroup.None;
						if (unit.pt == ClientLib.Base.EPlacementType.Offense)
							switch (unit.mt) {
							case ClientLib.Base.EUnitMovementType.Feet:
								return ClientLib.Data.EUnitGroup.Infantry;
							case ClientLib.Base.EUnitMovementType.Wheel:
							case ClientLib.Base.EUnitMovementType.Track:
								return ClientLib.Data.EUnitGroup.Vehicle;
							case ClientLib.Base.EUnitMovementType.Air:
							case ClientLib.Base.EUnitMovementType.Air2:
								return ClientLib.Data.EUnitGroup.Aircraft;
							}
						else if (unit.pt == ClientLib.Base.EPlacementType.Defense)
							return ClientLib.Data.EUnitGroup.Defense;
						else
							return ClientLib.Data.EUnitGroup.None;
					}
				}
			});
			qx.Class.define("STATS.UTIL.Stats", {						// [static]		Utilities for Stats calculation
				type : "static",
				statics : {
					get_LootFromCurrentCity : function () {
						var LootFromCurrentCity = ClientLib.API.Battleground.GetInstance().GetLootFromCurrentCity(),
							LootClass = new STATS.STATS.Entity.Resource(),
							Loot = LootClass.getAny();
						if (LootFromCurrentCity !== null) {
							for (var i = 0; i < LootFromCurrentCity.length; i++)
								Loot[LootFromCurrentCity[i].Type] = LootFromCurrentCity[i].Count;
							LootClass.setAny(Loot);
							return LootClass;
						} else
							return null;
					},
					get_RepairCosts : function (mdbId, level, HealthPoints, AttackCounter) {
						var ResourcesClass = new STATS.STATS.Entity.Resource(),
							Resources = ResourcesClass.getAny(),
							unit = ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(mdbId),
							Health,
							dmgRatio,
							costs;
						AttackCounter = (AttackCounter !== undefined && AttackCounter !== null ? AttackCounter : 0);

						if (HealthPoints instanceof STATS.STATS.Entity.HealthPoints)
							Health = HealthPoints;
						else
							Health = new STATS.STATS.Entity.HealthPoints(HealthPoints);

						if (Health.getStart() != Health.getEnd()) {
							dmgRatio = (Health.getStart() - Health.getEnd()) / Health.getMax();
							if (unit.pt !== ClientLib.Base.EPlacementType.Offense || ClientLib.API.Util.GetOwnUnitRepairCosts === undefined)
								costs = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity() !== null ? ClientLib.API.Util.GetUnitRepairCosts(level, mdbId, dmgRatio) : null;
							else
								costs = ClientLib.API.Util.GetOwnUnitRepairCosts(level, mdbId, dmgRatio);

							for (var i = 0; costs !== null && i < costs.length; i++)
								switch (costs[i].Type) {
								case ClientLib.Base.EResourceType.Tiberium:
								case ClientLib.Base.EResourceType.Crystal:
								case ClientLib.Base.EResourceType.Gold:
								case ClientLib.Base.EResourceType.ResearchPoints:
									Resources[costs[i].Type] = costs[i].Count * Math.pow(0.7, AttackCounter);
									break;
								default:
									Resources[costs[i].Type] = costs[i].Count;
									break;
								}
						}

						if (Resources[ClientLib.Base.EResourceType.ResearchPoints] > 0)
							Resources[ClientLib.Base.EResourceType.ResearchPoints] = Math.max(1, Math.floor(Resources[ClientLib.Base.EResourceType.ResearchPoints] * dmgRatio));

						ResourcesClass.setAny(Resources);
						return ResourcesClass;
					},
					get_BuildingInfo : function (cityid) {
						var BuildingInfo = {},
							City = ((cityid !== undefined && cityid !== null) ? ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(cityid) : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity());
						if (City !== null) {
							var CityBuildingsData = City.get_CityBuildingsData(),
								get_BuildingInfo = function (Building) {
									if (Building !== null)
										return {
											MdbId : Building.get_TechGameData_Obj().c,
											x : Building.get_CoordX(),
											y : Building.get_CoordY()
										};
									else
										return null;
								};

							BuildingInfo.Construction_Yard = get_BuildingInfo(CityBuildingsData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Construction_Yard) || CityBuildingsData.GetBuildingByMDBId(ClientLib.Base.ETech.FOR_Fortress_ConstructionYard));
							BuildingInfo.Command_Center = get_BuildingInfo(CityBuildingsData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Command_Center));
							BuildingInfo.Barracks = get_BuildingInfo(CityBuildingsData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Barracks));
							BuildingInfo.Factory = get_BuildingInfo(CityBuildingsData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Factory));
							BuildingInfo.Airport = get_BuildingInfo(CityBuildingsData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Airport));
							BuildingInfo.Defense_Facility = get_BuildingInfo(CityBuildingsData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Defense_Facility));
							BuildingInfo.Defense_HQ = get_BuildingInfo(CityBuildingsData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Defense_HQ));
							BuildingInfo.Support = get_BuildingInfo(CityBuildingsData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Support_Air) || CityBuildingsData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Support_Art) || CityBuildingsData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Support_Ion));
						}
						return BuildingInfo;
					},
					_GetModuleByType : function (modules, type) {
						for (var i = 0; i < modules.length; i++) {
							if (modules[i].t == type)
								return modules[i];
						}
						return null;
					},
					_patchUnitLifePoints : function (unit, activeModules) {
						var newUnit = qx.lang.Object.clone(unit, true),
							module = this._GetModuleByType(newUnit.m, ClientLib.Base.EUnitModuleType.HitpointOverride);

						if (module !== null && activeModules.indexOf(module.i) != -1)
							newUnit.lp = module.h;

						return newUnit;
					},
					get_UnitMaxHealthByLevel : function (level, unit, bonus, activeModules) {
						return Math.floor(ClientLib.API.Util.GetUnitMaxHealthByLevel(level, this._patchUnitLifePoints(unit, activeModules), bonus)) * 16;
					},
					get_Stats : function (data) {
						try {
							var StatsClass = new STATS.STATS(),
								Stats = StatsClass.getAny(),
								sim = {},
								buildings = data.d.s,
								buildingInfo = this.get_BuildingInfo(data.d.di),
								efficiency = 0,
								ve_level = 1,
								defender = data.d.d,
								attacker = data.d.a,
								unit,
								unitHealthPoints = new STATS.STATS.Entity.HealthPoints(),
								unitRepairCosts,
								unitMaxHealthPoints,
								i;

							function addObject(a, b) {
								for (var i in a)
									a[i] += b[i];
								return a;
							}

							//simulation
							for (i = 0; i < data.e.length; i++)
								sim[data.e[i].Key] = data.e[i].Value;

							//BattleDuration
							Stats.BattleDuration = (data.d.cs * 100) + (data.d.cs < (data.d.md * 10) ? 3000 : 0);

							for (i = 0; i < buildings.length; i++) {
								unit = ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(buildings[i].i);

								//maxHealth
								switch (data.d.df) {
								case ClientLib.Base.EFactionType.GDIFaction:
								case ClientLib.Base.EFactionType.NODFaction:
									unitMaxHealthPoints = this.get_UnitMaxHealthByLevel(buildings[i].l, unit, true, data.d.dm);
									break;
								default:
									unitMaxHealthPoints = this.get_UnitMaxHealthByLevel(buildings[i].l, unit, false, data.d.dm);
									break;
								}

								unitHealthPoints.setMax(Math.max(unitMaxHealthPoints, buildings[i].h * 16));
								unitHealthPoints.setStart(buildings[i].h * 16);
								unitHealthPoints.setEnd(sim[buildings[i].ci].h);
								unitRepairCosts = this.get_RepairCosts(buildings[i].i, buildings[i].l, unitHealthPoints);

								addObject(Stats.Enemy.Overall.HealthPoints, unitHealthPoints.getAny());
								addObject(Stats.Enemy.Overall.Resource, unitRepairCosts.getAny());

								addObject(Stats.Enemy.Structure.HealthPoints, unitHealthPoints.getAny());
								addObject(Stats.Enemy.Structure.Resource, unitRepairCosts.getAny());

								switch (parseInt(ClientLib.Base.Tech.GetTechNameFromTechId(unit.tl, unit.f), 10)) {
								case ClientLib.Base.ETechName.Construction_Yard:
									addObject(Stats.Enemy.Construction_Yard.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Enemy.Construction_Yard.Resource, unitRepairCosts.getAny());
									break;
								case ClientLib.Base.ETechName.Command_Center:
									addObject(Stats.Enemy.Command_Center.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Enemy.Command_Center.Resource, unitRepairCosts.getAny());
									break;
								case ClientLib.Base.ETechName.Barracks:
									addObject(Stats.Enemy.Barracks.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Enemy.Barracks.Resource, unitRepairCosts.getAny());
									break;
								case ClientLib.Base.ETechName.Factory:
									addObject(Stats.Enemy.Factory.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Enemy.Factory.Resource, unitRepairCosts.getAny());
									break;
								case ClientLib.Base.ETechName.Airport:
									addObject(Stats.Enemy.Airport.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Enemy.Airport.Resource, unitRepairCosts.getAny());
									break;
								case ClientLib.Base.ETechName.Defense_Facility:
									addObject(Stats.Enemy.Defense_Facility.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Enemy.Defense_Facility.Resource, unitRepairCosts.getAny());
									efficiency = 0.7 * (unitHealthPoints.getEnd() / unitHealthPoints.getMax());
									ve_level = buildings[i].l;
									break;
								case ClientLib.Base.ETechName.Defense_HQ:
									addObject(Stats.Enemy.Defense_HQ.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Enemy.Defense_HQ.Resource, unitRepairCosts.getAny());
									break;
								case ClientLib.Base.ETechName.Support_Air:
								case ClientLib.Base.ETechName.Support_Ion:
								case ClientLib.Base.ETechName.Support_Art:
									addObject(Stats.Enemy.Support.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Enemy.Support.Resource, unitRepairCosts.getAny());
									break;
								}

								if (buildingInfo.Construction_Yard !== undefined) {
									if (buildingInfo.Construction_Yard !== null && buildingInfo.Construction_Yard.x == buildings[i].x && buildingInfo.Construction_Yard.y < buildings[i].y) {
										Stats.Enemy.Construction_Yard.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Construction_Yard.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Construction_Yard.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Command_Center !== null && buildingInfo.Command_Center.x == buildings[i].x && buildingInfo.Command_Center.y < buildings[i].y) {
										Stats.Enemy.Command_Center.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Command_Center.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Command_Center.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Barracks !== null && buildingInfo.Barracks.x == buildings[i].x && buildingInfo.Barracks.y < buildings[i].y) {
										Stats.Enemy.Barracks.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Barracks.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Barracks.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Factory !== null && buildingInfo.Factory.x == buildings[i].x && buildingInfo.Factory.y < buildings[i].y) {
										Stats.Enemy.Factory.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Factory.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Factory.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Airport !== null && buildingInfo.Airport.x == buildings[i].x && buildingInfo.Airport.y < buildings[i].y) {
										Stats.Enemy.Airport.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Airport.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Airport.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Defense_Facility !== null && buildingInfo.Defense_Facility.x == buildings[i].x && buildingInfo.Defense_Facility.y < buildings[i].y) {
										Stats.Enemy.Defense_Facility.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Defense_Facility.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Defense_Facility.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Defense_HQ !== null && buildingInfo.Defense_HQ.x == buildings[i].x && buildingInfo.Defense_HQ.y < buildings[i].y) {
										Stats.Enemy.Defense_HQ.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Defense_HQ.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Defense_HQ.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Support !== null && buildingInfo.Support.x == buildings[i].x && buildingInfo.Support.y < buildings[i].y) {
										Stats.Enemy.Support.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Support.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Support.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
								}
							}
							for (i = 0; i < defender.length; i++) {
								unit = ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(defender[i].i);

								//maxHealth
								switch (data.d.df) {
								case ClientLib.Base.EFactionType.GDIFaction:
								case ClientLib.Base.EFactionType.NODFaction:
									unitMaxHealthPoints = this.get_UnitMaxHealthByLevel(defender[i].l, unit, true, data.d.dm);
									break;
								default:
									unitMaxHealthPoints = this.get_UnitMaxHealthByLevel(defender[i].l, unit, false, data.d.dm);
									break;
								}

								unitHealthPoints.setMax(Math.max(unitMaxHealthPoints, defender[i].h * 16));
								unitHealthPoints.setStart(defender[i].h * 16);
								unitHealthPoints.setEnd(sim[defender[i].ci].h);
								unitHealthPoints.setRep((((defender[i].h * 16) - (sim[defender[i].ci].h)) * efficiency * ve_level) / Math.max(ve_level, defender[i].l));
								unitRepairCosts = this.get_RepairCosts(defender[i].i, defender[i].l, unitHealthPoints, defender[i].ac);

								addObject(Stats.Enemy.Overall.HealthPoints, unitHealthPoints.getAny());
								addObject(Stats.Enemy.Overall.Resource, unitRepairCosts.getAny());
								addObject(Stats.Enemy.Defense.HealthPoints, unitHealthPoints.getAny());
								addObject(Stats.Enemy.Defense.Resource, unitRepairCosts.getAny());
								if (unit.ptt == ClientLib.Base.EArmorType.NONE) {
									addObject(Stats.Enemy.DefenseNonArmored.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Enemy.DefenseNonArmored.Resource, unitRepairCosts.getAny());
								} else {
									addObject(Stats.Enemy.DefenseArmored.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Enemy.DefenseArmored.Resource, unitRepairCosts.getAny());
								}

								if (buildingInfo.Construction_Yard !== undefined && unit.mt == ClientLib.Base.EUnitMovementType.Structure) {
									if (buildingInfo.Construction_Yard !== null && buildingInfo.Construction_Yard.x == defender[i].x) {
										Stats.Enemy.Construction_Yard.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Construction_Yard.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Construction_Yard.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Command_Center !== null && buildingInfo.Command_Center.x == defender[i].x) {
										Stats.Enemy.Command_Center.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Command_Center.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Command_Center.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Barracks !== null && buildingInfo.Barracks.x == defender[i].x) {
										Stats.Enemy.Barracks.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Barracks.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Barracks.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Factory !== null && buildingInfo.Factory.x == defender[i].x) {
										Stats.Enemy.Factory.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Factory.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Factory.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Airport !== null && buildingInfo.Airport.x == defender[i].x) {
										Stats.Enemy.Airport.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Airport.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Airport.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Defense_Facility !== null && buildingInfo.Defense_Facility.x == defender[i].x) {
										Stats.Enemy.Defense_Facility.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Defense_Facility.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Defense_Facility.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Defense_HQ !== null && buildingInfo.Defense_HQ.x == defender[i].x) {
										Stats.Enemy.Defense_HQ.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Defense_HQ.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Defense_HQ.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Support !== null && buildingInfo.Support.x == defender[i].x) {
										Stats.Enemy.Support.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Support.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Support.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
								}
							}

							if (ClientLib.API.Util.GetOwnUnitRepairCosts === undefined)
								ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentCityId(data.d.ai);

							for (i = 0; i < attacker.length; i++) {
								unit = ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(attacker[i].i);

								//maxHealth
								unitMaxHealthPoints = this.get_UnitMaxHealthByLevel(attacker[i].l, unit, false, data.d.am);

								unitHealthPoints.setMax(Math.max(unitMaxHealthPoints, attacker[i].h * 16));
								unitHealthPoints.setStart(attacker[i].h * 16);
								if (sim[attacker[i].ci] !== undefined)
									unitHealthPoints.setEnd(sim[attacker[i].ci].h);
								else
									unitHealthPoints.setEnd(attacker[i].h * 16);
								unitRepairCosts = this.get_RepairCosts(attacker[i].i, attacker[i].l, unitHealthPoints);

								addObject(Stats.Offense.Overall.HealthPoints, unitHealthPoints.getAny());
								addObject(Stats.Offense.Overall.Resource, unitRepairCosts.getAny());
								switch (unit.mt) {
								case ClientLib.Base.EUnitMovementType.Feet:
									addObject(Stats.Offense.Infantry.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Offense.Infantry.Resource, unitRepairCosts.getAny());
									break;
								case ClientLib.Base.EUnitMovementType.Wheel:
								case ClientLib.Base.EUnitMovementType.Track:
									addObject(Stats.Offense.Vehicle.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Offense.Vehicle.Resource, unitRepairCosts.getAny());
									break;
								case ClientLib.Base.EUnitMovementType.Air:
								case ClientLib.Base.EUnitMovementType.Air2:
									addObject(Stats.Offense.Aircraft.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Offense.Aircraft.Resource, unitRepairCosts.getAny());
									break;
								}
							}

							if (ClientLib.API.Util.GetOwnUnitRepairCosts === undefined)
								ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentCityId(data.d.di);

							StatsClass.setAny(Stats);
							return StatsClass;
						} catch (e) {
							console.group("CDSIM REAL TIME");
							console.error("Error in STATS.UTIL.Stats.get_Stats()", e);
							console.groupEnd();
						}
					},
					patchGetUnitRepairCosts : function () {
						try {
							for (var i in ClientLib.Data.Cities.prototype) {
								if (typeof ClientLib.Data.Cities.prototype[i] === "function" &&
									ClientLib.Data.Cities.prototype[i] == ClientLib.Data.Cities.prototype.get_CurrentCity &&
									i !== "get_CurrentCity")
									break;
							}
							var GetOwnUnitRepairCosts = ClientLib.API.Util.GetUnitRepairCosts.toString().replace(i, "get_CurrentOwnCity"),
								args = GetOwnUnitRepairCosts.substring(GetOwnUnitRepairCosts.indexOf("(") + 1, GetOwnUnitRepairCosts.indexOf(")")),
								body = GetOwnUnitRepairCosts.substring(GetOwnUnitRepairCosts.indexOf("{") + 1, GetOwnUnitRepairCosts.lastIndexOf("}"));
							/*jslint evil: true */
							ClientLib.API.Util.GetOwnUnitRepairCosts = Function(args, body);
							/*jslint evil: false */
						} catch (e) {
							console.group("CDSIM REAL TIME");
							console.error("Error setting up ClientLib.API.Util.GetOwnUnitRepairCosts", e);
							console.groupEnd();
						}
					}
				},
				defer : function (statics) {
					try {
						statics.patchGetUnitRepairCosts();
					} catch (e) {
						console.group("CDSIM REAL TIME");
						console.error("Error setting up UTIL.Stats defer", e);
						console.groupEnd();
					}
				}
			});
            qx.Class.define("STATS.UTIL.Battleground", {					// [static]		Battleground
				type : "static",
				statics : {
                    StartReplay : function (cityid, combat) {
                        qx.core.Init.getApplication().getPlayArea().setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay, cityid, 0, 0);
                        ClientLib.Vis.VisMain.GetInstance().get_Battleground().Init();
                        ClientLib.Vis.VisMain.GetInstance().get_Battleground().LoadCombatDirect(combat);
                        qx.event.Timer.once(function () {
                            ClientLib.Vis.VisMain.GetInstance().get_Battleground().RestartReplay();
                            ClientLib.Vis.VisMain.GetInstance().get_Battleground().set_ReplaySpeed(1);
                        }, this, 0);
                    }
                }
			});
			qx.Class.define("STATS.UTIL.CNCOpt", {						// [static]		CNCOpt
				type : "static",
				statics : {
					keymap : {
						"GDI_Accumulator" : "a",
						"GDI_Refinery" : "r",
						"GDI_Trade Center" : "u",
						"GDI_Silo" : "s",
						"GDI_Power Plant" : "p",
						"GDI_Construction Yard" : "y",
						"GDI_Airport" : "d",
						"GDI_Barracks" : "b",
						"GDI_Factory" : "f",
						"GDI_Defense HQ" : "q",
						"GDI_Defense Facility" : "w",
						"GDI_Command Center" : "e",
						"GDI_Support_Art" : "z",
						"GDI_Support_Air" : "x",
						"GDI_Support_Ion" : "i",
						"GDI_Harvester" : "h",
						"GDI_Harvester_Crystal" : "n",
						"FOR_Silo" : "s",
						"FOR_Refinery" : "r",
						"FOR_Tiberium Booster" : "b",
						"FOR_Crystal Booster" : "v",
						"FOR_Trade Center" : "u",
						"FOR_Defense Facility" : "w",
						"FOR_Construction Yard" : "y",
						"FOR_Harvester_Tiberium" : "h",
						"FOR_Defense HQ" : "q",
						"FOR_Harvester_Crystal" : "n",
						"NOD_Refinery" : "r",
						"NOD_Power Plant" : "p",
						"NOD_Harvester" : "h",
						"NOD_Construction Yard" : "y",
						"NOD_Airport" : "d",
						"NOD_Trade Center" : "u",
						"NOD_Defense HQ" : "q",
						"NOD_Barracks" : "b",
						"NOD_Silo" : "s",
						"NOD_Factory" : "f",
						"NOD_Harvester_Crystal" : "n",
						"NOD_Command Post" : "e",
						"NOD_Support_Art" : "z",
						"NOD_Support_Ion" : "i",
						"NOD_Accumulator" : "a",
						"NOD_Support_Air" : "x",
						"NOD_Defense Facility" : "w",
						"GDI_Wall" : "w",
						"GDI_Cannon" : "c",
						"GDI_Antitank Barrier" : "t",
						"GDI_Barbwire" : "b",
						"GDI_Turret" : "m",
						"GDI_Flak" : "f",
						"GDI_Art Inf" : "r",
						"GDI_Art Air" : "e",
						"GDI_Art Tank" : "a",
						"GDI_Def_APC Guardian" : "g",
						"GDI_Def_Missile Squad" : "q",
						"GDI_Def_Pitbull" : "p",
						"GDI_Def_Predator" : "d",
						"GDI_Def_Sniper" : "s",
						"GDI_Def_Zone Trooper" : "z",
						"NOD_Def_Antitank Barrier" : "t",
						"NOD_Def_Art Air" : "e",
						"NOD_Def_Art Inf" : "r",
						"NOD_Def_Art Tank" : "a",
						"NOD_Def_Attack Bike" : "p",
						"NOD_Def_Barbwire" : "b",
						"NOD_Def_Black Hand" : "z",
						"NOD_Def_Cannon" : "c",
						"NOD_Def_Confessor" : "s",
						"NOD_Def_Flak" : "f",
						"NOD_Def_MG Nest" : "m",
						"NOD_Def_Militant Rocket Soldiers" : "q",
						"NOD_Def_Reckoner" : "g",
						"NOD_Def_Scorpion Tank" : "d",
						"NOD_Def_Wall" : "w",
						"FOR_Wall" : "w",
						"FOR_Barbwire_VS_Inf" : "b",
						"FOR_Barrier_VS_Veh" : "t",
						"FOR_Inf_VS_Inf" : "g",
						"FOR_Inf_VS_Veh" : "r",
						"FOR_Inf_VS_Air" : "q",
						"FOR_Sniper" : "n",
						"FOR_Mammoth" : "y",
						"FOR_Veh_VS_Inf" : "o",
						"FOR_Veh_VS_Veh" : "s",
						"FOR_Veh_VS_Air" : "u",
						"FOR_Turret_VS_Inf" : "m",
						"FOR_Turret_VS_Inf_ranged" : "a",
						"FOR_Turret_VS_Veh" : "v",
						"FOR_Turret_VS_Veh_ranged" : "d",
						"FOR_Turret_VS_Air" : "f",
						"FOR_Turret_VS_Air_ranged" : "e",
						"GDI_APC Guardian" : "g",
						"GDI_Commando" : "c",
						"GDI_Firehawk" : "f",
						"GDI_Juggernaut" : "j",
						"GDI_Kodiak" : "k",
						"GDI_Mammoth" : "m",
						"GDI_Missile Squad" : "q",
						"GDI_Orca" : "o",
						"GDI_Paladin" : "a",
						"GDI_Pitbull" : "p",
						"GDI_Predator" : "d",
						"GDI_Riflemen" : "r",
						"GDI_Sniper Team" : "s",
						"GDI_Zone Trooper" : "z",
						"NOD_Attack Bike" : "b",
						"NOD_Avatar" : "a",
						"NOD_Black Hand" : "z",
						"NOD_Cobra" : "r",
						"NOD_Commando" : "c",
						"NOD_Confessor" : "s",
						"NOD_Militant Rocket Soldiers" : "q",
						"NOD_Militants" : "m",
						"NOD_Reckoner" : "k",
						"NOD_Salamander" : "l",
						"NOD_Scorpion Tank" : "o",
						"NOD_Specter Artilery" : "p",
						"NOD_Venom" : "v",
						"NOD_Vertigo" : "t",
						"<last>" : "."
					},
					createLink : function (city, own_city) {
						city = ((city !== undefined && city !== null) ? city : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity());
						own_city = ((own_city !== undefined && own_city !== null) ? own_city : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity());

						function findTechLayout(city) {
							for (var k in city)
								if ((typeof(city[k]) == "object") && city[k] && 0 in city[k] && 8 in city[k])
									if ((typeof(city[k][0]) == "object") && city[k][0] && city[k][0] && 0 in city[k][0] && 15 in city[k][0])
										if ((typeof(city[k][0][0]) == "object") && city[k][0][0] && "BuildingIndex" in city[k][0][0])
											return city[k];
							return null;
						}
						function findBuildings(city) {
							var cityBuildings = city.get_CityBuildingsData();
							for (var k in cityBuildings) {
								if ((typeof(cityBuildings[k]) === "object") && cityBuildings[k] && "d" in cityBuildings[k] && "c" in cityBuildings[k] && cityBuildings[k].c > 0)
									return cityBuildings[k].d;
							}
						}
						function getUnitArrays(city) {
							var ret = [];
							for (var k in city)
								if ((typeof(city[k]) == "object") && city[k])
									for (var k2 in city[k])
										if ((typeof(city[k][k2]) == "object") && city[k][k2] && "d" in city[k][k2]) {
											var lst = city[k][k2].d;
											if ((typeof(lst) == "object") && lst)
												for (var i in lst)
													if (typeof(lst[i]) == "object" && lst[i] && "get_CurrentLevel" in lst[i])
														ret.push(lst);
										}
							return ret;
						}
						function getDefenseUnits(city) {
							var arr = getUnitArrays(city);
							for (var i = 0; i < arr.length; ++i)
								for (var j in arr[i])
									if (STATS.UTIL.Formation.GetUnitGroupTypeFromUnit(arr[i][j].get_UnitGameData_Obj()) == ClientLib.Data.EUnitGroup.Defense)
										return arr[i];
							return [];
						}
						function getFactionKey (faction) {
							switch (faction) {
							case ClientLib.Base.EFactionType.GDIFaction:
								return "G";
							case ClientLib.Base.EFactionType.NODFaction:
								return "N";
							case ClientLib.Base.EFactionType.FORFaction:
							case ClientLib.Base.EFactionType.NPCBase:
							case ClientLib.Base.EFactionType.NPCCamp:
							case ClientLib.Base.EFactionType.NPCOutpost:
							case ClientLib.Base.EFactionType.NPCFortress:
								return "F";
							default:
								console.log("cncopt: Unknown faction: " + city.get_CityFaction());
								return "E";
							}
						}
						function getUnitKey (unit) {
							if (typeof STATS.UTIL.CNCOpt.keymap[unit.n] !== "undefined") {
								return STATS.UTIL.CNCOpt.keymap[unit.n];
							} else {
								return ".";
							}
						}

						var link = "http://cncopt.com/?map=",
							defense_units = [],
							offense_units = [],
							defense_unit_list = getDefenseUnits(city),
							army = own_city.get_CityArmyFormationsManager().GetFormationByTargetBaseId(city.get_Id()),
							offense_unit_list,
							techLayout = findTechLayout(city),
							buildings = findBuildings(city),
							row,
							spot,
							level,
							building,
							defense_unit,
							offense_unit,
							alliance = ClientLib.Data.MainData.GetInstance().get_Alliance(),
							i;

						link += "3|"; // link version
						link += getFactionKey(city.get_CityFaction()) + "|";
						link += getFactionKey(own_city.get_CityFaction()) + "|";
						link += city.get_Name() + "|";

						for (i = 0; i < 20; ++i) {
							defense_units.push([null, null, null, null, null, null, null, null, null]);
							offense_units.push([null, null, null, null, null, null, null, null, null]);
						}
						for (i in defense_unit_list)
							defense_units[defense_unit_list[i].get_CoordX()][defense_unit_list[i].get_CoordY() + 8] = defense_unit_list[i];
						if (army.get_ArmyUnits() !== null)
							offense_unit_list = army.get_ArmyUnits().l;
						else
							offense_unit_list = city.get_CityUnitsData().get_OffenseUnits().d;
						for (i in offense_unit_list)
							if (offense_unit_list[i].get_Enabled() && !offense_unit_list[i].get_IsTransportedCityEntity())
								offense_units[offense_unit_list[i].get_CoordX()][offense_unit_list[i].get_CoordY() + 16] = offense_unit_list[i];

						for (i = 0; i < 20; ++i) {
							row = [];
							for (var j = 0; j < 9; ++j) {
								spot = i > 16 ? null : techLayout[j][i];
								level = 0;
								building = null;
								if (spot && spot.BuildingIndex >= 0) {
									building = buildings[spot.BuildingIndex];
									level = building.get_CurrentLevel();
								}
								defense_unit = defense_units[j][i];
								if (defense_unit) {
									level = defense_unit.get_CurrentLevel();
								}
								offense_unit = offense_units[j][i];
								if (offense_unit) {
									level = offense_unit.get_CurrentLevel();
								}
								if (level > 1) {
									link += level;
								}

								switch (i > 16 ? 0 : city.GetResourceType(j, i)) {
								case ClientLib.Data.ECityTerrainType.NONE:
									if (building) {
										link += getUnitKey(GAMEDATA.Tech[building.get_MdbBuildingId()]);
									} else if (defense_unit) {
										link += getUnitKey(defense_unit.get_UnitGameData_Obj());
									} else if (offense_unit) {
										link += getUnitKey(offense_unit.get_UnitGameData_Obj());
									} else {
										link += ".";
									}
									break;
								case ClientLib.Data.ECityTerrainType.CRYSTAL:
									if (spot.BuildingIndex < 0)
										link += "c";
									else
										link += "n";
									break;
								case ClientLib.Data.ECityTerrainType.TIBERIUM:
									if (spot.BuildingIndex < 0)
										link += "t";
									else
										link += "h";
									break;
								case ClientLib.Data.ECityTerrainType.FOREST:
									link += "j";
									break;
								case ClientLib.Data.ECityTerrainType.BRIAR:
									link += "h";
									break;
								case ClientLib.Data.ECityTerrainType.SWAMP:
									link += "l";
									break;
								case ClientLib.Data.ECityTerrainType.WATER:
									link += "k";
									break;
								default:
									console.log("cncopt [4]: Unhandled resource type: " + city.GetResourceType(j, i));
									link += ".";
									break;
								}
							}
						}
						if (alliance) {
							link += "|" + alliance.get_POITiberiumBonus();
							link += "|" + alliance.get_POICrystalBonus();
							link += "|" + alliance.get_POIPowerBonus();
							link += "|" + alliance.get_POIInfantryBonus();
							link += "|" + alliance.get_POIVehicleBonus();
							link += "|" + alliance.get_POIAirBonus();
							link += "|" + alliance.get_POIDefenseBonus();
						}
						if (ClientLib.Data.MainData.GetInstance().get_Server().get_TechLevelUpgradeFactorBonusAmount() != 1.20) {
							link += "|newEconomy";
						}
						return link;
					},
					parseLink : function (link) {
						var formation = STATS.UTIL.Formation.Get();
						function getFaction(faction) {
							switch (faction) {
							case "G":
								return ClientLib.Base.EFactionType.GDIFaction;
							case "N":
								return ClientLib.Base.EFactionType.NODFaction;
							case "F":
								return ClientLib.Base.EFactionType.FORFaction;
							default:
								return ClientLib.Base.EFactionType.NotInitialized;
							}
						}
						function initMapRev() {
							var units = GAMEDATA.units,
								keys = Object.keys(GAMEDATA.units),
								len = keys.length,
								unit,
								data = {
									1 : {
										0 : {},
										1 : {},
										2 : {}
									},
									2 : {
										0 : {},
										1 : {},
										2 : {}
									},
									3 : {
										0 : {},
										1 : {},
										2 : {}
									}
								};
							while (len--) {
								unit = units[keys[len]];
								if (typeof STATS.UTIL.CNCOpt.keymap[unit.n] !== "undefined") {
									switch (unit.pt) {
									case ClientLib.Base.EPlacementType.Offense:
										data[unit.f][2][STATS.UTIL.CNCOpt.keymap[unit.n]] = parseInt(keys[len], 10);
										break;
									case ClientLib.Base.EPlacementType.Defense:
										data[unit.f][1][STATS.UTIL.CNCOpt.keymap[unit.n]] = parseInt(keys[len], 10);
										break;
									case ClientLib.Base.EPlacementType.Structure:
										data[unit.f][0][STATS.UTIL.CNCOpt.keymap[unit.n]] = parseInt(keys[len], 10);
										break;
									default:
										console.log("Unknown map: " + unit.n);
										break;
									}
								}
							}
							return data;
						}
						function findFreePos(formation) {
							var x, y, i, map = [];
							for (x = 0; x < ClientLib.Base.Util.get_ArmyMaxSlotCountX(); x++) {
								map[x] = [];
								for (y = 0; y < ClientLib.Base.Util.get_ArmyMaxSlotCountY(); y++) {
									map[x][y] = false;
									for (i = 0; i < formation.length; i++) {
										if (formation[i].x === x && formation[i].y === y)
											map[x][y] = true;
									}
								}
							}
							for (x = 0; x < ClientLib.Base.Util.get_ArmyMaxSlotCountX(); x++) {
								for (y = 0; y < ClientLib.Base.Util.get_ArmyMaxSlotCountY(); y++) {
									if (map[x][y] === false) {
										return {
											'x': x,
											'y': y
										};
									}
								}
							}
							return null;
						}
						if (link !== null && link.indexOf("|") != -1) {
							var parts = link.split("|");
							if (parts === null | parts.length < 5) {
								console.log("Corrupt link");
								return formation;
							}
							var keymapRev = initMapRev(),
								faction1 = getFaction(parts[1]),
								faction2 = getFaction(parts[2]),
								re = /[chjklnt.]|[\d]+[^.]/g,
								count = -1,
								step,
								type,
								id,
								level,
								section,
								i,
								j,
								x,
								y,
								result,
								units = [],
								freePos;
							while ((result = re.exec(parts[4]))) {
								result = result ? result[0] : null;
								step = ++count % 72;
								x = step % 9;
								y = Math.floor(step / 9);
								if (result.length !== 1) {
									type = result.substr(-1);
									level = parseInt(result.slice(0, -1), 10);
									section = Math.floor(count / 72);
									if (typeof keymapRev[section == 2 ? faction2 : faction1][section][type] === "undefined") {
										console.log("Unknown key: " + result + " at pos: " + count);
										continue;
									}
									id = keymapRev[section == 2 ? faction2 : faction1][section][type];
									switch (id) {
									case 175:
										id = 115;
										break;
									case 176:
										id = 155;
										break;
									}
									if (GAMEDATA.units[id].pt == ClientLib.Base.EPlacementType.Offense) {
										units.push({
											i : id,
											l : level,
											x : x,
											y : y
										});
									}
								}
							}
							
							formation = STATS.UTIL.Formation.set_Enabled(formation, false);
							for (i = 0; i < formation.length; i++) {
								for (j = 0; j < units.length; j++) {
									if (units[j] !== null && formation[i].i == units[j].i && formation[i].l == units[j].l) {
										formation[i].x = units[j].x;
										formation[i].y = units[j].y;
										formation[i].enabled = true;
										units.splice(j, 1);
										break;
									}
								}
							}
							for (i = 0; i < formation.length; i++) {
								if (formation[i].enabled === false) {
									freePos = findFreePos(formation);
									if (freePos !== null) {
										formation[i].x = freePos.x;
										formation[i].y = freePos.y;
									}
								}
							}
						}
						return formation;
					}
				}
			});
			qx.Class.define("STATS.MENU", {								// [singleton]	Menu
				type : "singleton",
				extend : qx.core.Object,
				include : [qx.locale.MTranslation],
				construct : function () {
                    this.base(arguments);
					var ScriptsButton = qx.core.Init.getApplication().getMenuBar().getScriptsButton();

					this.Menu = new qx.ui.menu.Menu();
					ScriptsButton.Add("CDSIM V6.5", STATS.RES.IMG.Menu, this.Menu);

					//SETTINGS
					var settingsMenu = new qx.ui.menu.Menu(),
						settingsLoad = new qx.ui.menu.Button(this.tr("load"), null, null),
						settingsSave = new qx.ui.menu.Button(this.tr("save"), null, null),
						settingsReset = new qx.ui.menu.Button(this.tr("reset"), null, null);
					settingsLoad.addListener("execute", function () {
						STATS.SETTINGS.load();
					}, this);
					settingsSave.addListener("execute", function () {
						STATS.SETTINGS.save();
					}, this);
					settingsReset.addListener("execute", function () {
						STATS.SETTINGS.reset();
						alert(this.tr("Game will reload now."));
						window.location.reload();
					}, this);
					settingsMenu.add(settingsLoad);
					settingsMenu.add(settingsSave);
					settingsMenu.add(settingsReset);
					this.Menu.add(new qx.ui.menu.Button("Settings", null, null, settingsMenu));

					//Info
					
				},
				members : {
					Menu : null
				},
				defer : function () {
					STATS.addInit("STATS.MENU");
				}
			});
			qx.Class.define("STATS.STATS", {								//				Stats Object
				extend : qx.core.Object,
				statics : {
					Prio : {
						Click : 0,
						Enemy : 1,
						Structure : 2,
						Construction_Yard : 3,
						Command_Center : 4,
						Barracks : 5,
						Factory : 6,
						Airport : 7,
						Defense_Facility : 8,
						Defense_HQ : 9,
						Support : 10,
						Defense : 11,
						DefenseArmored : 12,
						DefenseNonArmored : 13,
						Offense : 14,
						Infantry : 15,
						Vehicle : 16,
						Aircraft : 17,
						BattleDuration : 18,
						AutoRepair : 19
					},
					Type : {
						Click : 0,
						HealthPointPercent : 1,
						RepairChargeBase : 2,
						RepairChargeOffense : 3,
						RepairCosts : 4,
						Loot : 5,
						HealthPointAutoRepairPercent : 6
					},
					getPreset : function (num) {
						switch (num) {
						case 1: // Construction_Yard
							return {
								Name : "CY",
								Description : "Most priority to construction yard including all in front of it.<br>After this the best total enemy health from the cached simulations is selected.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected.",
								Prio : [
									[STATS.STATS.Prio.Construction_Yard, STATS.STATS.Type.HealthPointPercent, false, 0, false],
									[STATS.STATS.Prio.Enemy, STATS.STATS.Type.HealthPointPercent, false, 0, false],
									[STATS.STATS.Prio.Offense, STATS.STATS.Type.RepairChargeOffense, false, 0, false],
									[STATS.STATS.Prio.Offense, STATS.STATS.Type.HealthPointPercent, false, 0, false],
									[STATS.STATS.Prio.BattleDuration, null, false, 0, false]
								]
							};
						case 2: // Defense_Facility
							return {
								Name : "DF",
								Description : "Most priority to defense facility including all in front of it.<br>After this the best armored defense health from the cached simulations is selected.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected.",
								Prio : [
									[STATS.STATS.Prio.Defense_Facility, STATS.STATS.Type.HealthPointPercent, false, 0, false],
									[STATS.STATS.Prio.DefenseArmored, STATS.STATS.Type.HealthPointPercent, false, 0, false],
									[STATS.STATS.Prio.Offense, STATS.STATS.Type.RepairChargeOffense, false, 0, false],
									[STATS.STATS.Prio.Offense, STATS.STATS.Type.HealthPointPercent, false, 0, false],
									[STATS.STATS.Prio.BattleDuration, null, false, 0, false]
								]
							};
						case 3: // Defense
							return {
								Name : "Deff",
								Description : "Most priority to defense health including the auto repair after the battle.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected.",
								Prio : [
									[STATS.STATS.Prio.AutoRepair, STATS.STATS.Type.HealthPointAutoRepairPercent, false, 0, false],
									[STATS.STATS.Prio.Offense, STATS.STATS.Type.RepairChargeOffense, false, 0, false],
									[STATS.STATS.Prio.Offense, STATS.STATS.Type.HealthPointPercent, false, 0, false],
									[STATS.STATS.Prio.BattleDuration, null, false, 0, false]
								]
							};
						case 4: // Command_Center
							return {
								Name : "CC",
								Description : "Most priority to command center including all in front of it.<br>After this the best total enemy health from the cached simulations is selected.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected.",
								Prio : [
									[STATS.STATS.Prio.Command_Center, STATS.STATS.Type.HealthPointPercent, false, 0, false],
									[STATS.STATS.Prio.Enemy, STATS.STATS.Type.HealthPointPercent, false, 0, false],
									[STATS.STATS.Prio.Offense, STATS.STATS.Type.RepairChargeOffense, false, 0, false],
									[STATS.STATS.Prio.Offense, STATS.STATS.Type.HealthPointPercent, false, 0, false],
									[STATS.STATS.Prio.BattleDuration, null, false, 0, false]
								]
							};
						case 5: // Construction_Yard nokill 10%
							return {
								Name : "CY*",
								Description : "NoKill (farming) priorety.<br>Not working correctly yet.",
								Prio : [
									[STATS.STATS.Prio.DefenseArmored, STATS.STATS.Type.HealthPointPercent, false, 0, false],
									[STATS.STATS.Prio.Defense_Facility, STATS.STATS.Type.HealthPointPercent, false, 0, false],
									[STATS.STATS.Prio.Construction_Yard, STATS.STATS.Type.HealthPointPercent, false, 0.1, true],
									[STATS.STATS.Prio.Enemy, STATS.STATS.Type.HealthPointPercent, true, 0.8, true],
									[STATS.STATS.Prio.Offense, STATS.STATS.Type.RepairChargeOffense, false, 0, false],
									[STATS.STATS.Prio.Offense, STATS.STATS.Type.HealthPointPercent, false, 0, false],
									[STATS.STATS.Prio.BattleDuration, null, false, 0, false]
								]
							};
						default:
							return {
								Name : "live",
								Description : "Shows the current army formation.",
								Prio : []
							};
						}
					},
					selectPrio : function (stats, prio /*[this.Prio, this.Type, Negate/Boolean, Limit/0.0-1.0/%, NoKill/Boolean]*/) {
						switch (prio[0]) {
						case this.Prio.Enemy:
							return this._selectType(stats.Enemy.Overall, prio);
						case this.Prio.Structure:
							return this._selectType(stats.Enemy.Structure, prio);
						case this.Prio.Construction_Yard:
							return this._selectType(stats.Enemy.Construction_Yard, prio);
						case this.Prio.Command_Center:
							return this._selectType(stats.Enemy.Command_Center, prio);
						case this.Prio.Barracks:
							return this._selectType(stats.Enemy.Barracks, prio);
						case this.Prio.Factory:
							return this._selectType(stats.Enemy.Factory, prio);
						case this.Prio.Airport:
							return this._selectType(stats.Enemy.Airport, prio);
						case this.Prio.Defense_Facility:
							return this._selectType(stats.Enemy.Defense_Facility, prio);
						case this.Prio.Defense_HQ:
							return this._selectType(stats.Enemy.Defense_HQ, prio);
						case this.Prio.Support:
							return this._selectType(stats.Enemy.Support, prio);
						case this.Prio.Defense:
							return this._selectType(stats.Enemy.Defense, prio);
						case this.Prio.DefenseArmored:
							return this._selectType(stats.Enemy.DefenseArmored, prio);
						case this.Prio.DefenseNonArmored:
							return this._selectType(stats.Enemy.DefenseNonArmored, prio);
						case this.Prio.Offense:
							return this._selectType(stats.Offense.Overall, prio);
						case this.Prio.Infantry:
							return this._selectType(stats.Offense.Infantry, prio);
						case this.Prio.Vehicle:
							return this._selectType(stats.Offense.Vehicle, prio);
						case this.Prio.Aircraft:
							return this._selectType(stats.Offense.Aircraft, prio);
						case this.Prio.BattleDuration:
							return this._calcBattleDuration(stats.BattleDuration, prio);
						case this.Prio.AutoRepair:
							return this._selectType(stats.Enemy.DefenseArmored, prio);
						default:
							return Number.MAX_VALUE;
						}
					},
					_selectType : function (entity, prio) {
						switch (prio[1]) {
						case this.Type.HealthPointPercent:
							return this._calcHealthPoints(entity.HealthPoints, prio);
						case this.Type.RepairChargeBase:
							return entity.Resource[ClientLib.Base.EResourceType.RepairChargeBase] * (prio[2] ? -1 : 1); // Negate
						case this.Type.RepairChargeOffense:
							return Math.max(
								entity.Resource[ClientLib.Base.EResourceType.RepairChargeAir],
								entity.Resource[ClientLib.Base.EResourceType.RepairChargeInf],
								entity.Resource[ClientLib.Base.EResourceType.RepairChargeVeh]) * (prio[2] ? -1 : 1); // Negate
						case this.Type.RepairCosts:
						case this.Type.Loot:
							return this._calcCosts(entity.Resource, prio);
						case this.Type.HealthPointAutoRepairPercent:
							return this._calcHealthPointsAutoRepair(entity.HealthPoints, prio);
						default:
							return Number.MAX_VALUE;
						}
					},
					_calcCosts : function (Resource /*{ ClientLib.Base.EResourceType.Tiberium: 0, ClientLib.Base.EResourceType.Crystal: 0, ClientLib.Base.EResourceType.Credits: 0, ClientLib.Base.EResourceType.ResearchPoints: 0 }*/, prio) {
						var costs = Resource[ClientLib.Base.EResourceType.Tiberium] +
							Resource[ClientLib.Base.EResourceType.Crystal] +
							Resource[ClientLib.Base.EResourceType.Credits] +
							Resource[ClientLib.Base.EResourceType.ResearchPoints];
						return costs * (prio[2] ? -1 : 1); // Negate
					},
					_calcHealthPoints : function (HealthPoints /*{ max: 0, end: 0 }*/, prio) { //Todo: better front value selection
						var result = HealthPoints.end + HealthPoints.endFront;
						if (HealthPoints.end < (prio[3] * HealthPoints.max)) // Limit
							result = (prio[3] * (HealthPoints.max + HealthPoints.maxFront));
						if (prio[4] === true && !HealthPoints.end) // NoKill
							result = HealthPoints.max + HealthPoints.maxFront;
						if (result > (HealthPoints.max + HealthPoints.maxFront)) // max 1
							result = (HealthPoints.max + HealthPoints.maxFront);
						if (result < 0) // min 0
							result = 0;
						switch (prio[0]) { // Negate Offense
						case this.Prio.Offense:
						case this.Prio.Infantry:
						case this.Prio.Vehicle:
						case this.Prio.Aircraft:
							result = -1 * result;
							break;
						}
						return result * (prio[2] ? -1 : 1); // Negate
					},
					_calcHealthPointsAutoRepair : function (HealthPoints /*{ max: 0, end: 0 }*/, prio) { //Todo: better front value selection
						var result = HealthPoints.end + HealthPoints.rep + HealthPoints.endFront;
						if ((HealthPoints.end + HealthPoints.rep) < (prio[3] * HealthPoints.max)) // Limit
							result = (prio[3] * (HealthPoints.max + HealthPoints.maxFront));
						if (prio[4] === true && (HealthPoints.end + HealthPoints.rep) !== 0) // NoKill
							result = HealthPoints.max + HealthPoints.maxFront;
						if (result > (HealthPoints.max + HealthPoints.maxFront)) // max 1
							result = (HealthPoints.max + HealthPoints.maxFront);
						if (result < 0) // min 0
							result = 0;
						switch (prio[0]) { // Negate Offense
						case this.Prio.Offense:
						case this.Prio.Infantry:
						case this.Prio.Vehicle:
						case this.Prio.Aircraft:
							result = -1 * result;
							break;
						}
						return result * (prio[2] ? -1 : 1); // Negate
					},
					_calcBattleDuration : function (BattleDuration /*int*/, prio) {
						var result = BattleDuration,
							max = 120000;
						if (result < (prio[3] * max)) // Limit
							result = (prio[3] * max);
						if (result > max) // max 1
							result = max;
						if (result < 0) // min 0
							result = 0;
						return result * (prio[2] ? -1 : 1); // Negate
					}
				},
				properties : {
					BattleDuration : {
						check : "Number",
						init : 0,
						event : "changeBattleDuration"
					}
				},
				members : {
					Enemy : null,
					Offense : null,
					setAny : function (data) {
						if (data.BattleDuration !== undefined && data.BattleDuration !== this.getBattleDuration())
							this.setBattleDuration(data.BattleDuration);
						//Entity.HealthPoints
						if (data.Enemy.Overall.HealthPoints !== undefined)
							this.Enemy.Overall.HealthPoints.setAny(data.Enemy.Overall.HealthPoints);
						if (data.Enemy.Structure.HealthPoints !== undefined)
							this.Enemy.Structure.HealthPoints.setAny(data.Enemy.Structure.HealthPoints);
						if (data.Enemy.Construction_Yard.HealthPoints !== undefined)
							this.Enemy.Construction_Yard.HealthPoints.setAny(data.Enemy.Construction_Yard.HealthPoints);
						if (data.Enemy.Command_Center.HealthPoints !== undefined)
							this.Enemy.Command_Center.HealthPoints.setAny(data.Enemy.Command_Center.HealthPoints);
						if (data.Enemy.Barracks.HealthPoints !== undefined)
							this.Enemy.Barracks.HealthPoints.setAny(data.Enemy.Barracks.HealthPoints);
						if (data.Enemy.Factory.HealthPoints !== undefined)
							this.Enemy.Factory.HealthPoints.setAny(data.Enemy.Factory.HealthPoints);
						if (data.Enemy.Airport.HealthPoints !== undefined)
							this.Enemy.Airport.HealthPoints.setAny(data.Enemy.Airport.HealthPoints);
						if (data.Enemy.Defense_Facility.HealthPoints !== undefined)
							this.Enemy.Defense_Facility.HealthPoints.setAny(data.Enemy.Defense_Facility.HealthPoints);
						if (data.Enemy.Defense_HQ.HealthPoints !== undefined)
							this.Enemy.Defense_HQ.HealthPoints.setAny(data.Enemy.Defense_HQ.HealthPoints);
						if (data.Enemy.Support.HealthPoints !== undefined)
							this.Enemy.Support.HealthPoints.setAny(data.Enemy.Support.HealthPoints);
						if (data.Enemy.Defense.HealthPoints !== undefined)
							this.Enemy.Defense.HealthPoints.setAny(data.Enemy.Defense.HealthPoints);
						if (data.Enemy.DefenseArmored.HealthPoints !== undefined)
							this.Enemy.DefenseArmored.HealthPoints.setAny(data.Enemy.DefenseArmored.HealthPoints);
						if (data.Enemy.DefenseNonArmored.HealthPoints !== undefined)
							this.Enemy.DefenseNonArmored.HealthPoints.setAny(data.Enemy.DefenseNonArmored.HealthPoints);
						if (data.Offense.Overall.HealthPoints !== undefined)
							this.Offense.Overall.HealthPoints.setAny(data.Offense.Overall.HealthPoints);
						if (data.Offense.Infantry.HealthPoints !== undefined)
							this.Offense.Infantry.HealthPoints.setAny(data.Offense.Infantry.HealthPoints);
						if (data.Offense.Vehicle.HealthPoints !== undefined)
							this.Offense.Vehicle.HealthPoints.setAny(data.Offense.Vehicle.HealthPoints);
						if (data.Offense.Aircraft.HealthPoints !== undefined)
							this.Offense.Aircraft.HealthPoints.setAny(data.Offense.Aircraft.HealthPoints);
						//Entity.Resource
						if (data.Enemy.Overall.Resource !== undefined)
							this.Enemy.Overall.Resource.setAny(data.Enemy.Overall.Resource);
						if (data.Enemy.Structure.Resource !== undefined)
							this.Enemy.Structure.Resource.setAny(data.Enemy.Structure.Resource);
						if (data.Enemy.Construction_Yard.Resource !== undefined)
							this.Enemy.Construction_Yard.Resource.setAny(data.Enemy.Construction_Yard.Resource);
						if (data.Enemy.Command_Center.Resource !== undefined)
							this.Enemy.Command_Center.Resource.setAny(data.Enemy.Command_Center.Resource);
						if (data.Enemy.Barracks.Resource !== undefined)
							this.Enemy.Barracks.Resource.setAny(data.Enemy.Barracks.Resource);
						if (data.Enemy.Factory.Resource !== undefined)
							this.Enemy.Factory.Resource.setAny(data.Enemy.Factory.Resource);
						if (data.Enemy.Airport.Resource !== undefined)
							this.Enemy.Airport.Resource.setAny(data.Enemy.Airport.Resource);
						if (data.Enemy.Defense_Facility.Resource !== undefined)
							this.Enemy.Defense_Facility.Resource.setAny(data.Enemy.Defense_Facility.Resource);
						if (data.Enemy.Defense_HQ.Resource !== undefined)
							this.Enemy.Defense_HQ.Resource.setAny(data.Enemy.Defense_HQ.Resource);
						if (data.Enemy.Support.Resource !== undefined)
							this.Enemy.Support.Resource.setAny(data.Enemy.Support.Resource);
						if (data.Enemy.Defense.Resource !== undefined)
							this.Enemy.Defense.Resource.setAny(data.Enemy.Defense.Resource);
						if (data.Enemy.DefenseArmored.Resource !== undefined)
							this.Enemy.DefenseArmored.Resource.setAny(data.Enemy.DefenseArmored.Resource);
						if (data.Enemy.DefenseNonArmored.Resource !== undefined)
							this.Enemy.DefenseNonArmored.Resource.setAny(data.Enemy.DefenseNonArmored.Resource);
						if (data.Offense.Overall.Resource !== undefined)
							this.Offense.Overall.Resource.setAny(data.Offense.Overall.Resource);
						if (data.Offense.Infantry.Resource !== undefined)
							this.Offense.Infantry.Resource.setAny(data.Offense.Infantry.Resource);
						if (data.Offense.Vehicle.Resource !== undefined)
							this.Offense.Vehicle.Resource.setAny(data.Offense.Vehicle.Resource);
						if (data.Offense.Aircraft.Resource !== undefined)
							this.Offense.Aircraft.Resource.setAny(data.Offense.Aircraft.Resource);
					},
					getAny : function () {
						return {
							BattleDuration : this.getBattleDuration(),
							Enemy : {
								Overall : {
									HealthPoints : this.Enemy.Overall.HealthPoints.getAny(),
									Resource : this.Enemy.Overall.Resource.getAny()
								},
								Structure : {
									HealthPoints : this.Enemy.Structure.HealthPoints.getAny(),
									Resource : this.Enemy.Structure.Resource.getAny()
								},
								Construction_Yard : {
									HealthPoints : this.Enemy.Construction_Yard.HealthPoints.getAny(),
									Resource : this.Enemy.Construction_Yard.Resource.getAny()
								},
								Command_Center : {
									HealthPoints : this.Enemy.Command_Center.HealthPoints.getAny(),
									Resource : this.Enemy.Command_Center.Resource.getAny()
								},
								Barracks : {
									HealthPoints : this.Enemy.Barracks.HealthPoints.getAny(),
									Resource : this.Enemy.Barracks.Resource.getAny()
								},
								Factory : {
									HealthPoints : this.Enemy.Factory.HealthPoints.getAny(),
									Resource : this.Enemy.Factory.Resource.getAny()
								},
								Airport : {
									HealthPoints : this.Enemy.Airport.HealthPoints.getAny(),
									Resource : this.Enemy.Airport.Resource.getAny()
								},
								Defense_Facility : {
									HealthPoints : this.Enemy.Defense_Facility.HealthPoints.getAny(),
									Resource : this.Enemy.Defense_Facility.Resource.getAny()
								},
								Defense_HQ : {
									HealthPoints : this.Enemy.Defense_HQ.HealthPoints.getAny(),
									Resource : this.Enemy.Defense_HQ.Resource.getAny()
								},
								Support : {
									HealthPoints : this.Enemy.Support.HealthPoints.getAny(),
									Resource : this.Enemy.Support.Resource.getAny()
								},
								Defense : {
									HealthPoints : this.Enemy.Defense.HealthPoints.getAny(),
									Resource : this.Enemy.Defense.Resource.getAny()
								},
								DefenseArmored : {
									HealthPoints : this.Enemy.DefenseArmored.HealthPoints.getAny(),
									Resource : this.Enemy.DefenseArmored.Resource.getAny()
								},
								DefenseNonArmored : {
									HealthPoints : this.Enemy.DefenseNonArmored.HealthPoints.getAny(),
									Resource : this.Enemy.DefenseNonArmored.Resource.getAny()
								}
							},
							Offense : {
								Overall : {
									HealthPoints : this.Offense.Overall.HealthPoints.getAny(),
									Resource : this.Offense.Overall.Resource.getAny()
								},
								Infantry : {
									HealthPoints : this.Offense.Infantry.HealthPoints.getAny(),
									Resource : this.Offense.Infantry.Resource.getAny()
								},
								Vehicle : {
									HealthPoints : this.Offense.Vehicle.HealthPoints.getAny(),
									Resource : this.Offense.Vehicle.Resource.getAny()
								},
								Aircraft : {
									HealthPoints : this.Offense.Aircraft.HealthPoints.getAny(),
									Resource : this.Offense.Aircraft.Resource.getAny()
								}
							}
						};
					}
				},
				construct : function (data) {
					try {
                        this.base(arguments);
						this.Enemy = {
							Overall : {
								HealthPoints : new STATS.STATS.Entity.HealthPoints(),
								Resource : new STATS.STATS.Entity.Resource()
							},
							Structure : {
								HealthPoints : new STATS.STATS.Entity.HealthPoints(),
								Resource : new STATS.STATS.Entity.Resource()
							},
							Construction_Yard : {
								HealthPoints : new STATS.STATS.Entity.HealthPoints(),
								Resource : new STATS.STATS.Entity.Resource()
							},
							Command_Center : {
								HealthPoints : new STATS.STATS.Entity.HealthPoints(),
								Resource : new STATS.STATS.Entity.Resource()
							},
							Barracks : {
								HealthPoints : new STATS.STATS.Entity.HealthPoints(),
								Resource : new STATS.STATS.Entity.Resource()
							},
							Factory : {
								HealthPoints : new STATS.STATS.Entity.HealthPoints(),
								Resource : new STATS.STATS.Entity.Resource()
							},
							Airport : {
								HealthPoints : new STATS.STATS.Entity.HealthPoints(),
								Resource : new STATS.STATS.Entity.Resource()
							},
							Defense_Facility : {
								HealthPoints : new STATS.STATS.Entity.HealthPoints(),
								Resource : new STATS.STATS.Entity.Resource()
							},
							Defense_HQ : {
								HealthPoints : new STATS.STATS.Entity.HealthPoints(),
								Resource : new STATS.STATS.Entity.Resource()
							},
							Support : {
								HealthPoints : new STATS.STATS.Entity.HealthPoints(),
								Resource : new STATS.STATS.Entity.Resource()
							},
							Defense : {
								HealthPoints : new STATS.STATS.Entity.HealthPoints(),
								Resource : new STATS.STATS.Entity.Resource()
							},
							DefenseArmored : {
								HealthPoints : new STATS.STATS.Entity.HealthPoints(),
								Resource : new STATS.STATS.Entity.Resource()
							},
							DefenseNonArmored : {
								HealthPoints : new STATS.STATS.Entity.HealthPoints(),
								Resource : new STATS.STATS.Entity.Resource()
							}
						};
						this.Offense = {
							Overall : {
								HealthPoints : new STATS.STATS.Entity.HealthPoints(),
								Resource : new STATS.STATS.Entity.Resource()
							},
							Infantry : {
								HealthPoints : new STATS.STATS.Entity.HealthPoints(),
								Resource : new STATS.STATS.Entity.Resource()
							},
							Vehicle : {
								HealthPoints : new STATS.STATS.Entity.HealthPoints(),
								Resource : new STATS.STATS.Entity.Resource()
							},
							Aircraft : {
								HealthPoints : new STATS.STATS.Entity.HealthPoints(),
								Resource : new STATS.STATS.Entity.Resource()
							}
						};

						if (data !== undefined)
							this.setAny(data);
					} catch (e) {
						console.group("CDSIM REAL TIME");
						console.error("Error setting up STATS constructor", e);
						console.groupEnd();
					}
				},
				events : {
					"changeBattleDuration" : "qx.event.type.Data"
				}
			});
			qx.Class.define("STATS.STATS.Entity.HealthPoints", {			//				Entity HealthPoints Objekt
				extend : qx.core.Object,
				properties : {
					max : {
						check : "Number",
						init : 0,
						event : "changeMax"
					},
					start : {
						check : "Number",
						init : 0,
						event : "changeStart"
					},
					end : {
						check : "Number",
						init : 0,
						event : "changeEnd"
					},
					rep : {
						check : "Number",
						init : 0,
						event : "changeRep"
					},
					maxFront : {
						check : "Number",
						init : 0,
						event : "changeMaxFront"
					},
					startFront : {
						check : "Number",
						init : 0,
						event : "changeStartFront"
					},
					endFront : {
						check : "Number",
						init : 0,
						event : "changeEndFront"
					}
				},
				members : {
					setAny : function (data) {
						if (data.max !== undefined && data.max !== this.getMax())
							this.setMax(data.max);
						if (data.start !== undefined && data.start !== this.getStart())
							this.setStart(data.start);
						if (data.end !== undefined && data.end !== this.getEnd())
							this.setEnd(data.end);
						if (data.rep !== undefined && data.rep !== this.getRep())
							this.setRep(data.rep);
						if (data.maxFront !== undefined && data.maxFront !== this.getMaxFront())
							this.setMaxFront(data.maxFront);
						if (data.startFront !== undefined && data.startFront !== this.getStartFront())
							this.setStartFront(data.startFront);
						if (data.endFront !== undefined && data.endFront !== this.getEndFront())
							this.setEndFront(data.endFront);
					},
					getAny : function () {
						return {
							max : this.getMax(),
							start : this.getStart(),
							end : this.getEnd(),
							rep : this.getRep(),
							maxFront : this.getMaxFront(),
							startFront : this.getStartFront(),
							endFront : this.getEndFront()
						};
					}
				},
				construct : function (data) {
					try {
                        this.base(arguments);
						if (data !== undefined)
							this.setAny(data);
					} catch (e) {
						console.group("CDSIM REAL TIME");
						console.error("Error setting up STATS.Entity.HealthPoints constructor", e);
						console.groupEnd();
					}
				},
				events : {
					"changeMax" : "qx.event.type.Data",
					"changeStart" : "qx.event.type.Data",
					"changeEnd" : "qx.event.type.Data",
					"changeMaxFront" : "qx.event.type.Data",
					"changeStartFront" : "qx.event.type.Data",
					"changeEndFront" : "qx.event.type.Data"
				}
			});
			qx.Class.define("STATS.STATS.Entity.Resource", {				//				Entity Ressouce Object
				extend : qx.core.Object,
				properties : { //ClientLib.Base.EResourceType
					Tiberium : {
						check : "Number",
						init : 0,
						event : "changeTiberium"
					},
					Crystal : {
						check : "Number",
						init : 0,
						event : "changeCrystal"
					},
					Credits : {
						check : "Number",
						init : 0,
						event : "changeCredits"
					},
					ResearchPoints : {
						check : "Number",
						init : 0,
						event : "changeResearchPoints"
					},
					RepairChargeBase : {
						check : "Number",
						init : 0,
						event : "changeRepairChargeBase"
					},
					RepairChargeAir : {
						check : "Number",
						init : 0,
						event : "changeRepairChargeAir"
					},
					RepairChargeInf : {
						check : "Number",
						init : 0,
						event : "changeRepairChargeInf"
					},
					RepairChargeVeh : {
						check : "Number",
						init : 0,
						event : "changeRepairChargeVeh"
					}
				},
				members : {
					setAny : function (data) {
						if (data[1] !== undefined && data[1] !== this.getTiberium())
							this.setTiberium(data[1]);
						if (data[2] !== undefined && data[2] !== this.getCrystal())
							this.setCrystal(data[2]);
						if (data[3] !== undefined && data[3] !== this.getCredits())
							this.setCredits(data[3]);
						if (data[6] !== undefined && data[6] !== this.getResearchPoints())
							this.setResearchPoints(data[6]);
						if (data[7] !== undefined && data[7] !== this.getRepairChargeBase())
							this.setRepairChargeBase(data[7]);
						if (data[8] !== undefined && data[8] !== this.getRepairChargeAir())
							this.setRepairChargeAir(data[8]);
						if (data[9] !== undefined && data[9] !== this.getRepairChargeInf())
							this.setRepairChargeInf(data[9]);
						if (data[10] !== undefined && data[10] !== this.getRepairChargeVeh())
							this.setRepairChargeVeh(data[10]);
					},
					getAny : function () {
						return {
							1 : this.getTiberium(),
							2 : this.getCrystal(),
							3 : this.getCredits(),
							6 : this.getResearchPoints(),
							7 : this.getRepairChargeBase(),
							8 : this.getRepairChargeAir(),
							9 : this.getRepairChargeInf(),
							10 : this.getRepairChargeVeh()
						};
					}
				},
				construct : function (data) {
					try {
                        this.base(arguments);
						if (data !== undefined)
							this.setAny(data);
					} catch (e) {
						console.group("CDSIM REAL TIME");
						console.error("Error setting up STATS.Entity.Resource constructor", e);
						console.groupEnd();
					}
				},
				events : {
					"changeTiberium" : "qx.event.type.Data",
					"changeCrystal" : "qx.event.type.Data",
					"changeCredits" : "qx.event.type.Data",
					"changeResearchPoints" : "qx.event.type.Data",
					"changeRepairChargeBase" : "qx.event.type.Data",
					"changeRepairChargeAir" : "qx.event.type.Data",
					"changeRepairChargeInf" : "qx.event.type.Data",
					"changeRepairChargeVeh" : "qx.event.type.Data"
				}
			});
			qx.Class.define("STATS.CACHE", {								// [singleton]	Cache for simulations
				type : "singleton",
				extend : qx.core.Object,
				construct : function () {
					try {
						this.base(arguments);
						this.cities = {};
						this.__Table = new Uint32Array(256);
						var tmp;
						for (var i = 256; i--; ) {
							tmp = i;
							for (var k = 8; k--; ) {
								tmp = tmp & 1 ? 0xEDB88320^(tmp >>> 1) : tmp >>> 1;
							}
							this.__Table[i] = tmp;
						}
					} catch (e) {
						console.group("CDSIM REAL TIME");
						console.error("Error setting up CACHE constructor", e);
						console.groupEnd();
					}
				},
				members : {
					__Table : null,
					cities : null,
					sortByPosition : function (a, b) {
						return a.x - b.x || a.y - b.y || a.i - b.i; // using id as third because of garrison (both units at same position)
					},
					_Crc32 : function (data) { // data = array of bytes 0-255
						var crc = 0xFFFFFFFF;
						for (var i = 0, l = data.length; i < l; i++) {
							crc = (crc >>> 8)^this.__Table[(crc^data[i]) & 0xFF];
						}
						return crc^-1;
					},
					calcUnitsHash : function (units, ownid) { // units = STATS.UTIL.Formation.Get()
						if (units !== null) {
							units.sort(this.sortByPosition);
							var OwnCityId = ((ownid !== undefined && ownid !== null) ? ownid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId()),
								i,
								data = [];
							for (i = 0; i < units.length; i++)
								if (units[i].enabled && units[i].h > 0)
									data.push(units[i].x, units[i].y, units[i].i, units[i].l);
							return OwnCityId.toString() + this._Crc32(data);
						}
						return null;
					},
					check : function (units, cityid, ownid) { // returns { key : "", result : { ownid : 0, cityid: 0, stats : {}, formation : [], combat : {}, valid: true } }
						var CityId = ((cityid !== undefined && cityid !== null) ? cityid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId()),
							OwnCityId = ((ownid !== undefined && ownid !== null) ? ownid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId()),
							Hash = this.calcUnitsHash(units, OwnCityId);
						if (CityId !== null && OwnCityId !== null && Hash !== null) {
							this.__validate(CityId, OwnCityId, Hash);
							return {
								key : Hash,
								result : this.get(Hash, CityId)
							};
						}
						return {
							key : null,
							result : null
						};
					},
					getAll : function (cityid) {
						var CityId = ((cityid !== undefined && cityid !== null) ? cityid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId());
						if (typeof this.cities[CityId] === "undefined")
							this.cities[CityId] = {
								data : {},
								caches : {}
							};
						return this.cities[CityId];
					},
					get : function (key, cityid) { // returns { ownid : 0, cityid: 0, stats : {}, formation : [], combat : {}, valid: true }
						var CityId = ((cityid !== undefined && cityid !== null) ? cityid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId()),
							caches = this.getAll(CityId).caches;
						if (typeof caches[key] !== "undefined" && caches[key].valid)
							return caches[key];
						return null;
					},
					getPrio : function (prios, cityid, ownid) {
						var CityId = ((cityid !== undefined && cityid !== null) ? cityid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId()),
							caches = this.getAll(CityId).caches,
							results = [];
						for (var key in caches) {
							if (ownid === null || ownid === undefined || (ownid !== null && ownid !== undefined && caches[key].ownid == ownid))
								results.push({
									"key" : key,
									result : caches[key]
								});
						}
						results.sort(function (a, b) {
							var result = 0;
							for (var i = 0; i < prios.length; i++) {
								a.diff = result;
								b.diff = result;
								if (result)
									return result;
								else
									result = STATS.STATS.selectPrio(a.result.stats, prios[i]) - STATS.STATS.selectPrio(b.result.stats, prios[i]);
							}
							return result;
						});
						return results;
					},
					getPrio1 : function (prios, cityid, ownid) {
						var result = this.getPrio(prios, cityid, ownid);
						if (result.length === 0)
							result = {
								key : null,
								result : null
							};
						else {
							for (i = 0; i < result.length; i++) {
								if (result[i].result.valid === true) {
									result = result[i];
									break;
								}
							}
							if (Object.prototype.toString.call(result) === "[object Array]")
								result = result[0];
						}
						return result;
					},
					add : function (data, cityid, ownid) { // { key : "", result : { stats : {}, formation : [], combat : {} } }
						var CityId = ((cityid !== undefined && cityid !== null) ? cityid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId()),
							OwnCityId = ((ownid !== undefined && ownid !== null) ? ownid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId()),
							OwnCity = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(OwnCityId),
							caches = this.getAll(CityId).caches;
						caches[data.key] = data.result;
						caches[data.key].cityid = CityId;
						caches[data.key].ownid = OwnCityId;
						if (OwnCity !== null)
							caches[data.key].recovery = OwnCity.get_hasRecovery();
						caches[data.key].valid = true;
						this.onAdd();
					},
					clearAll : function () {
						this.cities = {};
					},
					clear : function (cityid) {
						if (typeof this.cities[cityid] !== "undefined")
							return delete this.cities[cityid];
						return false;
					},
					merge : function (cityid, ownid, data, caches) {
						try {
							var CityId = ((cityid !== undefined && cityid !== null) ? cityid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId()),
								OwnCityId = ((ownid !== undefined && ownid !== null) ? ownid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId()),
								key,
								sim = {
									data : data,
									caches : caches
								};
							for (key in sim.caches) {
								sim.caches[key].cityid = CityId;
								sim.caches[key].ownid = OwnCityId;
								sim.caches[key].recovery = sim.data.recovery;
								sim.caches[key].valid = true;
							}
							this.__validate(CityId, OwnCityId, sim);
							qx.lang.Object.mergeWith(this.getAll(CityId).caches, sim.caches); // overwrite = false?
							this.onAdd();
						} catch (e) {
							console.group("CDSIM REAL TIME");
							console.error("Error in STATS.CACHE.merge", e);
							console.groupEnd();
						}
					},
					getCitySimAmount : function (cityid) {
						var CityId = ((cityid !== undefined && cityid !== null) ? cityid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId());
						if (typeof this.cities[CityId] !== "undefined" && typeof this.cities[CityId]["caches"] !== "undefined")
							return Object.keys(this.cities[CityId].caches).length;
						return 0;
					},
					__validate : function (cityid, ownid, hash) {
						var targetCity = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(cityid),
							ownCity = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(ownid),
							city = (typeof hash != "object" ? this.getAll(cityid) : hash),
							key;

						if (targetCity !== null && targetCity.get_Version() !== -1) {
							var version = targetCity.get_Version();
							if (city.data.version != version) {
								city.data.version = version;
								//invalidate
								for (key in city.caches)
									city.caches[key].valid = false;
							}
						}

						if (ownCity !== null && ownCity.get_Version() !== -1) {
							var alliance = ClientLib.Data.MainData.GetInstance().get_Alliance(),
								recovery = ownCity.get_hasRecovery();

							if (typeof hash != "object" && typeof city.caches[hash] !== "undefined" && city.caches[hash].recovery != recovery)
								city.caches[hash].valid = false;

							if (typeof hash == "object" && city.data.recovery != recovery)
								for (key in city.caches)
									city.caches[key].valid = false;

							if (alliance !== null) {
								if ((city.data.air != alliance.get_POIAirBonus() ||
										city.data.inf != alliance.get_POIInfantryBonus() ||
										city.data.veh != alliance.get_POIVehicleBonus()) &&
									recovery === false) {
									city.data.air = alliance.get_POIAirBonus();
									city.data.inf = alliance.get_POIInfantryBonus();
									city.data.veh = alliance.get_POIVehicleBonus();
									if (targetCity !== null)
										city.data.version = targetCity.get_Version();
									//invalidate
									for (key in city.caches)
										city.caches[key].valid = false;
								}
							}
						}
					},
					onAdd : function () {
						phe.cnc.base.Timer.getInstance().removeListener("uiTick", this.onUiTick, this);
						phe.cnc.base.Timer.getInstance().addListener("uiTick", this.onUiTick, this);
					},
					onUiTick : function () {
						phe.cnc.base.Timer.getInstance().removeListener("uiTick", this.onUiTick, this);
						this.fireEvent("addSimulation");
					}
				},
				events : {
					"addSimulation" : "qx.event.type.Event"
				}
			});
			qx.Class.define("STATS.APISimulation", {						// [singleton]	API Simulation
				type : "singleton",
				extend : qx.core.Object,
				properties : {
					data : {
						check : "Array",
						init : [],
						event : "OnData"
					},
					formation : {
						check : "Array",
						init : []
					},
					formationHash : {
						check : "Array",
						init : []
					},
					lock : {
						check : "Boolean",
						init : false,
						event : "OnLock"
					},
					request : {
						check : "Boolean",
						init : false
					},
					time : {
						check : "Number",
						init : 0,
						event : "OnTime"
					}
				},
				construct : function () {
					try {
                        this.base(arguments);
						this.addListener("OnSimulateBattleFinished", this._OnSimulateBattleFinished, this);
					} catch (e) {
						console.group("CDSIM REAL TIME");
						console.error("Error setting up APISimulation constructor", e);
						console.groupEnd();
					}
				},
				members : {
					__Timeout : null,
					__TimerStart : null,
					SimulateBattle : function () {
						if (!this.getLock()) {
							var CurrentOwnCity = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity(),
								CurrentCity = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
							if (CurrentOwnCity !== null && CurrentCity !== null && CurrentCity.CheckInvokeBattle(CurrentOwnCity, true) == ClientLib.Data.EAttackBaseResult.OK) {
								clearTimeout(this.__Timeout);
								this.__Timeout = setTimeout(this._reset.bind(this), 10000);
								this.resetData();
								this.setLock(true);
								var formation = STATS.UTIL.Formation.Get(),
									armyUnits = [];
								for (var i in formation)
									if (formation[i].enabled && formation[i].h > 0)
										armyUnits.push({
											i : formation[i].id,
											x : formation[i].x,
											y : formation[i].y
										});

								this.setFormation(formation);

								ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("SimulateBattle", {
									battleSetup : {
										d : CurrentCity.get_Id(),
										a : CurrentOwnCity.get_Id(),
										u : armyUnits,
										s : 0
									}
								}, phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, function (a, b) {
									this.__TimerStart = Date.now();
									this._updateTime();
									this.fireDataEvent("OnSimulateBattleFinished", b);
								}), null);
							}
						} else
							this.setRequest(true);
					},
					_OnSimulateBattleFinished : function (e) {
                        if (ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity() === null)
                            return;
						var data = e.getData();
                        if (data === null) return;
                        var	mergedformation = STATS.UTIL.Formation.Merge(this.getFormation(), data.d.a),
							cache = STATS.CACHE.getInstance().check(mergedformation, data.d.di, data.d.ai);
						this.setData(data.e);
						cache.result = {
							stats : STATS.UTIL.Stats.get_Stats(data).getAny(),
							formation : mergedformation,
							combat : data.d
						};
						STATS.CACHE.getInstance().add(cache, data.d.di, data.d.ai);
					},
					_updateTime : function () {
						clearTimeout(this.__Timeout);
						var time = this.__TimerStart + 10000 - Date.now();
						if (time > 0) {
							if (time > 100)
								this.__Timeout = setTimeout(this._updateTime.bind(this), 100);
							else
								this.__Timeout = setTimeout(this._updateTime.bind(this), time);
						} else
							this.__TimerStart = time = 0;
						this.setTime(time);
						if (this.getTime() === 0)
							this._reset();
					},
					_reset : function () {
						this.resetLock();
						this.resetData();
						this.resetTime();
						if (this.getRequest()) {
							this.resetRequest();
							this.SimulateBattle();
						}
					}
				},
				events : {
					"OnData" : "qx.event.type.Data",
					"OnLock" : "qx.event.type.Data",
					"OnSimulateBattleFinished" : "qx.event.type.Data",
					"OnTime" : "qx.event.type.Data"
				}
			});
			qx.Class.define("STATS.PreArmyUnits", {						// [singleton]	Event: OnCityPreArmyUnitsChanged
				type : "singleton",
				extend : qx.core.Object,
				construct : function () {
					try {
                        this.base(arguments);
						phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentOwnChange", ClientLib.Data.CurrentOwnCityChange, this, this.__CurrentOwnCityChange);
						phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentChange", ClientLib.Data.CurrentCityChange, this, this.__CurrentCityChange);
						phe.cnc.Util.attachNetEvent(ClientLib.Vis.VisMain.GetInstance(), "ViewModeChange", ClientLib.Vis.ViewModeChange, this, this.__ViewModeChange);
						if (ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity() !== null)
							this.__CurrentOwnCityChange(0, ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity().get_Id());
						if (ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity() !== null)
							this.__CurrentCityChange(0, ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity().get_Id());
						this.patchSetEnabled();
					} catch (e) {
						console.group("CDSIM REAL TIME");
						console.error("Error setting up PreArmyUnits constructor", e);
						console.groupEnd();
					}
				},
				events : {
					"OnCityPreArmyUnitsChanged" : "qx.event.type.Event"
				},
				members : {
					CurrentCity : null,
					CurrentOwnCity : null,
					CityPreArmyUnits : null,
					__Timeout : null,
					__CurrentOwnCityChange : function (oldId, newId) {
						if (this.CurrentOwnCity !== null && this.CurrentCity !== null && this.CityPreArmyUnits !== null)
							phe.cnc.Util.detachNetEvent(this.CityPreArmyUnits, "ArmyChanged", ClientLib.Data.CityPreArmyUnitsChanged, this, this.__CityPreArmyUnitsChanged);
						var CurrentOwnCity = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(newId);
						if (CurrentOwnCity !== null && CurrentOwnCity.IsOwnBase()) {
							this.CurrentOwnCity = CurrentOwnCity;
							if (this.CurrentCity !== null && ClientLib.Vis.VisMain.GetInstance().get_Mode() === ClientLib.Vis.Mode.CombatSetup) {
								this.CityPreArmyUnits = CurrentOwnCity.get_CityArmyFormationsManager().GetUpdatedFormationByTargetBaseId(this.CurrentCity.get_Id());
								phe.cnc.Util.attachNetEvent(this.CityPreArmyUnits, "ArmyChanged", ClientLib.Data.CityPreArmyUnitsChanged, this, this.__CityPreArmyUnitsChanged);
								this.__CityPreArmyUnitsChanged();
							}
						}
					},
					__CurrentCityChange : function (oldId, newId) {
						if (this.CurrentOwnCity !== null && this.CurrentCity !== null && this.CityPreArmyUnits !== null)
							phe.cnc.Util.detachNetEvent(this.CityPreArmyUnits, "ArmyChanged", ClientLib.Data.CityPreArmyUnitsChanged, this, this.__CityPreArmyUnitsChanged);
						var CurrentCity = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(newId);
						if (CurrentCity !== null && !CurrentCity.IsOwnBase()) {
							this.CurrentCity = CurrentCity;
							if (this.CurrentOwnCity !== null && ClientLib.Vis.VisMain.GetInstance().get_Mode() === ClientLib.Vis.Mode.CombatSetup) {
								this.CityPreArmyUnits = this.CurrentOwnCity.get_CityArmyFormationsManager().GetUpdatedFormationByTargetBaseId(CurrentCity.get_Id());
								phe.cnc.Util.attachNetEvent(this.CityPreArmyUnits, "ArmyChanged", ClientLib.Data.CityPreArmyUnitsChanged, this, this.__CityPreArmyUnitsChanged);
								this.__CityPreArmyUnitsChanged();
							}
						}
					},
					__ViewModeChange : function (oldMode, newMode) {
						if (newMode == ClientLib.Vis.Mode.CombatSetup && this.CurrentCity !== null && this.CurrentOwnCity !== null) {
							this.CityPreArmyUnits = this.CurrentOwnCity.get_CityArmyFormationsManager().GetUpdatedFormationByTargetBaseId(this.CurrentCity.get_Id());
							phe.cnc.Util.attachNetEvent(this.CityPreArmyUnits, "ArmyChanged", ClientLib.Data.CityPreArmyUnitsChanged, this, this.__CityPreArmyUnitsChanged);
							this.__CityPreArmyUnitsChanged();
						} else if (oldMode == ClientLib.Vis.Mode.CombatSetup && this.CityPreArmyUnits !== null) {
							phe.cnc.Util.detachNetEvent(this.CityPreArmyUnits, "ArmyChanged", ClientLib.Data.CityPreArmyUnitsChanged, this, this.__CityPreArmyUnitsChanged);
							this.CityPreArmyUnits = null;
						}
					},
					__CityPreArmyUnitsChanged : function () {
						clearTimeout(this.__Timeout);
						if (this.CurrentCity.get_Version() >= 0 && ClientLib.Vis.VisMain.GetInstance().GetActiveView().get_VisAreaComplete()) {
							this.__Timeout = setTimeout(this._onCityPreArmyUnitsChanged.bind(this), 100);
						} else if (this.CurrentCity.get_Version() == -1 || (this.CurrentCity.get_Version() >= 0 && !ClientLib.Vis.VisMain.GetInstance().GetActiveView().get_VisAreaComplete())) {
							this.__Timeout = setTimeout(this.__CityPreArmyUnitsChanged.bind(this), 100);
						}
					},
					_onCityPreArmyUnitsChanged : function () {
						this.fireEvent("OnCityPreArmyUnitsChanged");
					},
					patchSetEnabled : function () {
						try {
							var set_Enabled = ClientLib.Data.CityPreArmyUnit.prototype.set_Enabled.toString(),
								args = set_Enabled.substring(set_Enabled.indexOf("(") + 1, set_Enabled.indexOf(")")),
								body = set_Enabled.substring(set_Enabled.indexOf("{") + 1, set_Enabled.lastIndexOf("}"));
							body = body + "STATS.PreArmyUnits.getInstance().__CityPreArmyUnitsChanged();";
							/*jslint evil: true */
							ClientLib.Data.CityPreArmyUnit.prototype.set_Enabled = Function(args, body);
							/*jslint evil: false */
						} catch (e) {
							console.group("CDSIM REAL TIME");
							console.error("Error setting up ClientLib.Data.CityPreArmyUnit.prototype.set_Enabled", e);
							console.groupEnd();
						}
					}
				},
				defer : function () {
					STATS.addInit("STATS.PreArmyUnits");
				}
			});
			qx.Class.define("STATS.PreArmyUnits.AutoSimulate", {			// [singleton]	Auto simulate battle
				type : "singleton",
				extend : qx.core.Object,
				construct : function () {
					try {
                        this.base(arguments);
						if (this.getEnabled())
							STATS.PreArmyUnits.getInstance().addListener("OnCityPreArmyUnitsChanged", this.SimulateBattle, this);
					} catch (e) {
						console.group("CDSIM REAL TIME");
						console.error("Error setting up PreArmyUnits.AutoSimulate constructor", e);
						console.groupEnd();
					}
				},
				properties : {
					enabled : {
						check : "Boolean",
						init : STATS.SETTINGS.get("PreArmyUnits.AutoSimulate", true),
						apply : "_applyEnabled",
						event : "changeEnabled"
					}
				},
				members : {
					_applyEnabled : function (newValue) {
						STATS.SETTINGS.set("PreArmyUnits.AutoSimulate", newValue);
						if (newValue === true)
							STATS.PreArmyUnits.getInstance().addListener("OnCityPreArmyUnitsChanged", this.SimulateBattle, this);
						else
							STATS.PreArmyUnits.getInstance().removeListener("OnCityPreArmyUnitsChanged", this.SimulateBattle, this);
					},
					SimulateBattle : function () {
						var formation = STATS.UTIL.Formation.Get();
						if (formation !== null && formation.length > 0) {
							var cache = STATS.CACHE.getInstance().check(formation);
							if (cache.result === null)
								STATS.APISimulation.getInstance().SimulateBattle();
						}
					}
				},
				events : {
					"changeEnabled" : "qx.event.type.Data"
				},
				defer : function () {
					STATS.addInit("STATS.PreArmyUnits.AutoSimulate");
				}
			});
			qx.Class.define("STATS.GUI.ArmySetupAttackBar", {			// [singleton]	Shift and Mirror Buttons
				type : "singleton",
				extend : qx.core.Object,
				include : [qx.locale.MTranslation],
				construct : function () {
					try {
						this.base(arguments);
						this.ArmySetupAttackBar = qx.core.Init.getApplication().getArmySetupAttackBar();

						// Mirror and Shift Buttons left Side (Rows/Wave)
						var i,
							cntWave;
						for (i = 0; i < ClientLib.Base.Util.get_ArmyMaxSlotCountY(); i++) {
						
							if (PerforceChangelist >= 441469) { // 15.4 patch
								cntWave = this.ArmySetupAttackBar.getMainContainer().getChildren()[(i + 3)];
							} else { //old
								   cntWave = this.ArmySetupAttackBar.getMainContainer().getChildren()[(i + 4)];
							}
							cntWave._removeAll();
							cntWave._setLayout(new qx.ui.layout.HBox());
							cntWave._add(this.newSideButton(STATS.RES.IMG.Flip.H, this.tr("Mirrors units horizontally."), this.onClick_btnMirror, "h", i));
							cntWave._add(new qx.ui.core.Spacer(), {
								flex : 1
							});
							cntWave._add(this.newSideButton(STATS.RES.IMG.Arrows.Left, this.tr("Shifts units one space left."), this.onClick_btnShift, "l", i));
							cntWave._add(this.newSideButton(STATS.RES.IMG.Arrows.Right, this.tr("Shifts units one space right."), this.onClick_btnShift, "r", i));
							
						}

						// Mirror and Shift Buttons top
						var formation = this.ArmySetupAttackBar.getMainContainer().getChildren()[1].getChildren()[0],
							btnHBox = new qx.ui.container.Composite(new qx.ui.layout.HBox()),
							btnHBoxouter = new qx.ui.container.Composite(new qx.ui.layout.HBox());
						btnHBoxouter.add(new qx.ui.core.Spacer(), {
							flex : 1
						});
						btnHBoxouter.add(btnHBox);
						btnHBoxouter.add(new qx.ui.core.Spacer(), {
							flex : 1
						});
						this.ArmySetupAttackBar.getChildren()[2].addAt(btnHBoxouter, 0, {
							left : 16,
							top : 2,
							right : 0
						});
                        var formationContainer = this.ArmySetupAttackBar.getMainContainer();
                        formationContainer.setMarginTop(formationContainer.getMarginTop() + 20);
						
						formation.bind("changeWidth", btnHBox, "width");

						for (i = 0; i < ClientLib.Base.Util.get_ArmyMaxSlotCountX(); i++) {
							btnHBox.add(new qx.ui.core.Spacer(), {
								flex : 1
							});
							btnHBox.add(this.newTopButton(STATS.RES.IMG.Flip.V, this.tr("Mirrors units vertically."), this.onClick_btnMirror, "v", i));
							btnHBox.add(new qx.ui.core.Spacer().set({
									width : 2
								}));
							btnHBox.add(this.newTopButton(STATS.RES.IMG.Arrows.Up, this.tr("Shifts units one space up."), this.onClick_btnShift, "u", i));
							btnHBox.add(this.newTopButton(STATS.RES.IMG.Arrows.Down, this.tr("Shifts units one space down."), this.onClick_btnShift, "d", i));
							btnHBox.add(new qx.ui.core.Spacer(), {
								flex : 1
							});
						}
					} catch (e) {
						console.group("CDSIM REAL TIME");
						console.error("Error setting up GUI.ArmySetupAttackBar constructor", e);
						console.groupEnd();
					}
				},
				destruct : function () {},
				members : {
					ArmySetupAttackBar : null,
					newSideButton : function (icon, text, onClick, pos, sel) {
						var btn = new qx.ui.form.ModelButton(null, icon).set({
								toolTipText : text,
								width : 20,
								maxHeight : 25,
								alignY : "middle",
								show : "icon",
								iconPosition : "top",
								appearance : "button-addpoints",
								model : [pos, sel]
							});
						btn.getChildControl("icon").set({
							maxWidth : 16,
							maxHeight : 16,
							scale : true
						});
						btn.addListener("click", onClick, this);
						return btn;
					},
					newTopButton : function (icon, text, onClick, pos, sel) {
						var btn = new qx.ui.form.ModelButton(null, icon).set({
								toolTipText : text,
								width : 25,
								maxHeight : 20,
								alignY : "middle",
								show : "icon",
								iconPosition : "top",
								appearance : "button-addpoints",
								opacity : 0.3,
								model : [pos, sel]
							});
						btn.getChildControl("icon").set({
							maxWidth : 14,
							maxHeight : 14,
							scale : true
						});
						btn.addListener("click", onClick, this);
						btn.addListener("mouseover", function (e) {
							e.getTarget().set({
								opacity : 1.0
							});
						}, this);
						btn.addListener("mouseout", function (e) {
							e.getTarget().set({
								opacity : 0.3
							});
						}, this);
						return btn;
					},
					onClick_btnMirror : function (e) {
						var formation = STATS.UTIL.Formation.Get();
						formation = STATS.UTIL.Formation.Mirror(formation, e.getTarget().getModel()[0], e.getTarget().getModel()[1]);
						STATS.UTIL.Formation.Set(formation);
					},
					onClick_btnShift : function (e) {
						var formation = STATS.UTIL.Formation.Get();
						formation = STATS.UTIL.Formation.Shift(formation, e.getTarget().getModel()[0], e.getTarget().getModel()[1]);
						STATS.UTIL.Formation.Set(formation);
					},
                                        onClick_btnShifts : function (e) {
						var formation = STATS.UTIL.Formation.Get();
						formation = STATS.UTIL.Formation.Shifts(formation, e.getTarget().getModel()[0], e.getTarget().getModel()[1]);
						STATS.UTIL.Formation.Set(formation);
					},
                                        onClick_btnShiftz : function (e) {
						var formation = STATS.UTIL.Formation.Get();
						formation = STATS.UTIL.Formation.Shiftz(formation, e.getTarget().getModel()[0], e.getTarget().getModel()[1]);
						STATS.UTIL.Formation.Set(formation);
					}
				},
				defer : function () {
					STATS.addInit("STATS.GUI.ArmySetupAttackBar");
				}
			});
			qx.Class.define("STATS.GUI.PlayArea", {						// [singleton]	View Simulation, Open Stats Window
				type : "singleton",
				extend : qx.core.Object,
				include : [qx.locale.MTranslation],
				construct : function () {
					try {
                        this.base(arguments);
						this.PlayArea = qx.core.Init.getApplication().getPlayArea();
						this.HUD = this.PlayArea.getHUD();
						var WDG_COMBATSWAPVIEW = this.HUD.getUIItem(ClientLib.Data.Missions.PATH.WDG_COMBATSWAPVIEW);

						//View Simulation
						this.btnSimulation = new webfrontend.ui.SoundButton(null, STATS.RES.IMG.Simulate).set({
								toolTipText : this.tr("View Simulation") + " [NUM 0]",
								width : 44,
								height : 44,
								allowGrowX : false,
								allowGrowY : false,
								appearance : "button-baseviews",
								marginRight : 6
							});
						this.btnSimulation.addListener("click", function () {
							this.onClick_btnSimulation();
						}, this);
						STATS.APISimulation.getInstance().bind("time", this.btnSimulation, "label", {
							converter : function (data) {
								return (data / 1000).toFixed(1);
							}
						});
						STATS.APISimulation.getInstance().addListener("OnSimulateBattleFinished", function () {
							this._updateBtnSimulation();
						}, this);
						STATS.APISimulation.getInstance().addListener("OnTimeChange", function () {
							this._updateBtnSimulation();
						}, this);
						STATS.PreArmyUnits.getInstance().addListener("OnCityPreArmyUnitsChanged", function () {
							this._updateBtnSimulation();
						}, this);
						WDG_COMBATSWAPVIEW.getLayoutParent().addAfter(this.btnSimulation, WDG_COMBATSWAPVIEW);

						//Move Box
						this.boxMove = new qx.ui.container.Composite(new qx.ui.layout.Grid()).set({
								decorator : "pane-light-plain",
				                                opacity : 0.7,
				                                paddingTop : 0,
				                                paddingLeft : 2,
				                                paddingRight : 1,
				                                paddingBottom : 23
							});

						this.boxMove.add(this.newButton(STATS.RES.IMG.Stats, this.tr("Statistic") + " [NUM 7]", this.onClick_btnStats, null, null), {
							row : 0,
							column : 0
						});
						this.boxMove.add(this.newButton(STATS.RES.IMG.Arrows.Up, this.tr("Shifts units one space up.") + " [NUM 8]", this.onClick_btnShift, "u", null), {
							row : 0,
							column : 1
						});
						this.boxMove.add(this.newButton(STATS.RES.IMG.CNCOpt, this.tr("Show current formation with CNCOpt") + " [NUM 9]<br>" + this.tr("Right click: Set formation from CNCOpt Long Link") + "<br>" + this.tr("Remember transported units are not supported."), this.onClick_CNCOpt, null, null), {
							row : 0,
							column : 2
						});
						this.boxMove.add(this.newButton(STATS.RES.IMG.Arrows.Left, this.tr("Shifts units one space left.") + " [NUM 4]", this.onClick_btnShift, "l", null), {
							row : 1,
							column : 0
						});
						this.boxMove.add(this.newButton(STATS.RES.IMG.DisableUnit, this.tr("Enables/Disables all units.") + " [NUM 5]", this.onClick_btnDisable, null, null), {
							row : 1,
							column : 1
						});
						this.boxMove.add(this.newButton(STATS.RES.IMG.Arrows.Right, this.tr("Shifts units one space right.") + " [NUM 6]", this.onClick_btnShift, "r", null), {
							row : 1,
							column : 2
						});
						this.boxMove.add(this.newButton(STATS.RES.IMG.Flip.H, this.tr("Mirrors units horizontally.") + " [NUM 1]", this.onClick_btnMirror, "h", null), {
							row : 2,
							column : 0
						});
						this.boxMove.add(this.newButton(STATS.RES.IMG.Arrows.Down, this.tr("Shifts units one space down.") + " [NUM 2]", this.onClick_btnShift, "d", null), {
							row : 2,
							column : 1
						});
						this.boxMove.add(this.newButton(STATS.RES.IMG.Flip.V, this.tr("Mirrors units vertically.") + " [NUM 3]", this.onClick_btnMirror, "v", null), {
							row : 2,
							column : 2
						});
						this.boxMove.add(this.newButton(STATS.RES.IMG.Offense.Infantry, this.tr("Enables/Disables all infantry units.") + " [NUM *]", this.onClick_btnDisable, ClientLib.Data.EUnitGroup.Infantry, null), {
							row : 3,
							column : 0
						});
						this.boxMove.add(this.newButton(STATS.RES.IMG.Offense.Vehicle, this.tr("Enables/Disables all vehicles.") + " [NUM -]", this.onClick_btnDisable, ClientLib.Data.EUnitGroup.Vehicle, null), {
							row : 3,
							column : 1
						});
						this.boxMove.add(this.newButton(STATS.RES.IMG.Offense.Aircraft, this.tr("Enables/Disables all aircrafts.") + " [NUM +]", this.onClick_btnDisable, ClientLib.Data.EUnitGroup.Aircraft, null), {
							row : 3,
							column : 2
						});
                                                this.boxMove.add(this.newButton(STATS.RES.IMG.one, this.tr("Enables/Disables all infantry units.") + " [NUM *]", this.onClick_btnDisable, ClientLib.Data.EUnitGroup.Infantry, null), {
							row : 4,
							column : 0
						});
						this.boxMove.add(this.newButton(STATS.RES.IMG.two, this.tr("Enables/Disables all vehicles.") + " [NUM -]", this.onClick_btnDisable, ClientLib.Data.EUnitGroup.Vehicle, null), {
							row : 4,
							column : 1
						});
						this.boxMove.add(this.newButton(STATS.RES.IMG.three, this.tr("Enables/Disables all aircrafts.") + " [NUM +]", this.onClick_btnDisable, ClientLib.Data.EUnitGroup.Aircraft, null), {
							row : 4,
							column : 2
						});
                                             
						this.PlayArea.add(this.boxMove, {
							right : 7,
							bottom : 214
						});

						phe.cnc.Util.attachNetEvent(ClientLib.Vis.VisMain.GetInstance(), "ViewModeChange", ClientLib.Vis.ViewModeChange, this, this._onViewChanged);
						this._onViewChanged(ClientLib.Vis.Mode.CombatSetup, null);
					} catch (e) {
						console.group("CDSIM REAL TIME");
						console.error("Error setting up GUI.PlayArea constructor", e);
						console.groupEnd();
					}
				},
				destruct : function () {},
				members : {
					PlayArea : null,
					HUD : null,
					btnSimulation : null,
					btnStats : null,
					boxMove : null,
					onHotKeyPress : function (key) {
						if (!phe.cnc.Util.isEventTargetInputField(key)) {
							var formation = STATS.UTIL.Formation.Get();
							switch (key.getNativeEvent().keyCode) {
							case 96: // NUM 0
								this.onClick_btnSimulation();
								break;
							case 97: // NUM 1
								formation = STATS.UTIL.Formation.Mirror(formation, "h", null);
								STATS.UTIL.Formation.Set(formation);
								break;
							case 98: // NUM 2
								formation = STATS.UTIL.Formation.Shift(formation, "d", null);
								STATS.UTIL.Formation.Set(formation);
								break;
							case 99: // NUM 3
								formation = STATS.UTIL.Formation.Mirror(formation, "v", null);
								STATS.UTIL.Formation.Set(formation);
								break;
							case 100: // NUM 4
								formation = STATS.UTIL.Formation.Shift(formation, "l", null);
								STATS.UTIL.Formation.Set(formation);
								break;
							case 101: // NUM 5
								formation = STATS.UTIL.Formation.toggle_Enabled(formation);
								STATS.UTIL.Formation.Set(formation);
								break;
							case 102: // NUM 6
								formation = STATS.UTIL.Formation.Shift(formation, "r", null);
								STATS.UTIL.Formation.Set(formation);
								break;
							case 103: // NUM 7
								this.onClick_btnStats();
								break;
							case 104: // NUM 8
								formation = STATS.UTIL.Formation.Shift(formation, "u", null);
								STATS.UTIL.Formation.Set(formation);
								break;
							case 105: // NUM 9
								this.onClick_CNCOpt();
								break;
							case 106: // NUM *
								formation = STATS.UTIL.Formation.toggle_Enabled(formation, ClientLib.Data.EUnitGroup.Infantry);
								STATS.UTIL.Formation.Set(formation);
								break;
							case 107: // NUM +
								formation = STATS.UTIL.Formation.toggle_Enabled(formation, ClientLib.Data.EUnitGroup.Aircraft);
								STATS.UTIL.Formation.Set(formation);
								break;
							case 109: // NUM -
								formation = STATS.UTIL.Formation.toggle_Enabled(formation, ClientLib.Data.EUnitGroup.Vehicle);
								STATS.UTIL.Formation.Set(formation);
								break;
							case 110: // NUM ,
								break;
							case 111: // NUM /
								break;
							}
						}
					},
					_onViewChanged : function (oldMode, newMode) {
						if (newMode == ClientLib.Vis.Mode.CombatSetup) {
							this.btnSimulation.show();
							this.boxMove.show();
							qx.bom.Element.addListener(document, "keydown", this.onHotKeyPress, this);
						}
						if (oldMode == ClientLib.Vis.Mode.CombatSetup) {
							this.btnSimulation.hide();
							this.boxMove.hide();
							qx.bom.Element.removeListener(document, "keydown", this.onHotKeyPress, this);
							STATS.APISimulation.getInstance().removeListener("OnSimulateBattleFinished", this.OnSimulateBattleFinished, this);
						}
						if ((newMode == ClientLib.Vis.Mode.CombatSetup || newMode == ClientLib.Vis.Mode.Battleground) && STATS.SETTINGS.get("GUI.Window.Stats.open", true) && !STATS.GUI.Window.Stats.getInstance().isVisible())
							STATS.GUI.Window.Stats.getInstance().open();
					},
					_updateBtnSimulation : function () {
						var formation = STATS.UTIL.Formation.Get();
						if (formation !== null) {
							if (STATS.UTIL.Formation.IsFormationInCache()) {
								this.btnSimulation.setEnabled(true);
								this.btnSimulation.setShow("icon");
							} else {
								this.btnSimulation.setEnabled(!STATS.APISimulation.getInstance().getLock() && STATS.UTIL.Formation.Get().length > 0);
								if (STATS.APISimulation.getInstance().getData().length === 0 || STATS.UTIL.Formation.Get().length === 0)
									this.btnSimulation.setShow("icon");
								else if (this.btnSimulation.getShow() !== "label") {
									this.btnSimulation.setShow("label");
								}
							}
						} else {
							this.btnSimulation.setEnabled(false);
							this.btnSimulation.setShow("icon");
						}
					},
					onClick_btnSimulation : function () {
						var cache = STATS.CACHE.getInstance().check(STATS.UTIL.Formation.Get());
						if (cache.result === null || cache.result.combat === undefined) {
							STATS.APISimulation.getInstance().addListener("OnSimulateBattleFinished", this.OnSimulateBattleFinished, this);
							STATS.APISimulation.getInstance().SimulateBattle();
						} else {
							var CurrentCityId = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity().get_Id();
                            STATS.UTIL.Battleground.StartReplay(CurrentCityId, cache.result.combat);
						}
					},
					OnSimulateBattleFinished : function (data) {
						STATS.APISimulation.getInstance().removeListener("OnSimulateBattleFinished", this.OnSimulateBattleFinished, this);
						var CurrentCityId = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity().get_Id();
                        STATS.UTIL.Battleground.StartReplay(CurrentCityId, data.getData().d);
					},
					onClick_btnStats : function () {
						if (STATS.GUI.Window.Stats.getInstance().isVisible()) {
							STATS.SETTINGS.set("GUI.Window.Stats.open", false);
							STATS.GUI.Window.Stats.getInstance().close();
						} else {
							STATS.SETTINGS.set("GUI.Window.Stats.open", true);
							STATS.GUI.Window.Stats.getInstance().open();
						}
					},
					newButton : function (icon, text, onClick, pos, sel) {
						var btn = new qx.ui.form.ModelButton(null, icon).set({
								toolTipText : text,
								width : 22,
								height : 22,
								show : "icon",
								iconPosition : "top",
								appearance : "button-addpoints",
								model : [pos, sel]
							});
						btn.getChildControl("icon").set({
							maxWidth : 16,
							maxHeight : 16,
							scale : true
						});
						btn.addListener("click", onClick, this);
						return btn;
					},
					onClick_btnMirror : function (e) {
						var formation = STATS.UTIL.Formation.Get();
						formation = STATS.UTIL.Formation.Mirror(formation, e.getTarget().getModel()[0], e.getTarget().getModel()[1]);
						STATS.UTIL.Formation.Set(formation);
					},
					onClick_btnShift : function (e) {
						var formation = STATS.UTIL.Formation.Get();
						formation = STATS.UTIL.Formation.Shift(formation, e.getTarget().getModel()[0], e.getTarget().getModel()[1]);
						STATS.UTIL.Formation.Set(formation);
					},
                                        onClick_btnShifts : function (e) {
						var formation = STATS.UTIL.Formation.Get();
						formation = STATS.UTIL.Formation.Shifts(formation, e.getTarget().getModel()[0], e.getTarget().getModel()[1]);
						STATS.UTIL.Formation.Set(formation);
					},
                                        onClick_btnShiftz : function (e) {
						var formation = STATS.UTIL.Formation.Get();
						formation = STATS.UTIL.Formation.Shiftz(formation, e.getTarget().getModel()[0], e.getTarget().getModel()[1]);
						STATS.UTIL.Formation.Set(formation);
					},
                                        onClick_swapFormation : function (e) {
						var formation = STATS.UTIL.Formation.Get();
						formation = STATS.UTIL.Formation.swapFormation(formation, e.getTarget().getModel()[0], e.getTarget().getModel()[1]);
						STATS.UTIL.Formation.Set(formation);
					},
					onClick_btnDisable : function (e) {
						var formation = STATS.UTIL.Formation.Get();
						formation = STATS.UTIL.Formation.toggle_Enabled(formation, e.getTarget().getModel()[0]);
						STATS.UTIL.Formation.Set(formation);
					},
					onClick_CNCOpt : function (e) {
						if (e.isRightPressed())
							STATS.UTIL.Formation.Set(STATS.UTIL.CNCOpt.parseLink(prompt(this.tr("Enter CNCOpt Long Link:"))));
						else
							qx.core.Init.getApplication().showExternal(STATS.UTIL.CNCOpt.createLink());
					}
				},
				defer : function () {
					STATS.addInit("STATS.GUI.PlayArea");
				}
			});
			qx.Class.define("STATS.GUI.ReportReplayOverlay", {			// [singleton]	Back Button
				type : "singleton",
				extend : qx.core.Object,
				include : [qx.locale.MTranslation],
				construct : function () {
					try {
                        this.base(arguments);
						var qxApp = qx.core.Init.getApplication();
						this.ReportReplayOverlay = qx.core.Init.getApplication().getReportReplayOverlay();

						this.btnBack = new qx.ui.form.Button(qxApp.tr("tnf:back")).set({
								toolTipText : qxApp.tr("tnf:back"),
								width : 53,
								height : 24,
								appearance : "button-friendlist-scroll"
							});
						this.btnBack.addListener("click", this.onClick_btnBack, this);
						this.ReportReplayOverlay.add(this.btnBack, {
							top : 10,
							right : 540
						});

						this.btnSkip = new qx.ui.form.Button(qxApp.tr("Skip")).set({
								toolTipText : qxApp.tr("Skip"),
								width : 52,
								height : 24,
								appearance : "button-friendlist-scroll"
							});
						this.btnSkip.addListener("click", this.onClick_btnSkip, this);
						this.ReportReplayOverlay.add(this.btnSkip, {
							top : 10,
							left : 542
						});
					} catch (e) {
						console.group("CDSIM REAL TIME");
						console.error("Error setting up GUI.ReportReplayOverlay constructor", e);
						console.groupEnd();
					}
				},
				destruct : function () {},
				members : {
					ReportReplayOverlay : null,
					btnBack : null,
					btnSkip : null,
					onClick_btnBack : function () {
						var city = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
						if (city !== null) {
							qx.core.Init.getApplication().getPlayArea().setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense, city.get_Id(), 0, 0);
							ClientLib.Vis.VisMain.GetInstance().get_CombatSetup().SetPosition(0, qx.core.Init.getApplication().getPlayArea().getHUD().getCombatSetupOffset(ClientLib.Vis.CombatSetup.CombatSetupViewMode.Defense));
						}
					},
					onClick_btnSkip : function () {
						if (ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_Simulation !== undefined && ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_Simulation().DoStep !== undefined) {
							while (ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_Simulation().DoStep(false)) {}
							ClientLib.Vis.VisMain.GetInstance().get_Battleground().set_ReplaySpeed(1);
						} else {
							var BattleDuration = ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_BattleDuration(),
								LastBattleTime = ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_LastBattleTime();
							if (LastBattleTime >= BattleDuration)
								ClientLib.Vis.VisMain.GetInstance().get_Battleground().RestartReplay();
							ClientLib.Vis.VisMain.GetInstance().get_Battleground().set_ReplaySpeed(10000);
							phe.cnc.base.Timer.getInstance().addListener("uiTick", this.onTick_btnSkip, this);
						}
					},
					onTick_btnSkip : function () {
						var BattleDuration = ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_BattleDuration(),
							LastBattleTime = ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_LastBattleTime();
						if (LastBattleTime >= BattleDuration) {
							phe.cnc.base.Timer.getInstance().removeListener("uiTick", this.onTick_btnSkip, this);
							ClientLib.Vis.VisMain.GetInstance().get_Battleground().set_ReplaySpeed(1);
						}
					}
				},
				defer : function () {
					STATS.addInit("STATS.GUI.ReportReplayOverlay");
				}
			});
			qx.Class.define("STATS.GUI.Window.Stats", {					// [singleton]	Stats Window
				type : "singleton",
				extend : qx.ui.window.Window,
				construct : function () {
					try {
						this.base(arguments);
						this.set({
							layout : new qx.ui.layout.VBox(),
							caption : "STATS: " + this.tr("Statistic"),
							icon : STATS.RES.IMG.Stats,
							minWidth : 175,
							contentPadding : 4,
							contentPaddingTop : 0,
							contentPaddingBottom : 3,
							allowMaximize : false,
							showMaximize : false,
							allowMinimize : false,
							showMinimize : false,
							resizable : true,
							resizableTop : false,
							resizableBottom : false,
							useResizeFrame : false
						});
						this.moveTo(
							STATS.SETTINGS.get("GUI.Window.Stats.position", [124, 31])[0],
							STATS.SETTINGS.get("GUI.Window.Stats.position", [124, 31])[1]);
						this.addListener("move", function () {
							STATS.SETTINGS.set("GUI.Window.Stats.position", [this.getBounds().left, this.getBounds().top]);
						}, this);
						this.addListener("resize", function () {
							STATS.SETTINGS.set("GUI.Window.Stats.width", this.getWidth());
							this.makeSimView();
						}, this);
						this.addListener("changeHeight", function () {
							if (this.getHeight() !== null)
								this.resetHeight();
						});
						this.addListener("appear", this.onAppear, this);
						this.addListener("close", this.onClose, this);
						this.setWidth(STATS.SETTINGS.get("GUI.Window.Stats.width", 175));
						this.getChildControl("close-button").addListener("execute", function () {
							STATS.SETTINGS.set("GUI.Window.Stats.open", false);
						}, this);
						this.getChildControl("icon").set({
							width : 20,
							height : 20,
							scale : true,
							alignY : "middle"
						});
						this.setStatus("0 " + this.tr("simulations in cache"));

						this.GUI = {
							Battle : new qx.ui.container.Composite(new qx.ui.layout.HBox(-2)).set({
								decorator : "pane-light-plain",
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0
							}),
							Enemy : new qx.ui.container.Composite(new qx.ui.layout.HBox(-2)).set({
								decorator : "pane-light-plain",
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0
							}),
							Repair : new qx.ui.container.Composite(new qx.ui.layout.HBox(-2)).set({
								decorator : "pane-light-plain",
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0
							}),
							Loot : new qx.ui.container.Composite(new qx.ui.layout.HBox(-2)).set({
								decorator : "pane-light-plain",
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0
							}),
							Buttons : new qx.ui.container.Composite(new qx.ui.layout.HBox(-2)).set({
								decorator : "pane-light-plain",
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0
							})
						};
						this.LabelsVBox = {
							Battle : new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({
								width : 29,
								padding : 9,
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0
							}),
							Enemy : new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({
								width : 29,
								padding : 9,
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0
							}),
							Repair : new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({
								width : 29,
								padding : 9,
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0
							}),
							Loot : new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({
								width : 29,
								padding : 9,
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0
							}),
							Buttons : new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({
								width : 29,
								padding : 9,
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0
							})
						};
						this.Label = {
							Battle : {
								Preset : new STATS.GUI.Window.Stats.Atom("P", null, this.tr("Preset")),
								Outcome : new STATS.GUI.Window.Stats.Atom("O", null, this.tr("tnf:combat report")),
								Duration : new STATS.GUI.Window.Stats.Atom("D", null, this.tr("tnf:combat timer npc: %1", "")),
								OwnCity : new STATS.GUI.Window.Stats.Atom("B", null, this.tr("tnf:base")),
								Morale : new STATS.GUI.Window.Stats.Atom("M", null, this.tr("Morale"))
							},
							Enemy : {
								Overall : new STATS.GUI.Window.Stats.Atom(this.tr("tnf:total"), STATS.RES.IMG.Enemy.All),
								Defense : new STATS.GUI.Window.Stats.Atom(this.tr("tnf:defense"), STATS.RES.IMG.Enemy.Defense),
								Structure : new STATS.GUI.Window.Stats.Atom(this.tr("tnf:base"), STATS.RES.IMG.Enemy.Base),
								Construction_Yard : new STATS.GUI.Window.Stats.Atom("CY", null, STATS.RES.getDisplayName(ClientLib.Base.ETechName.Construction_Yard, ClientLib.Base.EFactionType.GDIFaction)),
								Defense_Facility : new STATS.GUI.Window.Stats.Atom("DF", null, STATS.RES.getDisplayName(ClientLib.Base.ETechName.Defense_Facility, ClientLib.Base.EFactionType.GDIFaction)),
								Command_Center : new STATS.GUI.Window.Stats.Atom("CC", null, STATS.RES.getDisplayName(ClientLib.Base.ETechName.Command_Center, ClientLib.Base.EFactionType.GDIFaction)),
								Barracks : new STATS.GUI.Window.Stats.Atom("B", STATS.RES.IMG.Offense.Infantry, STATS.RES.getDisplayName(ClientLib.Base.ETechName.Barracks, ClientLib.Base.EFactionType.GDIFaction)),
								Factory : new STATS.GUI.Window.Stats.Atom("F", STATS.RES.IMG.Offense.Vehicle, STATS.RES.getDisplayName(ClientLib.Base.ETechName.Factory, ClientLib.Base.EFactionType.GDIFaction)),
								Airport : new STATS.GUI.Window.Stats.Atom("A", STATS.RES.IMG.Offense.Aircraft, STATS.RES.getDisplayName(ClientLib.Base.ETechName.Airport, ClientLib.Base.EFactionType.GDIFaction)),
								Support : new STATS.GUI.Window.Stats.Atom("S", null, this.tr("tnf:support"))
							},
							Repair : {
								Storage : new STATS.GUI.Window.Stats.Atom(this.tr("tnf:offense repair time"), STATS.RES.IMG.RepairCharge.Base),
								Overall : new STATS.GUI.Window.Stats.Atom(this.tr("tnf:repair points"), STATS.RES.IMG.RepairCharge.Offense),
								Infantry : new STATS.GUI.Window.Stats.Atom(this.tr("tnf:infantry repair title"), STATS.RES.IMG.RepairCharge.Infantry),
								Vehicle : new STATS.GUI.Window.Stats.Atom(this.tr("tnf:vehicle repair title"), STATS.RES.IMG.RepairCharge.Vehicle),
								Aircraft : new STATS.GUI.Window.Stats.Atom(this.tr("tnf:aircraft repair title"), STATS.RES.IMG.RepairCharge.Aircraft)
							},
							Loot : {
								Tiberium : new STATS.GUI.Window.Stats.Atom(this.tr("tnf:tiberium"), STATS.RES.IMG.Resource.Tiberium),
								Crystal : new STATS.GUI.Window.Stats.Atom(this.tr("tnf:crystals"), STATS.RES.IMG.Resource.Crystal),
								Credits : new STATS.GUI.Window.Stats.Atom(this.tr("tnf:credits"), STATS.RES.IMG.Resource.Credits),
								ResearchPoints : new STATS.GUI.Window.Stats.Atom(this.tr("tnf:research points"), STATS.RES.IMG.Resource.ResearchPoints),
								Overall : new STATS.GUI.Window.Stats.Atom(this.tr("tnf:total") + " " + this.tr("tnf:loot"), STATS.RES.IMG.Resource.Transfer)
							},
							Buttons : {
								View : new STATS.GUI.Window.Stats.Atom(this.tr("View Simulation"), STATS.RES.IMG.Simulate).set({
									marginTop : 1,
									marginBottom : 5
								})
							}
						};
						for (var i in this.GUI) {
							for (var j in this.Label[i])
								this.LabelsVBox[i].add(this.Label[i][j]);
							this.GUI[i].add(this.LabelsVBox[i], {
								flex : 0
							});
						}

						//Enemy Health Section//
						this.EnemyHeader = this.makeHeader(this.tr("tnf:combat target"));
						this.EnemyHeader.addListener("click", function () {
							if (this.GUI.Enemy.isVisible()) {
								this.GUI.Enemy.exclude();
								STATS.SETTINGS.set("GUI.Window.Stats.Enemy.visible", false);
							} else {
								this.GUI.Enemy.show();
								STATS.SETTINGS.set("GUI.Window.Stats.Enemy.visible", true);
							}
						}, this);

						//Repair Section//
						this.RepairHeader = this.makeHeader(this.tr("tnf:own repair cost").replace(":", ""));
						this.RepairHeader.addListener("click", function () {
							if (this.GUI.Repair.isVisible()) {
								this.GUI.Repair.exclude();
								STATS.SETTINGS.set("GUI.Window.Stats.Repair.visible", false);
							} else {
								this.GUI.Repair.show();
								STATS.SETTINGS.set("GUI.Window.Stats.Repair.visible", true);
							}
						}, this);

						//Loot Section//
						this.LootHeader = this.makeHeader(this.tr("tnf:lootable resources:").replace(":", ""));
						this.LootHeader.addListener("click", function () {
							if (this.GUI.Loot.isVisible()) {
								this.GUI.Loot.exclude();
								STATS.SETTINGS.set("GUI.Window.Stats.Loot.visible", false);
							} else {
								this.GUI.Loot.show();
								STATS.SETTINGS.set("GUI.Window.Stats.Loot.visible", true);
							}
						}, this);

						this.add(this.GUI.Battle);
						this.add(this.EnemyHeader);
						this.add(this.GUI.Enemy);
						this.add(this.RepairHeader);
						this.add(this.GUI.Repair);
						this.add(this.LootHeader);
						this.add(this.GUI.Loot);
						this.add(this.GUI.Buttons);
						this.add(this.getChildControl("statusbar"));
						this.getChildControl("statusbar-text").set({
							textColor : "#BBBBBB"
						});
						this.getChildControl("statusbar").add(new qx.ui.core.Spacer(), {
							flex : 1
						});
						var fontsize = qx.theme.manager.Font.getInstance().resolve(this.getChildControl("statusbar-text").getFont()).getSize(),
							lblReset = new qx.ui.basic.Label(this.tr("Reset")).set({
								textColor : "#115274",
								font : new qx.bom.Font("statusbar-text").set({
									size : fontsize,
									decoration : "underline"
								})
							});
						lblReset.addListener("click", function () {
							var CurrentCityId = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId();
							if (CurrentCityId)
								STATS.CACHE.getInstance().clear(CurrentCityId);
						}, this);
						this.getChildControl("statusbar").add(lblReset);

						if (STATS.SETTINGS.get("GUI.Window.Stats.Enemy.visible", true) === false)
							this.GUI.Enemy.exclude();
						if (STATS.SETTINGS.get("GUI.Window.Stats.Repair.visible", true) === false)
							this.GUI.Repair.exclude();
						if (STATS.SETTINGS.get("GUI.Window.Stats.Loot.visible", true) === false)
							this.GUI.Loot.exclude();

						this.simViews = [];

						phe.cnc.Util.attachNetEvent(ClientLib.Vis.VisMain.GetInstance(), "ViewModeChange", ClientLib.Vis.ViewModeChange, this, this._onViewChanged);
					} catch (e) {
						console.group("CDSIM REAL TIME");
						console.error("Error setting up STATS.GUI.Window.Stats constructor", e);
						console.groupEnd();
					}
				},
				destruct : function () {},
				members : {
					GUI : null,
					LabelsVBox : null,
					Label : null,
					EnemyHeader : null,
					RepairHeader : null,
					LootHeader : null,
					simViews : null,
                    StatsChanged : false,
					onAppear : function () {
						phe.cnc.base.Timer.getInstance().addListener("uiTick", this.__onTick, this);
                        STATS.CACHE.getInstance().addListener("addSimulation", this.__updateStats, this);
						STATS.PreArmyUnits.getInstance().addListener("OnCityPreArmyUnitsChanged", this.__updateStats, this);
						phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentOwnChange", ClientLib.Data.CurrentOwnCityChange, this, this.__CurrentCityChange);
						phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentChange", ClientLib.Data.CurrentCityChange, this, this.__CurrentCityChange);
                        this.__updateStats();
					},
					onClose : function () {
						phe.cnc.base.Timer.getInstance().removeListener("uiTick", this.__onTick, this);
                        STATS.CACHE.getInstance().removeListener("addSimulation", this.__updateStats, this);
						STATS.PreArmyUnits.getInstance().removeListener("OnCityPreArmyUnitsChanged", this.__updateStats, this);
						phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentOwnChange", ClientLib.Data.CurrentOwnCityChange, this, this.__CurrentCityChange);
						phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentChange", ClientLib.Data.CurrentCityChange, this, this.__CurrentCityChange);
                        for (var i in this.simViews) {
                            this.simViews[i].resetStats();
                            this.simViews[i].__onTick();
                        }
					},
					__onTick : function () {
                        var CurrentCity = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
						if (!ClientLib.Vis.VisMain.GetInstance().GetActiveView().get_VisAreaComplete() || CurrentCity === null || CurrentCity.get_Version() < 0) return;
                        if (this.StatsChanged) {
                            this.StatsChanged = false;
                            for (var i in this.simViews) {
                                this.simViews[i].updateStats();
                                this.simViews[i].__onTick();
                            }
                        } else {
                            for (var i in this.simViews) {
                                this.simViews[i].__onTick();
                            }
                        }
						this.setStatus(STATS.CACHE.getInstance().getCitySimAmount().toString() + " " + this.tr("simulations in cache"));
					},
                    __updateStats : function () {
                        this.StatsChanged = true;
                    },
                    __CurrentCityChange : function (oldId, newId) {
						if (ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(newId) === null) {
                            for (var i in this.simViews) {
                                this.simViews[i].resetStats();
                            }
                        }
					},
					_onViewChanged : function (oldMode, newMode) {
						if (newMode != ClientLib.Vis.Mode.CombatSetup && newMode != ClientLib.Vis.Mode.Battleground)
							this.close();
					},
					makeHeader : function (text) {
						var Header = new qx.ui.container.Composite(new qx.ui.layout.VBox(5)).set({
								decorator : "pane-light-opaque"
							});
						Header.add(new qx.ui.basic.Label(text).set({
								alignX : "center",
								alignY : "middle",
								paddingTop : -4,
								paddingBottom : 4,
								font : "font_size_13_bold_shadow"
							}));
						return Header;
					},
					makeSimView : function () {
						var i,
							num = Math.round((this.getWidth() - 30) / 75);
						if (this.simViews.length != num) {
							for (i = 0; i < num; i++) {
								if (this.simViews[i] === undefined) {
									this.simViews[i] = new STATS.GUI.Window.Stats.SimView(i, this);
									this.GUI.Battle.add(this.simViews[i].GUI.Battle, {
										flex : 1,
										width : "100%"
									});
									this.GUI.Enemy.add(this.simViews[i].GUI.Enemy, {
										flex : 1,
										width : "100%"
									});
									this.GUI.Repair.add(this.simViews[i].GUI.Repair, {
										flex : 1,
										width : "100%"
									});
									this.GUI.Loot.add(this.simViews[i].GUI.Loot, {
										flex : 1,
										width : "100%"
									});
									this.GUI.Buttons.add(this.simViews[i].GUI.Buttons, {
										flex : 1,
										width : "100%"
									});
								}
							}
							for (i = 0; i < this.simViews.length; i++) {
								if (i >= num) {
									this.GUI.Battle.remove(this.simViews[i].GUI.Battle);
									this.GUI.Enemy.remove(this.simViews[i].GUI.Enemy);
									this.GUI.Repair.remove(this.simViews[i].GUI.Repair);
									this.GUI.Loot.remove(this.simViews[i].GUI.Loot);
									this.GUI.Buttons.remove(this.simViews[i].GUI.Buttons);
								}
							}
							while (this.simViews.length > num)
								this.simViews.splice(num, 1);
							this.__updateLabels();
                            this.__updateStats();
						}
					},
					__updateLabels : function () {
						if (this.simViews.length > 0) {
							var i,
								visibility;

							//Label.Battle.Morale
							visibility = "excluded";
							for (i in this.simViews) {
								if (this.simViews[i].Label.Battle.Morale.getValue() != "100%") {
									visibility = "visible";
									break;
								}
							}
							for (i in this.simViews)
								this.simViews[i].Label.Battle.Morale.setVisibility(visibility);
							this.Label.Battle.Morale.setVisibility(visibility);

							//Label.Enemy.Defense
							visibility = "excluded";
							if (this.simViews[0].Stats.Enemy.Defense.HealthPoints.getMax() > 0)
								visibility = "visible";
							for (i in this.simViews)
								this.simViews[i].Label.Enemy.Defense.setVisibility(visibility);
							this.Label.Enemy.Defense.setVisibility(visibility);

							//Label.Enemy.Defense_Facility
							visibility = "excluded";
							if (this.simViews[0].Stats.Enemy.Defense_Facility.HealthPoints.getMax() > 0)
								visibility = "visible";
							for (i in this.simViews)
								this.simViews[i].Label.Enemy.Defense_Facility.setVisibility(visibility);
							this.Label.Enemy.Defense_Facility.setVisibility(visibility);

							//Label.Enemy.Command_Center
							visibility = "excluded";
							if (this.simViews[0].Stats.Enemy.Command_Center.HealthPoints.getMax() > 0)
								visibility = "visible";
							for (i in this.simViews)
								this.simViews[i].Label.Enemy.Command_Center.setVisibility(visibility);
							this.Label.Enemy.Command_Center.setVisibility(visibility);

							//Label.Enemy.Barracks
							visibility = "excluded";
							if (this.simViews[0].Stats.Enemy.Barracks.HealthPoints.getMax() > 0)
								visibility = "visible";
							for (i in this.simViews)
								this.simViews[i].Label.Enemy.Barracks.setVisibility(visibility);
							this.Label.Enemy.Barracks.setVisibility(visibility);

							//Label.Enemy.Factory
							visibility = "excluded";
							if (this.simViews[0].Stats.Enemy.Factory.HealthPoints.getMax() > 0)
								visibility = "visible";
							for (i in this.simViews)
								this.simViews[i].Label.Enemy.Factory.setVisibility(visibility);
							this.Label.Enemy.Factory.setVisibility(visibility);

							//Label.Enemy.Airport
							visibility = "excluded";
							if (this.simViews[0].Stats.Enemy.Airport.HealthPoints.getMax() > 0)
								visibility = "visible";
							for (i in this.simViews)
								this.simViews[i].Label.Enemy.Airport.setVisibility(visibility);
							this.Label.Enemy.Airport.setVisibility(visibility);

							//Label.Enemy.Support
							visibility = "excluded";
							if (this.simViews[0].Stats.Enemy.Support.HealthPoints.getMax() > 0)
								visibility = "visible";
							for (i in this.simViews)
								this.simViews[i].Label.Enemy.Support.setVisibility(visibility);
							this.Label.Enemy.Support.setVisibility(visibility);
						}
					}
				}
			});
			qx.Class.define("STATS.GUI.Window.Stats.Atom", {				//				Stats Window Atom
				extend : qx.ui.basic.Atom,
				include : [qx.locale.MTranslation],
				construct : function (label, icon, toolTipText, toolTipIcon) {
					try {
						this.base(arguments, label, icon);
						if (label === undefined)
							label = null;
						if (icon === undefined)
							icon = null;
						if (toolTipText === undefined)
							toolTipText = null;
						if (toolTipIcon === undefined)
							toolTipIcon = null;
						var _toolTipText = (toolTipText !== null ? toolTipText : (label !== null ? label : "")),
							_toolTipIcon = (toolTipIcon !== null ? toolTipIcon : (icon !== null ? icon : "")),
							_show = (toolTipIcon !== null || icon !== null ? "icon" : (toolTipText !== null || label !== null ? "label" : "both"));
						this.initAlignX("center");
						this.initAlignY("middle");
						this.initGap(0);
						this.initIconPosition("top");
						this.initMinHeight(18);
						this.initToolTipText(_toolTipText);
						this.initToolTipIcon(_toolTipIcon);
						this.initShow(_show);
						this.setAlignX("center");
						this.setAlignY("middle");
						this.setGap(0);
						this.setIconPosition("top");
						this.setMinHeight(18);
						this.setToolTipText(_toolTipText);
						this.setToolTipIcon(_toolTipIcon);
						this.setShow(_show);
						this.getChildControl("icon").set({
							width : 18,
							height : 18,
							scale : true,
							alignY : "middle"
						});
					} catch (e) {
						console.group("CDSIM REAL TIME");
						console.error("Error setting up STATS.GUI.Window.Stats.Atom constructor", e);
						console.groupEnd();
					}
				}
			});
			qx.Class.define("STATS.GUI.Window.Stats.SimView", {			//				Simulation View Objekt
				extend : qx.core.Object,
				include : [qx.locale.MTranslation],
				construct : function (num, window) {
					try {
                        this.base(arguments);
						var i,
							j,
							defaultPreset = STATS.SETTINGS.get("GUI.Window.Stats.SimView." + num, STATS.STATS.getPreset(num));
						if (defaultPreset.Name === undefined)
							defaultPreset = STATS.SETTINGS.set("GUI.Window.Stats.SimView." + num, STATS.STATS.getPreset(num)); // Reset Settings (if no Name)
						if (defaultPreset.Description === undefined)
							defaultPreset = STATS.SETTINGS.set("GUI.Window.Stats.SimView." + num, STATS.STATS.getPreset(num)); // Reset Settings (if no Description)
						this.Num = num;
						this.Window = window;
						this.Cache = {};
						this.Stats = new STATS.STATS();
						this.Name = defaultPreset.Name;
						this.Description = defaultPreset.Description;
						this.Prio = defaultPreset.Prio;
						this.GUI = {
							Battle : new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({
								//padding : 5,
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0,
								decorator : "pane-light-opaque"
							}),
							Enemy : new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({
								//padding : 5,
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0,
								decorator : "pane-light-opaque"
							}),
							Repair : new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({
								//padding : 5,
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0,
								decorator : "pane-light-opaque"
							}),
							Loot : new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({
								//padding : 5,
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0,
								decorator : "pane-light-opaque"
							}),
							Buttons : new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({
								//padding : 5,
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0,
								decorator : "pane-light-opaque"
							})
						};
						this.Label = {
							Battle : {
								Preset : new qx.ui.basic.Label(this.tr(this.Name)).set({
									alignX : "center",
									alignY : "middle",
									minHeight : 18,
									toolTipText : this.tr(this.Description)
								}),
								Outcome : new qx.ui.basic.Atom("-", null).set({
									alignX : "center",
									alignY : "middle",
									gap : 0,
									iconPosition : "top",
									minHeight : 18,
									show : "label"
								}),
								Duration : new qx.ui.basic.Label("-:--").set({
									alignX : "center",
									alignY : "middle",
									minHeight : 18
								}),
								OwnCity : new qx.ui.basic.Label("-").set({
									alignX : "center",
									alignY : "middle",
									minHeight : 18
								}),
								Morale : new qx.ui.basic.Label("-").set({
									alignX : "center",
									alignY : "middle",
									minHeight : 18
								})
							},
							Enemy : {
								Overall : new STATS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Enemy",
									subType : "HealthPointsAbs"
								}),
								Defense : new STATS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Enemy",
									subType : "HealthPointsAbs"
								}),
								Structure : new STATS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Enemy",
									subType : "HealthPointsAbs"
								}),
								Construction_Yard : new STATS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Enemy",
									subType : "HealthPointsAbs"
								}),
								Defense_Facility : new STATS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Enemy",
									subType : "HealthPointsAbs"
								}),
								Command_Center : new STATS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Enemy",
									subType : "HealthPointsAbs"
								}),
								Barracks : new STATS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Enemy",
									subType : "HealthPointsAbs"
								}),
								Factory : new STATS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Enemy",
									subType : "HealthPointsAbs"
								}),
								Airport : new STATS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Enemy",
									subType : "HealthPointsAbs"
								}),
								Support : new STATS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Enemy",
									subType : "HealthPointsAbs"
								})
							},
							Repair : {
								Storage : new STATS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Repair",
									subType : "RepairStorage"
								}),
								Overall : new STATS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Repair",
									subType : "RepairCharge"
								}),
								Infantry : new STATS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Repair",
									subType : "RepairCharge"
								}),
								Vehicle : new STATS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Repair",
									subType : "RepairCharge"
								}),
								Aircraft : new STATS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Repair",
									subType : "RepairCharge"
								})
							},
							Loot : {
								Tiberium : new STATS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Loot",
									subType : "Tiberium"
								}),
								Crystal : new STATS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Loot",
									subType : "Crystal"
								}),
								Credits : new STATS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Loot",
									subType : "Credits"
								}),
								ResearchPoints : new STATS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Loot",
									subType : "ResearchPoints"
								}),
								Overall : new STATS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Loot",
									subType : "Resource"
								})
							},
							Buttons : {
								View : new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({
									allowGrowX : true,
									marginLeft : 0,
									marginRight : 0
								})
							}
						};
						this.Label.Battle.Outcome.getChildControl("icon").set({
							width : 18,
							height : 18,
							scale : true,
							alignY : "middle"
						});
						this.Label.Repair.Overall.getContentElement().setStyle("text-shadow", "0 0 3pt");
						for (i in this.GUI) {
							for (j in this.Label[i]) {
								this.GUI[i].add(this.Label[i][j], {
									flex : 1,
									right : 0
								});
							}
							this.GUI[i].addListener("dblclick", this.loadFormation, this);
						}
						this.Stats.addListener("changeBattleDuration", this.__updateBattleDuration.bind(this, this.Label.Battle.Duration));
						for (i in this.Stats.Enemy) {
							if (this.Label.Enemy.hasOwnProperty(i)) {
								if (this.Stats.Enemy[i].hasOwnProperty("HealthPoints")) {
									this.Stats.Enemy[i].HealthPoints.bind("max", this.Label.Enemy[i].HealthPoints, "max");
									this.Stats.Enemy[i].HealthPoints.bind("start", this.Label.Enemy[i].HealthPoints, "start");
									this.Stats.Enemy[i].HealthPoints.bind("end", this.Label.Enemy[i].HealthPoints, "end");
									if (i == "Overall") {
										for (j in this.Label.Loot) {
											this.Stats.Enemy[i].HealthPoints.bind("max", this.Label.Loot[j].HealthPoints, "max");
											this.Stats.Enemy[i].HealthPoints.bind("start", this.Label.Loot[j].HealthPoints, "start");
											this.Stats.Enemy[i].HealthPoints.bind("end", this.Label.Loot[j].HealthPoints, "end");
										}
									}
								}
								if (this.Stats.Enemy[i].hasOwnProperty("Resource")) {
									this.Stats.Enemy[i].Resource.bind("Tiberium", this.Label.Enemy[i].Resource, "Tiberium");
									this.Stats.Enemy[i].Resource.bind("Crystal", this.Label.Enemy[i].Resource, "Crystal");
									this.Stats.Enemy[i].Resource.bind("Credits", this.Label.Enemy[i].Resource, "Credits");
									this.Stats.Enemy[i].Resource.bind("ResearchPoints", this.Label.Enemy[i].Resource, "ResearchPoints");
									this.Stats.Enemy[i].Resource.bind("RepairChargeBase", this.Label.Enemy[i].Resource, "RepairChargeBase");
									this.Stats.Enemy[i].Resource.bind("RepairChargeAir", this.Label.Enemy[i].Resource, "RepairChargeAir");
									this.Stats.Enemy[i].Resource.bind("RepairChargeInf", this.Label.Enemy[i].Resource, "RepairChargeInf");
									this.Stats.Enemy[i].Resource.bind("RepairChargeVeh", this.Label.Enemy[i].Resource, "RepairChargeVeh");
									if (i == "Overall") {
										for (j in this.Label.Loot) {
											this.Stats.Enemy[i].Resource.bind("Tiberium", this.Label.Loot[j].Resource, "Tiberium");
											this.Stats.Enemy[i].Resource.bind("Crystal", this.Label.Loot[j].Resource, "Crystal");
											this.Stats.Enemy[i].Resource.bind("Credits", this.Label.Loot[j].Resource, "Credits");
											this.Stats.Enemy[i].Resource.bind("ResearchPoints", this.Label.Loot[j].Resource, "ResearchPoints");
											this.Stats.Enemy[i].Resource.bind("RepairChargeBase", this.Label.Loot[j].Resource, "RepairChargeBase");
											this.Stats.Enemy[i].Resource.bind("RepairChargeAir", this.Label.Loot[j].Resource, "RepairChargeAir");
											this.Stats.Enemy[i].Resource.bind("RepairChargeInf", this.Label.Loot[j].Resource, "RepairChargeInf");
											this.Stats.Enemy[i].Resource.bind("RepairChargeVeh", this.Label.Loot[j].Resource, "RepairChargeVeh");
										}
									}
								}
							}
						}
						for (i in this.Stats.Offense) {
							if (this.Label.Repair.hasOwnProperty(i)) {
								if (this.Stats.Offense[i].hasOwnProperty("HealthPoints")) {
									this.Stats.Offense[i].HealthPoints.bind("max", this.Label.Repair[i].HealthPoints, "max");
									this.Stats.Offense[i].HealthPoints.bind("start", this.Label.Repair[i].HealthPoints, "start");
									this.Stats.Offense[i].HealthPoints.bind("end", this.Label.Repair[i].HealthPoints, "end");
								}
								if (this.Stats.Offense[i].hasOwnProperty("Resource")) {
									this.Stats.Offense[i].Resource.bind("Tiberium", this.Label.Repair[i].Resource, "Tiberium");
									this.Stats.Offense[i].Resource.bind("Crystal", this.Label.Repair[i].Resource, "Crystal");
									this.Stats.Offense[i].Resource.bind("Credits", this.Label.Repair[i].Resource, "Credits");
									this.Stats.Offense[i].Resource.bind("ResearchPoints", this.Label.Repair[i].Resource, "ResearchPoints");
									this.Stats.Offense[i].Resource.bind("RepairChargeBase", this.Label.Repair[i].Resource, "RepairChargeBase");
									this.Stats.Offense[i].Resource.bind("RepairChargeAir", this.Label.Repair[i].Resource, "RepairChargeAir");
									this.Stats.Offense[i].Resource.bind("RepairChargeInf", this.Label.Repair[i].Resource, "RepairChargeInf");
									this.Stats.Offense[i].Resource.bind("RepairChargeVeh", this.Label.Repair[i].Resource, "RepairChargeVeh");
								}
							}
						}

						var ButtonAPISim = new qx.ui.form.ModelButton(null, STATS.RES.IMG.Simulate).set({
								maxHeight : 22,
								minWidth : 22,
								toolTipText : this.tr("tnf:refresh"),
								show : "icon",
								iconPosition : "top",
								appearance : "button-addpoints"
							});
						ButtonAPISim.getChildControl("icon").set({
							maxWidth : 16,
							maxHeight : 16,
							scale : true
						});
						ButtonAPISim.addListener("click", function () {
							this.loadFormation();
							STATS.APISimulation.getInstance().SimulateBattle();
						}, this);
						this.Label.Buttons.View.add(ButtonAPISim);

						var ButtonPlay = new qx.ui.form.ModelButton(null, STATS.RES.IMG.Arrows.Right).set({
								maxHeight : 22,
								minWidth : 22,
								toolTipText : this.tr("View Simulation"),
								show : "icon",
								iconPosition : "top",
								appearance : "button-addpoints"
							});
						ButtonPlay.getChildControl("icon").set({
							maxWidth : 16,
							maxHeight : 16,
							scale : true
						});
						ButtonPlay.addListener("click", this.playReplay, this);
						this.Label.Buttons.View.add(ButtonPlay);
					} catch (e) {
						console.group("CDSIM REAL TIME");
						console.error("Error setting up GUI.Window.Stats.SimView constructor", e);
						console.groupEnd();
					}
				},
				destruct : function () {},
				members : {
					Num : null,
					Window : null,
					GUI : null,
					Label : null,
					Cache : null,
					Stats : null,
                    StatsChanged : false,
					Prio : null,
					Name : null,
					Description : null,
					updateStats : function () {
						var i,
							cache = null,
							CurrentCity = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
						if (CurrentCity !== null && CurrentCity.get_Version() !== -1 && ClientLib.Vis.VisMain.GetInstance().GetActiveView().get_VisAreaComplete()) {
							if (this.Prio.length === 0)
								cache = STATS.CACHE.getInstance().check(STATS.UTIL.Formation.Get());
							else
								cache = STATS.CACHE.getInstance().getPrio1(this.Prio);
						}

						if (cache !== null && cache.result !== null) {
							this.Cache = cache;
							this.Stats.setAny(cache.result.stats);
                            this.StatsChanged = true;
							this.__updateBattleOutcome();
							this.__updateBattleOwnCity();
							this.__updateBattleMoral();
							this.Window.__updateLabels();
						}

						if (typeof this.Cache["key"] !== "undefined" && typeof this.Cache["result"] !== "undefined" && typeof this.Cache.result["ownid"] !== "undefined") {
							if (CurrentCity !== null &&
								CurrentCity.get_Version() !== -1 &&
								ClientLib.Vis.VisMain.GetInstance().GetActiveView().get_VisAreaComplete() &&
								this.Cache.key === STATS.CACHE.getInstance().calcUnitsHash(STATS.UTIL.Formation.Get(), this.Cache.result.ownid)) {
								for (i in this.GUI) {
									this.GUI[i].setDecorator("pane-light-opaque");
									this.GUI[i].setOpacity(1);
								}
							} else {
								for (i in this.GUI) {
									this.GUI[i].setDecorator("pane-light-plain");
									this.GUI[i].setOpacity(0.7);
								}
							}
						}
					},
					resetStats : function () {
						this.Cache = {};
						this.Stats.setAny((new STATS.STATS()).getAny());
                        this.StatsChanged = true;
						this.__updateBattleOutcome();
						this.__updateBattleOwnCity();
						this.__updateBattleMoral();
						this.Window.__updateLabels();
						for (var i in this.GUI) {
							this.GUI[i].setDecorator("pane-light-opaque");
							this.GUI[i].setOpacity(1);
						}
					},
					loadFormation : function () {
						if (typeof this.Cache["result"] !== "undefined" && typeof this.Cache.result["formation"] !== "undefined" && typeof this.Cache.result["ownid"] !== "undefined") {
							ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentOwnCityId(this.Cache.result.ownid);
							STATS.UTIL.Formation.Set(this.Cache.result.formation);
						}
					},
					playReplay : function () {
                        STATS.UTIL.Battleground.StartReplay(this.Cache.result.cityid, this.Cache.result.combat);
					},
					__updateBattleOutcome : function () {
						if (Object.getOwnPropertyNames(this.Cache).length === 0) {
							this.Label.Battle.Outcome.setShow("label");
							this.Label.Battle.Outcome.resetIcon();
							this.Label.Battle.Outcome.resetToolTipIcon();
							this.Label.Battle.Outcome.resetToolTipText();
						} else if (this.Label.Repair.Overall.HealthPoints.getEnd() <= 0) {
							this.Label.Battle.Outcome.setIcon(STATS.RES.IMG.Outcome.total_defeat);
							this.Label.Battle.Outcome.setToolTipIcon(STATS.RES.IMG.Outcome.total_defeat);
							this.Label.Battle.Outcome.setToolTipText(this.tr("tnf:total defeat"));
							this.Label.Battle.Outcome.setShow("icon");
						} else if (this.Label.Enemy.Overall.HealthPoints.getEnd() <= 0) {
							this.Label.Battle.Outcome.setIcon(STATS.RES.IMG.Outcome.total_victory);
							this.Label.Battle.Outcome.setToolTipIcon(STATS.RES.IMG.Outcome.total_victory);
							this.Label.Battle.Outcome.setToolTipText(this.tr("tnf:total victory"));
							this.Label.Battle.Outcome.setShow("icon");
						} else {
							this.Label.Battle.Outcome.setIcon(STATS.RES.IMG.Outcome.victory);
							this.Label.Battle.Outcome.setToolTipIcon(STATS.RES.IMG.Outcome.victory);
							this.Label.Battle.Outcome.setToolTipText(this.tr("tnf:victory"));
							this.Label.Battle.Outcome.setShow("icon");
						}
					},
					__updateBattleDuration : function (label, e) {
						label.setValue(e.getData() > 0 ? phe.cnc.Util.getTimespanString(e.getData() / 1000) : "-:--");
					},
					__updateBattleOwnCity : function () {
						if (typeof this.Cache["result"] !== "undefined" && typeof this.Cache.result["ownid"] !== "undefined") {
							var ownCity = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.Cache.result.ownid);
							if (ownCity !== null)
								this.Label.Battle.OwnCity.setValue(ownCity.get_Name());
							else
								this.Label.Battle.OwnCity.resetValue();
						} else
							this.Label.Battle.OwnCity.resetValue();
					},
					__updateBattleMoral : function () {
						if (typeof this.Cache["result"] !== "undefined" && typeof this.Cache.result["cityid"] !== "undefined" && typeof this.Cache.result["ownid"] !== "undefined") {
							var CurrentCity = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.Cache.result.cityid),
								OwnCity = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.Cache.result.ownid);
							if (CurrentCity !== null && OwnCity !== null) {
								var MoralSignType = ClientLib.Base.Util.GetMoralSignType(OwnCity.get_LvlOffense(), CurrentCity.get_LvlBase()),
									moral = 100;
								if (ClientLib.Data.MainData.GetInstance().get_Server().get_CombatUseMoral() && CurrentCity.IsNPC() && CurrentCity.get_Id() != ClientLib.Data.MainData.GetInstance().get_EndGame().GetCenter().get_CombatId() && (MoralSignType.k == 1 || MoralSignType.k == 2)) {
									moral = "~" + (moral - MoralSignType.v) + "%";
									if (MoralSignType.k == 1) {
										this.Label.Battle.Morale.setTextColor(webfrontend.theme.Color.colors["res-orange"]);
										this.Label.Battle.Morale.setToolTipText(this.tr("tnf:region moral warning %1", MoralSignType.v));
										this.Label.Battle.Morale.setToolTipIcon("resource/webfrontend/ui/common/icon_moral_alert_orange.png");
									} else if (MoralSignType.k == 2) {
										this.Label.Battle.Morale.setTextColor(webfrontend.theme.Color.colors["res-red"]);
										this.Label.Battle.Morale.setToolTipText(this.tr("tnf:region moral error %1", MoralSignType.v));
										this.Label.Battle.Morale.setToolTipIcon("resource/webfrontend/ui/common/icon_moral_alert_red.png");
									}
								} else {
									moral = moral + "%";
									this.Label.Battle.Morale.resetTextColor();
									this.Label.Battle.Morale.resetToolTipText();
									this.Label.Battle.Morale.resetToolTipIcon();
								}
								this.Label.Battle.Morale.setValue(moral);
							} else {
								this.Label.Battle.Morale.setValue("-");
								this.Label.Battle.Morale.resetTextColor();
								this.Label.Battle.Morale.resetToolTipText();
								this.Label.Battle.Morale.resetToolTipIcon();
							}
						}
					},
					__onTick : function () {
						if (typeof this.Cache["result"] !== "undefined" && typeof this.Cache.result["ownid"] !== "undefined") {
							var ownCity = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.Cache.result.ownid);
                            if (ownCity !== null) {
                                var RepairCharge = Math.min(
                                        ownCity.GetResourceCount(ClientLib.Base.EResourceType.RepairChargeInf),
                                        ownCity.GetResourceCount(ClientLib.Base.EResourceType.RepairChargeVeh),
                                        ownCity.GetResourceCount(ClientLib.Base.EResourceType.RepairChargeAir));
                                this.Label.Repair.Storage.setValue(phe.cnc.Util.getTimespanString(ClientLib.Data.MainData.GetInstance().get_Time().GetTimeSpan(RepairCharge)));
                            } else
                                this.Label.Repair.Storage.resetValue();
						} else
							this.Label.Repair.Storage.resetValue();
                        if (this.StatsChanged) {
                            this.StatsChanged = false;
                            for (var i in this.Label.Enemy) {
                                this.Label.Enemy[i].__update();
                            }
                            for (i in this.Label.Repair) {
                                this.Label.Repair[i].__update();
                            }
                            for (i in this.Label.Loot) {
                                this.Label.Loot[i].__update();
                            }
                        }
					}
				}
			});
			qx.Class.define("STATS.GUI.Window.Stats.SimView.Label", {	//				Simulation View Label
				extend : qx.ui.basic.Label,
				include : [qx.locale.MTranslation],
				construct : function (label) {
					try {
                        this.base(arguments, label);
						this.initAlignX("right");
						this.initAlignY("middle");
						this.initMinHeight(18);
						this.setAlignX("right");
						this.setAlignY("middle");
						this.setMinHeight(18);
						this.HealthPoints = new STATS.STATS.Entity.HealthPoints();
						this.Resource = new STATS.STATS.Entity.Resource();
					} catch (e) {
						console.group("CDSIM REAL TIME");
						console.error("Error setting up STATS.GUI.Window.Stats.SimView.Label constructor", e);
						console.groupEnd();
					}
				},
				properties : {
					type : {
						init : "Enemy",
						check : ["Enemy", "Repair", "Loot"]
					},
					subType : {
						init : "HealthPointsAbs",
						check : ["HealthPointsAbs", "HealthPointsRel", "RepairCharge", "RepairStorage", "Resource", "Tiberium", "Crystal", "Credits", "ResearchPoints"]
					}
				},
				members : {
					HealthPoints : null,
					Resource : null,
					__update : function () {
						var value = null;
						if (ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity() !== null) {
							switch (this.getType()) {
							case "Enemy":
								switch (this.getSubType()) {
								case "HealthPointsAbs":
									value = this.HealthPointsAbs();
									break;
								case "HealthPointsRel":
									value = this.HealthPointsRel();
									break;
								case "RepairCharge":
									value = this.RepairCharge();
									break;
								default:
									break;
								}
								break;
							case "Repair":
								switch (this.getSubType()) {
								case "HealthPointsAbs":
									value = this.HealthPointsAbs();
									break;
								case "HealthPointsRel":
									value = this.HealthPointsRel();
									break;
								case "RepairCharge":
									value = this.RepairCharge();
									break;
								case "RepairStorage":
                                    return;
								case "Crystal":
									value = this.Loot();
									break;
								default:
									break;
								}
								break;
							case "Loot":
								switch (this.getSubType()) {
								case "Resource":
								case "Tiberium":
								case "Crystal":
								case "Credits":
								case "ResearchPoints":
									value = this.Loot();
									break;
								default:
									break;
								}
								break;
							default:
								break;
							}
						}

						if (this.HealthPoints.getMax() > 0 && value !== null) {
							this.setValue(value.text);
							this.setTextColor(value.color);
						} else {
							this.resetValue();
							this.resetTextColor();
						}
					},
					HealthPointsAbs : function () {
						if (this.HealthPoints.getMax() > 0) {
							var percent = (this.HealthPoints.getEnd() / this.HealthPoints.getMax()) * 100,
								digits = (percent <= 0 || percent >= 100 ? 0 : (percent >= 10 ? 1 : 2));
							percent = Math.round(percent * Math.pow(10, digits)) / Math.pow(10, digits);
							return {
								text : percent.toFixed(digits) + " %",
								color : this.getColorFromPercent(this.HealthPoints.getEnd() / this.HealthPoints.getMax())
							};
						}
						return null;
					},
					HealthPointsRel : function () {
						if (this.HealthPoints.getMax() > 0) {
							var percent = ((this.HealthPoints.getStart() - this.HealthPoints.getEnd()) / this.HealthPoints.getMax()) * 100,
								digits = (percent <= 0 || percent >= 100 ? 0 : (percent >= 10 ? 1 : 2));
							percent = Math.round(percent * Math.pow(10, digits)) / Math.pow(10, digits);
							return {
								text : percent.toFixed(digits) + " %",
								color : this.getColorFromPercent(this.HealthPoints.getEnd() / this.HealthPoints.getMax())
							};
						}
						return null;
					},
					RepairCharge : function () {
						if (this.HealthPoints.getMax() > 0) {
							return {
								text : phe.cnc.Util.getTimespanString(Math.max(this.Resource.getRepairChargeBase(), this.Resource.getRepairChargeAir(), this.Resource.getRepairChargeInf(), this.Resource.getRepairChargeVeh())),
								color : this.getColorFromPercent(1 - (this.HealthPoints.getEnd() / this.HealthPoints.getMax()))
							};
						}
						return null;
					},
					Loot : function () {
						var res = 0,
							lootFromCurrentCity = STATS.UTIL.Stats.get_LootFromCurrentCity(),
							loot;
						if (this.HealthPoints.getMax() > 0 && lootFromCurrentCity !== null) {
							switch (this.getSubType()) {
							case "Resource":
								res = this.Resource.getTiberium() + this.Resource.getCrystal() + this.Resource.getCredits() + this.Resource.getResearchPoints();
								loot = lootFromCurrentCity.getTiberium() + lootFromCurrentCity.getCrystal() + lootFromCurrentCity.getCredits() + lootFromCurrentCity.getResearchPoints();
								break;
							case "Tiberium":
								res = this.Resource.getTiberium();
								loot = lootFromCurrentCity.getTiberium();
								break;
							case "Crystal":
								res = this.Resource.getCrystal();
								loot = lootFromCurrentCity.getCrystal();
								break;
							case "Credits":
								res = this.Resource.getCredits();
								loot = lootFromCurrentCity.getCredits();
								break;
							case "ResearchPoints":
								res = this.Resource.getResearchPoints();
								loot = lootFromCurrentCity.getResearchPoints();
								break;
							}
							return {
								text : phe.cnc.gui.util.Numbers.formatNumbersCompact(res),
								color : this.getColorFromPercent(1 - (res / loot))
							};
						}
						return null;
					},
					getColorFromPercent : function (value) { // 1 = red, 0.5 = yellow, 0 = green
						return "hsl(" + ((120 - ((100 - ((1 - value) * 100)) * 1.2)) - 0) + ", 100%, " + (25 + Math.round(((Math.abs(Math.max(value - 0.4, 0)) * 2) + (Math.abs(Math.max((1 - value) - 0.6, 0)))) * 25)) + "%)";
					}
				}
			});
			qx.Class.define("STATS.GUI.Window.Prios", {					// [singleton]	Prios Window
				extend : qx.ui.window.Window,
				construct : function (prios) {
					try {
						this.base(arguments);
						this.set({
							layout : new qx.ui.layout.Grid(),
							caption : this.tr("Priority Setup"),
							allowMaximize : false,
							showMaximize : false,
							allowMinimize : false,
							showMinimize : false,
							resizable : false
						});
						this.center();
						this.Prios = prios;
					} catch (e) {
						console.group("CDSIM REAL TIME");
						console.error("Error setting up STATS.GUI.Window.Prios constructor", e);
						console.groupEnd();
					}
				},
				members : {
					Prios : null
				}
			});
		}
		function translation() {
			var localeManager = qx.locale.Manager.getInstance();

			// Default language is english (en)
			// Available Languages are: ar,ce,cs,da,de,en,es,fi,fr,hu,id,it,nb,nl,pl,pt,ro,ru,sk,sv,ta,tr,uk
			// You can send me translations so I can include them in the Script.

			// German
			localeManager.addTranslation("de", {
				"Shifts units one space up." : "Verschiebt Einheiten einen Platz nach oben.", //GUI.ArmySetupAttackBar
				"Shifts units one space down." : "Verschiebt die Einheiten einen Platz nach unten.", //GUI.ArmySetupAttackBar
				"Shifts units one space left." : "Verschiebt die Einheiten einen Platz nach links.", //GUI.ArmySetupAttackBar
				"Shifts units one space right." : "Verschiebt die Einheiten einen Platz nach rechts.", //GUI.ArmySetupAttackBar
				"Mirrors units horizontally." : "Spiegelt die Einheiten horizontal.", //GUI.ArmySetupAttackBar
				"Mirrors units vertically." : "Spiegelt die Einheiten vertikal.", //GUI.ArmySetupAttackBar
				"View Simulation" : "Simulation anzeigen", //GUI.PlayArea + GUI.Window.Stats.SimView
				"Statistic" : "Statistik", //GUI.PlayArea + GUI.Window.Stats
				"Show current formation with CNCOpt" : "Zeigt die aktuelle Formation mit CNCOpt an", //GUI.PlayArea
				"Right click: Set formation from CNCOpt Long Link" : "Rechtsklick: Formation von CNCOpt Long Link laden", //GUI.PlayArea
				"Remember transported units are not supported." : "Denk daran das transportierte Einheiten nicht unterstützt werden.", //GUI.PlayArea
				"Enter CNCOpt Long Link:" : "CNCOpt Long Link eingeben:", //GUI.PlayArea
				"simulations in cache" : "Simulationen im Cache", //GUI.Window.Stats
				"Most priority to construction yard including all in front of it.<br>After this the best total enemy health from the cached simulations is selected.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected." : "Die größte Priorität liegt auf dem Bauhof mit allem was vor ihm liegt.<br>Danach wird die Simulation aus dem Cache herausgesucht die den meisten<br>Schaden am Gegner verursacht.<br>Wenn keine bessere Formation gefunden wird, wird die Simulation mit der<br>niedrigsten Offensiv Reperaturzeit und besten Kampfdauer aus dem Cache herausgesucht.", //STATS
				"Most priority to defense facility including all in front of it.<br>After this the best armored defense health from the cached simulations is selected.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected." : "Die größte Priorität liegt auf der Verteidigungseinrichtung mit allem was vor ihr liegt.<br>Danach wird die Simulation aus dem Cache herausgesucht die den meisten<br>Schaden an bewaffneten Defensiveinheiten verursacht.<br>Wenn keine bessere Formation gefunden wird, wird die Simulation mit der<br>niedrigsten Offensiv Reperaturzeit und besten Kampfdauer aus dem Cache herausgesucht.", //STATS
				"Most priority to defense health including the auto repair after the battle.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected." : "Die größte Priorität liegt auf dem verursachtem Schaden an Defensiveinheiten<br>unter Berücksichtigung der automatischen Reperatur nach dem Kampf.<br>Wenn keine bessere Formation gefunden wird, wird die Simulation mit der<br>niedrigsten Offensiv Reperaturzeit und besten Kampfdauer aus dem Cache herausgesucht.", //STATS
				"Most priority to command center including all in front of it.<br>After this the best total enemy health from the cached simulations is selected.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected." : "Die größte Priorität liegt auf der Komandozentrale mit allem was vor ihr liegt.<br>Danach wird die Simulation aus dem Cache herausgesucht die den meisten<br>Schaden am Gegner verursacht.<br>Wenn keine bessere Formation gefunden wird, wird die Simulation mit der<br>niedrigsten Offensiv Reperaturzeit und besten Kampfdauer aus dem Cache herausgesucht.", //STATS
				"NoKill (farming) priorety.<br>Not working correctly yet." : "Vorschießen (farmen) Priorität.<br>Funktioniert noch nicht sehr gut.", //STATS
				"Shows the current army formation." : "Zeigt die aktuelle Armeeformation an." //STATS
			});
		}
		function waitForGame() {
			try {
				if (typeof qx != 'undefined' &&
					typeof qx.core != 'undfined' &&
					typeof qx.core.Init != 'undefined') {
					var app = qx.core.Init.getApplication();
					if (app !== null && app.initDone === true &&
						ClientLib.Data.MainData.GetInstance().get_Player().get_Id() !== 0 &&
						ClientLib.Data.MainData.GetInstance().get_Server().get_WorldId() !== 0) {
						try {
							console.time("loaded in");
							
							// replacing LoadCombatDirect
							if (ClientLib.Vis.Battleground.Battleground.prototype.LoadCombatDirect === undefined) {
							var sBString = ClientLib.API.Battleground.prototype.SimulateBattle.toString();
							var targetMethod = sBString.match(/\{battleSetup:[a-z]+\},\s?\(new \$I\.[A-Z]{6}\)\.[A-Z]{6}\(this,this\.([A-Z]{6})\),\s?this\);/)[1];
							var lCString = ClientLib.API.Battleground.prototype[targetMethod].toString();
							var methodLoadDirect = lCString.match(/\$I\.[A-Z]{6}\.[A-Z]{6}\(\)\.[A-Z]{6}\(\)\.([A-Z]{6})\(b\.d\);/)[1];
							console.log(methodLoadDirect);
							ClientLib.Vis.Battleground.Battleground.prototype.LoadCombatDirect = ClientLib.Vis.Battleground.Battleground.prototype[methodLoadDirect];
							}
                            translation();
                            createClasses();
                            STATS.getInstance();
							console.group("CDSIM REAL TIME");
							console.timeEnd("loaded in");
							console.groupEnd();
						} catch (e) {
							console.group("CDSIM REAL TIME");
							console.error("Error in waitForGame", e);
							console.groupEnd();
						}
					} else {
						window.setTimeout(waitForGame, 1000);
					}
				} else {
					window.setTimeout(waitForGame, 1000);
				}
			} catch (e) {
				console.group("CDSIM REAL TIME");
				console.error("Error in waitForGame", e);
				console.groupEnd();
			}
		}
		window.setTimeout(waitForGame, 1000);
	}
	.toString() + ")();";
	script.type = "text/javascript";
	document.getElementsByTagName("head")[0].appendChild(script);
})();