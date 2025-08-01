function windowTuner() {

if (!window.opener) { return; }

/* sizing */
/*    /    */ if (kC == 111 && cC ==  47) { let wMvalue = wM; wM = 0; windowEdge([null,72,72,false,false,false]); wM = wMvalue; }
/*    *    */ if (kC == 106 && cC ==  42) { let wMvalue = wM; wM = 0; windowEdge([null,76,76,false,false,false]); wM = wMvalue; }
/*    -    */ if (kC == 109 && cC ==  45) { let wMvalue = wM; wM = 0; windowEdge([null,75,75,false,false,false]); wM = wMvalue; }
/*    +    */ if (kC == 107 && cC ==  43) { let wMvalue = wM; wM = 0; windowEdge([null,74,74,false,false,false]); wM = wMvalue;  }

/* positional */
/*    7    */ if (kC == 103 && cC ==  55) { window.moveTo(0,0); wM=0; }
/*    9    */ if (kC == 105 && cC ==  57) { window.moveTo(Math.floor((screen.width - window.innerWidth)/T)*T - T,0); wM=1; }
/*    5    */ if (kC == 101 && cC ==  53) { window.moveTo(Math.floor(((screen.width/2) - (window.innerWidth/2))/T)*T,Math.floor((screen.availHeight - window.outerHeight - T)/(T*2))*T + T); wM=0 }
/*    1    */ if (kC ==  97 && cC ==  49) { window.moveTo(0,Math.floor((screen.availHeight - window.outerHeight - T)/T)*T + T); wM=0; }
/*    3    */ if (kC ==  99 && cC ==  51) { window.moveTo(Math.floor((screen.width - window.innerWidth)/T)*T - T,Math.floor((screen.availHeight - window.outerHeight - T)/T)*T + T); wM=1; }

/* movement */
/*    8    */ if (kC == 104 && cC ==  56) { let wMvalue = wM; wM = 1; windowEdge([null,75,75,false,false,false]); wM = wMvalue; }
/*    4    */ if (kC == 100 && cC ==  52) { let wMvalue = wM; wM = 1; windowEdge([null,72,72,false,false,false]); wM = wMvalue; }
/*    6    */ if (kC == 102 && cC ==  54) { let wMvalue = wM; wM = 1; windowEdge([null,76,76,false,false,false]); wM = wMvalue; }
/*    2    */ if (kC ==  98 && cC ==  50) { let wMvalue = wM; wM = 1; windowEdge([null,74,74,false,false,false]); wM = wMvalue; }

/* sizing */
/*    0    */ if (kC ==  96 && cC ==  48) { let wMvalue = wM; wM = 0; windowEdge([null,75,75,false,false,false]); wM = wMvalue; }
/*    .    */ if (kC == 110 && cC ==  46) { let wMvalue = wM; wM = 0; windowEdge([null,74,74,false,false,false]); wM = wMvalue; }

}