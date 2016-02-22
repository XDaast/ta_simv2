// ==UserScript==
// @name            Tiberium Alliances Battle Simulator V2
// @description     Allows you to simulate combat before actually attacking.
// @author          Eistee & TheStriker & VisiG & Lobotommi & XDaast
// @version         16.01devxd
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
      qx.Class.define("qx.ui.form.ModelButton", {extend:qx.ui.form.Button, implement:[qx.ui.form.IModel], include:[qx.ui.form.MModelProperty]});
      qx.Class.define("TABS", {construct:function() {
        try {
          this.base(arguments), this.self(arguments).Init(), document.createElement("img").src = "http://goo.gl/hPdG3K";
        } catch (a) {
          console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error setting up TABS constructor", a), console.groupEnd();
        }
      }, extend:qx.core.Object, statics:{_Init:[], addInit:function(a) {
        this._Init.push(a);
      }, Init:function() {
        for (var a in this._Init) {
          qx.Class.getByName(this._Init[a]).getInstance();
        }
      }}, type:"singleton"});
      qx.Class.define("TABS.RES", {statics:{getDisplayName:function(a, b) {
        return ClientLib.Base.Tech.GetTechDisplayNameFromTechId(ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(a, b));
      }}, type:"static"});
      qx.Class.define("TABS.RES.IMG", {statics:{Arrange:{Center:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAA51BMVEU6OjpTU1P///9MTEz39/f8/Pz+/v7///9TU1MAAADv7+/7+/uVlZWDg4MvLy/39/fj4+MvLy/9/f3e3t7X19c9PT3U1NStra2ZmZlkZGTo6Oj09PRxcXGVlZXOzs7Ly8t+fn7c3NyZmZnc3NyysrL8/Pyenp6JiYlZWVm/v7/Pz8+7u7vo6Oj4+PiTk5Pj4+PT09Ps7Ozv7+/JycnT09PAwMB+fn7b29t1dXWTk5P////j4+M+Pj5PT0////+kpKSFhYWenp7Kysq1tbX////+/v62trbBwcHf39/CwsLk5ORubm5TU1MeHJAiAAAATXRSTlMCHocFAgoPAw0AhwUNDw8NDR4eh4c7Hjs8O4eHCgoFChkDDxOHhx4eLw+Hhx6HOoeHhzqHOjw8hxQUFBkSGhoaIy8vhy8jHocvh4c8PH2ldZMAAACpSURBVAjXHYzXAkIAFECvvUIUJRWZmYnS3nv8//dEz2cAzhEiSYrNILAsvo8BUMR6L8uxqt4931z2ATjSdZNEZ6e9Sasd8hhQonzN89m80+2mJ69RJeQN1XW29261M/TIA4ya8bPm5UfTxggNMLTZul9kYfGInC1WGeq5k5baV1GUv4ETG7TaF6/o4qDmAIChCPvgI4gkSbuVQTHA4JzR4GlaEAR6MMSZHypxEyTcEZPmAAAAAElFTkSuQmCC", 
      Left:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAA+VBMVEUAAABkZGT19fX39/fj4+MVFRXc3NwZGRlLS0sVFRXd3d0LCwvu7u7JycmioqKIiIgkJCSIiIj///9WVlb7+/vW1tbx8fHo6Ohqampubm7MzMx1dXX///+tra0eHh6srKyzs7N6enrNzc309PS7u7v7+/vQ0NC/v7/ExMT7+/tgYGChoaHu7u5bW1vs7OzAwMB0dHSsrKzS0tJ1dXWsrKxFRUUpKSkmJiahoaHAwMCampomJibV1dWJiYm5ubk0NDQ3Nzfp6en///+vr69BQUGTk5NBQUHj4+PX19f+/v7Jycnj4+PR0dHc3NyXl5eMjIz09PSCgoIyMjIoy70QAAAAU3RSTlMADweHhxMFCgIDhwUbAgsODh4UHoeHh4cFCgQUChQeD4cchw6HDw8ehx4vOoc8hzw6PDwKhxQaKB4UGh4ZKCgyHhQoNSgyOSiHNYc8hzU8PDw8EBrmavEAAACkSURBVAjXJYtVFoJQAEQfgoh0iYggIgJSit3dHftfjI/D/M3cO4DBddtxbNc1TY7rqwTQdJH2fZr2vIlgVSsEyImyjKKK0i5jZKmBqHDYXT/3XqcbHpeZQaNQiFIeSMNCEeS25yfkr28SHOb5dFgoUfZvNeuDHwXw6WofvpM4Pq3HtdTADQwjL48b5LBTBGBYYyZYkrQZpRiG0ViWQxCE5yGG/Q+LDRO5PtzwzwAAAABJRU5ErkJggg==", 
      Right:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAA9lBMVEXw8PAODg7s7OzW1tbs7OxgYGD9/f0AAABPT08VFRUBAQHU1NTk5OQAAABwcHD9/f38/PxfX1/7+/v9/f3S0tKjo6MRERE/Pz/AwMDp6enIyMh0dHRubm709PTR0dGSkpKmpqZBQUFubm66urro6OjOzs6xsbH19fXd3d3Hx8dBQUGhoaGGhobw8PBWVlb///8AAAB1dXWenp6vr69nZ2cAAAAKCgoiIiIHBwetra1dXV2hoaFnZ2e1tbUpKSmxsbEVFRX39/fPz8+MjIw3Nze6uropKSnY2NjY2Njj4+NkZGTQ0NDe3t6ysrKvr6/R0dGXl5fDw8OkAsOLAAAAUnRSTlMCDoeHBQUKAAIGCQqHFAoPFBSHHg8PHhyHh4c7DQ4UHocPGh4ehyiHhx48OjyHPBoaFIcSCigZFDWHKB41hyiHPCiHMjWHPB4tMjyHhzI8OTw8yAOJWAAAAKdJREFUCNcli1UCgkAABVcBWVBBGglJQULs7u66/2UEfZ/zZgBACzpN6zwvCIJGYRCAQqXFce4pcGaG3aEgQGmWZX2/ma+WGkidwTKD21xen2cUq/PpH7jn7L8jN0WWCACKtcB7RO9YTcL9ckQAlM9nd9or8mIyJDPD8XbqNQmP6/GgnCZosWcgW0U+rEyzmwIcxyHF2JIkimK7TMIfwPqaZeXSkQT8Aiw9E02m3A8KAAAAAElFTkSuQmCC"}, 
      Arrows:{Down:"webfrontend/theme/arrows/down.png", Left:"webfrontend/theme/arrows/left.png", Right:"webfrontend/theme/arrows/right.png", Up:"webfrontend/theme/arrows/up.png"}, CNCOpt:"http://cncopt.com/favicon.ico", one:"https://www.openmerchantaccount.com/img/swap1_2.png", two:"https://www.openmerchantaccount.com/img/swap2_3.png", three:"https://www.openmerchantaccount.com/img/swap3_4.png", Defense:{Building:"FactionUI/icons/icon_arsnl_def_building.png", Infantry:"FactionUI/icons/icon_arsnl_def_squad.png", Vehicle:"FactionUI/icons/icon_arsnl_def_vehicle.png"}, DisableUnit:"FactionUI/icons/icon_disable_unit.png", Enemy:{All:"FactionUI/icons/icon_arsnl_show_all.png", 
      Base:"FactionUI/icons/icon_arsnl_base_buildings.png", Defense:"FactionUI/icons/icon_def_army_points.png"}, Flip:{H:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOvgAADr4B6kKxwAAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAACo0lEQVQ4T2PABkJq+rjmH7nUdPrV119nXn/9s+7S/R1NCzc4rTx1a8ay41c7WuYsl5WRkWGEKicM4honSux7+Pb42Tdf/4LwwacfP7Wv3pOz8sydVavO3lk5f9cx15jCGhaocsJgys7jAUeffXiGZODn1lW7Claeub16xelb64C4Ma+lnx+qHD/wySpjXnnqeifQq79RDFy5qxBq4PqVp25Ombxmhw4QQHXhAdH1fWL77r++DDToD04Dz9xeteDAuajc1gn4ve0UkciU3zvT4vTrb79ghmEzEOTtNefvL8pomyrExsYG1Y0FxNT18my4dH8KKGYJGLgeGDkrJqzeoR9ZWMMM1Y4Jercctjr46N1NZMNwGQhy5YpTN/PzWvu5oNpRgUdGGdOc/WfST736guJdPAauX3HiekfH4vXyUCNQQVhtn8D2W8+2nEGKDEIGgrw9a+cxeyUlJdRE7pldxZjcOlXj6LOPj9ENw2cgkL9m2dHL2TGljZxQoyAgrKaHdfmZWxVA734jxUAQXnXm9tS6yXMlTG2doKYBQWrrZIHNVx4sBWrG8C4I4zNw5enbi+ftPuGSVNGMiO2edXstjz3/9BabYSBMwMC1y09cr2pbvFEIbJh/RinrlI1744CRAc9q6BifgSC8+tzdpT1rdmuAE3l80yTZ/UglCzZMyECQ+MID58NiyprYGGbuO5t1/MWn99gMgmFCBoLwytO3Wir6ZggzLDpycQJyyYINH3r66WP7mj25wPDCZ+DsSRv2WTAsPHCmChgh7068/PwTGz4OlFtz+npX7/p9LstP3WwA4hZseMXp2w3Td56wYyho6lSdsfNY6YzdJydM330CBYPEQHIVnROVIzMLOIvb+oVq+meIVPVOQ8EgsYqeqUJJpfWcAKWymA2EsiGlAAAAAElFTkSuQmCC", 
      V:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOvgAADr4B6kKxwAAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAAClklEQVQ4T2MgB/iVd7CH1/SI9G3YF7D4+JUlR59/+nH61dff8w6cnQBVgh+EN01hjGqZxpY9eYlI39YjNvMOni888Ojd0aNP3z8+8/rr77Nvvv498+brn/n7T0+HasEOIlpnMIc1TBIJq+vX3HjtSd/ma4/WnHj59TtQM9gQZAwycO7ekzOhWhHAo6CRKaymh6d69krVWfvOpO19+O700WcfYS75g24QDGMYCPQWS1TzFKmktmkmO26/XLHv3sujwHD5CVSM0xBkDDcwqLJLcMHxa/FLT17rOPz04/PTb779wqaBEIYbOHv/2ZxjLz6/BglgU0gshhu44MDZaUABigwDYbCB+07NZJi29WDFvrsvLu+78/waDnwdixgmBpoxbduhMgav6ETZyNxSm+j8creoPPJwdH4FkC6z9o1NlWaYsnGf0ZpzdyeuOnt3GSUYZMZUoFkMk7ceDV555s6KFadvrQPi9eRioBmrpu44EcLQvHijweJDFzJWnrrRu/LM7VVASbIMBupdPWX78TAGt8Bw1oSsfL6qCbMUp2855Lvk+LXGFaduTgcpACpci64RF4YbCALe3t6MLi4uTC6BEZwhqXnC3Us3ms7acSxi+YlrLaDwgRqO1SAYRjEQGYAMB2JmN08v9vCMAuGWafPVFu4/E7H8+NWaVWduz11x+vYakgyEAaChDEBXM3r5+rOGJmVwlzZ1Svav2m656NDFghWnbk0FGrAEaBAoSMBhTtBAdAByuZOrO4t7eDxfWlWz7IztR70WHDiXA3T1jFVn76wE4hVTtx8PhionDoBc7eDgwODq4ckcFJPEHp9TJNA0e5n6tPU77ZcfvZLaNnupClQpeQDkaktLS2Y3Hz9Ov8h4XltnV3YAMTRvewY5T1wAAAAASUVORK5CYII="}, 
      Menu:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAADAFBMVEUAAAAAAAAAAAAABgAAAgACDQAAAAAAAAAAAAAAAAAAAAAAAQCV3icGGAETNwQIDAIAAAABBgBwsi9KghoUKwZFih0YVQlpph4iZAksYg8AAQACCABlmxmr0ieayiuM3SFMsBR/wymM0CFtsSQ5bhVFfRgRNQaY1DOLzCZYiRVJqhSDuylc2RiQzCSb2S9epyqVzjOi4TgWZQwecxIGLQQEFgJJgB07exh3niGHwCSv0zG01y////9RkhuX+yaR/iGd2zj///2hpEb//vNllSRijx9yoS5s2RdpmyhorB6GpDjE5GKL2Spjoh9y5h1hqRd36h9nniGm/Stv6Rhc2BNn7hGs/yhwzh6ttUvy5Z24sFvD01vo3Y2zvk61r2X9+emoqEvHuXytqFv58cmswFG9x1JS3Q3DuXCTmkSgvUL49L6LqEaWr09osh2P/idTpxV3pym2ymr1/NqPuje3vV2ewFB2tSWWrEN8mjZupyv7+9iCsy3z+rpplCZs3hqjyUaFnDHY63uJzi6AvivP3W6On0KRrDlcsRDK32CY/yeS9SJitRSHwzHc5Y+Ot0JlmiOg7TWAozB4rSqC4huWp0qz2E1bxxNanR6s2Ex/+hZi4Q9zySKc0EB5zyFgqCOq8jJ4+xKf+yVVnRpMsBJooyij4D6F0iqr0lNt9BlzwyFz9hSM/Rt72CJo+g+ysVF3rivWxmyEqzLt3qJwvCPMw4O6r3BJihSwzE/Bw3fXzYja2I3QwHqpuFnj6Zd7oTCCmC+0ymbl04zLv2zx3qHz8Kzs3pehrUjK33ieskrp7ax99CK502j7/tDI2GdajhpHkhFquCNj1xSnsE/M6G7i8KJXkxl4nSajq1qz9jW+6FLL9Fjb9W2530+btEJhwxiS2jRsrx9/2yZGvQxy1h3L5mW24U1foRtSzg2oyVZWrhZevxFLnheO9x+B+xxo5hac4TyVyTt/yy5f0Bej9jGu/TS5/zJxqymF4ix86xxvwx168RNW0hGh4Cqb3yl69R2T+iQ+CJL9AAAAPHRSTlMAERguJDYNAQgEFSn2P1dIHDytf0uNaLV4iB8ypdnX6Lbe3sJ2gVDp6ZKoxufO9ann+JScbl2lpMXW4/FzYe/CAAACJklEQVQoz2IAA3YOAV4TYzNzI1NWLk4GBOBkEtE3/BIWFvb1s4EoKxs7TJyDRXRC59rQAL+A4BULgtTFmDih6pmFOlfVLVvmsNThvc/jYPv5qgLsYHEWoby02U1Nc2ZM9X7y1MHHfeYNFS6QDKPw/5DNPc3126NTzrZ03Lm11N1ughoHUANArDxpuWXVxZnREamxqS2Ntx18/Oy1WdgZ2IS78j3Xb0yJjViXEJN1ssP75tyHM+fzcTCw6D73rSwoL3Fyiop0trEpuux9f827hTJcDIKTFz8L3Od1LCFqQ7wNEFyZOmPu919yLAz8bxYF9ruVnig5FOkIkqhZPmf2mlBraQb+t7bTfUsLG48cPWwDAlUvPvwM//dXEDAG/tWv51X2HT9jE38wGajFubdv+crwVX+AEisWz1uSc7rIxjlm96bkrN671T0fw9daMTMw6zya7pJ9oMaxamdiemL6pbb65lefVltIMTBp+dl6uGQX7t21ZWtcklPDteL2lbOCJBkZOPhO5bvVuubs2RGXlJGxvy2zrPveAj1WTgZ2KYUAWw/XiorWKddbG8onTsrtBmkAxQavvPs2l3OutVO8vLwKPP3bL9orc4NjhI2PZ/L5q/1uHoG+kx74X6jLU+TlgEQ4o4hS17RFtkv8v3m+nBa6UJwVKA6RYZPW5LH7EfI7JNjeTkOChQMpNXCxSojLycpayogxM4LjFSHFJsDNzc3CxAZLPQCSE8MJTTlJqQAAAABJRU5ErkJggg==", 
      Offense:{Aircraft:"FactionUI/icons/icon_arsnl_off_plane.png", Infantry:"FactionUI/icons/icon_arsnl_off_squad.png", Vehicle:"FactionUI/icons/icon_arsnl_off_vehicle.png"}, Outcome:{total_defeat:"FactionUI/icons/icon_reports_total_defeat.png", total_victory:"FactionUI/icons/icon_reports_total_victory.png", victory:"FactionUI/icons/icon_reports_victory.png"}, RepairCharge:{Aircraft:"webfrontend/ui/icons/icon_res_repair_air.png", Base:"webfrontend/ui/icons/icn_repair_points.png", Infantry:"webfrontend/ui/icons/icon_res_repair_inf.png", 
      Offense:"webfrontend/ui/icons/icn_repair_off_points.png", Vehicle:"webfrontend/ui/icons/icon_res_repair_tnk.png"}, Resource:{Credits:"webfrontend/ui/common/icn_res_dollar.png", Crystal:"webfrontend/ui/common/icn_res_chrystal.png", Power:"webfrontend/ui/common/icn_res_power.png", ResearchPoints:"webfrontend/ui/common/icn_res_research_mission.png", Tiberium:"webfrontend/ui/common/icn_res_tiberium.png", Transfer:"FactionUI/icons/icon_transfer_resource.png"}, Simulate:"FactionUI/icons/icon_attack_simulate_combat.png", 
      Stats:"FactionUI/icons/icn_build_slots.png", Stop:"FactionUI/icons/icon_replay_stop_button.png", Undo:"FactionUI/icons/icon_refresh_funds.png"}, type:"static"});
      qx.Class.define("TABS.SETTINGS", {statics:{"delete":function(a) {
        this._Init();
        delete this.__store[a];
        this._Init();
        return !0;
      }, __file:null, __name:null, __reader:null, __store:null, __upload:null, _Init:function() {
        var a = ClientLib.Base.LocalStorage, b = ClientLib.Data.MainData.GetInstance().get_Player(), c = ClientLib.Data.MainData.GetInstance().get_Server();
        this.__name = "TABS.SETTINGS." + b.get_Id() + "." + c.get_WorldId();
        null === this.__store && (a.get_IsSupported() && null !== a.GetItem(this.__name) ? this.__store = a.GetItem(this.__name) : this.__store = {});
        this.__store.$$Player = b.get_Name();
        this.__store.$$Server = c.get_Name();
        this.__store.$$Update = Date.now();
        a.get_IsSupported() && a.SetItem(this.__name, this.__store);
      }, get:function(a, b) {
        this._Init();
        void 0 === this.__store[a] && void 0 !== b && (this.__store[a] = b, this._Init());
        return this.__store[a];
      }, load:function() {
        null === this.__upload && (this.__upload = document.createElement("input"), this.__upload.type = "file", this.__upload.id = "files", this.__upload.addEventListener("change", function(a) {
          a = a.target.files;
          0 < a.length && this.__reader.readAsText(a[0], "UTF-8");
        }.bind(this), !1), this.__upload.style.display = "none", document.body.appendChild(this.__upload));
        null === this.__reader && (this.__reader = new FileReader, this.__reader.addEventListener("load", function(a) {
          a = a.target.result;
          try {
            var b = JSON.parse(a);
            this.reset();
            for (var c in b) {
              this.set(c, b[c]);
            }
            alert("Game will reload now.");
            window.location.reload();
          } catch (d) {
            console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error loading file", d), console.groupEnd();
          }
        }.bind(this), !1));
        this.__upload.click();
      }, reset:function() {
        var a = ClientLib.Data.MainData.GetInstance().get_Player(), b = ClientLib.Data.MainData.GetInstance().get_Server();
        this.__name = "TABS.SETTINGS." + a.get_Id() + "." + b.get_WorldId();
        window.localStorage.removeItem(this.__name);
        this.__name = this.__store = null;
        this._Init();
      }, save:function() {
        var a = new Blob([JSON.stringify(this.__store)], {type:"text/plain"}), b = document.createElement("a");
        b.download = "TABS_Backup.json";
        void 0 !== window.webkitURL ? b.href = window.webkitURL.createObjectURL(a) : (b.href = window.URL.createObjectURL(a), b.style.display = "none", document.body.appendChild(b));
        b.click();
      }, set:function(a, b) {
        this._Init();
        this.__store[a] = b;
        this._Init();
        return b;
      }}, type:"static"});
      qx.Class.define("TABS.UTIL.Formation", {statics:{Get:function(a, b) {
        var c = this.GetUnits(a, b), d = [];
        if (null !== c) {
          for (var e = 0;e < c.length;e++) {
            d.push({enabled:c[e].get_Enabled(), gid:c[e].get_IsTransportedCityEntity() ? c[e].get_TransporterCityEntity().get_Id() : null !== c[e].get_TransportedCityEntity() ? c[e].get_TransportedCityEntity().get_Id() : 0, gs:c[e].get_IsTransportedCityEntity() ? 2 : null !== c[e].get_TransportedCityEntity() ? 1 : 0, h:Math.ceil(c[e].get_Health()), i:c[e].get_MdbUnitId(), id:c[e].get_Id(), l:c[e].get_CurrentLevel(), t:c[e].get_IsTransportedCityEntity(), x:c[e].get_CoordX(), y:c[e].get_CoordY()});
          }
          return d;
        }
        return null;
      }, GetFormation:function(a, b) {
        var c = void 0 !== a && null !== a ? a : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId(), d = void 0 !== b && null !== b ? ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(b) : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();
        return null !== d ? d.get_CityArmyFormationsManager().GetFormationByTargetBaseId(c) : null;
      }, GetUnitById:function(a, b, c) {
        b = this.GetUnits(b, c);
        if (null !== b) {
          for (c = 0;c < b.length;c++) {
            if (b[c].get_Id() == a) {
              return b[c];
            }
          }
        }
        return null;
      }, GetUnitGroupTypeFromUnit:function(a) {
        if (null === a) {
          return ClientLib.Data.EUnitGroup.None;
        }
        if (a.pt == ClientLib.Base.EPlacementType.Offense) {
          switch(a.mt) {
            case ClientLib.Base.EUnitMovementType.Feet:
              return ClientLib.Data.EUnitGroup.Infantry;
            case ClientLib.Base.EUnitMovementType.Wheel:
            ;
            case ClientLib.Base.EUnitMovementType.Track:
              return ClientLib.Data.EUnitGroup.Vehicle;
            case ClientLib.Base.EUnitMovementType.Air:
            ;
            case ClientLib.Base.EUnitMovementType.Air2:
              return ClientLib.Data.EUnitGroup.Aircraft;
          }
        } else {
          return a.pt == ClientLib.Base.EPlacementType.Defense ? ClientLib.Data.EUnitGroup.Defense : ClientLib.Data.EUnitGroup.None;
        }
      }, GetUnits:function(a, b) {
        var c = this.GetFormation(a, b);
        return null !== c && (c = c.get_ArmyUnits(), null !== c) ? c.l : null;
      }, IsFormationInCache:function() {
        return null !== TABS.CACHE.getInstance().check(this.Get()).result;
      }, Merge:function(a, b) {
        for (var c in a) {
          for (var d in b) {
            if (a[c].gs == b[d].gs && a[c].i == b[d].i && a[c].l == b[d].l && a[c].x == b[d].x && a[c].y == b[d].y) {
              for (var e in b[d]) {
                a[c][e] = b[d][e];
              }
            }
          }
        }
        return a;
      }, Mirror:function(a, b, c) {
        switch(b) {
          case "h":
          break;
          case "v":
            break;
          case "c":
            break;
          default:
            return;
        }
        for (var d = 0;d < a.length;d++) {
          null !== c && a[d].y != c || "h" != b || (a[d].x = Math.abs(a[d].x - ClientLib.Base.Util.get_ArmyMaxSlotCountX() + 1)), null !== c && a[d].x != c || "v" != b || (a[d].y = Math.abs(a[d].y - ClientLib.Base.Util.get_ArmyMaxSlotCountY() + 1)), null !== c && a[d].y != c || "c" != b || (a[d].y = Math.abs(a[d].y - 5));
        }
        return a;
      }, Set:function(a, b, c) {
        b = void 0 !== b && null !== b ? b : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId();
        c = void 0 !== c && null !== c ? c : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId();
        var d, e, f, h = [], l, p = this.GetFormation(b, c), n = function(a) {
          for (var b = 0;b < ClientLib.Base.Util.get_ArmyMaxSlotCountX();b++) {
            for (var c = 0;c < ClientLib.Base.Util.get_ArmyMaxSlotCountY();c++) {
              if (null === a.GetUnitByCoord(b, c)) {
                return {x:b, y:c};
              }
            }
          }
          return null;
        }, t = function(a, b) {
          null !== a.get_TransportedCityEntity() && (a = a.get_TransportedCityEntity());
          a.get_IsTransportedCityEntity() && null !== b && a.MoveBattleUnit(b.x, b.y);
        };
        if (null !== p) {
          for (l = 0;l < a.length;l++) {
            d = this.GetUnitById(a[l].id, b, c), 2 == a[l].gs ? h.push(a[l]) : (e = p.GetUnitByCoord(a[l].x, a[l].y), f = n(p), null !== f && null !== e && t(e, f), f = n(p), null !== f && t(d, f), d.set_Enabled(a[l].enabled), e = p.GetUnitByCoord(a[l].x, a[l].y), null !== e && ClientLib.Base.Unit.CanBeTransported(e.get_UnitGameData_Obj(), d.get_UnitGameData_Obj()) ? e.MoveBattleUnit(d.get_CoordX(), d.get_CoordY()) : d.MoveBattleUnit(a[l].x, a[l].y));
          }
          for (l = 0;l < h.length;l++) {
            d = this.GetUnitById(h[l].id, b, c), e = p.GetUnitByCoord(h[l].x, h[l].y), f = n(p), null !== f && null !== e && t(e, f), f = n(p), null !== f && t(d, f), e = p.GetUnitByCoord(h[l].x, h[l].y), null !== e && e.set_Enabled(!0), d.set_Enabled(!0), d.MoveBattleUnit(h[l].x, h[l].y), null !== e ? e.set_Enabled(h[l].enabled) : d.set_Enabled(h[l].enabled), null !== e && e.MoveBattleUnit(h[l].x, h[l].y);
          }
        }
      }, set_Enabled:function(a, b, c) {
        null === b && (b = !0);
        for (var d = c != ClientLib.Data.EUnitGroup.Infantry && c != ClientLib.Data.EUnitGroup.Vehicle && c != ClientLib.Data.EUnitGroup.Aircraft, e = 0;e < a.length;e++) {
          var f = this.GetUnitGroupTypeFromUnit(ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(a[e].i));
          if (d || c == f && 0 === a[e].gs) {
            a[e].enabled = b;
          }
        }
        return a;
      }, Shift:function(a, b, c) {
        var d = 0, e = 0;
        switch(b) {
          case "u":
            d = -1;
            break;
          case "d":
            d = 1;
            break;
          case "l":
            e = -1;
            break;
          case "r":
            e = 1;
            break;
          default:
            return;
        }
        for (var f = 0;f < a.length;f++) {
          null !== c && a[f].y !== c || "l" != b && "r" != b || (a[f].x += e);
          null !== c && a[f].x !== c || "u" != b && "d" != b || (a[f].y += d);
          switch(a[f].x) {
            case ClientLib.Base.Util.get_ArmyMaxSlotCountX():
              a[f].x = 0;
              break;
            case -1:
              a[f].x = ClientLib.Base.Util.get_ArmyMaxSlotCountX() - 1;
          }
          switch(a[f].y) {
            case ClientLib.Base.Util.get_ArmyMaxSlotCountY():
              a[f].y = 0;
              break;
            case -1:
              a[f].y = ClientLib.Base.Util.get_ArmyMaxSlotCountY() - 1;
          }
        }
        return a;
      },
       Shiftz:function (a, b, c) {
    var d = 0,
        e = 0;
    switch (b) {
        case "z":
            d = 2;
            break;
        case "k":
            d = 1;
            break;
        case "l":
            e = -1;
            break;
        case "r":
            e = 1;
            break;
        default:
            return;
    }
    for (var f = 0; f < a.length; f++) {
        null !== c && a[f].y !== c || "l" != b && "r" != b || (a[f].x += e);
        null !== c && a[f].x !== c || "z" != b && "k" != b || (a[f].y += d);
         switch(a[f].x) {
            case ClientLib.Base.Util.get_ArmyMaxSlotCountX():
              a[f].x = 0;
              break;
            case -1:
              a[f].x = 8;
          }
          
          switch(a[f].y) {
            case 2:
                 a[f].y = 0;
                  break;
                case 3:
                a[f].y = 2;
                  break;
                case -1:
               a[f].y = 3;
                case 4:
                 a[f].y = 1;
                 
            
          }
    }
return a;
},
Shifts:function(a, b, c) {
        var d = 0, e = 0;
        switch(b) {
          case "z":
            d = 2;
            break;
          case "k":
            d = 1;
            break;
          case "l":
            e = -1;
            break;
          case "r":
            e = 1;
            break;
          default:
            return;
        }
        for (var f = 0;f < a.length;f++) {
          null !== c && a[f].y !== c || "l" != b && "r" != b || (a[f].x += e);
          null !== c && a[f].x !== c || "z" != b && "k" != b || (a[f].y += d);
          switch(a[f].x) {
            case ClientLib.Base.Util.get_ArmyMaxSlotCountX():
              a[f].x = 0;
              break;
            case -1:
              a[f].x = 8;
          }
          
          switch(a[f].y) {
            case 2:
                 a[f].y = 0;
                  break;
                case 3:
                a[f].y = 2;
                  break;
                case -1:
               a[f].y = 3;
            
          }
        }
        return a;
      },toggle_Enabled:function(a, b) {
        for (var c = b != ClientLib.Data.EUnitGroup.Infantry && b != ClientLib.Data.EUnitGroup.Vehicle && b != ClientLib.Data.EUnitGroup.Aircraft, d = 0, e = 0, f = 0;d < a.length;d++) {
          var h = this.GetUnitGroupTypeFromUnit(ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(a[d].i));
          if (c || b == h && 0 === a[d].gs) {
            e++, a[d].enabled && f++;
          }
        }
        return this.set_Enabled(a, f < e / 2, b);
      }}, type:"static"});
      qx.Class.define("TABS.UTIL.Stats", {defer:function(a) {
        try {
          a.patchGetUnitRepairCosts();
        } catch (b) {
          console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error setting up UTIL.Stats defer", b), console.groupEnd();
        }
      }, statics:{_GetModuleByType:function(a, b) {
        for (var c = 0;c < a.length;c++) {
          if (a[c].t == b) {
            return a[c];
          }
        }
        return null;
      }, _patchUnitLifePoints:function(a, b) {
        var c = qx.lang.Object.clone(a, !0), d = this._GetModuleByType(c.m, ClientLib.Base.EUnitModuleType.HitpointOverride);
        null !== d && -1 != b.indexOf(d.i) && (c.lp = d.h);
        return c;
      }, get_BuildingInfo:function(a) {
        var b = {};
        a = void 0 !== a && null !== a ? ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(a) : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
        if (null !== a) {
          a = a.get_CityBuildingsData();
          var c = function(a) {
            return null !== a ? {MdbId:a.get_TechGameData_Obj().c, x:a.get_CoordX(), y:a.get_CoordY()} : null;
          };
          b.Construction_Yard = c(a.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Construction_Yard) || a.GetBuildingByMDBId(ClientLib.Base.ETech.FOR_Fortress_ConstructionYard));
          b.Command_Center = c(a.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Command_Center));
          b.Barracks = c(a.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Barracks));
          b.Factory = c(a.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Factory));
          b.Airport = c(a.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Airport));
          b.Defense_Facility = c(a.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Defense_Facility));
          b.Defense_HQ = c(a.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Defense_HQ));
          b.Support = c(a.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Support_Air) || a.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Support_Art) || a.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Support_Ion));
        }
        return b;
      }, get_LootFromCurrentCity:function() {
        var a = ClientLib.API.Battleground.GetInstance().GetLootFromCurrentCity(), b = new TABS.STATS.Entity.Resource, c = b.getAny();
        if (null !== a) {
          for (var d = 0;d < a.length;d++) {
            c[a[d].Type] = a[d].Count;
          }
          b.setAny(c);
          return b;
        }
        return null;
      }, get_RepairCosts:function(a, b, c, d) {
        var e = new TABS.STATS.Entity.Resource, f = e.getAny(), h = ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(a), l;
        d = void 0 !== d && null !== d ? d : 0;
        c = c instanceof TABS.STATS.Entity.HealthPoints ? c : new TABS.STATS.Entity.HealthPoints(c);
        if (c.getStart() != c.getEnd()) {
          for (l = (c.getStart() - c.getEnd()) / c.getMax(), a = h.pt !== ClientLib.Base.EPlacementType.Offense || void 0 === ClientLib.API.Util.GetOwnUnitRepairCosts ? null !== ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity() ? ClientLib.API.Util.GetUnitRepairCosts(b, a, l) : null : ClientLib.API.Util.GetOwnUnitRepairCosts(b, a, l), b = 0;null !== a && b < a.length;b++) {
            switch(a[b].Type) {
              case ClientLib.Base.EResourceType.Tiberium:
              ;
              case ClientLib.Base.EResourceType.Crystal:
              ;
              case ClientLib.Base.EResourceType.Gold:
              ;
              case ClientLib.Base.EResourceType.ResearchPoints:
                f[a[b].Type] = a[b].Count * Math.pow(.7, d);
                break;
              default:
                f[a[b].Type] = a[b].Count;
            }
          }
        }
        0 < f[ClientLib.Base.EResourceType.ResearchPoints] && (f[ClientLib.Base.EResourceType.ResearchPoints] = Math.max(1, Math.floor(f[ClientLib.Base.EResourceType.ResearchPoints] * l)));
        e.setAny(f);
        return e;
      }, get_Stats:function(a) {
        try {
          var b = function(a, b) {
            for (var c in a) {
              a[c] += b[c];
            }
            return a;
          }, c = new TABS.STATS, d = c.getAny(), e = {}, f = a.d.s, h = this.get_BuildingInfo(a.d.di), l = 0, p = 1, n = a.d.d, t = a.d.a, q, k = new TABS.STATS.Entity.HealthPoints, m, r, g;
          for (g = 0;g < a.e.length;g++) {
            e[a.e[g].Key] = a.e[g].Value;
          }
          d.BattleDuration = 100 * a.d.cs + (a.d.cs < 10 * a.d.md ? 3E3 : 0);
          for (g = 0;g < f.length;g++) {
            q = ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(f[g].i);
            switch(a.d.df) {
              case ClientLib.Base.EFactionType.GDIFaction:
              ;
              case ClientLib.Base.EFactionType.NODFaction:
                r = this.get_UnitMaxHealthByLevel(f[g].l, q, !0, a.d.dm);
                break;
              default:
                r = this.get_UnitMaxHealthByLevel(f[g].l, q, !1, a.d.dm);
            }
            k.setMax(Math.max(r, 16 * f[g].h));
            k.setStart(16 * f[g].h);
            k.setEnd(e[f[g].ci].h);
            m = this.get_RepairCosts(f[g].i, f[g].l, k);
            b(d.Enemy.Overall.HealthPoints, k.getAny());
            b(d.Enemy.Overall.Resource, m.getAny());
            b(d.Enemy.Structure.HealthPoints, k.getAny());
            b(d.Enemy.Structure.Resource, m.getAny());
            switch(parseInt(ClientLib.Base.Tech.GetTechNameFromTechId(q.tl, q.f), 10)) {
              case ClientLib.Base.ETechName.Construction_Yard:
                b(d.Enemy.Construction_Yard.HealthPoints, k.getAny());
                b(d.Enemy.Construction_Yard.Resource, m.getAny());
                break;
              case ClientLib.Base.ETechName.Command_Center:
                b(d.Enemy.Command_Center.HealthPoints, k.getAny());
                b(d.Enemy.Command_Center.Resource, m.getAny());
                break;
              case ClientLib.Base.ETechName.Barracks:
                b(d.Enemy.Barracks.HealthPoints, k.getAny());
                b(d.Enemy.Barracks.Resource, m.getAny());
                break;
              case ClientLib.Base.ETechName.Factory:
                b(d.Enemy.Factory.HealthPoints, k.getAny());
                b(d.Enemy.Factory.Resource, m.getAny());
                break;
              case ClientLib.Base.ETechName.Airport:
                b(d.Enemy.Airport.HealthPoints, k.getAny());
                b(d.Enemy.Airport.Resource, m.getAny());
                break;
              case ClientLib.Base.ETechName.Defense_Facility:
                b(d.Enemy.Defense_Facility.HealthPoints, k.getAny());
                b(d.Enemy.Defense_Facility.Resource, m.getAny());
                l = .7 * (k.getEnd() / k.getMax());
                p = f[g].l;
                break;
              case ClientLib.Base.ETechName.Defense_HQ:
                b(d.Enemy.Defense_HQ.HealthPoints, k.getAny());
                b(d.Enemy.Defense_HQ.Resource, m.getAny());
                break;
              case ClientLib.Base.ETechName.Support_Air:
              ;
              case ClientLib.Base.ETechName.Support_Ion:
              ;
              case ClientLib.Base.ETechName.Support_Art:
                b(d.Enemy.Support.HealthPoints, k.getAny()), b(d.Enemy.Support.Resource, m.getAny());
            }
            void 0 !== h.Construction_Yard && (null !== h.Construction_Yard && h.Construction_Yard.x == f[g].x && h.Construction_Yard.y < f[g].y && (d.Enemy.Construction_Yard.HealthPoints.maxFront += k.getMax(), d.Enemy.Construction_Yard.HealthPoints.startFront += k.getStart(), d.Enemy.Construction_Yard.HealthPoints.endFront += k.getEnd()), null !== h.Command_Center && h.Command_Center.x == f[g].x && h.Command_Center.y < f[g].y && (d.Enemy.Command_Center.HealthPoints.maxFront += k.getMax(), d.Enemy.Command_Center.HealthPoints.startFront += 
            k.getStart(), d.Enemy.Command_Center.HealthPoints.endFront += k.getEnd()), null !== h.Barracks && h.Barracks.x == f[g].x && h.Barracks.y < f[g].y && (d.Enemy.Barracks.HealthPoints.maxFront += k.getMax(), d.Enemy.Barracks.HealthPoints.startFront += k.getStart(), d.Enemy.Barracks.HealthPoints.endFront += k.getEnd()), null !== h.Factory && h.Factory.x == f[g].x && h.Factory.y < f[g].y && (d.Enemy.Factory.HealthPoints.maxFront += k.getMax(), d.Enemy.Factory.HealthPoints.startFront += k.getStart(), 
            d.Enemy.Factory.HealthPoints.endFront += k.getEnd()), null !== h.Airport && h.Airport.x == f[g].x && h.Airport.y < f[g].y && (d.Enemy.Airport.HealthPoints.maxFront += k.getMax(), d.Enemy.Airport.HealthPoints.startFront += k.getStart(), d.Enemy.Airport.HealthPoints.endFront += k.getEnd()), null !== h.Defense_Facility && h.Defense_Facility.x == f[g].x && h.Defense_Facility.y < f[g].y && (d.Enemy.Defense_Facility.HealthPoints.maxFront += k.getMax(), d.Enemy.Defense_Facility.HealthPoints.startFront += 
            k.getStart(), d.Enemy.Defense_Facility.HealthPoints.endFront += k.getEnd()), null !== h.Defense_HQ && h.Defense_HQ.x == f[g].x && h.Defense_HQ.y < f[g].y && (d.Enemy.Defense_HQ.HealthPoints.maxFront += k.getMax(), d.Enemy.Defense_HQ.HealthPoints.startFront += k.getStart(), d.Enemy.Defense_HQ.HealthPoints.endFront += k.getEnd()), null !== h.Support && h.Support.x == f[g].x && h.Support.y < f[g].y && (d.Enemy.Support.HealthPoints.maxFront += k.getMax(), d.Enemy.Support.HealthPoints.startFront += 
            k.getStart(), d.Enemy.Support.HealthPoints.endFront += k.getEnd()));
          }
          for (g = 0;g < n.length;g++) {
            q = ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(n[g].i);
            switch(a.d.df) {
              case ClientLib.Base.EFactionType.GDIFaction:
              ;
              case ClientLib.Base.EFactionType.NODFaction:
                r = this.get_UnitMaxHealthByLevel(n[g].l, q, !0, a.d.dm);
                break;
              default:
                r = this.get_UnitMaxHealthByLevel(n[g].l, q, !1, a.d.dm);
            }
            k.setMax(Math.max(r, 16 * n[g].h));
            k.setStart(16 * n[g].h);
            k.setEnd(e[n[g].ci].h);
            k.setRep((16 * n[g].h - e[n[g].ci].h) * l * p / Math.max(p, n[g].l));
            m = this.get_RepairCosts(n[g].i, n[g].l, k, n[g].ac);
            b(d.Enemy.Overall.HealthPoints, k.getAny());
            b(d.Enemy.Overall.Resource, m.getAny());
            b(d.Enemy.Defense.HealthPoints, k.getAny());
            b(d.Enemy.Defense.Resource, m.getAny());
            q.ptt == ClientLib.Base.EArmorType.NONE ? (b(d.Enemy.DefenseNonArmored.HealthPoints, k.getAny()), b(d.Enemy.DefenseNonArmored.Resource, m.getAny())) : (b(d.Enemy.DefenseArmored.HealthPoints, k.getAny()), b(d.Enemy.DefenseArmored.Resource, m.getAny()));
            void 0 !== h.Construction_Yard && q.mt == ClientLib.Base.EUnitMovementType.Structure && (null !== h.Construction_Yard && h.Construction_Yard.x == n[g].x && (d.Enemy.Construction_Yard.HealthPoints.maxFront += k.getMax(), d.Enemy.Construction_Yard.HealthPoints.startFront += k.getStart(), d.Enemy.Construction_Yard.HealthPoints.endFront += k.getEnd()), null !== h.Command_Center && h.Command_Center.x == n[g].x && (d.Enemy.Command_Center.HealthPoints.maxFront += k.getMax(), d.Enemy.Command_Center.HealthPoints.startFront += 
            k.getStart(), d.Enemy.Command_Center.HealthPoints.endFront += k.getEnd()), null !== h.Barracks && h.Barracks.x == n[g].x && (d.Enemy.Barracks.HealthPoints.maxFront += k.getMax(), d.Enemy.Barracks.HealthPoints.startFront += k.getStart(), d.Enemy.Barracks.HealthPoints.endFront += k.getEnd()), null !== h.Factory && h.Factory.x == n[g].x && (d.Enemy.Factory.HealthPoints.maxFront += k.getMax(), d.Enemy.Factory.HealthPoints.startFront += k.getStart(), d.Enemy.Factory.HealthPoints.endFront += 
            k.getEnd()), null !== h.Airport && h.Airport.x == n[g].x && (d.Enemy.Airport.HealthPoints.maxFront += k.getMax(), d.Enemy.Airport.HealthPoints.startFront += k.getStart(), d.Enemy.Airport.HealthPoints.endFront += k.getEnd()), null !== h.Defense_Facility && h.Defense_Facility.x == n[g].x && (d.Enemy.Defense_Facility.HealthPoints.maxFront += k.getMax(), d.Enemy.Defense_Facility.HealthPoints.startFront += k.getStart(), d.Enemy.Defense_Facility.HealthPoints.endFront += k.getEnd()), null !== 
            h.Defense_HQ && h.Defense_HQ.x == n[g].x && (d.Enemy.Defense_HQ.HealthPoints.maxFront += k.getMax(), d.Enemy.Defense_HQ.HealthPoints.startFront += k.getStart(), d.Enemy.Defense_HQ.HealthPoints.endFront += k.getEnd()), null !== h.Support && h.Support.x == n[g].x && (d.Enemy.Support.HealthPoints.maxFront += k.getMax(), d.Enemy.Support.HealthPoints.startFront += k.getStart(), d.Enemy.Support.HealthPoints.endFront += k.getEnd()));
          }
          void 0 === ClientLib.API.Util.GetOwnUnitRepairCosts && ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentCityId(a.d.ai);
          for (g = 0;g < t.length;g++) {
            switch(q = ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(t[g].i), r = this.get_UnitMaxHealthByLevel(t[g].l, q, !1, a.d.am), k.setMax(Math.max(r, 16 * t[g].h)), k.setStart(16 * t[g].h), void 0 !== e[t[g].ci] ? k.setEnd(e[t[g].ci].h) : k.setEnd(16 * t[g].h), m = this.get_RepairCosts(t[g].i, t[g].l, k), b(d.Offense.Overall.HealthPoints, k.getAny()), b(d.Offense.Overall.Resource, m.getAny()), q.mt) {
              case ClientLib.Base.EUnitMovementType.Feet:
                b(d.Offense.Infantry.HealthPoints, k.getAny());
                b(d.Offense.Infantry.Resource, m.getAny());
                break;
              case ClientLib.Base.EUnitMovementType.Wheel:
              ;
              case ClientLib.Base.EUnitMovementType.Track:
                b(d.Offense.Vehicle.HealthPoints, k.getAny());
                b(d.Offense.Vehicle.Resource, m.getAny());
                break;
              case ClientLib.Base.EUnitMovementType.Air:
              ;
              case ClientLib.Base.EUnitMovementType.Air2:
                b(d.Offense.Aircraft.HealthPoints, k.getAny()), b(d.Offense.Aircraft.Resource, m.getAny());
            }
          }
          void 0 === ClientLib.API.Util.GetOwnUnitRepairCosts && ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentCityId(a.d.di);
          c.setAny(d);
          return c;
        } catch (u) {
          console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error in TABS.UTIL.Stats.get_Stats()", u), console.groupEnd();
        }
      }, get_UnitMaxHealthByLevel:function(a, b, c, d) {
        return 16 * Math.floor(ClientLib.API.Util.GetUnitMaxHealthByLevel(a, this._patchUnitLifePoints(b, d), c));
      }, patchGetUnitRepairCosts:function() {
        try {
          for (var a in ClientLib.Data.Cities.prototype) {
            if ("function" === typeof ClientLib.Data.Cities.prototype[a] && ClientLib.Data.Cities.prototype[a] == ClientLib.Data.Cities.prototype.get_CurrentCity && "get_CurrentCity" !== a) {
              break;
            }
          }
          var b = ClientLib.API.Util.GetUnitRepairCosts.toString().replace(a, "get_CurrentOwnCity"), c = b.substring(b.indexOf("(") + 1, b.indexOf(")")), d = b.substring(b.indexOf("{") + 1, b.lastIndexOf("}"));
          ClientLib.API.Util.GetOwnUnitRepairCosts = Function(c, d);
        } catch (e) {
          console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error setting up ClientLib.API.Util.GetOwnUnitRepairCosts", e), console.groupEnd();
        }
      }}, type:"static"});
      qx.Class.define("TABS.UTIL.Battleground", {statics:{StartReplay:function(a, b) {
        qx.core.Init.getApplication().getPlayArea().setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay, a, 0, 0);
        ClientLib.Vis.VisMain.GetInstance().get_Battleground().Init();
        ClientLib.Vis.VisMain.GetInstance().get_Battleground().LoadCombatDirect(b);
        qx.event.Timer.once(function() {
          ClientLib.Vis.VisMain.GetInstance().get_Battleground().RestartReplay();
          ClientLib.Vis.VisMain.GetInstance().get_Battleground().set_ReplaySpeed(1);
        }, this, 0);
      }}, type:"static"});
      qx.Class.define("TABS.UTIL.CNCOpt", {statics:{createLink:function(a, b) {
        function c(b) {
          switch(b) {
            case ClientLib.Base.EFactionType.GDIFaction:
              return "G";
            case ClientLib.Base.EFactionType.NODFaction:
              return "N";
            case ClientLib.Base.EFactionType.FORFaction:
            ;
            case ClientLib.Base.EFactionType.NPCBase:
            ;
            case ClientLib.Base.EFactionType.NPCCamp:
            ;
            case ClientLib.Base.EFactionType.NPCOutpost:
            ;
            case ClientLib.Base.EFactionType.NPCFortress:
              return "F";
            default:
              return console.log("cncopt: Unknown faction: " + a.get_CityFaction()), "E";
          }
        }
        function d(a) {
          return "undefined" !== typeof TABS.UTIL.CNCOpt.keymap[a.n] ? TABS.UTIL.CNCOpt.keymap[a.n] : ".";
        }
        a = void 0 !== a && null !== a ? a : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
        b = void 0 !== b && null !== b ? b : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();
        var e = "http://cncopt.com/?map=", f = [], h = [], l = function(a) {
          var b = [], c;
          for (c in a) {
            if ("object" == typeof a[c] && a[c]) {
              for (var d in a[c]) {
                if ("object" == typeof a[c][d] && a[c][d] && "d" in a[c][d]) {
                  var e = a[c][d].d;
                  if ("object" == typeof e && e) {
                    for (var f in e) {
                      "object" == typeof e[f] && e[f] && "get_CurrentLevel" in e[f] && b.push(e);
                    }
                  }
                }
              }
            }
          }
          for (a = 0;a < b.length;++a) {
            for (var h in b[a]) {
              if (TABS.UTIL.Formation.GetUnitGroupTypeFromUnit(b[a][h].get_UnitGameData_Obj()) == ClientLib.Data.EUnitGroup.Defense) {
                return b[a];
              }
            }
          }
          return [];
        }(a), p = b.get_CityArmyFormationsManager().GetFormationByTargetBaseId(a.get_Id()), n = function(a) {
          for (var b in a) {
            if ("object" == typeof a[b] && a[b] && 0 in a[b] && 8 in a[b] && "object" == typeof a[b][0] && a[b][0] && a[b][0] && 0 in a[b][0] && 15 in a[b][0] && "object" == typeof a[b][0][0] && a[b][0][0] && "BuildingIndex" in a[b][0][0]) {
              return a[b];
            }
          }
          return null;
        }(a), t = function(a) {
          a = a.get_CityBuildingsData();
          for (var b in a) {
            if ("object" === typeof a[b] && a[b] && "d" in a[b] && "c" in a[b] && 0 < a[b].c) {
              return a[b].d;
            }
          }
        }(a), q, k, m, r = ClientLib.Data.MainData.GetInstance().get_Alliance(), g, e = e + "3|" + (c(a.get_CityFaction()) + "|"), e = e + (c(b.get_CityFaction()) + "|"), e = e + (a.get_Name() + "|");
        for (g = 0;20 > g;++g) {
          f.push([null, null, null, null, null, null, null, null, null]), h.push([null, null, null, null, null, null, null, null, null]);
        }
        for (g in l) {
          f[l[g].get_CoordX()][l[g].get_CoordY() + 8] = l[g];
        }
        l = null !== p.get_ArmyUnits() ? p.get_ArmyUnits().l : a.get_CityUnitsData().get_OffenseUnits().d;
        for (g in l) {
          l[g].get_Enabled() && !l[g].get_IsTransportedCityEntity() && (h[l[g].get_CoordX()][l[g].get_CoordY() + 16] = l[g]);
        }
        for (g = 0;20 > g;++g) {
          for (var u = 0;9 > u;++u) {
            switch(l = 16 < g ? null : n[u][g], p = 0, q = null, l && 0 <= l.BuildingIndex && (q = t[l.BuildingIndex], p = q.get_CurrentLevel()), (k = f[u][g]) && (p = k.get_CurrentLevel()), (m = h[u][g]) && (p = m.get_CurrentLevel()), 1 < p && (e += p), 16 < g ? 0 : a.GetResourceType(u, g)) {
              case ClientLib.Data.ECityTerrainType.NONE:
                e = q ? e + d(GAMEDATA.Tech[q.get_MdbBuildingId()]) : k ? e + d(k.get_UnitGameData_Obj()) : m ? e + d(m.get_UnitGameData_Obj()) : e + ".";
                break;
              case ClientLib.Data.ECityTerrainType.CRYSTAL:
                e = 0 > l.BuildingIndex ? e + "c" : e + "n";
                break;
              case ClientLib.Data.ECityTerrainType.TIBERIUM:
                e = 0 > l.BuildingIndex ? e + "t" : e + "h";
                break;
              case ClientLib.Data.ECityTerrainType.FOREST:
                e += "j";
                break;
              case ClientLib.Data.ECityTerrainType.BRIAR:
                e += "h";
                break;
              case ClientLib.Data.ECityTerrainType.SWAMP:
                e += "l";
                break;
              case ClientLib.Data.ECityTerrainType.WATER:
                e += "k";
                break;
              default:
                console.log("cncopt [4]: Unhandled resource type: " + a.GetResourceType(u, g)), e += ".";
            }
          }
        }
        r && (e += "|" + r.get_POITiberiumBonus(), e += "|" + r.get_POICrystalBonus(), e += "|" + r.get_POIPowerBonus(), e += "|" + r.get_POIInfantryBonus(), e += "|" + r.get_POIVehicleBonus(), e += "|" + r.get_POIAirBonus(), e += "|" + r.get_POIDefenseBonus());
        1.2 != ClientLib.Data.MainData.GetInstance().get_Server().get_TechLevelUpgradeFactorBonusAmount() && (e += "|newEconomy");
        return e;
      }, keymap:{"<last>":".", FOR_Barbwire_VS_Inf:"b", FOR_Barrier_VS_Veh:"t", "FOR_Construction Yard":"y", "FOR_Crystal Booster":"v", "FOR_Defense Facility":"w", "FOR_Defense HQ":"q", FOR_Harvester_Crystal:"n", FOR_Harvester_Tiberium:"h", FOR_Inf_VS_Air:"q", FOR_Inf_VS_Inf:"g", FOR_Inf_VS_Veh:"r", FOR_Mammoth:"y", FOR_Refinery:"r", FOR_Silo:"s", FOR_Sniper:"n", "FOR_Tiberium Booster":"b", "FOR_Trade Center":"u", FOR_Turret_VS_Air:"f", FOR_Turret_VS_Air_ranged:"e", FOR_Turret_VS_Inf:"m", FOR_Turret_VS_Inf_ranged:"a", 
      FOR_Turret_VS_Veh:"v", FOR_Turret_VS_Veh_ranged:"d", FOR_Veh_VS_Air:"u", FOR_Veh_VS_Inf:"o", FOR_Veh_VS_Veh:"s", FOR_Wall:"w", GDI_Accumulator:"a", GDI_Airport:"d", "GDI_Antitank Barrier":"t", "GDI_APC Guardian":"g", "GDI_Art Air":"e", "GDI_Art Inf":"r", "GDI_Art Tank":"a", GDI_Barbwire:"b", GDI_Barracks:"b", GDI_Cannon:"c", "GDI_Command Center":"e", GDI_Commando:"c", "GDI_Construction Yard":"y", "GDI_Def_APC Guardian":"g", "GDI_Def_Missile Squad":"q", GDI_Def_Pitbull:"p", GDI_Def_Predator:"d", 
      GDI_Def_Sniper:"s", "GDI_Def_Zone Trooper":"z", "GDI_Defense Facility":"w", "GDI_Defense HQ":"q", GDI_Factory:"f", GDI_Firehawk:"f", GDI_Flak:"f", GDI_Harvester:"h", GDI_Harvester_Crystal:"n", GDI_Juggernaut:"j", GDI_Kodiak:"k", GDI_Mammoth:"m", "GDI_Missile Squad":"q", GDI_Orca:"o", GDI_Paladin:"a", GDI_Pitbull:"p", "GDI_Power Plant":"p", GDI_Predator:"d", GDI_Refinery:"r", GDI_Riflemen:"r", GDI_Silo:"s", "GDI_Sniper Team":"s", GDI_Support_Air:"x", GDI_Support_Art:"z", GDI_Support_Ion:"i", 
      "GDI_Trade Center":"u", GDI_Turret:"m", GDI_Wall:"w", "GDI_Zone Trooper":"z", NOD_Accumulator:"a", NOD_Airport:"d", "NOD_Attack Bike":"b", NOD_Avatar:"a", NOD_Barracks:"b", "NOD_Black Hand":"z", NOD_Cobra:"r", "NOD_Command Post":"e", NOD_Commando:"c", NOD_Confessor:"s", "NOD_Construction Yard":"y", "NOD_Def_Antitank Barrier":"t", "NOD_Def_Art Air":"e", "NOD_Def_Art Inf":"r", "NOD_Def_Art Tank":"a", "NOD_Def_Attack Bike":"p", NOD_Def_Barbwire:"b", "NOD_Def_Black Hand":"z", NOD_Def_Cannon:"c", 
      NOD_Def_Confessor:"s", NOD_Def_Flak:"f", "NOD_Def_MG Nest":"m", "NOD_Def_Militant Rocket Soldiers":"q", NOD_Def_Reckoner:"g", "NOD_Def_Scorpion Tank":"d", NOD_Def_Wall:"w", "NOD_Defense Facility":"w", "NOD_Defense HQ":"q", NOD_Factory:"f", NOD_Harvester:"h", NOD_Harvester_Crystal:"n", "NOD_Militant Rocket Soldiers":"q", NOD_Militants:"m", "NOD_Power Plant":"p", NOD_Reckoner:"k", NOD_Refinery:"r", NOD_Salamander:"l", "NOD_Scorpion Tank":"o", NOD_Silo:"s", "NOD_Specter Artilery":"p", NOD_Support_Air:"x", 
      NOD_Support_Art:"z", NOD_Support_Ion:"i", "NOD_Trade Center":"u", NOD_Venom:"v", NOD_Vertigo:"t"}, parseLink:function(a) {
        function b(a) {
          switch(a) {
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
        function c() {
          for (var a = GAMEDATA.units, b = Object.keys(GAMEDATA.units), c = b.length, d, e = {1:{0:{}, 1:{}, 2:{}}, 2:{0:{}, 1:{}, 2:{}}, 3:{0:{}, 1:{}, 2:{}}};c--;) {
            if (d = a[b[c]], "undefined" !== typeof TABS.UTIL.CNCOpt.keymap[d.n]) {
              switch(d.pt) {
                case ClientLib.Base.EPlacementType.Offense:
                  e[d.f][2][TABS.UTIL.CNCOpt.keymap[d.n]] = parseInt(b[c], 10);
                  break;
                case ClientLib.Base.EPlacementType.Defense:
                  e[d.f][1][TABS.UTIL.CNCOpt.keymap[d.n]] = parseInt(b[c], 10);
                  break;
                case ClientLib.Base.EPlacementType.Structure:
                  e[d.f][0][TABS.UTIL.CNCOpt.keymap[d.n]] = parseInt(b[c], 10);
                  break;
                default:
                  console.log("Unknown map: " + d.n);
              }
            }
          }
          return e;
        }
        function d(a) {
          var b, c, d, e = [];
          for (b = 0;b < ClientLib.Base.Util.get_ArmyMaxSlotCountX();b++) {
            for (e[b] = [], c = 0;c < ClientLib.Base.Util.get_ArmyMaxSlotCountY();c++) {
              for (e[b][c] = !1, d = 0;d < a.length;d++) {
                a[d].x === b && a[d].y === c && (e[b][c] = !0);
              }
            }
          }
          for (b = 0;b < ClientLib.Base.Util.get_ArmyMaxSlotCountX();b++) {
            for (c = 0;c < ClientLib.Base.Util.get_ArmyMaxSlotCountY();c++) {
              if (!1 === e[b][c]) {
                return {x:b, y:c};
              }
            }
          }
          return null;
        }
        var e = TABS.UTIL.Formation.Get();
        if (null !== a && -1 != a.indexOf("|")) {
          var f = a.split("|");
          if (null === f | 5 > f.length) {
            return console.log("Corrupt link"), e;
          }
          var h = c(), l = b(f[1]), p = b(f[2]), n = /[chjklnt.]|[\d]+[^.]/g, t = -1, q, k, m, r, g, u;
          for (a = [];m = n.exec(f[4]);) {
            if (m = m ? m[0] : null, q = ++t % 72, g = q % 9, u = Math.floor(q / 9), 1 !== m.length) {
              if (k = m.substr(-1), q = parseInt(m.slice(0, -1), 10), r = Math.floor(t / 72), "undefined" === typeof h[2 == r ? p : l][r][k]) {
                console.log("Unknown key: " + m + " at pos: " + t);
              } else {
                m = h[2 == r ? p : l][r][k];
                switch(m) {
                  case 175:
                    m = 115;
                    break;
                  case 176:
                    m = 155;
                }
                GAMEDATA.units[m].pt == ClientLib.Base.EPlacementType.Offense && a.push({i:m, l:q, x:g, y:u});
              }
            }
          }
          e = TABS.UTIL.Formation.set_Enabled(e, !1);
          for (f = 0;f < e.length;f++) {
            for (h = 0;h < a.length;h++) {
              if (null !== a[h] && e[f].i == a[h].i && e[f].l == a[h].l) {
                e[f].x = a[h].x;
                e[f].y = a[h].y;
                e[f].enabled = !0;
                a.splice(h, 1);
                break;
              }
            }
          }
          for (f = 0;f < e.length;f++) {
            !1 === e[f].enabled && (a = d(e), null !== a && (e[f].x = a.x, e[f].y = a.y));
          }
        }
        return e;
      }}, type:"static"});
      qx.Class.define("TABS.MENU", {construct:function() {
        this.base(arguments);
        var a = qx.core.Init.getApplication().getMenuBar().getScriptsButton();
        this.Menu = new qx.ui.menu.Menu;
        a.Add("Battle Simulator V2", TABS.RES.IMG.Menu, this.Menu);
        var a = new qx.ui.menu.Menu, b = new qx.ui.menu.Button(this.tr("load"), null, null), c = new qx.ui.menu.Button(this.tr("save"), null, null), d = new qx.ui.menu.Button(this.tr("reset"), null, null);
        b.addListener("execute", function() {
          TABS.SETTINGS.load();
        }, this);
        c.addListener("execute", function() {
          TABS.SETTINGS.save();
        }, this);
        d.addListener("execute", function() {
          TABS.SETTINGS.reset();
          alert(this.tr("Game will reload now."));
          window.location.reload();
        }, this);
        a.add(b);
        a.add(c);
        a.add(d);
        this.Menu.add(new qx.ui.menu.Button("Settings", null, null, a));
        this.Menu.add(new qx.ui.menu.Separator);
        a = new qx.ui.menu.Menu;
        b = new qx.ui.menu.Button(this.tr("Homepage"), "https://github.global.ssl.fastly.net/favicon.ico", null);
        c = new qx.ui.menu.Button(this.tr("Facebook"), "https://fbstatic-a.akamaihd.net/rsrc.php/yl/r/H3nktOa7ZMg.ico", null);
        b.addListener("execute", function() {
          qx.core.Init.getApplication().showExternal("http://eistee82.github.io/ta_simv2");
        }, this);
        c.addListener("execute", function() {
          qx.core.Init.getApplication().showExternal("https://www.facebook.com/tasimv2");
        }, this);
        a.add(b);
        a.add(c);
        this.Menu.add(new qx.ui.menu.Button("Info", null, null, a));
      }, defer:function() {
        TABS.addInit("TABS.MENU");
      }, extend:qx.core.Object, include:[qx.locale.MTranslation], members:{Menu:null}, type:"singleton"});
      qx.Class.define("TABS.STATS", {construct:function(a) {
        try {
          this.base(arguments), this.Enemy = {Airport:{HealthPoints:new TABS.STATS.Entity.HealthPoints, Resource:new TABS.STATS.Entity.Resource}, Barracks:{HealthPoints:new TABS.STATS.Entity.HealthPoints, Resource:new TABS.STATS.Entity.Resource}, Command_Center:{HealthPoints:new TABS.STATS.Entity.HealthPoints, Resource:new TABS.STATS.Entity.Resource}, Construction_Yard:{HealthPoints:new TABS.STATS.Entity.HealthPoints, Resource:new TABS.STATS.Entity.Resource}, Defense:{HealthPoints:new TABS.STATS.Entity.HealthPoints, 
          Resource:new TABS.STATS.Entity.Resource}, Defense_Facility:{HealthPoints:new TABS.STATS.Entity.HealthPoints, Resource:new TABS.STATS.Entity.Resource}, Defense_HQ:{HealthPoints:new TABS.STATS.Entity.HealthPoints, Resource:new TABS.STATS.Entity.Resource}, DefenseArmored:{HealthPoints:new TABS.STATS.Entity.HealthPoints, Resource:new TABS.STATS.Entity.Resource}, DefenseNonArmored:{HealthPoints:new TABS.STATS.Entity.HealthPoints, Resource:new TABS.STATS.Entity.Resource}, Factory:{HealthPoints:new TABS.STATS.Entity.HealthPoints, 
          Resource:new TABS.STATS.Entity.Resource}, Overall:{HealthPoints:new TABS.STATS.Entity.HealthPoints, Resource:new TABS.STATS.Entity.Resource}, Structure:{HealthPoints:new TABS.STATS.Entity.HealthPoints, Resource:new TABS.STATS.Entity.Resource}, Support:{HealthPoints:new TABS.STATS.Entity.HealthPoints, Resource:new TABS.STATS.Entity.Resource}}, this.Offense = {Aircraft:{HealthPoints:new TABS.STATS.Entity.HealthPoints, Resource:new TABS.STATS.Entity.Resource}, Infantry:{HealthPoints:new TABS.STATS.Entity.HealthPoints, 
          Resource:new TABS.STATS.Entity.Resource}, Overall:{HealthPoints:new TABS.STATS.Entity.HealthPoints, Resource:new TABS.STATS.Entity.Resource}, Vehicle:{HealthPoints:new TABS.STATS.Entity.HealthPoints, Resource:new TABS.STATS.Entity.Resource}}, void 0 !== a && this.setAny(a);
        } catch (b) {
          console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error setting up STATS constructor", b), console.groupEnd();
        }
      }, events:{changeBattleDuration:"qx.event.type.Data"}, extend:qx.core.Object, members:{Enemy:null, getAny:function() {
        return {BattleDuration:this.getBattleDuration(), Enemy:{Airport:{HealthPoints:this.Enemy.Airport.HealthPoints.getAny(), Resource:this.Enemy.Airport.Resource.getAny()}, Barracks:{HealthPoints:this.Enemy.Barracks.HealthPoints.getAny(), Resource:this.Enemy.Barracks.Resource.getAny()}, Command_Center:{HealthPoints:this.Enemy.Command_Center.HealthPoints.getAny(), Resource:this.Enemy.Command_Center.Resource.getAny()}, Construction_Yard:{HealthPoints:this.Enemy.Construction_Yard.HealthPoints.getAny(), 
        Resource:this.Enemy.Construction_Yard.Resource.getAny()}, Defense:{HealthPoints:this.Enemy.Defense.HealthPoints.getAny(), Resource:this.Enemy.Defense.Resource.getAny()}, Defense_Facility:{HealthPoints:this.Enemy.Defense_Facility.HealthPoints.getAny(), Resource:this.Enemy.Defense_Facility.Resource.getAny()}, Defense_HQ:{HealthPoints:this.Enemy.Defense_HQ.HealthPoints.getAny(), Resource:this.Enemy.Defense_HQ.Resource.getAny()}, DefenseArmored:{HealthPoints:this.Enemy.DefenseArmored.HealthPoints.getAny(), 
        Resource:this.Enemy.DefenseArmored.Resource.getAny()}, DefenseNonArmored:{HealthPoints:this.Enemy.DefenseNonArmored.HealthPoints.getAny(), Resource:this.Enemy.DefenseNonArmored.Resource.getAny()}, Factory:{HealthPoints:this.Enemy.Factory.HealthPoints.getAny(), Resource:this.Enemy.Factory.Resource.getAny()}, Overall:{HealthPoints:this.Enemy.Overall.HealthPoints.getAny(), Resource:this.Enemy.Overall.Resource.getAny()}, Structure:{HealthPoints:this.Enemy.Structure.HealthPoints.getAny(), Resource:this.Enemy.Structure.Resource.getAny()}, 
        Support:{HealthPoints:this.Enemy.Support.HealthPoints.getAny(), Resource:this.Enemy.Support.Resource.getAny()}}, Offense:{Aircraft:{HealthPoints:this.Offense.Aircraft.HealthPoints.getAny(), Resource:this.Offense.Aircraft.Resource.getAny()}, Infantry:{HealthPoints:this.Offense.Infantry.HealthPoints.getAny(), Resource:this.Offense.Infantry.Resource.getAny()}, Overall:{HealthPoints:this.Offense.Overall.HealthPoints.getAny(), Resource:this.Offense.Overall.Resource.getAny()}, Vehicle:{HealthPoints:this.Offense.Vehicle.HealthPoints.getAny(), 
        Resource:this.Offense.Vehicle.Resource.getAny()}}};
      }, Offense:null, setAny:function(a) {
        void 0 !== a.BattleDuration && a.BattleDuration !== this.getBattleDuration() && this.setBattleDuration(a.BattleDuration);
        void 0 !== a.Enemy.Overall.HealthPoints && this.Enemy.Overall.HealthPoints.setAny(a.Enemy.Overall.HealthPoints);
        void 0 !== a.Enemy.Structure.HealthPoints && this.Enemy.Structure.HealthPoints.setAny(a.Enemy.Structure.HealthPoints);
        void 0 !== a.Enemy.Construction_Yard.HealthPoints && this.Enemy.Construction_Yard.HealthPoints.setAny(a.Enemy.Construction_Yard.HealthPoints);
        void 0 !== a.Enemy.Command_Center.HealthPoints && this.Enemy.Command_Center.HealthPoints.setAny(a.Enemy.Command_Center.HealthPoints);
        void 0 !== a.Enemy.Barracks.HealthPoints && this.Enemy.Barracks.HealthPoints.setAny(a.Enemy.Barracks.HealthPoints);
        void 0 !== a.Enemy.Factory.HealthPoints && this.Enemy.Factory.HealthPoints.setAny(a.Enemy.Factory.HealthPoints);
        void 0 !== a.Enemy.Airport.HealthPoints && this.Enemy.Airport.HealthPoints.setAny(a.Enemy.Airport.HealthPoints);
        void 0 !== a.Enemy.Defense_Facility.HealthPoints && this.Enemy.Defense_Facility.HealthPoints.setAny(a.Enemy.Defense_Facility.HealthPoints);
        void 0 !== a.Enemy.Defense_HQ.HealthPoints && this.Enemy.Defense_HQ.HealthPoints.setAny(a.Enemy.Defense_HQ.HealthPoints);
        void 0 !== a.Enemy.Support.HealthPoints && this.Enemy.Support.HealthPoints.setAny(a.Enemy.Support.HealthPoints);
        void 0 !== a.Enemy.Defense.HealthPoints && this.Enemy.Defense.HealthPoints.setAny(a.Enemy.Defense.HealthPoints);
        void 0 !== a.Enemy.DefenseArmored.HealthPoints && this.Enemy.DefenseArmored.HealthPoints.setAny(a.Enemy.DefenseArmored.HealthPoints);
        void 0 !== a.Enemy.DefenseNonArmored.HealthPoints && this.Enemy.DefenseNonArmored.HealthPoints.setAny(a.Enemy.DefenseNonArmored.HealthPoints);
        void 0 !== a.Offense.Overall.HealthPoints && this.Offense.Overall.HealthPoints.setAny(a.Offense.Overall.HealthPoints);
        void 0 !== a.Offense.Infantry.HealthPoints && this.Offense.Infantry.HealthPoints.setAny(a.Offense.Infantry.HealthPoints);
        void 0 !== a.Offense.Vehicle.HealthPoints && this.Offense.Vehicle.HealthPoints.setAny(a.Offense.Vehicle.HealthPoints);
        void 0 !== a.Offense.Aircraft.HealthPoints && this.Offense.Aircraft.HealthPoints.setAny(a.Offense.Aircraft.HealthPoints);
        void 0 !== a.Enemy.Overall.Resource && this.Enemy.Overall.Resource.setAny(a.Enemy.Overall.Resource);
        void 0 !== a.Enemy.Structure.Resource && this.Enemy.Structure.Resource.setAny(a.Enemy.Structure.Resource);
        void 0 !== a.Enemy.Construction_Yard.Resource && this.Enemy.Construction_Yard.Resource.setAny(a.Enemy.Construction_Yard.Resource);
        void 0 !== a.Enemy.Command_Center.Resource && this.Enemy.Command_Center.Resource.setAny(a.Enemy.Command_Center.Resource);
        void 0 !== a.Enemy.Barracks.Resource && this.Enemy.Barracks.Resource.setAny(a.Enemy.Barracks.Resource);
        void 0 !== a.Enemy.Factory.Resource && this.Enemy.Factory.Resource.setAny(a.Enemy.Factory.Resource);
        void 0 !== a.Enemy.Airport.Resource && this.Enemy.Airport.Resource.setAny(a.Enemy.Airport.Resource);
        void 0 !== a.Enemy.Defense_Facility.Resource && this.Enemy.Defense_Facility.Resource.setAny(a.Enemy.Defense_Facility.Resource);
        void 0 !== a.Enemy.Defense_HQ.Resource && this.Enemy.Defense_HQ.Resource.setAny(a.Enemy.Defense_HQ.Resource);
        void 0 !== a.Enemy.Support.Resource && this.Enemy.Support.Resource.setAny(a.Enemy.Support.Resource);
        void 0 !== a.Enemy.Defense.Resource && this.Enemy.Defense.Resource.setAny(a.Enemy.Defense.Resource);
        void 0 !== a.Enemy.DefenseArmored.Resource && this.Enemy.DefenseArmored.Resource.setAny(a.Enemy.DefenseArmored.Resource);
        void 0 !== a.Enemy.DefenseNonArmored.Resource && this.Enemy.DefenseNonArmored.Resource.setAny(a.Enemy.DefenseNonArmored.Resource);
        void 0 !== a.Offense.Overall.Resource && this.Offense.Overall.Resource.setAny(a.Offense.Overall.Resource);
        void 0 !== a.Offense.Infantry.Resource && this.Offense.Infantry.Resource.setAny(a.Offense.Infantry.Resource);
        void 0 !== a.Offense.Vehicle.Resource && this.Offense.Vehicle.Resource.setAny(a.Offense.Vehicle.Resource);
        void 0 !== a.Offense.Aircraft.Resource && this.Offense.Aircraft.Resource.setAny(a.Offense.Aircraft.Resource);
      }}, properties:{BattleDuration:{check:"Number", event:"changeBattleDuration", init:0}}, statics:{_calcBattleDuration:function(a, b) {
        var c = a;
        c < 12E4 * b[3] && (c = 12E4 * b[3]);
        12E4 < c && (c = 12E4);
        0 > c && (c = 0);
        return c * (b[2] ? -1 : 1);
      }, _calcCosts:function(a, b) {
        return (a[ClientLib.Base.EResourceType.Tiberium] + a[ClientLib.Base.EResourceType.Crystal] + a[ClientLib.Base.EResourceType.Credits] + a[ClientLib.Base.EResourceType.ResearchPoints]) * (b[2] ? -1 : 1);
      }, _calcHealthPoints:function(a, b) {
        var c = a.end + a.endFront;
        a.end < b[3] * a.max && (c = b[3] * (a.max + a.maxFront));
        !0 !== b[4] || a.end || (c = a.max + a.maxFront);
        c > a.max + a.maxFront && (c = a.max + a.maxFront);
        0 > c && (c = 0);
        switch(b[0]) {
          case this.Prio.Offense:
          ;
          case this.Prio.Infantry:
          ;
          case this.Prio.Vehicle:
          ;
          case this.Prio.Aircraft:
            c *= -1;
        }
        return c * (b[2] ? -1 : 1);
      }, _calcHealthPointsAutoRepair:function(a, b) {
        var c = a.end + a.rep + a.endFront;
        a.end + a.rep < b[3] * a.max && (c = b[3] * (a.max + a.maxFront));
        !0 === b[4] && 0 !== a.end + a.rep && (c = a.max + a.maxFront);
        c > a.max + a.maxFront && (c = a.max + a.maxFront);
        0 > c && (c = 0);
        switch(b[0]) {
          case this.Prio.Offense:
          ;
          case this.Prio.Infantry:
          ;
          case this.Prio.Vehicle:
          ;
          case this.Prio.Aircraft:
            c *= -1;
        }
        return c * (b[2] ? -1 : 1);
      }, _selectType:function(a, b) {
        switch(b[1]) {
          case this.Type.HealthPointPercent:
            return this._calcHealthPoints(a.HealthPoints, b);
          case this.Type.RepairChargeBase:
            return a.Resource[ClientLib.Base.EResourceType.RepairChargeBase] * (b[2] ? -1 : 1);
          case this.Type.RepairChargeOffense:
            return Math.max(a.Resource[ClientLib.Base.EResourceType.RepairChargeAir], a.Resource[ClientLib.Base.EResourceType.RepairChargeInf], a.Resource[ClientLib.Base.EResourceType.RepairChargeVeh]) * (b[2] ? -1 : 1);
          case this.Type.RepairCosts:
          ;
          case this.Type.Loot:
            return this._calcCosts(a.Resource, b);
          case this.Type.HealthPointAutoRepairPercent:
            return this._calcHealthPointsAutoRepair(a.HealthPoints, b);
          default:
            return Number.MAX_VALUE;
        }
      }, getPreset:function(a) {
        switch(a) {
          case 1:
            return {Description:"Most priority to construction yard including all in front of it.<br>After this the best total enemy health from the cached simulations is selected.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected.", Name:"CY", Prio:[[TABS.STATS.Prio.Construction_Yard, TABS.STATS.Type.HealthPointPercent, !1, 0, !1], [TABS.STATS.Prio.Enemy, TABS.STATS.Type.HealthPointPercent, !1, 0, !1], [TABS.STATS.Prio.Offense, 
            TABS.STATS.Type.RepairChargeOffense, !1, 0, !1], [TABS.STATS.Prio.Offense, TABS.STATS.Type.HealthPointPercent, !1, 0, !1], [TABS.STATS.Prio.BattleDuration, null, !1, 0, !1]]};
          case 2:
            return {Description:"Most priority to defense facility including all in front of it.<br>After this the best armored defense health from the cached simulations is selected.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected.", Name:"DF", Prio:[[TABS.STATS.Prio.Defense_Facility, TABS.STATS.Type.HealthPointPercent, !1, 0, !1], [TABS.STATS.Prio.DefenseArmored, TABS.STATS.Type.HealthPointPercent, !1, 0, !1], 
            [TABS.STATS.Prio.Offense, TABS.STATS.Type.RepairChargeOffense, !1, 0, !1], [TABS.STATS.Prio.Offense, TABS.STATS.Type.HealthPointPercent, !1, 0, !1], [TABS.STATS.Prio.BattleDuration, null, !1, 0, !1]]};
          case 3:
            return {Description:"Most priority to defense health including the auto repair after the battle.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected.", Name:"Deff", Prio:[[TABS.STATS.Prio.AutoRepair, TABS.STATS.Type.HealthPointAutoRepairPercent, !1, 0, !1], [TABS.STATS.Prio.Offense, TABS.STATS.Type.RepairChargeOffense, !1, 0, !1], [TABS.STATS.Prio.Offense, TABS.STATS.Type.HealthPointPercent, !1, 0, !1], 
            [TABS.STATS.Prio.BattleDuration, null, !1, 0, !1]]};
          case 4:
            return {Description:"Most priority to command center including all in front of it.<br>After this the best total enemy health from the cached simulations is selected.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected.", Name:"CC", Prio:[[TABS.STATS.Prio.Command_Center, TABS.STATS.Type.HealthPointPercent, !1, 0, !1], [TABS.STATS.Prio.Enemy, TABS.STATS.Type.HealthPointPercent, !1, 0, !1], [TABS.STATS.Prio.Offense, 
            TABS.STATS.Type.RepairChargeOffense, !1, 0, !1], [TABS.STATS.Prio.Offense, TABS.STATS.Type.HealthPointPercent, !1, 0, !1], [TABS.STATS.Prio.BattleDuration, null, !1, 0, !1]]};
          case 5:
            return {Description:"NoKill (farming) priorety.<br>Not working correctly yet.", Name:"CY*", Prio:[[TABS.STATS.Prio.DefenseArmored, TABS.STATS.Type.HealthPointPercent, !1, 0, !1], [TABS.STATS.Prio.Defense_Facility, TABS.STATS.Type.HealthPointPercent, !1, 0, !1], [TABS.STATS.Prio.Construction_Yard, TABS.STATS.Type.HealthPointPercent, !1, .1, !0], [TABS.STATS.Prio.Enemy, TABS.STATS.Type.HealthPointPercent, !0, .8, !0], [TABS.STATS.Prio.Offense, TABS.STATS.Type.RepairChargeOffense, !1, 0, 
            !1], [TABS.STATS.Prio.Offense, TABS.STATS.Type.HealthPointPercent, !1, 0, !1], [TABS.STATS.Prio.BattleDuration, null, !1, 0, !1]]};
          default:
            return {Description:"Shows the current army formation.", Name:"live", Prio:[]};
        }
      }, Prio:{Aircraft:17, Airport:7, AutoRepair:19, Barracks:5, BattleDuration:18, Click:0, Command_Center:4, Construction_Yard:3, Defense:11, Defense_Facility:8, Defense_HQ:9, DefenseArmored:12, DefenseNonArmored:13, Enemy:1, Factory:6, Infantry:15, Offense:14, Structure:2, Support:10, Vehicle:16}, selectPrio:function(a, b) {
        switch(b[0]) {
          case this.Prio.Enemy:
            return this._selectType(a.Enemy.Overall, b);
          case this.Prio.Structure:
            return this._selectType(a.Enemy.Structure, b);
          case this.Prio.Construction_Yard:
            return this._selectType(a.Enemy.Construction_Yard, b);
          case this.Prio.Command_Center:
            return this._selectType(a.Enemy.Command_Center, b);
          case this.Prio.Barracks:
            return this._selectType(a.Enemy.Barracks, b);
          case this.Prio.Factory:
            return this._selectType(a.Enemy.Factory, b);
          case this.Prio.Airport:
            return this._selectType(a.Enemy.Airport, b);
          case this.Prio.Defense_Facility:
            return this._selectType(a.Enemy.Defense_Facility, b);
          case this.Prio.Defense_HQ:
            return this._selectType(a.Enemy.Defense_HQ, b);
          case this.Prio.Support:
            return this._selectType(a.Enemy.Support, b);
          case this.Prio.Defense:
            return this._selectType(a.Enemy.Defense, b);
          case this.Prio.DefenseArmored:
            return this._selectType(a.Enemy.DefenseArmored, b);
          case this.Prio.DefenseNonArmored:
            return this._selectType(a.Enemy.DefenseNonArmored, b);
          case this.Prio.Offense:
            return this._selectType(a.Offense.Overall, b);
          case this.Prio.Infantry:
            return this._selectType(a.Offense.Infantry, b);
          case this.Prio.Vehicle:
            return this._selectType(a.Offense.Vehicle, b);
          case this.Prio.Aircraft:
            return this._selectType(a.Offense.Aircraft, b);
          case this.Prio.BattleDuration:
            return this._calcBattleDuration(a.BattleDuration, b);
          case this.Prio.AutoRepair:
            return this._selectType(a.Enemy.DefenseArmored, b);
          default:
            return Number.MAX_VALUE;
        }
      }, Type:{Click:0, HealthPointAutoRepairPercent:6, HealthPointPercent:1, Loot:5, RepairChargeBase:2, RepairChargeOffense:3, RepairCosts:4}}});
      qx.Class.define("TABS.STATS.Entity.HealthPoints", {construct:function(a) {
        try {
          this.base(arguments), void 0 !== a && this.setAny(a);
        } catch (b) {
          console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error setting up STATS.Entity.HealthPoints constructor", b), console.groupEnd();
        }
      }, events:{changeEnd:"qx.event.type.Data", changeEndFront:"qx.event.type.Data", changeMax:"qx.event.type.Data", changeMaxFront:"qx.event.type.Data", changeStart:"qx.event.type.Data", changeStartFront:"qx.event.type.Data"}, extend:qx.core.Object, members:{getAny:function() {
        return {end:this.getEnd(), endFront:this.getEndFront(), max:this.getMax(), maxFront:this.getMaxFront(), rep:this.getRep(), start:this.getStart(), startFront:this.getStartFront()};
      }, setAny:function(a) {
        void 0 !== a.max && a.max !== this.getMax() && this.setMax(a.max);
        void 0 !== a.start && a.start !== this.getStart() && this.setStart(a.start);
        void 0 !== a.end && a.end !== this.getEnd() && this.setEnd(a.end);
        void 0 !== a.rep && a.rep !== this.getRep() && this.setRep(a.rep);
        void 0 !== a.maxFront && a.maxFront !== this.getMaxFront() && this.setMaxFront(a.maxFront);
        void 0 !== a.startFront && a.startFront !== this.getStartFront() && this.setStartFront(a.startFront);
        void 0 !== a.endFront && a.endFront !== this.getEndFront() && this.setEndFront(a.endFront);
      }}, properties:{end:{check:"Number", event:"changeEnd", init:0}, endFront:{check:"Number", event:"changeEndFront", init:0}, max:{check:"Number", event:"changeMax", init:0}, maxFront:{check:"Number", event:"changeMaxFront", init:0}, rep:{check:"Number", event:"changeRep", init:0}, start:{check:"Number", event:"changeStart", init:0}, startFront:{check:"Number", event:"changeStartFront", init:0}}});
      qx.Class.define("TABS.STATS.Entity.Resource", {construct:function(a) {
        try {
          this.base(arguments), void 0 !== a && this.setAny(a);
        } catch (b) {
          console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error setting up STATS.Entity.Resource constructor", b), console.groupEnd();
        }
      }, events:{changeCredits:"qx.event.type.Data", changeCrystal:"qx.event.type.Data", changeRepairChargeAir:"qx.event.type.Data", changeRepairChargeBase:"qx.event.type.Data", changeRepairChargeInf:"qx.event.type.Data", changeRepairChargeVeh:"qx.event.type.Data", changeResearchPoints:"qx.event.type.Data", changeTiberium:"qx.event.type.Data"}, extend:qx.core.Object, members:{getAny:function() {
        return {1:this.getTiberium(), 10:this.getRepairChargeVeh(), 2:this.getCrystal(), 3:this.getCredits(), 6:this.getResearchPoints(), 7:this.getRepairChargeBase(), 8:this.getRepairChargeAir(), 9:this.getRepairChargeInf()};
      }, setAny:function(a) {
        void 0 !== a[1] && a[1] !== this.getTiberium() && this.setTiberium(a[1]);
        void 0 !== a[2] && a[2] !== this.getCrystal() && this.setCrystal(a[2]);
        void 0 !== a[3] && a[3] !== this.getCredits() && this.setCredits(a[3]);
        void 0 !== a[6] && a[6] !== this.getResearchPoints() && this.setResearchPoints(a[6]);
        void 0 !== a[7] && a[7] !== this.getRepairChargeBase() && this.setRepairChargeBase(a[7]);
        void 0 !== a[8] && a[8] !== this.getRepairChargeAir() && this.setRepairChargeAir(a[8]);
        void 0 !== a[9] && a[9] !== this.getRepairChargeInf() && this.setRepairChargeInf(a[9]);
        void 0 !== a[10] && a[10] !== this.getRepairChargeVeh() && this.setRepairChargeVeh(a[10]);
      }}, properties:{Credits:{check:"Number", event:"changeCredits", init:0}, Crystal:{check:"Number", event:"changeCrystal", init:0}, RepairChargeAir:{check:"Number", event:"changeRepairChargeAir", init:0}, RepairChargeBase:{check:"Number", event:"changeRepairChargeBase", init:0}, RepairChargeInf:{check:"Number", event:"changeRepairChargeInf", init:0}, RepairChargeVeh:{check:"Number", event:"changeRepairChargeVeh", init:0}, ResearchPoints:{check:"Number", event:"changeResearchPoints", init:0}, 
      Tiberium:{check:"Number", event:"changeTiberium", init:0}}});
      qx.Class.define("TABS.CACHE", {construct:function() {
        try {
          this.base(arguments);
          this.cities = {};
          this.__Table = new Uint32Array(256);
          for (var a, b = 256;b--;) {
            a = b;
            for (var c = 8;c--;) {
              a = a & 1 ? 3988292384 ^ a >>> 1 : a >>> 1;
            }
            this.__Table[b] = a;
          }
        } catch (d) {
          console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error setting up CACHE constructor", d), console.groupEnd();
        }
      }, events:{addSimulation:"qx.event.type.Event"}, extend:qx.core.Object, members:{__Table:null, __validate:function(a, b, c) {
        var d = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(a);
        b = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(b);
        a = "object" != typeof c ? this.getAll(a) : c;
        var e;
        if (null !== d && -1 !== d.get_Version()) {
          var f = d.get_Version();
          if (a.data.version != f) {
            for (e in a.data.version = f, a.caches) {
              a.caches[e].valid = !1;
            }
          }
        }
        if (null !== b && -1 !== b.get_Version()) {
          f = ClientLib.Data.MainData.GetInstance().get_Alliance();
          b = b.get_hasRecovery();
          "object" != typeof c && "undefined" !== typeof a.caches[c] && a.caches[c].recovery != b && (a.caches[c].valid = !1);
          if ("object" == typeof c && a.data.recovery != b) {
            for (e in a.caches) {
              a.caches[e].valid = !1;
            }
          }
          if (null !== f && (a.data.air != f.get_POIAirBonus() || a.data.inf != f.get_POIInfantryBonus() || a.data.veh != f.get_POIVehicleBonus()) && !1 === b) {
            for (e in a.data.air = f.get_POIAirBonus(), a.data.inf = f.get_POIInfantryBonus(), a.data.veh = f.get_POIVehicleBonus(), null !== d && (a.data.version = d.get_Version()), a.caches) {
              a.caches[e].valid = !1;
            }
          }
        }
      }, _Crc32:function(a) {
        for (var b = 4294967295, c = 0, d = a.length;c < d;c++) {
          b = b >>> 8 ^ this.__Table[(b ^ a[c]) & 255];
        }
        return b ^ -1;
      }, add:function(a, b, c) {
        b = void 0 !== b && null !== b ? b : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId();
        c = void 0 !== c && null !== c ? c : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId();
        var d = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(c), e = this.getAll(b).caches;
        e[a.key] = a.result;
        e[a.key].cityid = b;
        e[a.key].ownid = c;
        null !== d && (e[a.key].recovery = d.get_hasRecovery());
        e[a.key].valid = !0;
        this.onAdd();
      }, calcUnitsHash:function(a, b) {
        if (null !== a) {
          a.sort(this.sortByPosition);
          var c = void 0 !== b && null !== b ? b : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId(), d, e = [];
          for (d = 0;d < a.length;d++) {
            a[d].enabled && 0 < a[d].h && e.push(a[d].x, a[d].y, a[d].i, a[d].l);
          }
          return c.toString() + this._Crc32(e);
        }
        return null;
      }, check:function(a, b, c) {
        b = void 0 !== b && null !== b ? b : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId();
        c = void 0 !== c && null !== c ? c : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId();
        a = this.calcUnitsHash(a, c);
        return null !== b && null !== c && null !== a ? (this.__validate(b, c, a), {key:a, result:this.get(a, b)}) : {key:null, result:null};
      }, cities:null, clear:function(a) {
        return "undefined" !== typeof this.cities[a] ? delete this.cities[a] : !1;
      }, clearAll:function() {
        this.cities = {};
      }, get:function(a, b) {
        var c = void 0 !== b && null !== b ? b : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId(), c = this.getAll(c).caches;
        return "undefined" !== typeof c[a] && c[a].valid ? c[a] : null;
      }, getAll:function(a) {
        a = void 0 !== a && null !== a ? a : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId();
        "undefined" === typeof this.cities[a] && (this.cities[a] = {caches:{}, data:{}});
        return this.cities[a];
      }, getCitySimAmount:function(a) {
        a = void 0 !== a && null !== a ? a : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId();
        return "undefined" !== typeof this.cities[a] && "undefined" !== typeof this.cities[a].caches ? Object.keys(this.cities[a].caches).length : 0;
      }, getPrio:function(a, b, c) {
        b = void 0 !== b && null !== b ? b : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId();
        b = this.getAll(b).caches;
        var d = [], e;
        for (e in b) {
          (null === c || void 0 === c || null !== c && void 0 !== c && b[e].ownid == c) && d.push({key:e, result:b[e]});
        }
        d.sort(function(b, c) {
          for (var d = 0, e = 0;e < a.length && !(b.diff = d, c.diff = d);e++) {
            d = TABS.STATS.selectPrio(b.result.stats, a[e]) - TABS.STATS.selectPrio(c.result.stats, a[e]);
          }
          return d;
        });
        return d;
      }, getPrio1:function(a, b, c) {
        a = this.getPrio(a, b, c);
        if (0 === a.length) {
          a = {key:null, result:null};
        } else {
          for (i = 0;i < a.length;i++) {
            if (!0 === a[i].result.valid) {
              a = a[i];
              break;
            }
          }
          "[object Array]" === Object.prototype.toString.call(a) && (a = a[0]);
        }
        return a;
      }, merge:function(a, b, c, d) {
        try {
          var e = void 0 !== a && null !== a ? a : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId(), f = void 0 !== b && null !== b ? b : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId(), h;
          a = {caches:d, data:c};
          for (h in a.caches) {
            a.caches[h].cityid = e, a.caches[h].ownid = f, a.caches[h].recovery = a.data.recovery, a.caches[h].valid = !0;
          }
          this.__validate(e, f, a);
          qx.lang.Object.mergeWith(this.getAll(e).caches, a.caches);
          this.onAdd();
        } catch (l) {
          console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error in TABS.CACHE.merge", l), console.groupEnd();
        }
      }, onAdd:function() {
        phe.cnc.base.Timer.getInstance().removeListener("uiTick", this.onUiTick, this);
        phe.cnc.base.Timer.getInstance().addListener("uiTick", this.onUiTick, this);
      }, onUiTick:function() {
        phe.cnc.base.Timer.getInstance().removeListener("uiTick", this.onUiTick, this);
        this.fireEvent("addSimulation");
      }, sortByPosition:function(a, b) {
        return a.x - b.x || a.y - b.y || a.i - b.i;
      }}, type:"singleton"});
      qx.Class.define("TABS.APISimulation", {construct:function() {
        try {
          this.base(arguments), this.addListener("OnSimulateBattleFinished", this._OnSimulateBattleFinished, this);
        } catch (a) {
          console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error setting up APISimulation constructor", a), console.groupEnd();
        }
      }, events:{OnData:"qx.event.type.Data", OnLock:"qx.event.type.Data", OnSimulateBattleFinished:"qx.event.type.Data", OnTime:"qx.event.type.Data"}, extend:qx.core.Object, members:{__Timeout:null, __TimerStart:null, _OnSimulateBattleFinished:function(a) {
        if (null !== ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity() && (a = a.getData(), null !== a)) {
          var b = TABS.UTIL.Formation.Merge(this.getFormation(), a.d.a), c = TABS.CACHE.getInstance().check(b, a.d.di, a.d.ai);
          this.setData(a.e);
          c.result = {combat:a.d, formation:b, stats:TABS.UTIL.Stats.get_Stats(a).getAny()};
          TABS.CACHE.getInstance().add(c, a.d.di, a.d.ai);
        }
      }, _reset:function() {
        this.resetLock();
        this.resetData();
        this.resetTime();
        this.getRequest() && (this.resetRequest(), this.SimulateBattle());
      }, _updateTime:function() {
        clearTimeout(this.__Timeout);
        var a = this.__TimerStart + 1E4 - Date.now();
        0 < a ? this.__Timeout = 100 < a ? setTimeout(this._updateTime.bind(this), 100) : setTimeout(this._updateTime.bind(this), a) : this.__TimerStart = a = 0;
        this.setTime(a);
        0 === this.getTime() && this._reset();
      }, SimulateBattle:function() {
        if (this.getLock()) {
          this.setRequest(!0);
        } else {
          var a = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity(), b = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
          if (null !== a && null !== b && b.CheckInvokeBattle(a, !0) == ClientLib.Data.EAttackBaseResult.OK) {
            clearTimeout(this.__Timeout);
            this.__Timeout = setTimeout(this._reset.bind(this), 1E4);
            this.resetData();
            this.setLock(!0);
            var c = TABS.UTIL.Formation.Get(), d = [], e;
            for (e in c) {
              c[e].enabled && 0 < c[e].h && d.push({i:c[e].id, x:c[e].x, y:c[e].y});
            }
            this.setFormation(c);
            ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("SimulateBattle", {battleSetup:{a:a.get_Id(), d:b.get_Id(), s:0, u:d}}, phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, function(a, b) {
              this.__TimerStart = Date.now();
              this._updateTime();
              this.fireDataEvent("OnSimulateBattleFinished", b);
            }), null);
          }
        }
      }}, properties:{data:{check:"Array", event:"OnData", init:[]}, formation:{check:"Array", init:[]}, formationHash:{check:"Array", init:[]}, lock:{check:"Boolean", event:"OnLock", init:!1}, request:{check:"Boolean", init:!1}, time:{check:"Number", event:"OnTime", init:0}}, type:"singleton"});
      qx.Class.define("TABS.PreArmyUnits", {construct:function() {
        try {
          this.base(arguments), phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentOwnChange", ClientLib.Data.CurrentOwnCityChange, this, this.__CurrentOwnCityChange), phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentChange", ClientLib.Data.CurrentCityChange, this, this.__CurrentCityChange), phe.cnc.Util.attachNetEvent(ClientLib.Vis.VisMain.GetInstance(), "ViewModeChange", ClientLib.Vis.ViewModeChange, this, this.__ViewModeChange), 
          null !== ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity() && this.__CurrentOwnCityChange(0, ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity().get_Id()), null !== ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity() && this.__CurrentCityChange(0, ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity().get_Id()), this.patchSetEnabled();
        } catch (a) {
          console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error setting up PreArmyUnits constructor", a), console.groupEnd();
        }
      }, defer:function() {
        TABS.addInit("TABS.PreArmyUnits");
      }, events:{OnCityPreArmyUnitsChanged:"qx.event.type.Event"}, extend:qx.core.Object, members:{__CityPreArmyUnitsChanged:function() {
        clearTimeout(this.__Timeout);
        if (0 <= this.CurrentCity.get_Version() && ClientLib.Vis.VisMain.GetInstance().GetActiveView().get_VisAreaComplete()) {
          this.__Timeout = setTimeout(this._onCityPreArmyUnitsChanged.bind(this), 100);
        } else {
          if (-1 == this.CurrentCity.get_Version() || 0 <= this.CurrentCity.get_Version() && !ClientLib.Vis.VisMain.GetInstance().GetActiveView().get_VisAreaComplete()) {
            this.__Timeout = setTimeout(this.__CityPreArmyUnitsChanged.bind(this), 100);
          }
        }
      }, __CurrentCityChange:function(a, b) {
        null !== this.CurrentOwnCity && null !== this.CurrentCity && null !== this.CityPreArmyUnits && phe.cnc.Util.detachNetEvent(this.CityPreArmyUnits, "ArmyChanged", ClientLib.Data.CityPreArmyUnitsChanged, this, this.__CityPreArmyUnitsChanged);
        var c = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(b);
        null === c || c.IsOwnBase() || (this.CurrentCity = c, null !== this.CurrentOwnCity && ClientLib.Vis.VisMain.GetInstance().get_Mode() === ClientLib.Vis.Mode.CombatSetup && (this.CityPreArmyUnits = this.CurrentOwnCity.get_CityArmyFormationsManager().GetUpdatedFormationByTargetBaseId(c.get_Id()), phe.cnc.Util.attachNetEvent(this.CityPreArmyUnits, "ArmyChanged", ClientLib.Data.CityPreArmyUnitsChanged, this, this.__CityPreArmyUnitsChanged), this.__CityPreArmyUnitsChanged()));
      }, __CurrentOwnCityChange:function(a, b) {
        null !== this.CurrentOwnCity && null !== this.CurrentCity && null !== this.CityPreArmyUnits && phe.cnc.Util.detachNetEvent(this.CityPreArmyUnits, "ArmyChanged", ClientLib.Data.CityPreArmyUnitsChanged, this, this.__CityPreArmyUnitsChanged);
        var c = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(b);
        null !== c && c.IsOwnBase() && (this.CurrentOwnCity = c, null !== this.CurrentCity && ClientLib.Vis.VisMain.GetInstance().get_Mode() === ClientLib.Vis.Mode.CombatSetup && (this.CityPreArmyUnits = c.get_CityArmyFormationsManager().GetUpdatedFormationByTargetBaseId(this.CurrentCity.get_Id()), phe.cnc.Util.attachNetEvent(this.CityPreArmyUnits, "ArmyChanged", ClientLib.Data.CityPreArmyUnitsChanged, this, this.__CityPreArmyUnitsChanged), this.__CityPreArmyUnitsChanged()));
      }, __Timeout:null, __ViewModeChange:function(a, b) {
        b == ClientLib.Vis.Mode.CombatSetup && null !== this.CurrentCity && null !== this.CurrentOwnCity ? (this.CityPreArmyUnits = this.CurrentOwnCity.get_CityArmyFormationsManager().GetUpdatedFormationByTargetBaseId(this.CurrentCity.get_Id()), phe.cnc.Util.attachNetEvent(this.CityPreArmyUnits, "ArmyChanged", ClientLib.Data.CityPreArmyUnitsChanged, this, this.__CityPreArmyUnitsChanged), this.__CityPreArmyUnitsChanged()) : a == ClientLib.Vis.Mode.CombatSetup && null !== this.CityPreArmyUnits && (phe.cnc.Util.detachNetEvent(this.CityPreArmyUnits, 
        "ArmyChanged", ClientLib.Data.CityPreArmyUnitsChanged, this, this.__CityPreArmyUnitsChanged), this.CityPreArmyUnits = null);
      }, _onCityPreArmyUnitsChanged:function() {
        this.fireEvent("OnCityPreArmyUnitsChanged");
      }, CityPreArmyUnits:null, CurrentCity:null, CurrentOwnCity:null, patchSetEnabled:function() {
        try {
          var a = ClientLib.Data.CityPreArmyUnit.prototype.set_Enabled.toString(), b = a.substring(a.indexOf("(") + 1, a.indexOf(")")), c = a.substring(a.indexOf("{") + 1, a.lastIndexOf("}"));
          ClientLib.Data.CityPreArmyUnit.prototype.set_Enabled = Function(b, c + "TABS.PreArmyUnits.getInstance().__CityPreArmyUnitsChanged();");
        } catch (d) {
          console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error setting up ClientLib.Data.CityPreArmyUnit.prototype.set_Enabled", d), console.groupEnd();
        }
      }}, type:"singleton"});
      qx.Class.define("TABS.PreArmyUnits.AutoSimulate", {construct:function() {
        try {
          this.base(arguments), this.getEnabled() && TABS.PreArmyUnits.getInstance().addListener("OnCityPreArmyUnitsChanged", this.SimulateBattle, this);
        } catch (a) {
          console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error setting up PreArmyUnits.AutoSimulate constructor", a), console.groupEnd();
        }
      }, defer:function() {
        TABS.addInit("TABS.PreArmyUnits.AutoSimulate");
      }, events:{changeEnabled:"qx.event.type.Data"}, extend:qx.core.Object, members:{_applyEnabled:function(a) {
        TABS.SETTINGS.set("PreArmyUnits.AutoSimulate", a);
        !0 === a ? TABS.PreArmyUnits.getInstance().addListener("OnCityPreArmyUnitsChanged", this.SimulateBattle, this) : TABS.PreArmyUnits.getInstance().removeListener("OnCityPreArmyUnitsChanged", this.SimulateBattle, this);
      }, SimulateBattle:function() {
        var a = TABS.UTIL.Formation.Get();
        null !== a && 0 < a.length && null === TABS.CACHE.getInstance().check(a).result && TABS.APISimulation.getInstance().SimulateBattle();
      }}, properties:{enabled:{apply:"_applyEnabled", check:"Boolean", event:"changeEnabled", init:TABS.SETTINGS.get("PreArmyUnits.AutoSimulate", !0)}}, type:"singleton"});
      qx.Class.define("TABS.GUI.ArmySetupAttackBar", {construct:function() {
        try {
          this.base(arguments);
          this.ArmySetupAttackBar = qx.core.Init.getApplication().getArmySetupAttackBar();
          var a, b;
          for (a = 0;a < ClientLib.Base.Util.get_ArmyMaxSlotCountY();a++) {
            b = 441469 <= PerforceChangelist ? this.ArmySetupAttackBar.getMainContainer().getChildren()[a + 3] : this.ArmySetupAttackBar.getMainContainer().getChildren()[a + 4], b._removeAll(), b._setLayout(new qx.ui.layout.HBox), b._add(this.newSideButton(TABS.RES.IMG.Flip.H, this.tr("Mirrors units horizontally."), this.onClick_btnMirror, "h", a)), b._add(new qx.ui.core.Spacer, {flex:1}), b._add(this.newSideButton(TABS.RES.IMG.Arrows.Left, this.tr("Shifts units one space left."), this.onClick_btnShift, 
            "l", a)), b._add(this.newSideButton(TABS.RES.IMG.Arrows.Right, this.tr("Shifts units one space right."), this.onClick_btnShift, "r", a));
          }
          var c = this.ArmySetupAttackBar.getMainContainer().getChildren()[1].getChildren()[0], d = new qx.ui.container.Composite(new qx.ui.layout.HBox), e = new qx.ui.container.Composite(new qx.ui.layout.HBox);
          e.add(new qx.ui.core.Spacer, {flex:1});
          e.add(d);
          e.add(new qx.ui.core.Spacer, {flex:1});
          this.ArmySetupAttackBar.getChildren()[2].addAt(e, 0, {left:16, right:0, top:2});
          var f = this.ArmySetupAttackBar.getMainContainer();
          f.setMarginTop(f.getMarginTop() + 20);
          c.bind("changeWidth", d, "width");
          for (a = 0;a < ClientLib.Base.Util.get_ArmyMaxSlotCountX();a++) {
            d.add(new qx.ui.core.Spacer, {flex:1}), d.add(this.newTopButton(TABS.RES.IMG.Flip.V, this.tr("Mirrors units vertically."), this.onClick_btnMirror, "v", a)), d.add((new qx.ui.core.Spacer).set({width:2})), d.add(this.newTopButton(TABS.RES.IMG.Arrows.Up, this.tr("Shifts units one space up."), this.onClick_btnShift, "u", a)), d.add(this.newTopButton(TABS.RES.IMG.Arrows.Down, this.tr("Shifts units one space down."), this.onClick_btnShift, "d", a)), d.add(new qx.ui.core.Spacer, {flex:1});
          }
        } catch (h) {
          console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error setting up GUI.ArmySetupAttackBar constructor", h), console.groupEnd();
        }
      }, defer:function() {
        TABS.addInit("TABS.GUI.ArmySetupAttackBar");
      }, destruct:function() {
      }, extend:qx.core.Object, include:[qx.locale.MTranslation], members:{ArmySetupAttackBar:null, newSideButton:function(a, b, c, d, e) {
        a = (new qx.ui.form.ModelButton(null, a)).set({alignY:"middle", appearance:"button-addpoints", iconPosition:"top", maxHeight:25, model:[d, e], show:"icon", toolTipText:b, width:20});
        a.getChildControl("icon").set({maxHeight:16, maxWidth:16, scale:!0});
        a.addListener("click", c, this);
        return a;
      }, newTopButton:function(a, b, c, d, e) {
        a = (new qx.ui.form.ModelButton(null, a)).set({alignY:"middle", appearance:"button-addpoints", iconPosition:"top", maxHeight:20, model:[d, e], opacity:.3, show:"icon", toolTipText:b, width:25});
        a.getChildControl("icon").set({maxHeight:14, maxWidth:14, scale:!0});
        a.addListener("click", c, this);
        a.addListener("mouseover", function(a) {
          a.getTarget().set({opacity:1});
        }, this);
        a.addListener("mouseout", function(a) {
          a.getTarget().set({opacity:.3});
        }, this);
        return a;
      }, onClick_btnShift:function(a) {
        var b = TABS.UTIL.Formation.Get(), b = TABS.UTIL.Formation.Shiftz(b, a.getTarget().getModel()[0], a.getTarget().getModel()[1]);
        TABS.UTIL.Formation.Set(b);
      },onClick_btnShift:function(a) {
        var b = TABS.UTIL.Formation.Get(), b = TABS.UTIL.Formation.Shifts(b, a.getTarget().getModel()[0], a.getTarget().getModel()[1]);
        TABS.UTIL.Formation.Set(b);
      }, onClick_btnShift:function(a) {
        var b = TABS.UTIL.Formation.Get(), b = TABS.UTIL.Formation.Shift(b, a.getTarget().getModel()[0], a.getTarget().getModel()[1]);
        TABS.UTIL.Formation.Set(b);
      }}, type:"singleton"});
      qx.Class.define("TABS.GUI.PlayArea", {construct:function() {
        try {
          this.base(arguments);
          this.PlayArea = qx.core.Init.getApplication().getPlayArea();
          this.HUD = this.PlayArea.getHUD();
          var a = this.HUD.getUIItem(ClientLib.Data.Missions.PATH.WDG_COMBATSWAPVIEW);
          this.btnSimulation = (new webfrontend.ui.SoundButton(null, TABS.RES.IMG.Simulate)).set({allowGrowX:!1, allowGrowY:!1, appearance:"button-baseviews", height:44, marginRight:6, toolTipText:this.tr("View Simulation") + " [NUM 0]", width:44});
          this.btnSimulation.addListener("click", function() {
            this.onClick_btnSimulation();
          }, this);
          TABS.APISimulation.getInstance().bind("time", this.btnSimulation, "label", {converter:function(a) {
            return (a / 1E3).toFixed(1);
          }});
          TABS.APISimulation.getInstance().addListener("OnSimulateBattleFinished", function() {
            this._updateBtnSimulation();
          }, this);
          TABS.APISimulation.getInstance().addListener("OnTimeChange", function() {
            this._updateBtnSimulation();
          }, this);
          TABS.PreArmyUnits.getInstance().addListener("OnCityPreArmyUnitsChanged", function() {
            this._updateBtnSimulation();
          }, this);
          a.getLayoutParent().addAfter(this.btnSimulation, a);
          this.boxMove = (new qx.ui.container.Composite(new qx.ui.layout.Grid)).set({decorator:"pane-light-plain", opacity:.7, paddingBottom:3, paddingLeft:2, paddingRight:1, paddingTop:0});
          this.boxMove.add(this.newButton(TABS.RES.IMG.Stats, this.tr("Statistic") + " [NUM 7]", this.onClick_btnStats, null, null), {column:0, row:0});
          this.boxMove.add(this.newButton(TABS.RES.IMG.Arrows.Up, this.tr("Shifts units one space up.") + " [NUM 8]", this.onClick_btnShift, "u", null), {column:1, row:0});
          this.boxMove.add(this.newButton(TABS.RES.IMG.CNCOpt, this.tr("Show current formation with CNCOpt") + " [NUM 9]<br>" + this.tr("Right click: Set formation from CNCOpt Long Link") + "<br>" + this.tr("Remember transported units are not supported."), this.onClick_CNCOpt, null, null), {column:2, row:0});
          this.boxMove.add(this.newButton(TABS.RES.IMG.Arrows.Left, this.tr("Shifts units one space left.") + " [NUM 4]", this.onClick_btnShift, "l", null), {column:0, row:1});
          this.boxMove.add(this.newButton(TABS.RES.IMG.DisableUnit, this.tr("Enables/Disables all units.") + " [NUM 5]", this.onClick_btnDisable, null, null), {column:1, row:1});
          this.boxMove.add(this.newButton(TABS.RES.IMG.Arrows.Right, this.tr("Shifts units one space right.") + " [NUM 6]", this.onClick_btnShift, "r", null), {column:2, row:1});
          this.boxMove.add(this.newButton(TABS.RES.IMG.Flip.H, this.tr("Mirrors units horizontally.") + " [NUM 1]", this.onClick_btnMirror, "h", null), {column:0, row:2});
          this.boxMove.add(this.newButton(TABS.RES.IMG.Arrows.Down, this.tr("Shifts units one space down.") + " [NUM 2]", this.onClick_btnShift, "d", null), {column:1, row:2});
          this.boxMove.add(this.newButton(TABS.RES.IMG.Flip.V, this.tr("Mirrors units vertically.") + " [NUM 3]", this.onClick_btnMirror, "v", null), {column:2, row:2});
          this.boxMove.add(this.newButton(TABS.RES.IMG.Offense.Infantry, this.tr("Enables/Disables all infantry units.") + " [NUM *]", this.onClick_btnDisable, ClientLib.Data.EUnitGroup.Infantry, null), {column:0, row:3});
          this.boxMove.add(this.newButton(TABS.RES.IMG.Offense.Vehicle, this.tr("Enables/Disables all vehicles.") + " [NUM -]", this.onClick_btnDisable, ClientLib.Data.EUnitGroup.Vehicle, null), {column:1, row:3});
          this.boxMove.add(this.newButton(TABS.RES.IMG.Offense.Aircraft, this.tr("Enables/Disables all aircrafts.") + " [NUM +]", this.onClick_btnDisable, ClientLib.Data.EUnitGroup.Aircraft, null), {column:2, row:3});
          this.boxMove.add(this.newButton(TABS.RES.IMG.one, this.tr("Swaps lines 1 & 2."), this.onClick_btnShifts, "k", null), {column:0, row:4});
          this.boxMove.add(this.newButton(TABS.RES.IMG.two, this.tr("Swaps lines 2 & 3."), this.onClick_btnShiftz, "z", null), {column:1, row:4});
          this.boxMove.add(this.newButton(TABS.RES.IMG.three, this.tr("Swaps lines 3 & 4."), this.onClick_btnMirror, "c", null), {column:2, row:4});
          this.PlayArea.add(this.boxMove, {bottom:67, left:65});
          phe.cnc.Util.attachNetEvent(ClientLib.Vis.VisMain.GetInstance(), "ViewModeChange", ClientLib.Vis.ViewModeChange, this, this._onViewChanged);
          this._onViewChanged(ClientLib.Vis.Mode.CombatSetup, null);
        } catch (b) {
          console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error setting up GUI.PlayArea constructor", b), console.groupEnd();
        }
      }, defer:function() {
        TABS.addInit("TABS.GUI.PlayArea");
      }, destruct:function() {
      }, extend:qx.core.Object, include:[qx.locale.MTranslation], members:{_onViewChanged:function(a, b) {
        b == ClientLib.Vis.Mode.CombatSetup && (this.btnSimulation.show(), this.boxMove.show(), qx.bom.Element.addListener(document, "keydown", this.onHotKeyPress, this));
        a == ClientLib.Vis.Mode.CombatSetup && (this.btnSimulation.hide(), this.boxMove.hide(), qx.bom.Element.removeListener(document, "keydown", this.onHotKeyPress, this), TABS.APISimulation.getInstance().removeListener("OnSimulateBattleFinished", this.OnSimulateBattleFinished, this));
        b != ClientLib.Vis.Mode.CombatSetup && b != ClientLib.Vis.Mode.Battleground || !TABS.SETTINGS.get("GUI.Window.Stats.open", !0) || TABS.GUI.Window.Stats.getInstance().isVisible() || TABS.GUI.Window.Stats.getInstance().open();
      }, _updateBtnSimulation:function() {
        null !== TABS.UTIL.Formation.Get() ? TABS.UTIL.Formation.IsFormationInCache() ? (this.btnSimulation.setEnabled(!0), this.btnSimulation.setShow("icon")) : (this.btnSimulation.setEnabled(!TABS.APISimulation.getInstance().getLock() && 0 < TABS.UTIL.Formation.Get().length), 0 === TABS.APISimulation.getInstance().getData().length || 0 === TABS.UTIL.Formation.Get().length ? this.btnSimulation.setShow("icon") : "label" !== this.btnSimulation.getShow() && this.btnSimulation.setShow("label")) : (this.btnSimulation.setEnabled(!1), 
        this.btnSimulation.setShow("icon"));
      }, boxMove:null, btnSimulation:null, btnStats:null, HUD:null, newButton:function(a, b, c, d, e) {
        a = (new qx.ui.form.ModelButton(null, a)).set({appearance:"button-addpoints", height:22, iconPosition:"top", model:[d, e], show:"icon", toolTipText:b, width:22});
        a.getChildControl("icon").set({maxHeight:16, maxWidth:16, scale:!0});
        a.addListener("click", c, this);
        return a;
      }, onClick_btnDisable:function(a) {
        var b = TABS.UTIL.Formation.Get(), b = TABS.UTIL.Formation.toggle_Enabled(b, a.getTarget().getModel()[0]);
        TABS.UTIL.Formation.Set(b);
      }, onClick_btnMirror:function(a) {
        var b = TABS.UTIL.Formation.Get(), b = TABS.UTIL.Formation.Mirror(b, a.getTarget().getModel()[0], a.getTarget().getModel()[1]);
        TABS.UTIL.Formation.Set(b);
      }, onClick_btnShift:function(a) {
        var b = TABS.UTIL.Formation.Get(), b = TABS.UTIL.Formation.Shift(b, a.getTarget().getModel()[0], a.getTarget().getModel()[1]);
        TABS.UTIL.Formation.Set(b);
      },
       onClick_btnShifts:function(a) {
        var b = TABS.UTIL.Formation.Get(), b = TABS.UTIL.Formation.Shifts(b, a.getTarget().getModel()[0], a.getTarget().getModel()[1]);
        TABS.UTIL.Formation.Set(b);
      },
       onClick_btnShiftz:function(a) {
        var b = TABS.UTIL.Formation.Get(), b = TABS.UTIL.Formation.Shiftz(b, a.getTarget().getModel()[0], a.getTarget().getModel()[1]);
        TABS.UTIL.Formation.Set(b);
      },
      onClick_btnSimulation:function() {
        var a = TABS.CACHE.getInstance().check(TABS.UTIL.Formation.Get());
        if (null === a.result || void 0 === a.result.combat) {
          TABS.APISimulation.getInstance().addListener("OnSimulateBattleFinished", this.OnSimulateBattleFinished, this), TABS.APISimulation.getInstance().SimulateBattle();
        } else {
          var b = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity().get_Id();
          TABS.UTIL.Battleground.StartReplay(b, a.result.combat);
        }
      }, onClick_btnStats:function() {
        TABS.GUI.Window.Stats.getInstance().isVisible() ? (TABS.SETTINGS.set("GUI.Window.Stats.open", !1), TABS.GUI.Window.Stats.getInstance().close()) : (TABS.SETTINGS.set("GUI.Window.Stats.open", !0), TABS.GUI.Window.Stats.getInstance().open());
      }, onClick_CNCOpt:function(a) {
        a.isRightPressed() ? TABS.UTIL.Formation.Set(TABS.UTIL.CNCOpt.parseLink(prompt(this.tr("Enter CNCOpt Long Link:")))) : qx.core.Init.getApplication().showExternal(TABS.UTIL.CNCOpt.createLink());
      }, onHotKeyPress:function(a) {
        if (!phe.cnc.Util.isEventTargetInputField(a)) {
          var b = TABS.UTIL.Formation.Get();
          switch(a.getNativeEvent().keyCode) {
            case 96:
              this.onClick_btnSimulation();
              break;
            case 97:
              b = TABS.UTIL.Formation.Mirror(b, "h", null);
              TABS.UTIL.Formation.Set(b);
              break;
            case 98:
              b = TABS.UTIL.Formation.Shift(b, "d", null);
              TABS.UTIL.Formation.Set(b);
              break;
            case 99:
              b = TABS.UTIL.Formation.Mirror(b, "v", null);
              TABS.UTIL.Formation.Set(b);
              break;
            case 100:
              b = TABS.UTIL.Formation.Shift(b, "l", null);
              TABS.UTIL.Formation.Set(b);
              break;
            case 101:
              b = TABS.UTIL.Formation.toggle_Enabled(b);
              TABS.UTIL.Formation.Set(b);
              break;
            case 102:
              b = TABS.UTIL.Formation.Shift(b, "r", null);
              TABS.UTIL.Formation.Set(b);
              break;
            case 103:
              this.onClick_btnStats();
              break;
            case 104:
              b = TABS.UTIL.Formation.Shift(b, "u", null);
              TABS.UTIL.Formation.Set(b);
              break;
            case 105:
              this.onClick_CNCOpt();
              break;
            case 106:
              b = TABS.UTIL.Formation.toggle_Enabled(b, ClientLib.Data.EUnitGroup.Infantry);
              TABS.UTIL.Formation.Set(b);
              break;
            case 107:
              b = TABS.UTIL.Formation.toggle_Enabled(b, ClientLib.Data.EUnitGroup.Aircraft);
              TABS.UTIL.Formation.Set(b);
              break;
            case 109:
              b = TABS.UTIL.Formation.toggle_Enabled(b, ClientLib.Data.EUnitGroup.Vehicle), TABS.UTIL.Formation.Set(b);
          }
        }
      }, OnSimulateBattleFinished:function(a) {
        TABS.APISimulation.getInstance().removeListener("OnSimulateBattleFinished", this.OnSimulateBattleFinished, this);
        var b = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity().get_Id();
        TABS.UTIL.Battleground.StartReplay(b, a.getData().d);
      }, PlayArea:null}, type:"singleton"});
      qx.Class.define("TABS.GUI.ReportReplayOverlay", {construct:function() {
        try {
          this.base(arguments);
          var a = qx.core.Init.getApplication();
          this.ReportReplayOverlay = qx.core.Init.getApplication().getReportReplayOverlay();
          this.btnBack = (new qx.ui.form.Button(a.tr("tnf:back"))).set({appearance:"button-friendlist-scroll", height:24, toolTipText:a.tr("tnf:back"), width:53});
          this.btnBack.addListener("click", this.onClick_btnBack, this);
          this.ReportReplayOverlay.add(this.btnBack, {right:540, top:10});
          this.btnSkip = (new qx.ui.form.Button(a.tr("Skip"))).set({appearance:"button-friendlist-scroll", height:24, toolTipText:a.tr("Skip"), width:52});
          this.btnSkip.addListener("click", this.onClick_btnSkip, this);
          this.ReportReplayOverlay.add(this.btnSkip, {left:542, top:10});
        } catch (b) {
          console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error setting up GUI.ReportReplayOverlay constructor", b), console.groupEnd();
        }
      }, defer:function() {
        TABS.addInit("TABS.GUI.ReportReplayOverlay");
      }, destruct:function() {
      }, extend:qx.core.Object, include:[qx.locale.MTranslation], members:{btnBack:null, btnSkip:null, onClick_btnBack:function() {
        var a = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
        null !== a && (qx.core.Init.getApplication().getPlayArea().setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense, a.get_Id(), 0, 0), ClientLib.Vis.VisMain.GetInstance().get_CombatSetup().SetPosition(0, qx.core.Init.getApplication().getPlayArea().getHUD().getCombatSetupOffset(ClientLib.Vis.CombatSetup.CombatSetupViewMode.Defense)));
      }, onClick_btnSkip:function() {
        if (void 0 !== ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_Simulation && void 0 !== ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_Simulation().DoStep) {
          for (;ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_Simulation().DoStep(!1);) {
          }
          ClientLib.Vis.VisMain.GetInstance().get_Battleground().set_ReplaySpeed(1);
        } else {
          var a = ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_BattleDuration();
          ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_LastBattleTime() >= a && ClientLib.Vis.VisMain.GetInstance().get_Battleground().RestartReplay();
          ClientLib.Vis.VisMain.GetInstance().get_Battleground().set_ReplaySpeed(1E4);
          phe.cnc.base.Timer.getInstance().addListener("uiTick", this.onTick_btnSkip, this);
        }
      }, onTick_btnSkip:function() {
        var a = ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_BattleDuration();
        ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_LastBattleTime() >= a && (phe.cnc.base.Timer.getInstance().removeListener("uiTick", this.onTick_btnSkip, this), ClientLib.Vis.VisMain.GetInstance().get_Battleground().set_ReplaySpeed(1));
      }, ReportReplayOverlay:null}, type:"singleton"});
      qx.Class.define("TABS.GUI.Window.Stats", {construct:function() {
        try {
          this.base(arguments);
          this.set({allowMaximize:!1, allowMinimize:!1, caption:"TABS: " + this.tr("Statistic"), contentPadding:4, contentPaddingBottom:3, contentPaddingTop:0, icon:TABS.RES.IMG.Stats, layout:new qx.ui.layout.VBox, minWidth:175, resizable:!0, resizableBottom:!1, resizableTop:!1, showMaximize:!1, showMinimize:!1, useResizeFrame:!1});
          this.moveTo(TABS.SETTINGS.get("GUI.Window.Stats.position", [124, 31])[0], TABS.SETTINGS.get("GUI.Window.Stats.position", [124, 31])[1]);
          this.addListener("move", function() {
            TABS.SETTINGS.set("GUI.Window.Stats.position", [this.getBounds().left, this.getBounds().top]);
          }, this);
          this.addListener("resize", function() {
            TABS.SETTINGS.set("GUI.Window.Stats.width", this.getWidth());
            this.makeSimView();
          }, this);
          this.addListener("changeHeight", function() {
            null !== this.getHeight() && this.resetHeight();
          });
          this.addListener("appear", this.onAppear, this);
          this.addListener("close", this.onClose, this);
          this.setWidth(TABS.SETTINGS.get("GUI.Window.Stats.width", 175));
          this.getChildControl("close-button").addListener("execute", function() {
            TABS.SETTINGS.set("GUI.Window.Stats.open", !1);
          }, this);
          this.getChildControl("icon").set({alignY:"middle", height:20, scale:!0, width:20});
          this.setStatus("0 " + this.tr("simulations in cache"));
          this.GUI = {Battle:(new qx.ui.container.Composite(new qx.ui.layout.HBox(-2))).set({allowGrowX:!0, decorator:"pane-light-plain", marginLeft:0, marginRight:0}), Buttons:(new qx.ui.container.Composite(new qx.ui.layout.HBox(-2))).set({allowGrowX:!0, decorator:"pane-light-plain", marginLeft:0, marginRight:0}), Enemy:(new qx.ui.container.Composite(new qx.ui.layout.HBox(-2))).set({allowGrowX:!0, decorator:"pane-light-plain", marginLeft:0, marginRight:0}), Loot:(new qx.ui.container.Composite(new qx.ui.layout.HBox(-2))).set({allowGrowX:!0, 
          decorator:"pane-light-plain", marginLeft:0, marginRight:0}), Repair:(new qx.ui.container.Composite(new qx.ui.layout.HBox(-2))).set({allowGrowX:!0, decorator:"pane-light-plain", marginLeft:0, marginRight:0})};
          this.LabelsVBox = {Battle:(new qx.ui.container.Composite(new qx.ui.layout.VBox)).set({allowGrowX:!0, marginLeft:0, marginRight:0, padding:9, width:29}), Buttons:(new qx.ui.container.Composite(new qx.ui.layout.VBox)).set({allowGrowX:!0, marginLeft:0, marginRight:0, padding:9, width:29}), Enemy:(new qx.ui.container.Composite(new qx.ui.layout.VBox)).set({allowGrowX:!0, marginLeft:0, marginRight:0, padding:9, width:29}), Loot:(new qx.ui.container.Composite(new qx.ui.layout.VBox)).set({allowGrowX:!0, 
          marginLeft:0, marginRight:0, padding:9, width:29}), Repair:(new qx.ui.container.Composite(new qx.ui.layout.VBox)).set({allowGrowX:!0, marginLeft:0, marginRight:0, padding:9, width:29})};
          this.Label = {Battle:{Duration:new TABS.GUI.Window.Stats.Atom("D", null, this.tr("tnf:combat timer npc: %1", "")), Morale:new TABS.GUI.Window.Stats.Atom("M", null, this.tr("Morale")), Outcome:new TABS.GUI.Window.Stats.Atom("O", null, this.tr("tnf:combat report")), OwnCity:new TABS.GUI.Window.Stats.Atom("B", null, this.tr("tnf:base")), Preset:new TABS.GUI.Window.Stats.Atom("P", null, this.tr("Preset"))}, Buttons:{View:(new TABS.GUI.Window.Stats.Atom(this.tr("View Simulation"), TABS.RES.IMG.Simulate)).set({marginBottom:5, 
          marginTop:1})}, Enemy:{Airport:new TABS.GUI.Window.Stats.Atom("A", TABS.RES.IMG.Offense.Aircraft, TABS.RES.getDisplayName(ClientLib.Base.ETechName.Airport, ClientLib.Base.EFactionType.GDIFaction)), Barracks:new TABS.GUI.Window.Stats.Atom("B", TABS.RES.IMG.Offense.Infantry, TABS.RES.getDisplayName(ClientLib.Base.ETechName.Barracks, ClientLib.Base.EFactionType.GDIFaction)), Command_Center:new TABS.GUI.Window.Stats.Atom("CC", null, TABS.RES.getDisplayName(ClientLib.Base.ETechName.Command_Center, 
          ClientLib.Base.EFactionType.GDIFaction)), Construction_Yard:new TABS.GUI.Window.Stats.Atom("CY", null, TABS.RES.getDisplayName(ClientLib.Base.ETechName.Construction_Yard, ClientLib.Base.EFactionType.GDIFaction)), Defense:new TABS.GUI.Window.Stats.Atom(this.tr("tnf:defense"), TABS.RES.IMG.Enemy.Defense), Defense_Facility:new TABS.GUI.Window.Stats.Atom("DF", null, TABS.RES.getDisplayName(ClientLib.Base.ETechName.Defense_Facility, ClientLib.Base.EFactionType.GDIFaction)), Factory:new TABS.GUI.Window.Stats.Atom("F", 
          TABS.RES.IMG.Offense.Vehicle, TABS.RES.getDisplayName(ClientLib.Base.ETechName.Factory, ClientLib.Base.EFactionType.GDIFaction)), Overall:new TABS.GUI.Window.Stats.Atom(this.tr("tnf:total"), TABS.RES.IMG.Enemy.All), Structure:new TABS.GUI.Window.Stats.Atom(this.tr("tnf:base"), TABS.RES.IMG.Enemy.Base), Support:new TABS.GUI.Window.Stats.Atom("S", null, this.tr("tnf:support"))}, Loot:{Credits:new TABS.GUI.Window.Stats.Atom(this.tr("tnf:credits"), TABS.RES.IMG.Resource.Credits), Crystal:new TABS.GUI.Window.Stats.Atom(this.tr("tnf:crystals"), 
          TABS.RES.IMG.Resource.Crystal), Overall:new TABS.GUI.Window.Stats.Atom(this.tr("tnf:total") + " " + this.tr("tnf:loot"), TABS.RES.IMG.Resource.Transfer), ResearchPoints:new TABS.GUI.Window.Stats.Atom(this.tr("tnf:research points"), TABS.RES.IMG.Resource.ResearchPoints), Tiberium:new TABS.GUI.Window.Stats.Atom(this.tr("tnf:tiberium"), TABS.RES.IMG.Resource.Tiberium)}, Repair:{Aircraft:new TABS.GUI.Window.Stats.Atom(this.tr("tnf:aircraft repair title"), TABS.RES.IMG.RepairCharge.Aircraft), 
          Infantry:new TABS.GUI.Window.Stats.Atom(this.tr("tnf:infantry repair title"), TABS.RES.IMG.RepairCharge.Infantry), Overall:new TABS.GUI.Window.Stats.Atom(this.tr("tnf:repair points"), TABS.RES.IMG.RepairCharge.Offense), Storage:new TABS.GUI.Window.Stats.Atom(this.tr("tnf:offense repair time"), TABS.RES.IMG.RepairCharge.Base), Vehicle:new TABS.GUI.Window.Stats.Atom(this.tr("tnf:vehicle repair title"), TABS.RES.IMG.RepairCharge.Vehicle)}};
          for (var a in this.GUI) {
            for (var b in this.Label[a]) {
              this.LabelsVBox[a].add(this.Label[a][b]);
            }
            this.GUI[a].add(this.LabelsVBox[a], {flex:0});
          }
          this.EnemyHeader = this.makeHeader(this.tr("tnf:combat target"));
          this.EnemyHeader.addListener("click", function() {
            this.GUI.Enemy.isVisible() ? (this.GUI.Enemy.exclude(), TABS.SETTINGS.set("GUI.Window.Stats.Enemy.visible", !1)) : (this.GUI.Enemy.show(), TABS.SETTINGS.set("GUI.Window.Stats.Enemy.visible", !0));
          }, this);
          this.RepairHeader = this.makeHeader(this.tr("tnf:own repair cost").replace(":", ""));
          this.RepairHeader.addListener("click", function() {
            this.GUI.Repair.isVisible() ? (this.GUI.Repair.exclude(), TABS.SETTINGS.set("GUI.Window.Stats.Repair.visible", !1)) : (this.GUI.Repair.show(), TABS.SETTINGS.set("GUI.Window.Stats.Repair.visible", !0));
          }, this);
          this.LootHeader = this.makeHeader(this.tr("tnf:lootable resources:").replace(":", ""));
          this.LootHeader.addListener("click", function() {
            this.GUI.Loot.isVisible() ? (this.GUI.Loot.exclude(), TABS.SETTINGS.set("GUI.Window.Stats.Loot.visible", !1)) : (this.GUI.Loot.show(), TABS.SETTINGS.set("GUI.Window.Stats.Loot.visible", !0));
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
          this.getChildControl("statusbar-text").set({textColor:"#BBBBBB"});
          this.getChildControl("statusbar").add(new qx.ui.core.Spacer, {flex:1});
          var c = qx.theme.manager.Font.getInstance().resolve(this.getChildControl("statusbar-text").getFont()).getSize(), d = (new qx.ui.basic.Label(this.tr("Reset"))).set({font:(new qx.bom.Font("statusbar-text")).set({decoration:"underline", size:c}), textColor:"#115274"});
          d.addListener("click", function() {
            var a = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId();
            a && TABS.CACHE.getInstance().clear(a);
          }, this);
          this.getChildControl("statusbar").add(d);
          !1 === TABS.SETTINGS.get("GUI.Window.Stats.Enemy.visible", !0) && this.GUI.Enemy.exclude();
          !1 === TABS.SETTINGS.get("GUI.Window.Stats.Repair.visible", !0) && this.GUI.Repair.exclude();
          !1 === TABS.SETTINGS.get("GUI.Window.Stats.Loot.visible", !0) && this.GUI.Loot.exclude();
          this.simViews = [];
          phe.cnc.Util.attachNetEvent(ClientLib.Vis.VisMain.GetInstance(), "ViewModeChange", ClientLib.Vis.ViewModeChange, this, this._onViewChanged);
        } catch (e) {
          console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error setting up TABS.GUI.Window.Stats constructor", e), console.groupEnd();
        }
      }, destruct:function() {
      }, extend:qx.ui.window.Window, members:{__CurrentCityChange:function(a, b) {
        if (null === ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(b)) {
          for (var c in this.simViews) {
            this.simViews[c].resetStats();
          }
        }
      }, __onTick:function() {
        var a = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
        if (ClientLib.Vis.VisMain.GetInstance().GetActiveView().get_VisAreaComplete() && null !== a && !(0 > a.get_Version())) {
          if (this.StatsChanged) {
            this.StatsChanged = !1;
            for (var b in this.simViews) {
              this.simViews[b].updateStats(), this.simViews[b].__onTick();
            }
          } else {
            for (b in this.simViews) {
              this.simViews[b].__onTick();
            }
          }
          this.setStatus(TABS.CACHE.getInstance().getCitySimAmount().toString() + " " + this.tr("simulations in cache"));
        }
      }, __updateLabels:function() {
        if (0 < this.simViews.length) {
          var a, b;
          b = "excluded";
          for (a in this.simViews) {
            if ("100%" != this.simViews[a].Label.Battle.Morale.getValue()) {
              b = "visible";
              break;
            }
          }
          for (a in this.simViews) {
            this.simViews[a].Label.Battle.Morale.setVisibility(b);
          }
          this.Label.Battle.Morale.setVisibility(b);
          b = "excluded";
          0 < this.simViews[0].Stats.Enemy.Defense.HealthPoints.getMax() && (b = "visible");
          for (a in this.simViews) {
            this.simViews[a].Label.Enemy.Defense.setVisibility(b);
          }
          this.Label.Enemy.Defense.setVisibility(b);
          b = "excluded";
          0 < this.simViews[0].Stats.Enemy.Defense_Facility.HealthPoints.getMax() && (b = "visible");
          for (a in this.simViews) {
            this.simViews[a].Label.Enemy.Defense_Facility.setVisibility(b);
          }
          this.Label.Enemy.Defense_Facility.setVisibility(b);
          b = "excluded";
          0 < this.simViews[0].Stats.Enemy.Command_Center.HealthPoints.getMax() && (b = "visible");
          for (a in this.simViews) {
            this.simViews[a].Label.Enemy.Command_Center.setVisibility(b);
          }
          this.Label.Enemy.Command_Center.setVisibility(b);
          b = "excluded";
          0 < this.simViews[0].Stats.Enemy.Barracks.HealthPoints.getMax() && (b = "visible");
          for (a in this.simViews) {
            this.simViews[a].Label.Enemy.Barracks.setVisibility(b);
          }
          this.Label.Enemy.Barracks.setVisibility(b);
          b = "excluded";
          0 < this.simViews[0].Stats.Enemy.Factory.HealthPoints.getMax() && (b = "visible");
          for (a in this.simViews) {
            this.simViews[a].Label.Enemy.Factory.setVisibility(b);
          }
          this.Label.Enemy.Factory.setVisibility(b);
          b = "excluded";
          0 < this.simViews[0].Stats.Enemy.Airport.HealthPoints.getMax() && (b = "visible");
          for (a in this.simViews) {
            this.simViews[a].Label.Enemy.Airport.setVisibility(b);
          }
          this.Label.Enemy.Airport.setVisibility(b);
          b = "excluded";
          0 < this.simViews[0].Stats.Enemy.Support.HealthPoints.getMax() && (b = "visible");
          for (a in this.simViews) {
            this.simViews[a].Label.Enemy.Support.setVisibility(b);
          }
          this.Label.Enemy.Support.setVisibility(b);
        }
      }, __updateStats:function() {
        this.StatsChanged = !0;
      }, _onViewChanged:function(a, b) {
        b != ClientLib.Vis.Mode.CombatSetup && b != ClientLib.Vis.Mode.Battleground && this.close();
      }, EnemyHeader:null, GUI:null, Label:null, LabelsVBox:null, LootHeader:null, makeHeader:function(a) {
        var b = (new qx.ui.container.Composite(new qx.ui.layout.VBox(5))).set({decorator:"pane-light-opaque"});
        b.add((new qx.ui.basic.Label(a)).set({alignX:"center", alignY:"middle", font:"font_size_13_bold_shadow", paddingBottom:4, paddingTop:-4}));
        return b;
      }, makeSimView:function() {
        var a, b = Math.round((this.getWidth() - 30) / 75);
        if (this.simViews.length != b) {
          for (a = 0;a < b;a++) {
            void 0 === this.simViews[a] && (this.simViews[a] = new TABS.GUI.Window.Stats.SimView(a, this), this.GUI.Battle.add(this.simViews[a].GUI.Battle, {flex:1, width:"100%"}), this.GUI.Enemy.add(this.simViews[a].GUI.Enemy, {flex:1, width:"100%"}), this.GUI.Repair.add(this.simViews[a].GUI.Repair, {flex:1, width:"100%"}), this.GUI.Loot.add(this.simViews[a].GUI.Loot, {flex:1, width:"100%"}), this.GUI.Buttons.add(this.simViews[a].GUI.Buttons, {flex:1, width:"100%"}));
          }
          for (a = 0;a < this.simViews.length;a++) {
            a >= b && (this.GUI.Battle.remove(this.simViews[a].GUI.Battle), this.GUI.Enemy.remove(this.simViews[a].GUI.Enemy), this.GUI.Repair.remove(this.simViews[a].GUI.Repair), this.GUI.Loot.remove(this.simViews[a].GUI.Loot), this.GUI.Buttons.remove(this.simViews[a].GUI.Buttons));
          }
          for (;this.simViews.length > b;) {
            this.simViews.splice(b, 1);
          }
          this.__updateLabels();
          this.__updateStats();
        }
      }, onAppear:function() {
        phe.cnc.base.Timer.getInstance().addListener("uiTick", this.__onTick, this);
        TABS.CACHE.getInstance().addListener("addSimulation", this.__updateStats, this);
        TABS.PreArmyUnits.getInstance().addListener("OnCityPreArmyUnitsChanged", this.__updateStats, this);
        phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentOwnChange", ClientLib.Data.CurrentOwnCityChange, this, this.__CurrentCityChange);
        phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentChange", ClientLib.Data.CurrentCityChange, this, this.__CurrentCityChange);
        this.__updateStats();
      }, onClose:function() {
        phe.cnc.base.Timer.getInstance().removeListener("uiTick", this.__onTick, this);
        TABS.CACHE.getInstance().removeListener("addSimulation", this.__updateStats, this);
        TABS.PreArmyUnits.getInstance().removeListener("OnCityPreArmyUnitsChanged", this.__updateStats, this);
        phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentOwnChange", ClientLib.Data.CurrentOwnCityChange, this, this.__CurrentCityChange);
        phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentChange", ClientLib.Data.CurrentCityChange, this, this.__CurrentCityChange);
        for (var a in this.simViews) {
          this.simViews[a].resetStats(), this.simViews[a].__onTick();
        }
      }, RepairHeader:null, simViews:null, StatsChanged:!1}, type:"singleton"});
      qx.Class.define("TABS.GUI.Window.Stats.Atom", {construct:function(a, b, c, d) {
        try {
          this.base(arguments, a, b);
          void 0 === a && (a = null);
          void 0 === b && (b = null);
          void 0 === c && (c = null);
          void 0 === d && (d = null);
          var e = null !== c ? c : null !== a ? a : "", f = null !== d ? d : null !== b ? b : "", h = null !== d || null !== b ? "icon" : null !== c || null !== a ? "label" : "both";
          this.initAlignX("center");
          this.initAlignY("middle");
          this.initGap(0);
          this.initIconPosition("top");
          this.initMinHeight(18);
          this.initToolTipText(e);
          this.initToolTipIcon(f);
          this.initShow(h);
          this.setAlignX("center");
          this.setAlignY("middle");
          this.setGap(0);
          this.setIconPosition("top");
          this.setMinHeight(18);
          this.setToolTipText(e);
          this.setToolTipIcon(f);
          this.setShow(h);
          this.getChildControl("icon").set({alignY:"middle", height:18, scale:!0, width:18});
        } catch (l) {
          console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error setting up TABS.GUI.Window.Stats.Atom constructor", l), console.groupEnd();
        }
      }, extend:qx.ui.basic.Atom, include:[qx.locale.MTranslation]});
      qx.Class.define("TABS.GUI.Window.Stats.SimView", {construct:function(a, b) {
        try {
          this.base(arguments);
          var c, d, e = TABS.SETTINGS.get("GUI.Window.Stats.SimView." + a, TABS.STATS.getPreset(a));
          void 0 === e.Name && (e = TABS.SETTINGS.set("GUI.Window.Stats.SimView." + a, TABS.STATS.getPreset(a)));
          void 0 === e.Description && (e = TABS.SETTINGS.set("GUI.Window.Stats.SimView." + a, TABS.STATS.getPreset(a)));
          this.Num = a;
          this.Window = b;
          this.Cache = {};
          this.Stats = new TABS.STATS;
          this.Name = e.Name;
          this.Description = e.Description;
          this.Prio = e.Prio;
          this.GUI = {Battle:(new qx.ui.container.Composite(new qx.ui.layout.VBox)).set({allowGrowX:!0, decorator:"pane-light-opaque", marginLeft:0, marginRight:0}), Buttons:(new qx.ui.container.Composite(new qx.ui.layout.VBox)).set({allowGrowX:!0, decorator:"pane-light-opaque", marginLeft:0, marginRight:0}), Enemy:(new qx.ui.container.Composite(new qx.ui.layout.VBox)).set({allowGrowX:!0, decorator:"pane-light-opaque", marginLeft:0, marginRight:0}), Loot:(new qx.ui.container.Composite(new qx.ui.layout.VBox)).set({allowGrowX:!0, 
          decorator:"pane-light-opaque", marginLeft:0, marginRight:0}), Repair:(new qx.ui.container.Composite(new qx.ui.layout.VBox)).set({allowGrowX:!0, decorator:"pane-light-opaque", marginLeft:0, marginRight:0})};
          this.Label = {Battle:{Duration:(new qx.ui.basic.Label("-:--")).set({alignX:"center", alignY:"middle", minHeight:18}), Morale:(new qx.ui.basic.Label("-")).set({alignX:"center", alignY:"middle", minHeight:18}), Outcome:(new qx.ui.basic.Atom("-", null)).set({alignX:"center", alignY:"middle", gap:0, iconPosition:"top", minHeight:18, show:"label"}), OwnCity:(new qx.ui.basic.Label("-")).set({alignX:"center", alignY:"middle", minHeight:18}), Preset:(new qx.ui.basic.Label(this.tr(this.Name))).set({alignX:"center", 
          alignY:"middle", minHeight:18, toolTipText:this.tr(this.Description)})}, Buttons:{View:(new qx.ui.container.Composite(new qx.ui.layout.HBox)).set({allowGrowX:!0, marginLeft:0, marginRight:0})}, Enemy:{Airport:(new TABS.GUI.Window.Stats.SimView.Label("-")).set({subType:"HealthPointsAbs", type:"Enemy"}), Barracks:(new TABS.GUI.Window.Stats.SimView.Label("-")).set({subType:"HealthPointsAbs", type:"Enemy"}), Command_Center:(new TABS.GUI.Window.Stats.SimView.Label("-")).set({subType:"HealthPointsAbs", 
          type:"Enemy"}), Construction_Yard:(new TABS.GUI.Window.Stats.SimView.Label("-")).set({subType:"HealthPointsAbs", type:"Enemy"}), Defense:(new TABS.GUI.Window.Stats.SimView.Label("-")).set({subType:"HealthPointsAbs", type:"Enemy"}), Defense_Facility:(new TABS.GUI.Window.Stats.SimView.Label("-")).set({subType:"HealthPointsAbs", type:"Enemy"}), Factory:(new TABS.GUI.Window.Stats.SimView.Label("-")).set({subType:"HealthPointsAbs", type:"Enemy"}), Overall:(new TABS.GUI.Window.Stats.SimView.Label("-")).set({subType:"HealthPointsAbs", 
          type:"Enemy"}), Structure:(new TABS.GUI.Window.Stats.SimView.Label("-")).set({subType:"HealthPointsAbs", type:"Enemy"}), Support:(new TABS.GUI.Window.Stats.SimView.Label("-")).set({subType:"HealthPointsAbs", type:"Enemy"})}, Loot:{Credits:(new TABS.GUI.Window.Stats.SimView.Label("-")).set({subType:"Credits", type:"Loot"}), Crystal:(new TABS.GUI.Window.Stats.SimView.Label("-")).set({subType:"Crystal", type:"Loot"}), Overall:(new TABS.GUI.Window.Stats.SimView.Label("-")).set({subType:"Resource", 
          type:"Loot"}), ResearchPoints:(new TABS.GUI.Window.Stats.SimView.Label("-")).set({subType:"ResearchPoints", type:"Loot"}), Tiberium:(new TABS.GUI.Window.Stats.SimView.Label("-")).set({subType:"Tiberium", type:"Loot"})}, Repair:{Aircraft:(new TABS.GUI.Window.Stats.SimView.Label("-")).set({subType:"RepairCharge", type:"Repair"}), Infantry:(new TABS.GUI.Window.Stats.SimView.Label("-")).set({subType:"RepairCharge", type:"Repair"}), Overall:(new TABS.GUI.Window.Stats.SimView.Label("-")).set({subType:"RepairCharge", 
          type:"Repair"}), Storage:(new TABS.GUI.Window.Stats.SimView.Label("-")).set({subType:"RepairStorage", type:"Repair"}), Vehicle:(new TABS.GUI.Window.Stats.SimView.Label("-")).set({subType:"RepairCharge", type:"Repair"})}};
          this.Label.Battle.Outcome.getChildControl("icon").set({alignY:"middle", height:18, scale:!0, width:18});
          this.Label.Repair.Overall.getContentElement().setStyle("text-shadow", "0 0 3pt");
          for (c in this.GUI) {
            for (d in this.Label[c]) {
              this.GUI[c].add(this.Label[c][d], {flex:1, right:0});
            }
            this.GUI[c].addListener("dblclick", this.loadFormation, this);
          }
          this.Stats.addListener("changeBattleDuration", this.__updateBattleDuration.bind(this, this.Label.Battle.Duration));
          for (c in this.Stats.Enemy) {
            if (this.Label.Enemy.hasOwnProperty(c)) {
              if (this.Stats.Enemy[c].hasOwnProperty("HealthPoints") && (this.Stats.Enemy[c].HealthPoints.bind("max", this.Label.Enemy[c].HealthPoints, "max"), this.Stats.Enemy[c].HealthPoints.bind("start", this.Label.Enemy[c].HealthPoints, "start"), this.Stats.Enemy[c].HealthPoints.bind("end", this.Label.Enemy[c].HealthPoints, "end"), "Overall" == c)) {
                for (d in this.Label.Loot) {
                  this.Stats.Enemy[c].HealthPoints.bind("max", this.Label.Loot[d].HealthPoints, "max"), this.Stats.Enemy[c].HealthPoints.bind("start", this.Label.Loot[d].HealthPoints, "start"), this.Stats.Enemy[c].HealthPoints.bind("end", this.Label.Loot[d].HealthPoints, "end");
                }
              }
              if (this.Stats.Enemy[c].hasOwnProperty("Resource") && (this.Stats.Enemy[c].Resource.bind("Tiberium", this.Label.Enemy[c].Resource, "Tiberium"), this.Stats.Enemy[c].Resource.bind("Crystal", this.Label.Enemy[c].Resource, "Crystal"), this.Stats.Enemy[c].Resource.bind("Credits", this.Label.Enemy[c].Resource, "Credits"), this.Stats.Enemy[c].Resource.bind("ResearchPoints", this.Label.Enemy[c].Resource, "ResearchPoints"), this.Stats.Enemy[c].Resource.bind("RepairChargeBase", this.Label.Enemy[c].Resource, 
              "RepairChargeBase"), this.Stats.Enemy[c].Resource.bind("RepairChargeAir", this.Label.Enemy[c].Resource, "RepairChargeAir"), this.Stats.Enemy[c].Resource.bind("RepairChargeInf", this.Label.Enemy[c].Resource, "RepairChargeInf"), this.Stats.Enemy[c].Resource.bind("RepairChargeVeh", this.Label.Enemy[c].Resource, "RepairChargeVeh"), "Overall" == c)) {
                for (d in this.Label.Loot) {
                  this.Stats.Enemy[c].Resource.bind("Tiberium", this.Label.Loot[d].Resource, "Tiberium"), this.Stats.Enemy[c].Resource.bind("Crystal", this.Label.Loot[d].Resource, "Crystal"), this.Stats.Enemy[c].Resource.bind("Credits", this.Label.Loot[d].Resource, "Credits"), this.Stats.Enemy[c].Resource.bind("ResearchPoints", this.Label.Loot[d].Resource, "ResearchPoints"), this.Stats.Enemy[c].Resource.bind("RepairChargeBase", this.Label.Loot[d].Resource, "RepairChargeBase"), this.Stats.Enemy[c].Resource.bind("RepairChargeAir", 
                  this.Label.Loot[d].Resource, "RepairChargeAir"), this.Stats.Enemy[c].Resource.bind("RepairChargeInf", this.Label.Loot[d].Resource, "RepairChargeInf"), this.Stats.Enemy[c].Resource.bind("RepairChargeVeh", this.Label.Loot[d].Resource, "RepairChargeVeh");
                }
              }
            }
          }
          for (c in this.Stats.Offense) {
            this.Label.Repair.hasOwnProperty(c) && (this.Stats.Offense[c].hasOwnProperty("HealthPoints") && (this.Stats.Offense[c].HealthPoints.bind("max", this.Label.Repair[c].HealthPoints, "max"), this.Stats.Offense[c].HealthPoints.bind("start", this.Label.Repair[c].HealthPoints, "start"), this.Stats.Offense[c].HealthPoints.bind("end", this.Label.Repair[c].HealthPoints, "end")), this.Stats.Offense[c].hasOwnProperty("Resource") && (this.Stats.Offense[c].Resource.bind("Tiberium", this.Label.Repair[c].Resource, 
            "Tiberium"), this.Stats.Offense[c].Resource.bind("Crystal", this.Label.Repair[c].Resource, "Crystal"), this.Stats.Offense[c].Resource.bind("Credits", this.Label.Repair[c].Resource, "Credits"), this.Stats.Offense[c].Resource.bind("ResearchPoints", this.Label.Repair[c].Resource, "ResearchPoints"), this.Stats.Offense[c].Resource.bind("RepairChargeBase", this.Label.Repair[c].Resource, "RepairChargeBase"), this.Stats.Offense[c].Resource.bind("RepairChargeAir", this.Label.Repair[c].Resource, 
            "RepairChargeAir"), this.Stats.Offense[c].Resource.bind("RepairChargeInf", this.Label.Repair[c].Resource, "RepairChargeInf"), this.Stats.Offense[c].Resource.bind("RepairChargeVeh", this.Label.Repair[c].Resource, "RepairChargeVeh")));
          }
          var f = (new qx.ui.form.ModelButton(null, TABS.RES.IMG.Simulate)).set({appearance:"button-addpoints", iconPosition:"top", maxHeight:22, minWidth:22, show:"icon", toolTipText:this.tr("tnf:refresh")});
          f.getChildControl("icon").set({maxHeight:16, maxWidth:16, scale:!0});
          f.addListener("click", function() {
            this.loadFormation();
            TABS.APISimulation.getInstance().SimulateBattle();
          }, this);
          this.Label.Buttons.View.add(f);
          var h = (new qx.ui.form.ModelButton(null, TABS.RES.IMG.Arrows.Right)).set({appearance:"button-addpoints", iconPosition:"top", maxHeight:22, minWidth:22, show:"icon", toolTipText:this.tr("View Simulation")});
          h.getChildControl("icon").set({maxHeight:16, maxWidth:16, scale:!0});
          h.addListener("click", this.playReplay, this);
          this.Label.Buttons.View.add(h);
        } catch (l) {
          console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error setting up GUI.Window.Stats.SimView constructor", l), console.groupEnd();
        }
      }, destruct:function() {
      }, extend:qx.core.Object, include:[qx.locale.MTranslation], members:{__onTick:function() {
        if ("undefined" !== typeof this.Cache.result && "undefined" !== typeof this.Cache.result.ownid) {
          var a = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.Cache.result.ownid);
          null !== a ? (a = Math.min(a.GetResourceCount(ClientLib.Base.EResourceType.RepairChargeInf), a.GetResourceCount(ClientLib.Base.EResourceType.RepairChargeVeh), a.GetResourceCount(ClientLib.Base.EResourceType.RepairChargeAir)), this.Label.Repair.Storage.setValue(phe.cnc.Util.getTimespanString(ClientLib.Data.MainData.GetInstance().get_Time().GetTimeSpan(a)))) : this.Label.Repair.Storage.resetValue();
        } else {
          this.Label.Repair.Storage.resetValue();
        }
        if (this.StatsChanged) {
          this.StatsChanged = !1;
          for (var b in this.Label.Enemy) {
            this.Label.Enemy[b].__update();
          }
          for (b in this.Label.Repair) {
            this.Label.Repair[b].__update();
          }
          for (b in this.Label.Loot) {
            this.Label.Loot[b].__update();
          }
        }
      }, __updateBattleDuration:function(a, b) {
        a.setValue(0 < b.getData() ? phe.cnc.Util.getTimespanString(b.getData() / 1E3) : "-:--");
      }, __updateBattleMoral:function() {
        if ("undefined" !== typeof this.Cache.result && "undefined" !== typeof this.Cache.result.cityid && "undefined" !== typeof this.Cache.result.ownid) {
          var a = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.Cache.result.cityid), b = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.Cache.result.ownid);
          if (null !== a && null !== b) {
            var b = ClientLib.Base.Util.GetMoralSignType(b.get_LvlOffense(), a.get_LvlBase()), c = 100;
            ClientLib.Data.MainData.GetInstance().get_Server().get_CombatUseMoral() && a.IsNPC() && a.get_Id() != ClientLib.Data.MainData.GetInstance().get_EndGame().GetCenter().get_CombatId() && (1 == b.k || 2 == b.k) ? (c = "~" + (c - b.v) + "%", 1 == b.k ? (this.Label.Battle.Morale.setTextColor(webfrontend.theme.Color.colors["res-orange"]), this.Label.Battle.Morale.setToolTipText(this.tr("tnf:region moral warning %1", b.v)), this.Label.Battle.Morale.setToolTipIcon("resource/webfrontend/ui/common/icon_moral_alert_orange.png")) : 
            2 == b.k && (this.Label.Battle.Morale.setTextColor(webfrontend.theme.Color.colors["res-red"]), this.Label.Battle.Morale.setToolTipText(this.tr("tnf:region moral error %1", b.v)), this.Label.Battle.Morale.setToolTipIcon("resource/webfrontend/ui/common/icon_moral_alert_red.png"))) : (c += "%", this.Label.Battle.Morale.resetTextColor(), this.Label.Battle.Morale.resetToolTipText(), this.Label.Battle.Morale.resetToolTipIcon());
            this.Label.Battle.Morale.setValue(c);
          } else {
            this.Label.Battle.Morale.setValue("-"), this.Label.Battle.Morale.resetTextColor(), this.Label.Battle.Morale.resetToolTipText(), this.Label.Battle.Morale.resetToolTipIcon();
          }
        }
      }, __updateBattleOutcome:function() {
        0 === Object.getOwnPropertyNames(this.Cache).length ? (this.Label.Battle.Outcome.setShow("label"), this.Label.Battle.Outcome.resetIcon(), this.Label.Battle.Outcome.resetToolTipIcon(), this.Label.Battle.Outcome.resetToolTipText()) : (0 >= this.Label.Repair.Overall.HealthPoints.getEnd() ? (this.Label.Battle.Outcome.setIcon(TABS.RES.IMG.Outcome.total_defeat), this.Label.Battle.Outcome.setToolTipIcon(TABS.RES.IMG.Outcome.total_defeat), this.Label.Battle.Outcome.setToolTipText(this.tr("tnf:total defeat"))) : 
        0 >= this.Label.Enemy.Overall.HealthPoints.getEnd() ? (this.Label.Battle.Outcome.setIcon(TABS.RES.IMG.Outcome.total_victory), this.Label.Battle.Outcome.setToolTipIcon(TABS.RES.IMG.Outcome.total_victory), this.Label.Battle.Outcome.setToolTipText(this.tr("tnf:total victory"))) : (this.Label.Battle.Outcome.setIcon(TABS.RES.IMG.Outcome.victory), this.Label.Battle.Outcome.setToolTipIcon(TABS.RES.IMG.Outcome.victory), this.Label.Battle.Outcome.setToolTipText(this.tr("tnf:victory"))), this.Label.Battle.Outcome.setShow("icon"));
      }, __updateBattleOwnCity:function() {
        if ("undefined" !== typeof this.Cache.result && "undefined" !== typeof this.Cache.result.ownid) {
          var a = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.Cache.result.ownid);
          null !== a ? this.Label.Battle.OwnCity.setValue(a.get_Name()) : this.Label.Battle.OwnCity.resetValue();
        } else {
          this.Label.Battle.OwnCity.resetValue();
        }
      }, Cache:null, Description:null, GUI:null, Label:null, loadFormation:function() {
        "undefined" !== typeof this.Cache.result && "undefined" !== typeof this.Cache.result.formation && "undefined" !== typeof this.Cache.result.ownid && (ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentOwnCityId(this.Cache.result.ownid), TABS.UTIL.Formation.Set(this.Cache.result.formation));
      }, Name:null, Num:null, playReplay:function() {
        TABS.UTIL.Battleground.StartReplay(this.Cache.result.cityid, this.Cache.result.combat);
      }, Prio:null, resetStats:function() {
        this.Cache = {};
        this.Stats.setAny((new TABS.STATS).getAny());
        this.StatsChanged = !0;
        this.__updateBattleOutcome();
        this.__updateBattleOwnCity();
        this.__updateBattleMoral();
        this.Window.__updateLabels();
        for (var a in this.GUI) {
          this.GUI[a].setDecorator("pane-light-opaque"), this.GUI[a].setOpacity(1);
        }
      }, Stats:null, StatsChanged:!1, updateStats:function() {
        var a, b = null, c = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
        null !== c && -1 !== c.get_Version() && ClientLib.Vis.VisMain.GetInstance().GetActiveView().get_VisAreaComplete() && (b = 0 === this.Prio.length ? TABS.CACHE.getInstance().check(TABS.UTIL.Formation.Get()) : TABS.CACHE.getInstance().getPrio1(this.Prio));
        null !== b && null !== b.result && (this.Cache = b, this.Stats.setAny(b.result.stats), this.StatsChanged = !0, this.__updateBattleOutcome(), this.__updateBattleOwnCity(), this.__updateBattleMoral(), this.Window.__updateLabels());
        if ("undefined" !== typeof this.Cache.key && "undefined" !== typeof this.Cache.result && "undefined" !== typeof this.Cache.result.ownid) {
          if (null !== c && -1 !== c.get_Version() && ClientLib.Vis.VisMain.GetInstance().GetActiveView().get_VisAreaComplete() && this.Cache.key === TABS.CACHE.getInstance().calcUnitsHash(TABS.UTIL.Formation.Get(), this.Cache.result.ownid)) {
            for (a in this.GUI) {
              this.GUI[a].setDecorator("pane-light-opaque"), this.GUI[a].setOpacity(1);
            }
          } else {
            for (a in this.GUI) {
              this.GUI[a].setDecorator("pane-light-plain"), this.GUI[a].setOpacity(.7);
            }
          }
        }
      }, Window:null}});
      qx.Class.define("TABS.GUI.Window.Stats.SimView.Label", {construct:function(a) {
        try {
          this.base(arguments, a), this.initAlignX("right"), this.initAlignY("middle"), this.initMinHeight(18), this.setAlignX("right"), this.setAlignY("middle"), this.setMinHeight(18), this.HealthPoints = new TABS.STATS.Entity.HealthPoints, this.Resource = new TABS.STATS.Entity.Resource;
        } catch (b) {
          console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error setting up TABS.GUI.Window.Stats.SimView.Label constructor", b), console.groupEnd();
        }
      }, extend:qx.ui.basic.Label, include:[qx.locale.MTranslation], members:{__update:function() {
        var a = null;
        if (null !== ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity()) {
          switch(this.getType()) {
            case "Enemy":
              switch(this.getSubType()) {
                case "HealthPointsAbs":
                  a = this.HealthPointsAbs();
                  break;
                case "HealthPointsRel":
                  a = this.HealthPointsRel();
                  break;
                case "RepairCharge":
                  a = this.RepairCharge();
              }
              break;
            case "Repair":
              switch(this.getSubType()) {
                case "HealthPointsAbs":
                  a = this.HealthPointsAbs();
                  break;
                case "HealthPointsRel":
                  a = this.HealthPointsRel();
                  break;
                case "RepairCharge":
                  a = this.RepairCharge();
                  break;
                case "RepairStorage":
                  return;
                case "Crystal":
                  a = this.Loot();
              }
              break;
            case "Loot":
              switch(this.getSubType()) {
                case "Resource":
                ;
                case "Tiberium":
                ;
                case "Crystal":
                ;
                case "Credits":
                ;
                case "ResearchPoints":
                  a = this.Loot();
              }
            ;
          }
        }
        0 < this.HealthPoints.getMax() && null !== a ? (this.setValue(a.text), this.setTextColor(a.color)) : (this.resetValue(), this.resetTextColor());
      }, getColorFromPercent:function(a) {
        return "hsl(" + (120 - 1.2 * (100 - 100 * (1 - a)) - 0) + ", 100%, " + (25 + Math.round(25 * (2 * Math.abs(Math.max(a - .4, 0)) + Math.abs(Math.max(1 - a - .6, 0))))) + "%)";
      }, HealthPoints:null, HealthPointsAbs:function() {
        if (0 < this.HealthPoints.getMax()) {
          var a = this.HealthPoints.getEnd() / this.HealthPoints.getMax() * 100, b = 0 >= a || 100 <= a ? 0 : 10 <= a ? 1 : 2, a = Math.round(a * Math.pow(10, b)) / Math.pow(10, b);
          return {color:this.getColorFromPercent(this.HealthPoints.getEnd() / this.HealthPoints.getMax()), text:a.toFixed(b) + " %"};
        }
        return null;
      }, HealthPointsRel:function() {
        if (0 < this.HealthPoints.getMax()) {
          var a = (this.HealthPoints.getStart() - this.HealthPoints.getEnd()) / this.HealthPoints.getMax() * 100, b = 0 >= a || 100 <= a ? 0 : 10 <= a ? 1 : 2, a = Math.round(a * Math.pow(10, b)) / Math.pow(10, b);
          return {color:this.getColorFromPercent(this.HealthPoints.getEnd() / this.HealthPoints.getMax()), text:a.toFixed(b) + " %"};
        }
        return null;
      }, Loot:function() {
        var a = 0, b = TABS.UTIL.Stats.get_LootFromCurrentCity(), c;
        if (0 < this.HealthPoints.getMax() && null !== b) {
          switch(this.getSubType()) {
            case "Resource":
              a = this.Resource.getTiberium() + this.Resource.getCrystal() + this.Resource.getCredits() + this.Resource.getResearchPoints();
              c = b.getTiberium() + b.getCrystal() + b.getCredits() + b.getResearchPoints();
              break;
            case "Tiberium":
              a = this.Resource.getTiberium();
              c = b.getTiberium();
              break;
            case "Crystal":
              a = this.Resource.getCrystal();
              c = b.getCrystal();
              break;
            case "Credits":
              a = this.Resource.getCredits();
              c = b.getCredits();
              break;
            case "ResearchPoints":
              a = this.Resource.getResearchPoints(), c = b.getResearchPoints();
          }
          return {color:this.getColorFromPercent(1 - a / c), text:phe.cnc.gui.util.Numbers.formatNumbersCompact(a)};
        }
        return null;
      }, RepairCharge:function() {
        return 0 < this.HealthPoints.getMax() ? {color:this.getColorFromPercent(1 - this.HealthPoints.getEnd() / this.HealthPoints.getMax()), text:phe.cnc.Util.getTimespanString(Math.max(this.Resource.getRepairChargeBase(), this.Resource.getRepairChargeAir(), this.Resource.getRepairChargeInf(), this.Resource.getRepairChargeVeh()))} : null;
      }, Resource:null}, properties:{subType:{check:"HealthPointsAbs HealthPointsRel RepairCharge RepairStorage Resource Tiberium Crystal Credits ResearchPoints".split(" "), init:"HealthPointsAbs"}, type:{check:["Enemy", "Repair", "Loot"], init:"Enemy"}}});
      qx.Class.define("TABS.GUI.Window.Prios", {construct:function(a) {
        try {
          this.base(arguments), this.set({allowMaximize:!1, allowMinimize:!1, caption:this.tr("Priority Setup"), layout:new qx.ui.layout.Grid, resizable:!1, showMaximize:!1, showMinimize:!1}), this.center(), this.Prios = a;
        } catch (b) {
          console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error setting up TABS.GUI.Window.Prios constructor", b), console.groupEnd();
        }
      }, extend:qx.ui.window.Window, members:{Prios:null}});
    }
    function w() {
      try {
        if ("undefined" != typeof qx && "undfined" != typeof qx.core && "undefined" != typeof qx.core.Init) {
          var a = qx.core.Init.getApplication();
          if (null !== a && !0 === a.initDone && 0 !== ClientLib.Data.MainData.GetInstance().get_Player().get_Id() && 0 !== ClientLib.Data.MainData.GetInstance().get_Server().get_WorldId()) {
            try {
              console.time("loaded in");
              if (void 0 === ClientLib.Vis.Battleground.Battleground.prototype.LoadCombatDirect) {
                var b = ClientLib.API.Battleground.prototype.SimulateBattle.toString().match(/\{battleSetup:[a-z]+\},\s?\(new \$I\.[A-Z]{6}\)\.[A-Z]{6}\(this,this\.([A-Z]{6})\),\s?this\);/)[1], c = ClientLib.API.Battleground.prototype[b].toString().match(/\$I\.[A-Z]{6}\.[A-Z]{6}\(\)\.[A-Z]{6}\(\)\.([A-Z]{6})\(b\.d\);/)[1];
                console.log(c);
                ClientLib.Vis.Battleground.Battleground.prototype.LoadCombatDirect = ClientLib.Vis.Battleground.Battleground.prototype[c];
              }
              qx.locale.Manager.getInstance().addTranslation("de", {"Enter CNCOpt Long Link:":"CNCOpt Long Link eingeben:", "Mirrors units horizontally.":"Spiegelt die Einheiten horizontal.", "Mirrors units vertically.":"Spiegelt die Einheiten vertikal.", "Most priority to command center including all in front of it.<br>After this the best total enemy health from the cached simulations is selected.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected.":"Die gr\u00f6\u00dfte Priorit\u00e4t liegt auf der Komandozentrale mit allem was vor ihr liegt.<br>Danach wird die Simulation aus dem Cache herausgesucht die den meisten<br>Schaden am Gegner verursacht.<br>Wenn keine bessere Formation gefunden wird, wird die Simulation mit der<br>niedrigsten Offensiv Reperaturzeit und besten Kampfdauer aus dem Cache herausgesucht.", 
              "Most priority to construction yard including all in front of it.<br>After this the best total enemy health from the cached simulations is selected.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected.":"Die gr\u00f6\u00dfte Priorit\u00e4t liegt auf dem Bauhof mit allem was vor ihm liegt.<br>Danach wird die Simulation aus dem Cache herausgesucht die den meisten<br>Schaden am Gegner verursacht.<br>Wenn keine bessere Formation gefunden wird, wird die Simulation mit der<br>niedrigsten Offensiv Reperaturzeit und besten Kampfdauer aus dem Cache herausgesucht.", 
              "Most priority to defense facility including all in front of it.<br>After this the best armored defense health from the cached simulations is selected.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected.":"Die gr\u00f6\u00dfte Priorit\u00e4t liegt auf der Verteidigungseinrichtung mit allem was vor ihr liegt.<br>Danach wird die Simulation aus dem Cache herausgesucht die den meisten<br>Schaden an bewaffneten Defensiveinheiten verursacht.<br>Wenn keine bessere Formation gefunden wird, wird die Simulation mit der<br>niedrigsten Offensiv Reperaturzeit und besten Kampfdauer aus dem Cache herausgesucht.", 
              "Most priority to defense health including the auto repair after the battle.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected.":"Die gr\u00f6\u00dfte Priorit\u00e4t liegt auf dem verursachtem Schaden an Defensiveinheiten<br>unter Ber\u00fccksichtigung der automatischen Reperatur nach dem Kampf.<br>Wenn keine bessere Formation gefunden wird, wird die Simulation mit der<br>niedrigsten Offensiv Reperaturzeit und besten Kampfdauer aus dem Cache herausgesucht.", 
              "NoKill (farming) priorety.<br>Not working correctly yet.":"Vorschie\u00dfen (farmen) Priorit\u00e4t.<br>Funktioniert noch nicht sehr gut.", "Remember transported units are not supported.":"Denk daran das transportierte Einheiten nicht unterst\u00fctzt werden.", "Right click: Set formation from CNCOpt Long Link":"Rechtsklick: Formation von CNCOpt Long Link laden", "Shifts units one space down.":"Verschiebt die Einheiten einen Platz nach unten.", "Shifts units one space left.":"Verschiebt die Einheiten einen Platz nach links.", 
              "Shifts units one space right.":"Verschiebt die Einheiten einen Platz nach rechts.", "Shifts units one space up.":"Verschiebt Einheiten einen Platz nach oben.", "Show current formation with CNCOpt":"Zeigt die aktuelle Formation mit CNCOpt an", "Shows the current army formation.":"Zeigt die aktuelle Armeeformation an.", "simulations in cache":"Simulationen im Cache", Statistic:"Statistik", "View Simulation":"Simulation anzeigen"});
              v();
              TABS.getInstance();
              console.group("Tiberium Alliances Battle Simulator V2");
              console.timeEnd("loaded in");
              console.groupEnd();
            } catch (d) {
              console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error in waitForGame", d), console.groupEnd();
            }
          } else {
            window.setTimeout(w, 1E3);
          }
        } else {
          window.setTimeout(w, 1E3);
        }
      } catch (d) {
        console.group("Tiberium Alliances Battle Simulator V2"), console.error("Error in waitForGame", d), console.groupEnd();
      }
    }
    window.setTimeout(w, 1E3);
  }.toString() + ")();";
  v.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(v);
})();
