function aioNRouter(keyInfo) {

const
e      = keyInfo[0],
kC     = keyInfo[1],
cC     = keyInfo[2],
shift  = keyInfo[3],
ctrl   = keyInfo[4],
alt    = keyInfo[5];

       if (mode!=6&&mode!=0) {
/*    A    */ if (kC ==  65 && cC ==  65) { insertNewCoin(keyInfo);      }/*    a    */ if (kC ==  65 && cC ==  97) { insertNewCoin(keyInfo);      }
/*    D    */ if (kC ==  68 && cC ==  68) { insertNewCoin(keyInfo);      }/*    d    */ if (kC ==  68 && cC == 100) { insertNewCoin(keyInfo);      }
/*    I    */ if (kC ==  73 && cC ==  73) { insertNewCoin(keyInfo);      }/*    i    */ if (kC ==  73 && cC == 105) { insertNewCoin(keyInfo);      }
/*    N    */ if (kC ==  78 && cC ==  78) { insertNewCoin(keyInfo);      }/*    n    */ if (kC ==  78 && cC == 110) { insertNewCoin(keyInfo);      }
/*    O    */ if (kC ==  79 && cC ==  79) { insertNewCoin(keyInfo);      }/*    o    */ if (kC ==  79 && cC == 111) { insertNewCoin(keyInfo);      }
} else if (mode==6) {                                                             
/*    A    */ if (kC ==  65 && cC ==  65) { insertNewDuplicate(keyInfo); }/*    a    */ if (kC ==  65 && cC ==  97) { insertNewDuplicate(keyInfo); }
/*    D    */ if (kC ==  68 && cC ==  68) { insertNewDuplicate(keyInfo); }/*    d    */ if (kC ==  68 && cC == 100) { insertNewDuplicate(keyInfo); }
/*    I    */ if (kC ==  73 && cC ==  73) { insertNewDuplicate(keyInfo); }/*    i    */ if (kC ==  73 && cC == 105) { insertNewDuplicate(keyInfo); }
/*    N    */ if (kC ==  78 && cC ==  78) { insertNewDuplicate(keyInfo); }/*    n    */ if (kC ==  78 && cC == 110) { insertNewDuplicate(keyInfo); }
/*    O    */ if (kC ==  79 && cC ==  79) { insertNewDuplicate(keyInfo); }/*    o    */ if (kC ==  79 && cC == 111) { insertNewDuplicate(keyInfo); }
} else if (mode==0) {                                                             
/*    A    */ if (kC ==  65 && cC ==  65) { insertNewWindow(keyInfo);    }/*    a    */ if (kC ==  65 && cC ==  97) { insertNewWindow(keyInfo);    }
/*    D    */ if (kC ==  68 && cC ==  68) { insertNewWindow(keyInfo);    }/*    d    */ if (kC ==  68 && cC == 100) { insertNewWindow(keyInfo);    }
/*    I    */ if (kC ==  73 && cC ==  73) { insertNewWindow(keyInfo);    }/*    i    */ if (kC ==  73 && cC == 105) { insertNewWindow(keyInfo);    }
/*    N    */ if (kC ==  78 && cC ==  78) { insertNewWindow(keyInfo);    }/*    n    */ if (kC ==  78 && cC == 110) { insertNewWindow(keyInfo);    }
/*    O    */ if (kC ==  79 && cC ==  79) { insertNewWindow(keyInfo);    }/*    o    */ if (kC ==  79 && cC == 111) { insertNewWindow(keyInfo);    }
}

}
