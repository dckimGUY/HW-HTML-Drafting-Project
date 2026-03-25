shelfMenuHTML.tab3.folder2.style = `
<style>
.input_frameNumber                 { position: absolute; border: none; margin: none; padding: none; left:     79px; top:    290px; width:    40px; height:     20px; outline-offset: -4px; color: black; text-align: left; padding: 0px; padding-left: 2px; padding-right: 2px; caret-color: red; text-align: center; font-size: 24px; z-index: 600; overflow: hidden; }

.input_animationTiming                 { position: absolute; border: none; margin: none; padding: none; left:     -28px; top:    320px; width:    256px; height:     256px; outline-offset: -4px; color: black; text-align: center; padding: 0px; padding-left: 2px; padding-right: 2px; caret-color: red; text-align: center; font-size: 64px; z-index: 800; pointer-events: none; user-select: none; overflow: hidden;


color: rgba(0,0,0,0.45);

text-shadow:
0px 2px 0px rgba(255,0,255,0.25),
2px 2px 0px rgba(255,255,0,0.25),
2px 0px 0px rgba(255,255,0,0.25);


}


.viewOverlay {
position: absolute;
border: none;
margin: none;
padding: none;
left: 2px;
top: 277px;
width: 196px;
height: 146px;
background-image: url("data:image/png;base64,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");
pointer-events: none;
z-index: 500;
}

.animatorImage {
position: absolute;
border: none;
margin: none;
padding: none;
left: 21px;
top: 304px;
width: 158px;
height: 93px;
}



.button_animateClick                { position: absolute; border: none; margin: none; padding: none; left:     40px; top:    389px; width:     58px; height:     26px;
                                      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAaCAMAAADRyb8sAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABRJREFUOI1jYBgFo2AUjIJRMPIAAAX+AAHx74YFAAAAAElFTkSuQmCC"); z-index: 600;       }
.button_animateClick:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAaCAMAAADRyb8sAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABRJREFUOI1jYBgFo2AUjIJRMPIAAAX+AAHx74YFAAAAAElFTkSuQmCC");  }
.button_animateClick:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAaCAMAAADRyb8sAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABRJREFUOI1jYBgFo2AUjIJRMPIAAAX+AAHx74YFAAAAAElFTkSuQmCC");  }
.button_animateClick:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAaCAMAAADRyb8sAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABRJREFUOI1jYBgFo2AUjIJRMPIAAAX+AAHx74YFAAAAAElFTkSuQmCC"); }




.button_animateLoop                { position: absolute; border: none; margin: none; padding: none; left:    103px; top:    389px; width:     58px; height:     31px;
                                     background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAfCAMAAACBBC6fAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAOdJREFUOI3dlNsOhCAMRGsNpEnF///c5SK0RU3Kvu2WFxk5DJaJAFcFd4GpLKC7NF05jt5R6Ytc4TodGrnI1VHYi6xfscgGHF+wdO6M9vWrrhGhr191ZfwDV9T+2Gcjhq+uKqpsZ/bNg6timjZ2tW/urubUUVY1V9uTyVV0vTrqfWT333F97HB3RbydUXf79V4lFep21fNjmnQmJFly45KH6krqL9FzIGkeKmuqzgmYfalX+zUyAdOGXxSlBLRtdJ75iUKgfafjoBiJedaLq9XBSR4FtTo4yYJOOvjJ3GKjg4+k1hujfwDxsyxdVedvZQAAAABJRU5ErkJggg=="); z-index: 600;       }
.button_animateLoop:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAfCAMAAACBBC6fAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABdJREFUOI1jYBgFo2AUjIJRMApGAVYAAAclAAGXEA1QAAAAAElFTkSuQmCC");  }
.button_animateLoop:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAfCAMAAACBBC6fAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAJBJREFUOI3tklEKgDAMQ7uf3f/IwsAlaScYQURx+3G2aUr7Ih49rZ+9V3VJberGJaVdg7p1+6Z8u3Pk29P6gqswMomp9GRXJYxfhb3sShpEx0sj1VW67pIlkYWrcIm6XIerv8V1OeHdNSJyjzztw72CCtoufS9pYiZAFjYOHtK8wAFonn8bqzRi0K79/Oe+swG8fQw8wXVBKAAAAABJRU5ErkJggg==");  }
.button_animateLoop:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAfCAMAAACBBC6fAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAJFJREFUOI3tksEKgDAMQ3vaaf//vcLAJWknGEFEcbs42zSlfRGPnt7O3qu6pDZ145LSrkHdun1Tvt058u1pfcFVGJnEVHqyqxLGr8JediUNouOlkeoqXTfJksjCVbhEXa7D1d/iupzw7hoRuUee9uFeQQVtl76XNDETIAsbBw9pXuAANM+/nVUaMWjXfv5z39kAhkEfyREJWmoAAAAASUVORK5CYII="); }




.button_fewerFrames                { position: absolute; border: none; margin: none; padding: none; left:     66px; top:    294px; width:     12px; height:     12px;
                                     background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAADhJREFUCJljYGVlYmIDAiYmViYGVjATzGVlgLOBPFQOSDUEsLExsDFxQwETOgdZGW7TUCzlRnIOAOppAwV9cTpmAAAAAElFTkSuQmCC"); z-index: 600;       }
.button_fewerFrames:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAAxJREFUCJljYBi8AAAAnAABQ9wfvwAAAABJRU5ErkJggg==");  }
.button_fewerFrames:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAACpJREFUCJljYAACRiBggABGKEBmg3nIHLhqEAvOBvLQOMjKcJuGaimScwAXxABNtLvnQAAAAABJRU5ErkJggg==");  }
.button_fewerFrames:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAACpJREFUCJljYAACHiBggAAeKEBmg3nIHLhqEAvOBvLQOMjKcJuGaimScwAWiwOR59YiPgAAAABJRU5ErkJggg=="); }




.button_moreFrames                { position: absolute; border: none; margin: none; padding: none; left:    120px; top:    294px; width:     12px; height:     12px;
                                    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAADtJREFUCJlj4GFlYmIDAiYmVg4GViYwC0SwMoApbm4whcoBqQFxQCoZQMIQwITOQVaG2zQUS7kRzuEGAPqXAzeOibmzAAAAAElFTkSuQmCC"); z-index: 600;       }
.button_moreFrames:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAAxJREFUCJljYBi8AAAAnAABQ9wfvwAAAABJRU5ErkJggg==");  }
.button_moreFrames:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAACpJREFUCJljYAACRiBggAAwC8pFoZA5cNUgFpwN5KFxkJXhNg3VUiTnAAARrAA5czreJwAAAABJRU5ErkJggg==");  }
.button_moreFrames:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAACpJREFUCJljYAACHiBggAAwC8pFoZA5cNUgFpwN5KFxkJXhNg3VUiTnAADNXAKhxJiEogAAAABJRU5ErkJggg=="); }









.button_btnQuick1                { position: absolute; border: none; margin: none; padding: none; left:     80px; top:     72px; width:     28px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAMAAAAVHr4VAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2CYAQAC1QABJO47sQAAAABJRU5ErkJggg==");        }
.button_btnQuick1:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAMAAAAVHr4VAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2CYAQAC1QABJO47sQAAAABJRU5ErkJggg==");  }
.button_btnQuick1:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAMAAAAVHr4VAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIRJREFUKJGVkkEOwCAIBN0Ej/z/uxVUQKWmZQ8kLhNQLOVjoIoyh8m1WRWroke8K3KkkgzNzkolmjQDK6v1EuoNsoY521HnjCTrOEgEEj7p2VO7atU5be+63i8jp36R5Y089sH7Pa2rnIxX8L0aB9g7+l4maSbHjd72ef8J9z8Ups6cLB4nXAlbTHLp0gAAAABJRU5ErkJggg==");  }
.button_btnQuick1:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAMAAAAVHr4VAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIRJREFUKJGVkkEOwCAIBD3gbfn/dyuogEpNyx5IXCagWMrHQBVlDpNrsypWRY94V+RIJRmanZVKNGkGVlbrJdQbZA1ztqPOGUnWcZAIJHzSs6d21apz2t51vV9GTv0iyxt57IP3e1pXORmv4Hs1DrB39L1M0kyOG73t8/4T7n8oTJ05WTwvrBBcCYtnogAAAABJRU5ErkJggg=="); }




.button_btnQuick2                { position: absolute; border: none; margin: none; padding: none; left:    109px; top:     72px; width:     27px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2BoAgACvAABgQKDaQAAAABJRU5ErkJggg==");        }
.button_btnQuick2:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2BoAgACvAABgQKDaQAAAABJRU5ErkJggg==");  }
.button_btnQuick2:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAJFJREFUKJGNkksOwCAIRGuCO+b+1y0qQ9GoKbMwcXzy0ef5F1pNOwMSWpyqk7IlWJQoFFNVQWkB+Ug7V0xwq5kka2z5aseYE8H17WF6tZmzzXaCnBw48WmMOtHLYD7d9OZ1BvdpcLrnmG10OFG8MvWXqGaV6G/K5ZPhRCeKE11eDyzD1l/vd33363/pcfxnm3gBHyMLRysfBzkAAAAASUVORK5CYII=");  }
.button_btnQuick2:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAI9JREFUKJGNkkkOwCAMA3sIN/v/321oFgKCiviAhBmywPPcBZpqZ1BSi9MwqVrCRYUiVA1C9KAMUs9BRbe6GWTLLV/1WORkct+2mV5t5XSznwhODpz4NKxOWo2eD5vevM7khozDnots1uFExZWlv0J1C9nflMsnExOdqJjo8nqMMnS9er/fd//9L18c/9kmXv7YD/ayZH9XAAAAAElFTkSuQmCC"); }




.button_btnQuick3                { position: absolute; border: none; margin: none; padding: none; left:    136px; top:     72px; width:     25px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2AwAAACigAB/BYckAAAAABJRU5ErkJggg==");        }
.button_btnQuick3:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2AwAAACigAB/BYckAAAAABJRU5ErkJggg==");  }
.button_btnQuick3:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIZJREFUKJGNUkkOACEIkwRv8P/vDsKwuIwZmnAoVgra2o+gLthpxsDhvKPwyAtSgSCgLiRI5IWDEMhZsPASBaGkJEaKLqZR0vJJo5liEtdgKKUyJjBvL619+jy9u8PUBN4i8q6Zhg1FegNethbzALaDpq5ncVZXWpzNhcv7fL/p7R9c/s4eDwNGCmsMJEIJAAAAAElFTkSuQmCC");  }
.button_btnQuick3:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIRJREFUKJGNUkkSwCAI84A3+P93G6EsLnVKZjgEogRt7UdwB3ZaKHDodxSeZEEqSNFBMiIPHASAXrbwEgehJBJa4hbTKGn5pNHM4cQ1FEpUhgOb7aX1nj679+koNYG3SLJrJrOhyNlYlq2FH6Z20NT1LJPVlZbJ5sLlfb7f9PYPLn9njwcxDA8E4Ne8aQAAAABJRU5ErkJggg=="); }




.button_btnQuick4                { position: absolute; border: none; margin: none; padding: none; left:    161px; top:     73px; width:     24px; height:     23px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAMAAAAm/38fAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo4BsAAACPwABWCaGyQAAAABJRU5ErkJggg==");        }
.button_btnQuick4:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAMAAAAm/38fAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo4BsAAACPwABWCaGyQAAAABJRU5ErkJggg==");  }
.button_btnQuick4:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAMAAAAm/38fAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAH5JREFUKJGFUdESwDAEa+549P+/Oxdl1m6rPDWkhDHOYWKys9DEgxbruHk1OFhvAqDVwxH1ziM1hgjXOO8vuacpBZiT7DAV5JmriaaCWVZMBzGVlYpumgPET00RyF4eurluiqHo4H8oH6ti3WwqXnfbdtW7cLLzPb4v+HPzLS40TgdK9NdTogAAAABJRU5ErkJggg==");  }
.button_btnQuick4:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAMAAAAm/38fAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAH5JREFUKJGFUcEWwDAE64Fb/P/vzosya7dVTg0pYYxzmJjsLDTxoMU6bl4NDtabAGj1cES980iNIcI1zvtL7mlKAeYkO0wFeeZqoqlglhXTQUxlpaKb5gDxU1MEspeHbq6bYig6+B/Kx6pYN5uK1922XfUunOx8j+8L/tx8iwuWBwzg8ygLIwAAAABJRU5ErkJggg=="); }




.button_btn6                     { position: absolute; border: none; margin: none; padding: none; left:      8px; top:    106px; width:     58px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAZCAMAAABXXc2CAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABRJREFUOI1jYBgFo2AUjIJRMEQBAAXDAAFVpVn5AAAAAElFTkSuQmCC");        }
.button_btn6:focus               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAZCAMAAABXXc2CAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABRJREFUOI1jYBgFo2AUjIJRMEQBAAXDAAFVpVn5AAAAAElFTkSuQmCC");  }
.button_btn6:hover               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAZCAMAAABXXc2CAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIVJREFUOI29k9sOwCAIQ8v///Ri1AkFl0HmeNAYOC3egK9CWjysz6BIoyufRVVBEhVZFXm0DQV0kDUUt+lsvi9FR5e3Wt5m5gm1ugO1J6xtNlJBi1BFfq9KIEaRQg3D7owi8HmL8mzN/0CliLoHFKEueQTle92g7r9apbglaBa+lFriuR4XStoCJTqXyvoAAAAASUVORK5CYII=");  }
.button_btn6:active              { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAZCAMAAABXXc2CAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIdJREFUOI29k10OwCAIg3sA7n/exagTCi6DzPGgMfC1+Ad8FdLiYX0GRRpd+SyqCpKoyKrIo20ooIOsobhNZ/N9KTq6vNXyNjNPqNUdqD1hbbORClqEKvJ7VQIxihRqGHZnFIHPW5Rna/4HKkXUPaAIdckjKN/rBnX/1SrFLUGz8KXUEs/1uABDBBmxtjShpwAAAABJRU5ErkJggg=="); }




.button_btn4                     { position: absolute; border: none; margin: none; padding: none; left:     69px; top:    106px; width:     59px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAZCAMAAAC4n6a8AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABRJREFUOI1jYBgFo2AUjIJRMNwAAAXcAAFVpFZKAAAAAElFTkSuQmCC");        }
.button_btn4:focus               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAZCAMAAAC4n6a8AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABRJREFUOI1jYBgFo2AUjIJRMNwAAAXcAAFVpFZKAAAAAElFTkSuQmCC");  }
.button_btn4:hover               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAZCAMAAAC4n6a8AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAHpJREFUOI3d0kkOwCAIBVD+/S/dKcjwjVFSuyg7lQdOIu8FrhiMd1mpWM0p2DOhalG39/r39lk22wB86MmoOFuwjYXVSsdiYBHbxvOGXdMGba7NhEJTlu8j9c82v0XuO7Tyf0uLm2x+31nr/x2Neta+hsv1OGwiN16OAx2GAfzg9Br/AAAAAElFTkSuQmCC");  }
.button_btn4:active              { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAZCAMAAAC4n6a8AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAHtJREFUOI3d0kkOwCAIBVAO8O9/3k5Bhm+MktpF2ak8cBJ5L3DFYLzLSsVqTsGeCVWLur3Xv7fPstkG4ENPRsXZgm0srFY6FgOL2DaeN+yaNmhzbSYUmrJ8H6l/tvktct+hlf9bWtxk8/vOWv/vaNSz9jVcrsdhE7nxchwh4xfFioT6EAAAAABJRU5ErkJggg=="); }




.button_btn2                     { position: absolute; border: none; margin: none; padding: none; left:    132px; top:    106px; width:     60px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAZCAMAAABaQ73FAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABRJREFUOI1jYBgFo2AUjIJRMGIAAAX1AAESch/YAAAAAElFTkSuQmCC");        }
.button_btn2:focus               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAZCAMAAABaQ73FAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABRJREFUOI1jYBgFo2AUjIJRMGIAAAX1AAESch/YAAAAAElFTkSuQmCC");  }
.button_btn2:hover               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAZCAMAAABaQ73FAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAH1JREFUOI3N0uEOgCAIBOC793/p1twYB2pitsU/iy8ZF3CyeNfk/B1GFdN3FDHp9SbmBm7vXmEcwyboq/Xo10aYGYf1mGLGnGDK1TEqGRz5Io4wClh3HLbewyERmeMZ4x84J3cW26YitoY61n9olPMy7h8XsDb7BzKGZLVVF3UQAh+FJ6nCAAAAAElFTkSuQmCC");  }
.button_btn2:active              { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAZCAMAAABaQ73FAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAH9JREFUOI3N0lEOgDAIA9AeoPc/rzFLCIVtjjkT+ZvyHKECJ4t3Tc7fYVQxfUcRk15vYm7g9u4VxjFsgr5aj35thJlxWI8pZswJplwdo5LBkS/iCKOAdcdh6z0cEpE5njH+gXNyZ7FtKmJrqGP9h0Y5L+P+cQFrs38gY0hWW3UBO4QZaa/3DO8AAAAASUVORK5CYII="); }




.button_img6                     { position: absolute; border: none; margin: none; padding: none; left:      8px; top:    146px; width:     54px; height:     35px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAjCAMAAADogAnHAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABdJREFUOI1jYBgFo2AUjIJRMApGwYAAAAeFAAH83SF4AAAAAElFTkSuQmCC");        }
.button_img6:focus               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAjCAMAAADogAnHAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABdJREFUOI1jYBgFo2AUjIJRMApGwYAAAAeFAAH83SF4AAAAAElFTkSuQmCC");  }
.button_img6:hover               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAjCAMAAADogAnHAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAJNJREFUOI3dkksOgDAIRJn7X1obNXzbAGmMkYXaMg+hU6JNgRFfxKQwjyllGgOktIKNR6oxRwWY2YMZxiuymMmBeEjozCM/3/ZErhVU+9CYKUJBRhfhZRIjg5E4ygkmN7nKBLsHX2J4B0MD8zZuxoJhZpge3gtju1cYue+wLYdV4peY9a32lx7W6LHlWtvs7g3hOAA7gAIhlNRmzQAAAABJRU5ErkJggg==");  }
.button_img6:active              { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAjCAMAAADogAnHAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAJRJREFUOI3dkksOgDAIRDnA3P+82qjh2wZIY4ws1JZ5CJ0SbQqM+CImhXlMKdMYIKUVbDxSjTkqwMwezDBekcVMDsRDQmce+fm2J3KtoNqHxkwRCjK6CC+TGBmMxFFOMLnJVSbYPfgSwzsYGpi3cTMWDDPD9PBeGNu9wsh9h205rBK/xKxvtb/0sEaPLdfaZndvCMcBd2cZgYVD0HEAAAAASUVORK5CYII="); }




.button_img4                     { position: absolute; border: none; margin: none; padding: none; left:     72px; top:    146px; width:     56px; height:     35px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAjCAMAAAD2STl0AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABdJREFUOI1jYBgFo2AUjIJRMApGwRAGAAfLAAG/SBSTAAAAAElFTkSuQmCC");        }
.button_img4:focus               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAjCAMAAAD2STl0AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABdJREFUOI1jYBgFo2AUjIJRMApGwRAGAAfLAAG/SBSTAAAAAElFTkSuQmCC");  }
.button_img4:hover               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAjCAMAAAD2STl0AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIdJREFUOI3tktsSgCAIRN3//+kuFgJq6dJD08SLhXuEYUnpwcAWLwaVeApclRQIEtyFzEC6oMvBNZN/wiDkWk7DKTR/1eDh0amEB2FBNVUrlWdUiYJfg51bnahBnXQTa1XMO/WD9yBmQHO41QmBleuN5toVh+PTYMfH4UosSHVKuhiwn9+aEgvrigH4jIXZfgAAAABJRU5ErkJggg==");  }
.button_img4:active              { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAjCAMAAAD2STl0AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIlJREFUOI3tkl0SgCAIhD3A3v+8/VgIqKVLD00TLxbuJwxLSg8GtngxqMRT4KqkQJDgLmQG0gVdDq6Z/BMGIddyGk6h+asGD49OJTwIC6qpWqk8o0oU/Brs3OpEDeqkm1irYt6pH7wHMQOaw61OCKxcbzTXrjgcnwY7Pg5XYkGqU9LFgP381pRYALVVF5WfUrFmAAAAAElFTkSuQmCC"); }




.button_img2                     { position: absolute; border: none; margin: none; padding: none; left:    137px; top:    146px; width:     55px; height:     35px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAjCAMAAAAHQmL5AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABdJREFUOI1jYBgFo2AUjIJRMApGwWAFAAeoAAGfJcNvAAAAAElFTkSuQmCC");        }
.button_img2:focus               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAjCAMAAAAHQmL5AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABdJREFUOI1jYBgFo2AUjIJRMApGwWAFAAeoAAGfJcNvAAAAAElFTkSuQmCC");  }
.button_img2:hover               { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAjCAMAAAAHQmL5AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAI1JREFUOI3dk4EKwCAIRPX/f3psjeldbqRrEJNASJ/ZWSLTTHdbklNIHeZUAUxzmuNaUl6MMz/iaIt1mMLZXS8PmNdB3P1crHkKeOGhTeUSXMUOHOUgKlbsifObEYacHGsVrqvxLYcP457DD2BqRxy4Pu89B5OGzohL2m85nl/ynCJXabM2vfrUy2/FbANR9gIboJiRdwAAAABJRU5ErkJggg==");  }
.button_img2:active              { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAjCAMAAAAHQmL5AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAI5JREFUOI3dk4EKwCAIRP0A//97x9aY3uVGugYxCYT0mZ0lMs10tyU5hdRhThXANKc5riXlxTjzI462WIcpnN318oB5HcTdz8Wap4AXHtpULsFV7MBRDqJixZ44vxlhyMmxVuG6Gt9y+DDuOfwApnbEgevz3nMwaeiMuKT9luP5Jc8pcpU2a9OrT738Vsw2g30ZOVZNqzgAAAAASUVORK5CYII="); }





.button_imgQuick1                { position: absolute; border: none; margin: none; padding: none; left:     81px; top:    182px; width:     27px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2BoAgACvAABgQKDaQAAAABJRU5ErkJggg==");        }
.button_imgQuick1:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2BoAgACvAABgQKDaQAAAABJRU5ErkJggg==");  }
.button_imgQuick1:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIBJREFUKJGVktsOwCAIQ22Cj/z/724WJYiXbPSBZOXESS3lW6G+2hkqruRUTIqWaFKkhGod7DVSeMUORNKmW9EyrpM2LzBqcJo5JM6mlvN4IqeW/7QNzTfbcEM/uHLgcgKRmzNon/rlfaNOAb48T2Jw7mlI8JLfNffre2Ed39mmHgw6COCEhv85AAAAAElFTkSuQmCC");  }
.button_imgQuick1:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIBJREFUKJGVks0OwCAIgz3grbz/624WJYg/2eiBZOWLk1rKt0J9tTNUXMmpmBQt0aRICdU62Guk8IodiKRNt6JlXCdtXmDU4DRzSJxNLefxRE4t/2kbmm+24YZ+cOXA5QQiN2fQPvXL+0adAnx5nsTg3NOQ4CW/a+7X98I6vrNNPWC+D59Wurt3AAAAAElFTkSuQmCC"); }




.button_imgQuick2                { position: absolute; border: none; margin: none; padding: none; left:    108px; top:    182px; width:     27px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2BoAgACvAABgQKDaQAAAABJRU5ErkJggg==");        }
.button_imgQuick2:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2BoAgACvAABgQKDaQAAAABJRU5ErkJggg==");  }
.button_imgQuick2:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAI1JREFUKJGNklEOwCAIQ9cEP3v/6w4FEZ2a0Y8l1DdAfJ5/UaDaGcLQ4qBMyhZlUaYIVYEQNSjIFFR0q5oclKf8q8e8pgyupc2UL6fJesI5Hjj227A+aT1avbKbzfoc3JBx2HNezSacqf7LNF+iqoWYb6rlN4N1C2EhNhFcbwNpg5f9Xfd+fS8tju9sEy9ZRAkX+HnhUgAAAABJRU5ErkJggg==");  }
.button_imgQuick2:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAI1JREFUKJGNkkESwCAIA3vAW/L/7xYFEa06JYfOELeA+Dz/okC1M4ShxUGZlC3KokwRqgIhalCQKajoVjU5KE/5V495TRlcS5spX06T9YRzPHDst2F90nq0emU3m/U5uCHjsOe8mk04U/2Xab5EVQsx31TLbwbrFsJCbCK43gbSBi/7u+79+l5aHN/ZJl5JLBAuZnbIhwAAAABJRU5ErkJggg=="); }




.button_imgQuick3                { position: absolute; border: none; margin: none; padding: none; left:    135px; top:    182px; width:     26px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAMAAAAYAM5SAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2BQAwACowABxqhftAAAAABJRU5ErkJggg==");        }
.button_imgQuick3:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAMAAAAYAM5SAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2BQAwACowABxqhftAAAAABJRU5ErkJggg==");  }
.button_imgQuick3:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAMAAAAYAM5SAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIhJREFUKJGNUtEKwCAInCC+iP//uzOz1GoxDxzc7ei0nudXEROfeMGBRWDKyApKRfYgKIiVBa3Q2n+g0C/0GlrzOGOsNkGKbN1lbO9Hl3WKdMOF0+s78ITO21m8z+QJwzXhKsrBVaYOTyQEWXYec8GYq7ryptZ8eb85X1Vu93W75dvbsPp6UXu9rQ4KkyETNyYAAAAASUVORK5CYII=");  }
.button_imgQuick3:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAMAAAAYAM5SAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIhJREFUKJGNUkEOwCAI24FwAf7/3SGigDozmrCkXWNBn+dXISGdeIGBRSDMyApIRfYAK5CUZa3Q2n+s0C/3GlrzOGOsNgGMbN1lbO9Hl3WMdMMF0+s78ITO21m0z+QJwzXhKsjBVaYOTyRkWXYec/GYq7ryptZ8eb85X1Vu93W75dvbsPp6UXu9FdcPLBAggAkAAAAASUVORK5CYII="); }




.button_imgQuick4                { position: absolute; border: none; margin: none; padding: none; left:    161px; top:    182px; width:     26px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAMAAAAYAM5SAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2BQAwACowABxqhftAAAAABJRU5ErkJggg==");        }
.button_imgQuick4:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAMAAAAYAM5SAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2BQAwACowABxqhftAAAAABJRU5ErkJggg==");  }
.button_imgQuick4:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAMAAAAYAM5SAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIpJREFUKJGNkksOACEIQyUhbkzvf91hwDHFX4bubJ5IsZRfVVttu3Pop8lolcWOIosYiMkJqIhoJUZMQZgjgzMmyjhz8FK9H5iyc6d0otwhSolyPyj0DOKFGGTPheaRuC9Roa+n1UJh9OuT5fwiDZprpTapJ6rsqM224pW0lfO+blu+/Q2v049a6wGjKAtRyaydowAAAABJRU5ErkJggg==");  }
.button_imgQuick4:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAMAAAAYAM5SAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIpJREFUKJGNkksSwCAIQ10wbiT3v24pWCf4m5KdmScSLOVX1Vbb7hzyaTJaZbEjyCIGanICoqpSiVFTEObo4IyJMs4cvFTvB6bs3CmZKHeIEqLcDwo9g3ghBtlzoXk07ktU6OtptVAY/fpkOb9Ig+ZaqU3qiSo7arOteCVt5byv25Zvf8Pr9KPWegAaZg8kzx4z6QAAAABJRU5ErkJggg=="); }






.button_spriteClick1             { position: absolute; border: none; margin: none; padding: none; left:     81px; top:    213px; width:     27px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2BoAgACvAABgQKDaQAAAABJRU5ErkJggg==");        }
.button_spriteClick1:focus       { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2BoAgACvAABgQKDaQAAAABJRU5ErkJggg==");  }
.button_spriteClick1:hover       { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAINJREFUKJGVktsKACEIRBuQXsL//90tLTG70DoPwo6HNqeU3iqXqp3BZApOyZO8RRzkKUJVbh3Si6dQJR3wpE63Eku5Tuo8QanBceQQOJ1azpMTZWr5T93QfLMNN/SDSwcuJuC5OYP2qV/eNmoUYMuzJAZnHrsEL/ldc7++F6njO9vUB/pvC9ZitK0dAAAAAElFTkSuQmCC");  }
.button_spriteClick1:active      { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAINJREFUKJGVkksOwCAIRF0QNw73v24VlCB+YpkFSYcXK2NKb5VL1c5gMgWn5EneIg7yFKEqtw7pxVOokg54UqdbiaVcJ3WeoNTgOHIInE4t58mJMrX8p25ovtmGG/rBpQMXE/DcnEH71C9vGzUKsOVZEoMzj12Cl/yuuV/fi9TxnW3qAzsmD5PCHQ5cAAAAAElFTkSuQmCC"); }




.button_spriteClick2             { position: absolute; border: none; margin: none; padding: none; left:    108px; top:    213px; width:     27px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2BoAgACvAABgQKDaQAAAABJRU5ErkJggg==");        }
.button_spriteClick2:focus       { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2BoAgACvAABgQKDaQAAAABJRU5ErkJggg==");  }
.button_spriteClick2:hover       { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAI5JREFUKJGNkkEOwCAIBEtCuJj9/3eLgohWTdlDE9YpID7Pvyii2hmM0OJImZQt8KJMgVRFGFQDLJkiFdyqJgblKf/qMa/Jg2tpM/nLabKecA4HDv02rE+0Nrxe2c1mfQ5uyDjZc17NJpyp/ss0X6KqRTHfVMtvRtYthEWxieB6G0S/9nfd+/W9tDi+s028eLsLhTffVYgAAAAASUVORK5CYII=");  }
.button_spriteClick2:active      { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAI5JREFUKJGNkkEOwCAIBD0QLrL//25RENHaRvbQhHUKiKXcRWXVySCENofromyBNmUKoqpMkBYgzpSo4FYzMSlP+VePeU2aXE+bSW9Ok+2Ec/jgMG7D+kRvw+vV02zW5+SmjOMz59VswpUav0zzJapZEvMttfxmeN9CWBKbCG60IXK1v9+9/76XHp/v7BAPU9AQNO9oYxwAAAAASUVORK5CYII="); }




.button_spriteClick3             { position: absolute; border: none; margin: none; padding: none; left:    135px; top:    213px; width:     25px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2AwAAACigAB/BYckAAAAABJRU5ErkJggg==");        }
.button_spriteClick3:focus       { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2AwAAACigAB/BYckAAAAABJRU5ErkJggg==");  }
.button_spriteClick3:hover       { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIVJREFUKJGNUtEKwCAITJBewv//3ak5NWsxjzU4O7mrWvtRozN2Gslx2P8i8YQFSYHA6INJ4PKBsgsY/IdZGAoj5BOV2aDQKKnrUYPvOFw0SDFOM0xvRkujr+ndHYbGYU0NW/OnsKEIb1BPzfNAO2nS8VRn6Uizs6VxuZ/vO729g8vb2esBok4KIAF5J8AAAAAASUVORK5CYII=");  }
.button_spriteClick3:active      { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIVJREFUKJGNUkEOwCAI80C8CP//7gAZIDozmrmkWNKqrf2o0Rk7DeQ47H+ReIKCpABk9MEkcvlA2YUM/uMsCIUR8onKbFBolNT1qIF3HCwaoBinGaY3o6XR1/TuDkLjsKaGrflT2FCEN6yn5nmwnTTpeKqzdKTZ2dK43M/3nd7eweXt7PUAy3sOufhiypEAAAAASUVORK5CYII="); }




.button_spriteClick4             { position: absolute; border: none; margin: none; padding: none; left:    161px; top:    213px; width:     28px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAMAAAAVHr4VAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2CYAQAC1QABJO47sQAAAABJRU5ErkJggg==");        }
.button_spriteClick4:focus       { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAMAAAAVHr4VAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2CYAQAC1QABJO47sQAAAABJRU5ErkJggg==");  }
.button_spriteClick4:hover       { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAMAAAAVHr4VAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAI5JREFUKJGNklEOwCAIQyUh/pje/7pjgoiELdLP+gSLrV3W6K8qh7GVrD5ORQ+cFTmQaDJgIuLNvidJpIx4FFjhtIQVD5PsYU4nxVES3tHI6Rk59qRGzhNG8spFp4XTK6v4OtJbE9mN9ypIeN/10pSrJWQZfZFxj5msd3Jme3SFpXy3z/+f8P+HwtSVU9UDsuYMtkc6BSkAAAAASUVORK5CYII=");  }
.button_spriteClick4:active      { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAMAAAAVHr4VAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAI5JREFUKJGNkkESwCAIAz0wXiT//26pICJDO5JjXMFga5c1+qvKIWwlq49T0QNlRQ4smgyImWmz70kWKSMeB1Y4LWHFwyR7mNNJcZSEdzRyekaOPamR84SRtHLRaeH0yiq+jvXWRHbjvQoS3ne9NOVqCVlGX2TcYybrnZzZHl1hKd/t8/8n/P+hMHXlVPUAkkEQiSA+sOIAAAAASUVORK5CYII="); }




.button_spriteLoop1              { position: absolute; border: none; margin: none; padding: none; left:     81px; top:    244px; width:     28px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAMAAAAVHr4VAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2CYAQAC1QABJO47sQAAAABJRU5ErkJggg==");        }
.button_spriteLoop1:focus        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAMAAAAVHr4VAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2CYAQAC1QABJO47sQAAAABJRU5ErkJggg==");  }
.button_spriteLoop1:hover        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAMAAAAVHr4VAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIdJREFUKJGVkkEOwCAIBCUxXgj//24RFEGpad0DSbcj6FrKx4WtK3MqLW1WwyjvUd0VuAosqSAVAwcsqQCB1f/7Ek/J5ufkbZWbJK2Og4RFopv06Cld9WTHtNp1O2FGTv0hyxt55OFJnyOrfxu3YLkuDsDu0XIx0kxyid7yvL+E+xtyU2dOth54RAx78Hs6hwAAAABJRU5ErkJggg==");  }
.button_spriteLoop1:active       { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAMAAAAVHr4VAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIdJREFUKJGVkkEOwCAIBD0YL8D/v1sEBVRqWvdA0u0IupbycUHrypxKrs1qsCp6VHctXEWWVJQKC4csqYgLq//3JZ6SLc7J2yo3SfKOg0QnIUx69JSuerJjWu26nTAjp/6Q5Y088ohkzJHVv41bsFydQ7R7tFyMNJNCorc87y/h/obC1JmTrQfnKBA42qb+mgAAAABJRU5ErkJggg=="); }




.button_spriteLoop2              { position: absolute; border: none; margin: none; padding: none; left:    108px; top:    244px; width:     27px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2BoAgACvAABgQKDaQAAAABJRU5ErkJggg==");        }
.button_spriteLoop2:focus        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2BoAgACvAABgQKDaQAAAABJRU5ErkJggg==");  }
.button_spriteLoop2:hover        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAI5JREFUKJGNkkEOwCAIBEtCuJj9/3eLgohWTdlDE9YpID7Pvyii2hmM0OJImZQt8KJMgVRFGFQDLJkiFdyqJgblKf/qMa/Jg2tpM/nLabKecA4HDv02rE+0Nrxe2c1mfQ5uyDjZc17NJpyp/ss0X6KqRTHfVMtvRtYthEWxieB6G0S/9nfd+/W9tDi+s028eLsLhTffVYgAAAAASUVORK5CYII=");  }
.button_spriteLoop2:active       { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAI5JREFUKJGNkkEOwCAIBD0QLrL//25RENHaRvbQhHUKiKXcRWXVySCENofromyBNmUKoqpMkBYgzpSo4FYzMSlP+VePeU2aXE+bSW9Ok+2Ec/jgMG7D+kRvw+vV02zW5+SmjOMz59VswpUav0zzJapZEvMttfxmeN9CWBKbCG60IXK1v9+9/76XHp/v7BAPU9AQNO9oYxwAAAAASUVORK5CYII="); }




.button_spriteLoop3              { position: absolute; border: none; margin: none; padding: none; left:    135px; top:    244px; width:     27px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2BoAgACvAABgQKDaQAAAABJRU5ErkJggg==");        }
.button_spriteLoop3:focus        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2BoAgACvAABgQKDaQAAAABJRU5ErkJggg==");  }
.button_spriteLoop3:hover        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIpJREFUKJGNklsKACEIRRMu/YT73+44ZablxHjBQDn4qpR/VpsoSzBMW6bVIJ8Cb/IUSFSbhEkM3DxFInlpmJEvpaEeFsfQmry4Hlafct0PDoGDcZjbGH1qYtSr52yzz8WZNC0TJpyNj7jL1Sexm88I40rGhY3uXbp9OvK8w/V+17tf/0u3z3+W2AMzngtThhbwwwAAAABJRU5ErkJggg==");  }
.button_spriteLoop3:active       { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIpJREFUKJGNkksOwCAIRF1M3Aj3v26pIoJSUybBBPLCz1L+WW2iLMEwbZlWg3wKvMlTIFFtEiYxcPMUieSlYUa+lIZ6WBxDa/Lielh9ynU/OAQOxmFuY/SpiVGvnrPNPhdn0rRMmHA2PuIuV5/Ebj4jjCsZFza6d+n26cjzDtf7Xe9+/S/dPv9ZYg/b5Q/sJ2qdMgAAAABJRU5ErkJggg=="); }




.button_spriteLoop4              { position: absolute; border: none; margin: none; padding: none; left:    161px; top:    244px; width:     27px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2BoAgACvAABgQKDaQAAAABJRU5ErkJggg==");        }
.button_spriteLoop4:focus        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAA9JREFUKJFjYBgFo2BoAgACvAABgQKDaQAAAABJRU5ErkJggg==");  }
.button_spriteLoop4:hover        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIlJREFUKJGNklEOwCAIQyUh/iy9/3XXiCioW2z/1r05iqXc6an0KVAML0l9kmMEXRwioRsBFRENJB/QRjCSQEJMJBnBuE5q4Bh0TjPXosRhcu0F52Bt2H9isNUbmlOJfTJzZj+X2jmMM8eEqUnvZc534vYdLFw5cvv24M1e7e9377/3penznh30AjpjDBjmAcMkAAAAAElFTkSuQmCC");  }
.button_spriteLoop4:active       { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAMAAAD3wqVsAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIhJREFUKJGNkkESwCAIAz0wXiT//24zUhTUOk1uTbeWYCn/1Cp9CgTDS1Jbcowgi0OkdCcgqiqB5APaCEYaSKiJJCMY95ISOAYvJ5nrUeIwuf6Cc7A27D8x2OoNzanUPpk5s59L7RzGmWPC1KT3Muc7cfsOFq4cuX178GZ/7e+69+t96fq8Zwc9610P61GjTdkAAAAASUVORK5CYII="); }



























</style>
`;

