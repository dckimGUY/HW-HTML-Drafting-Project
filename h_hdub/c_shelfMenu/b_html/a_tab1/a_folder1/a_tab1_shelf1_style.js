shelfMenuHTML.tab1.folder1.style = `
<style>


.manageZ {
position: absolute;
top:   354px;
left:    1px;
width:   9px;
height: 66px;
background: transparent;
border:  0px;
margin:  0px;
padding: 0px;
}

.manageZ:hover  { background-color: rgba(  0, 255,   0, 0.5); }
.manageZ:active { background-color: rgba(255,   0, 255, 0.5); }

.clearZ {
position: absolute;
top:   429px;
left:    2px;
width:   7px;
height: 26px;
background: transparent;
border:  0px;
margin:  0px;
padding: 0px;
}


.clearZ:hover  { background-color: rgba(  0, 255,   0, 0.5); }
.clearZ:active { background-color: rgba(255,   0, 255, 0.5); }


.zMove {
position: absolute;
top: 437px;
width:  18px;
height: 19px;
background: transparent;
border:  0px;
margin:  0px;
padding: 0px;
}

.zMove:hover  { background-color: rgba(  0, 255,   0, 0.5); }
.zMove:active { background-color: rgba(255,   0, 255, 0.5); }

.zHigh { left: 14px; }
.zLow  { left: 36px; }
.zLess { left: 58px; }
.zMore { left: 80px; }
.vFlow { left: 102px; width: 40px; }


.coinItemSelected {
border: 2px solid black;
outline-offset: -2px;
outline: 2px solid red;
box-shadow: 0px 0px 10px black;
z-index: 100;
}





.addItemList {
font-family: dckimPixelMono;
font-size: 12px;
border: 2px solid white;
border-radius: 2px;
width: 46px;
height: 21px;
user-select: none;
}





.coinItemContainer {
display: flex;
justify-content: left;
}

.coinItemList {
font-family: dckimPixelMono;
font-size: 10px;
border: 2px solid white;
background-color: lightgrey;
border-radius: 2px;
width: 116px;
text-align: left;
overflow: hidden;
user-select: none;
}

.coinItemList:hover {
background-color: lime;
}

.coinDelete {
font-family: dckimPixelMono;
font-size: 10px;
background-color: lightgrey;
color: white;
border: 2px solid white;
border-radius: 2px;
width: 22px;
}




.addSystem {
position: absolute;
border: none;
margin: none;
padding: none;
left: 19px;
top: 245px;
width: 127px;
height: 21px;
}






.topPad {
width: 128px;
height: 128px;
}

.bottomPad {
width: 128px;
height: 128px;
}






.phantomItemList {
font-family: dckimPixelMono;
font-size: 10px;
border: 1px solid grey;
color: grey;
background-color: lightgrey;
border-radius: 2px;
width: 127px;
text-align: left;
overflow: hidden;
user-select: none;
}










.phantomLair {
position: absolute;
border: none;
margin: none;
padding: none;
left: 19px;
top: 298px;
width: 128px;
height: 131px;
line-height: 0.5;
background: transparent;
overflow: auto;
}
.phantomLair {
scrollbar-width: none;
-ms-overflow-style: none;
}
.phantomLair::-webkit-scrollbar {
display: none;
}





.itemSystem {
position: absolute;
border: none;
margin: none;
padding: none;
left: 19px;
top: 43px;
width: 128px;
height: 198px;
line-height: 0.5;
background: transparent;
overflow: auto;
}
.itemSystem {
scrollbar-width: none;
-ms-overflow-style: none;
}
.itemSystem::-webkit-scrollbar {
display: none;
}




.sidebarOpener {
position: absolute;
border: none;
margin: none;
padding: none;
left: 0px;
top: 0px;
width: 25px;
height: 32px;
image-rendering: crisp-edges;
image-rendering: pixelated;
background: transparent;
background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAgCAMAAADQQiM0AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABBJREFUKJFjYBgFo2AUkAsAA0AAAS7VpkAAAAAASUVORK5CYII=");
z-index: 500;
}

.sidebarOpener:focus           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAgCAMAAADQQiM0AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABBJREFUKJFjYBgFo2AUkAsAA0AAAS7VpkAAAAAASUVORK5CYII="); }
.sidebarOpener:hover           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAgCAMAAADQQiM0AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAGVJREFUKJHNk0sOgDAIBV/rihjuf10Ba/sMmuiOSTdkEgifApAnABdbxpWJnlBXLHQQyk2LZ2EbWKDFTL/67Mlwr/dsSq2ymWW80EdTYAaFzY+J6tzWOt4zGyleaRy2ZkR2vP6SA85CDKQUUiNMAAAAAElFTkSuQmCC"); }
.sidebarOpener:active          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAgCAMAAADQQiM0AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAGNJREFUKJHN00EKACEIBVBxE0LM/Y87/WYsxYLaKe1eGJoSkayCCFBigBpwiAdkQVN1gtR+GtQ/Ci7lEtY6OQjb0lw2maU6Gc/goUNJ0IPEctFRGb81h/fLZshN62YVdBmW8ALAbRb766pqwwAAAABJRU5ErkJggg=="); }

.sidebar {
position: absolute;
border: none;
margin: none;
padding: none;
left: 0px;
top: 36px;
width: 174px;
height: 463px;
image-rendering: crisp-edges;
image-rendering: pixelated;
background-image: url("data:image/png;base64,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");
}






.hidden { display: none; }
.button_xrayGrey                 { position: absolute; border: none; margin: none; padding: none; left:     15px; top:     70px; width:     52px; height:     15px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAPCAMAAACcGxy3AAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAABBJREFUKJFjYBgFo2AUYAEAAxsAAYvZfq4AAAAASUVORK5CYII=");        }
.button_xrayGrey:focus           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAPCAYAAACrxeyFAAABfElEQVRIid1WS0rEQBB9GQUFvYkwRxBcuIouHERwzpBdLuAFsssRhixE3GWVRSBHCIwuBNGTjItQseZNVfeIH3AKQoX6db163Z0ki/vFqn54xC5Iej3D3kGCOwDIshyHR8e4vLj6l/r97RUvT89Ibm9mqyzL0S97TE+mo2aJ2T3/b8drf9c2A6DTs/ONpHRejEl1lX/Sati9PJZYvPjFFoqvq00SyrLABMCasV/2a8U0GMseytMPT9Sq6QGzwHh9T7gp7ZQiUki/x/I80XHMZogtBmOtPwLipsSpp6sL6glZmpu0hsCNM0sWqBAYGdK+59S6rnKk88I9S6EmuBEGHTpzkstre312bTMA8hjivasLWxP1gOk8qW9NXcdue6t+6Qzp7cINSp6lPWB6SNrHF4rEcb3YThoBeU5ZhG8uXjT2XYmx6eWxPQQmyBCwebuIsH2bPLax5lsvlBtj6M//FL4rIYa6thkYKsvCpE/rmN3z/7QOgQGAZNf+tj8A0bolRJEQLcsAAAAASUVORK5CYII=");  }
.button_xrayGrey:hover           { background-image: url("data:image/gif;base64,R0lGODdhNAAPAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAANAAPAIIAAACkqqR9fX3L2/wAAABlZWVfzeQAAAADzRgytM0uwvmqtFSqUUQvRMGFoUd+Jaieptq2UMoV9FeL9l1znl57s19nwMAVDMga0kDrLZ9N2lLKtCVTDZdUV00db8zet3okJ2kkQTY1nXpa5C8ueS7baSMRz0iNc/sqcoJlZFgNJ3mCT3RTXFBgQntqH2KEPkpUUXVJTmgoQ0V5bZyfZmZRch5MMitAVn+UW5iys7KuQGohM42WRo2jTBy/Zyx6nzeVH0GXzJcwIIcqe1ifLazULzgpJgMCAd0E4OJq4+Hk5+bp5evnAQkAIfkECQoAAAAsAAAAADQADwCCAAAApKqkAAAATU1NX83ke3t7meVQAAAAA8oYMrTNLsL5qrRUqlFI4UIRemMnfieZriGnlkKjekWN2iiN2x638yYcaTBo1QxIG9JQCxWW0BpteWTekq5OyWdVSoPd5+koriq7oFg2RKUaPWErJ5k0100cIspZDe+sVFxeZ2gnMTErU4RtVH9ROF0wIjOQdz+AVnBdSYomb0SSjEw9JpubTWSlOXhaKIKQX6+pZYOpayKHYHeNTo2ipXWNpC23OD42WT/KyzYhMDJ7nquSpCog09gzRQFFBN3fauHe4uDj5uXoAgEJACH5BAkKAAAALAAAAAA0AA8AggAAAKSqpMvb/AAAAHZ2dllZWfvyNnN5cwPNGDK0zS7C+aq0VKpRRCFdwYHeGJoeKYYgl66v0IBqYX+37Xl57va+UHAxKNkMyBvSYAMVltDmMflk4qqhVOzYs5qeOSYPbMVOby2ZEbSsimFgpY2TpGLtr8HPOS0DrW1OZX5tczAzJ1eDUExRXY5yUkYyK3xuQJFUdIsrcT8uejshbW0mdEqDhnEebyo0a1xhkrG0fnGxLVkyX4WXnYWkSaxUhZ8ixkE5opjMzaIkBAfPWTh7cBwoiaLGKgsCAUUE4eO75eLm5Ofq6ezfCQA7");  }
.button_xrayGrey:active          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAPCAYAAACrxeyFAAABfElEQVRIid1WS0rEQBB9GQUFvYkwRxBcuIouHERwzpBdLuAFsssRhixE3GWVRSBHCIwuBNGTjItQseZNVfeIH3AKQoX6db163Z0ki/vFqn54xC5Iej3D3kGCOwDIshyHR8e4vLj6l/r97RUvT89Ibm9mqyzL0S97TE+mo2aJ2T3/b8drf9c2A6DTs/ONpHRejEl1lX/Sati9PJZYvPjFFoqvq00SyrLABMCasV/2a8U0GMseytMPT9Sq6QGzwHh9T7gp7ZQiUki/x/I80XHMZogtBmOtPwLipsSpp6sL6glZmpu0hsCNM0sWqBAYGdK+59S6rnKk88I9S6EmuBEGHTpzkstre312bTMA8hjivasLWxP1gOk8qW9NXcdue6t+6Qzp7cINSp6lPWB6SNrHF4rEcb3YThoBeU5ZhG8uXjT2XYmx6eWxPQQmyBCwebuIsH2bPLax5lsvlBtj6M//FL4rIYa6thkYKsvCpE/rmN3z/7QOgQGAZNf+tj8A0bolRJEQLcsAAAAASUVORK5CYII="); }




.button_xrayMagenta              { position: absolute; border: none; margin: none; padding: none; left:     74px; top:     70px; width:     52px; height:     15px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAPCAMAAACcGxy3AAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAABBJREFUKJFjYBgFo2AUYAEAAxsAAYvZfq4AAAAASUVORK5CYII=");        }
.button_xrayMagenta:focus        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAPCAYAAACrxeyFAAABLUlEQVRIid2WsQ3CMBBFP4gBSO9FaFiAzkFIbMYAVIjQMQAUsEj6jGAqW8cndxcEFMRS5Ojnzon/y10y2R/26Xw8YQxjtY7AdhPTdhNTQkoX3P52zvuAthk+PF27/ut43tQMAK64Y4lFmQGgCnVB2bWNqWt5PLz4rm2eNCu+a5uX594BMAnNQ+x1RepD87LGTmedc+YhDtKY0LSP0BX34loV6uKKPPfytCHjmKZFS5LR7g+PEDujEbMIcq5FUiPrkXFriOeubVCF+skdrVbYWXa1OOmsI3P53tpzujX0TULsrFcjGkmvdZs1JGtGOp+1HMezRUwSytdyHpPk9bw3CR6hX3S5d9b+GiHpqNaJpONeHms8c9ezcj8i1NdVNH3ol//TwyM0un+5ydj+th827P+k9NlYzwAAAABJRU5ErkJggg==");  }
.button_xrayMagenta:hover        { background-image: url("data:image/gif;base64,R0lGODdhNAAPAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAANAAPAIIAAACkqqTaAP//l///AP//X/+WAP8AAAADzRgytM0uwvmqtFSqUUQvRMGFoUd+Jaieptq2UMoV9FeL9l1znl57s19nwMAVDMga0kDrLZ9N2lLKtCVTDZdUV00db8zet3okJ2kkQTY1nXpa5C8ueS7baSMRz0iNc/sqcoJlZFgNJ3mCT3RTXFBgQntqH2KEPkpUUXVJTmgoQ0V5bZyfZmZRch5MMitAVn+UW5iys7KuQGohM42WRo2jTBy/Zyx6nzeVH0GXzJcwIIcqe1ifLazULzgpJgMCAd0E4OJq4+Hk5+bp5evnAQkAIfkECQoAAAAsAAAAADQADwCCAAAApKqk/4bu13u67gD//1b/uwDIAAAAA8oYMrTNLsL5qrRUqlFI4UIRemMnfieZriGnlkKjekWN2iiN2x638yYcaTBo1QxIG9JQCxWW0BpteWTekq5OyWdVSoPd5+koriq7oFg2RKUaPWErJ5k0100cIspZDe+sVFxeZ2gnMTErU4RtVH9ROF0wIjOQdz+AVnBdSYomb0SSjEw9JpubTWSlOXhaKIKQX6+pZYOpayKHYHeNTo2ipXWNpC23OD42WT/KyzYhMDJ7nquSpCog09gzRQFFBN3fauHe4uDj5uXoAgEJACH5BAkKAAAALAAAAAA0AA8AggAAAKSqpL4A//8A//93//9i/90AAHN5cwPNGDK0zS7C+aq0VKpRRCFdwYHeGJoeKYYgl66v0IBqYX+37Xl57va+UHAxKNkMyBvSYAMVltDmMflk4qqhVOzYs5qeOSYPbMVOby2ZEbSsimFgpY2TpGLtr8HPOS0DrW1OZX5tczAzJ1eDUExRXY5yUkYyK3xuQJFUdIsrcT8uejshbW0mdEqDhnEebyo0a1xhkrG0fnGxLVkyX4WXnYWkSaxUhZ8ixkE5opjMzaIkBAfPWTh7cBwoiaLGKgsCAUUE4eO75eLm5Ofq6ezfCQA7");  }
.button_xrayMagenta:active       { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAPCAYAAACrxeyFAAABLUlEQVRIid2WsQ3CMBBFP4gBSO9FaFiAzkFIbMYAVIjQMQAUsEj6jGAqW8cndxcEFMRS5Ojnzon/y10y2R/26Xw8YQxjtY7AdhPTdhNTQkoX3P52zvuAthk+PF27/ut43tQMAK64Y4lFmQGgCnVB2bWNqWt5PLz4rm2eNCu+a5uX594BMAnNQ+x1RepD87LGTmedc+YhDtKY0LSP0BX34loV6uKKPPfytCHjmKZFS5LR7g+PEDujEbMIcq5FUiPrkXFriOeubVCF+skdrVbYWXa1OOmsI3P53tpzujX0TULsrFcjGkmvdZs1JGtGOp+1HMezRUwSytdyHpPk9bw3CR6hX3S5d9b+GiHpqNaJpONeHms8c9ezcj8i1NdVNH3ol//TwyM0un+5ydj+th827P+k9NlYzwAAAABJRU5ErkJggg=="); }



.button_xrayCyan                 { position: absolute; border: none; margin: none; padding: none; left:    133px; top:     70px; width:     52px; height:     15px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAPCAMAAACcGxy3AAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAABBJREFUKJFjYBgFo2AUYAEAAxsAAYvZfq4AAAAASUVORK5CYII=");        }
.button_xrayCyan:focus           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAPCAYAAACrxeyFAAABXUlEQVRIid1WO2oDQQx9u6QNuMw9cgx3SzAsaecCqV279gVcOgRCSLfHyD1SGtJ7UwQt8tunkSEfiAWLFv1GTxrNTLN/3o/DyysugZZ3HZp+1Y0A8LTc4f7tA4+31/+SH98fAOALkALDlMkj/W/bM6imX3Vje7OdOS3WZXI6bHbTv5JHfkyZvelNVrM/bOZN6IeCFsCsfT6YB6PkNT//cUVVzAiYAhPl3XJSXmlBLJD/z/wi8nbczVq3GIxafwKkBs2c1TbwFVKck1RF4MS5SwpUDYwVSc6QArdYl3CWOAnWqWSjGMqW147y7IeCKyDuEO9dHzhKkhOzDvHMqap723NP1ZNTDskM+e3CCZqf4hEwXySv4wPF7Dhedh8ByQzZInxy8aLZvZJ1M/JjeXa5ToCimfHciOXn+LGMOZ96Nd+sQ3/+UvguZc+fFgD6ocj2eZ7JI/1P8/Qtd2mv7U/2S0wNcPIlMwAAAABJRU5ErkJggg==");  }
.button_xrayCyan:hover           { background-image: url("data:image/gif;base64,R0lGODdhNAAPAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAANAAPAIIAAACkqqSCUf9Ij/9Unf9zdv+Z5VAAAAADzRgytM0uwvmqtFSqUUQvRMGFoUd+Jaieptq2UMoV9FeL9l1znl57s19nwMAVDMga0kDrLZ9N2lLKtCVTDZdUV00db8zet3okJ2kkQTY1nXpa5C8ueS7baSMRz0iNc/sqcoJlZFgNJ3mCT3RTXFBgQntqH2KEPkpUUXVJTmgoQ0V5bZyfZmZRch5MMitAVn+UW5iys7KuQGohM42WRo2jTBy/Zyx6nzeVH0GXzJcwIIcqe1ifLazULzgpJgMCAd0E4OJq4+Hk5+bp5evnAQkAIfkECQoAAAAsAAAAADQADwCCAAAApKqkZ2PTnJv/W27hcHP/y9v8AAAAA8oYMrTNLsL5qrRUqlFI4UIRemMnfieZriGnlkKjekWN2iiN2x638yYcaTBo1QxIG9JQCxWW0BpteWTekq5OyWdVSoPd5+koriq7oFg2RKUaPWErJ5k0100cIspZDe+sVFxeZ2gnMTErU4RtVH9ROF0wIjOQdz+AVnBdSYomb0SSjEw9JpubTWSlOXhaKIKQX6+pZYOpayKHYHeNTo2ipXWNpC23OD42WT/KyzYhMDJ7nquSpCog09gzRQFFBN3fauHe4uDj5uXoAgEJACH5BAkKAAAALAAAAAA0AA8AggAAAKSqpEtL/2QA/4yM/1tu4V/N5HN5cwPNGDK0zS7C+aq0VKpRRCFdwYHeGJoeKYYgl66v0IBqYX+37Xl57va+UHAxKNkMyBvSYAMVltDmMflk4qqhVOzYs5qeOSYPbMVOby2ZEbSsimFgpY2TpGLtr8HPOS0DrW1OZX5tczAzJ1eDUExRXY5yUkYyK3xuQJFUdIsrcT8uejshbW0mdEqDhnEebyo0a1xhkrG0fnGxLVkyX4WXnYWkSaxUhZ8ixkE5opjMzaIkBAfPWTh7cBwoiaLGKgsCAUUE4eO75eLm5Ofq6ezfCQA7");  }
.button_xrayCyan:active          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAPCAYAAACrxeyFAAABXUlEQVRIid1WO2oDQQx9u6QNuMw9cgx3SzAsaecCqV279gVcOgRCSLfHyD1SGtJ7UwQt8tunkSEfiAWLFv1GTxrNTLN/3o/DyysugZZ3HZp+1Y0A8LTc4f7tA4+31/+SH98fAOALkALDlMkj/W/bM6imX3Vje7OdOS3WZXI6bHbTv5JHfkyZvelNVrM/bOZN6IeCFsCsfT6YB6PkNT//cUVVzAiYAhPl3XJSXmlBLJD/z/wi8nbczVq3GIxafwKkBs2c1TbwFVKck1RF4MS5SwpUDYwVSc6QArdYl3CWOAnWqWSjGMqW147y7IeCKyDuEO9dHzhKkhOzDvHMqap723NP1ZNTDskM+e3CCZqf4hEwXySv4wPF7Dhedh8ByQzZInxy8aLZvZJ1M/JjeXa5ToCimfHciOXn+LGMOZ96Nd+sQ3/+UvguZc+fFgD6ocj2eZ7JI/1P8/Qtd2mv7U/2S0wNcPIlMwAAAABJRU5ErkJggg=="); }






.input_partY                     { position: absolute; border: none; margin: none; padding: none; left:      9px; top:     90px; width:     89px; height:     23px; outline-offset: -4px; 
caret-color: rgb(16,28,82);
color: rgb(16,28,82);
text-shadow: 0px .5px 0px rgb(24, 117, 189);
}
.input_partY::selection      { background: rgb(24, 117, 189); color: white; }

.input_partX                     { position: absolute; border: none; margin: none; padding: none; left:    102px; top:     90px; width:     89px; height:     23px; outline-offset: -4px; 
caret-color: rgb(16,28,82);
color: rgb(16,28,82);
text-shadow: 0px .5px 0px rgb(24, 117, 189);
}
.input_partX::selection      { background: rgb(24, 117, 189); color: white; }

.input_partW                     { position: absolute; border: none; margin: none; padding: none; left:    102px; top:    120px; width:     89px; height:     23px; outline-offset: -4px; 
caret-color: rgb(16,28,82);
color: rgb(16,28,82);
text-shadow: 0px .5px 0px rgb(24, 117, 189);
}
.input_partW::selection      { background: rgb(24, 117, 189); color: white; }

.input_partH                     { position: absolute; border: none; margin: none; padding: none; left:      9px; top:    120px; width:     89px; height:     23px; outline-offset: -4px; 
caret-color: rgb(16,28,82);
color: rgb(16,28,82);
text-shadow: 0px .5px 0px rgb(24, 117, 189);
}
.input_partH::selection      { background: rgb(24, 117, 189); color: white; }







.button_cursorAuto               { position: absolute; border: none; margin: none; padding: none; left:     13px; top:    148px; width:     11px; height:     11px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAAAxJREFUCJljYBh4AAAAhAABabtW7wAAAABJRU5ErkJggg==");        }
.button_cursorAuto:focus         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAAD1JREFUCJljYOCEAQYGIJsbAkA8Tm4mNiCTjYkbzOEF8tiYeCEcEA/IhnKAPF5ubiwyKHqQTUO2B8UFyAAAYJ8EJR/VxkwAAAAASUVORK5CYII=");  }
.button_cursorAuto:hover         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAADxJREFUCJltzsEKACAIA9Dhwcv0/3+3mQUG7bSHaAFxA6izUwqaq7pxIyW3bJTUD6QkP5NnZ16b7zw/mFmIdwSdQ/cQ3gAAAABJRU5ErkJggg==");  }
.button_cursorAuto:active        { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAADtJREFUCJltjkkKADAIA3Pykvj/7zZiCwqdixnEBdADcGZTJiocw7UkbaFsKXO+Ykvy01kzc9u8sz6YHLOhBR83pbYvAAAAAElFTkSuQmCC"); }




.button_cursorXS                 { position: absolute; border: none; margin: none; padding: none; left:     29px; top:    148px; width:     22px; height:     11px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAMAAABMIo1MAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAAAxJREFUCJljYBjBAAAA/QABh3YPQwAAAABJRU5ErkJggg==");        }
.button_cursorXS:focus           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAMAAABMIo1MAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAAEZJREFUCJltj0kKADAIA0XIof//cGOjpYs5iI672WhkpPhETuoeflhfIhcWKSfxLlIbCkM083irUTve2Rncl/gxpL+7/3ICZE4E1qAtXf0AAAAASUVORK5CYII=");  }
.button_cursorXS:hover           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAMAAABMIo1MAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAAEZJREFUCJltj7kNADAIAxGVi+w/b0wMUR5cIDh+s9HISPGJnNQ9/LC+RC4sUk7iXaQ2FIZo5vFWo3a8szO4L/FjSH93/+UEYc4G113jhRwAAAAASUVORK5CYII=");  }
.button_cursorXS:active          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAMAAABMIo1MAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAAERJREFUCJljYODBAhiAouwYACjOAyIhbBAGASANEYYSUAZUGKEIZiBEmB0iCpVnR1fNDrcDzWwYB8UlPEiGYHc3dl8CAHdFCQiC2fnAAAAAAElFTkSuQmCC"); }




.button_cursorS                  { position: absolute; border: none; margin: none; padding: none; left:     59px; top:    148px; width:     22px; height:     11px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAMAAABMIo1MAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAAAxJREFUCJljYBjBAAAA/QABh3YPQwAAAABJRU5ErkJggg==");        }
.button_cursorS:focus            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAMAAABMIo1MAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAADRJREFUCJljYODEAhiAoqwYACgOF2UCA6g4XBgshE0Y2RQ0QzCFkbWgGoLdShRDsLsbuy8BmegFQg0Apt4AAAAASUVORK5CYII=");  }
.button_cursorS:hover            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAMAAABMIo1MAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAADRJREFUCJljYODBAhiAohwYACgOF2UCA6g4XBgshE0Y2RQ0QzCFkbWgGoLdShRDsLsbuy8BzQIHr7qSR2gAAAAASUVORK5CYII=");  }
.button_cursorS:active           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAMAAABMIo1MAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAADRJREFUCJljYODBAhiAouwYACjOg2CDAJQNFwYLYRNGNgXNEExhZC2ohmC3EsUQ7O7G7ksAHe8IVHpzSyYAAAAASUVORK5CYII="); }



.button_cursorM                  { position: absolute; border: none; margin: none; padding: none; left:     89px; top:    148px; width:     22px; height:     11px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAMAAABMIo1MAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAAAxJREFUCJljYBjBAAAA/QABh3YPQwAAAABJRU5ErkJggg==");        }
.button_cursorM:focus            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAMAAABMIo1MAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAADtJREFUCJljYODEAhiAoqwYACiORRQoDhVmYoIgJnRhGEARBiuEIDRhIGbFKsyKIQw1FWY4Jy53Y/clAI6BBSQFHRaeAAAAAElFTkSuQmCC");  }
.button_cursorM:hover            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAMAAABMIo1MAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAADtJREFUCJljYODBAhiAohwYACiORRQoDhVmYoIgJnRhGEARBiuEIDRhIObAKsyBIQw1FWY4Dy53Y/clALY0B3NcMhwuAAAAAElFTkSuQmCC");  }
.button_cursorM:active           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAMAAABMIo1MAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAADtJREFUCJljYODBAhiAouwYACiORRQoDhUG6gEjHnRhGEARBiuEIDRhIGbHKsyOIQw1FWY4Dy53Y/clADDwCIbLRQ0IAAAAAElFTkSuQmCC"); }



.button_cursorL                  { position: absolute; border: none; margin: none; padding: none; left:    119px; top:    148px; width:     22px; height:     11px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAMAAABMIo1MAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAAAxJREFUCJljYBjBAAAA/QABh3YPQwAAAABJRU5ErkJggg==");        }
.button_cursorL:focus            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAMAAABMIo1MAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAADBJREFUCJljYODEAhiAoqwYACgOE2UCAoQ4XJgVSZQyYSZswghLUV2CLIzd3dh9CQCnhgVXcQNL6AAAAABJRU5ErkJggg==");  }
.button_cursorL:hover            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAMAAABMIo1MAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAADBJREFUCJljYODBAhiAohwYACgOE2UCAoQ4XJgDSZQyYSZswghLUV2CLIzd3dh9CQDoPgfZWoibSQAAAABJRU5ErkJggg==");  }
.button_cursorL:active           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAMAAABMIo1MAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAAC9JREFUCJljYODBAhiAouwYACjOA2ciKUAIsyNro0iYB5swwlJUlyALY3c3dl8CAAc9CDEqstiiAAAAAElFTkSuQmCC"); }



.button_cursorXL                 { position: absolute; border: none; margin: none; padding: none; left:    149px; top:    148px; width:     22px; height:     11px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAMAAABMIo1MAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAAAxJREFUCJljYBjBAAAA/QABh3YPQwAAAABJRU5ErkJggg==");        }
.button_cursorXL:focus           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAMAAABMIo1MAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAAEBJREFUCJljYODEAhiAoqwYACgOFGViArFBJBMThA0VZoISUBUQYbAihBa4MFwzPtVM2MwG01hcAhXG7m7svgQAceAE6xzBcIAAAAAASUVORK5CYII=");  }
.button_cursorXL:hover           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAMAAABMIo1MAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAAEBJREFUCJljYODBAhiAohwYACgOFGViArFBJBMThA0VZoISUBUQYbAihBa4MFwzPtVM2MwG01hcAhXG7m7svgQAfPIHAXHN5TIAAAAASUVORK5CYII=");  }
.button_cursorXL:active          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAMAAABMIo1MAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAADxJREFUCJljYODBAhiAouwYACjOAyIhbBCGsiHCMAKqAiLMDjGQHV0Yrhmfah5sZkM4mC6BCmN3N3ZfAgBgpwjldklz3gAAAABJRU5ErkJggg=="); }






.button_cursorNum                { position: absolute; border: none; margin: none; padding: none; left:    176px; top:    148px; width:     11px; height:     11px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAAAxJREFUCJljYBh4AAAAhAABabtW7wAAAABJRU5ErkJggg==");        }
.button_cursorNum:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAACtJREFUCJljYOCBAQYGIJsfAkA8IJuDH4zBHA4I4MeUwc3BqQfZHhQXIAMA58IFvDOFhMQAAAAASUVORK5CYII=");  }
.button_cursorNum:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAACtJREFUCJljYOCBAQYGIJsTAkA8IJuDE4zBHA4I4MSUwc3BqQfZHhQXIAMAfiwEfpNub80AAAAASUVORK5CYII=");  }
.button_cursorNum:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAMFBMVEUAAACLiYMQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOACBHZNbAAAAEHRSTlMA////////////////////wFCLQwAAACtJREFUCJljYOCBAQYGIJsJAkA8IBvEBVEgDlQVE6YMbg5OPcj2oLgAGQAAIt0DazQEWD4AAAAASUVORK5CYII="); }









.input_partNom                   { position: absolute; border: none; margin: none; padding: none; left:     9px; top:    165px; width:    182px; height:     23px; padding: 0px; text-align: center; outline-offset: -4px; 
caret-color: rgb(16,28,82);
color: rgb(16,28,82);
text-shadow: 0px .5px 0px rgb(24, 117, 189);
}
.input_partNom::selection      { background: rgb(24, 117, 189); color: white; }








.button_partPrev                 { position: absolute; border: none; margin: none; padding: none; left:     19px; top:    186px; width:     40px; height:     21px;
                                   background-image: url("data:image/gif;base64,R0lGODdhKAAVALMAAAAAAAD/ABAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4ACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAKAAVAAAEHxDISau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd84GQEAOw==");        }
.button_partPrev:focus           { background-image: url("data:image/gif;base64,R0lGODdhKAAVALMAAAAAAAD/ABAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4ACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAKAAVAAAEQBDISau9OOvNu/8eI4LkNDIlOQJo2oktC8/0DK5pzOF5qPe7HzDoMn14JaEGeVPhalBbsqUsYk7WIzPL7Xq/nAgAOw==");  }
.button_partPrev:hover           { background-image: url("data:image/gif;base64,R0lGODdhKAAVALMAAAAAAAD/ABAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4ACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAKAAVAAAESRBIwKq9OOs7p+1gKI6fVI1oKp6U6r4MFb80Wda4d+c4x+e+Xy0ohO2KKiIypVzaWE7mMRpqUjvWqyk201a3XhB06pxuzmhMJwIAOw==");  }
.button_partPrev:active          { background-image: url("data:image/gif;base64,R0lGODdhKAAVALMAAAAAAAD/ABAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4ACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAKAAVAAAEdhBIwKq9OOs7pyVgKI5kCVoeY65sWUlq+7UrQ8U10+A0ebGVxq5n+rmCwo1yZGTqhNCodMojNEPIqVZbvVqf23C0OzuBxWhyxYluq6vftvh9lG/pR7By41znkkR5cGyDRC+FImWBWDCIizkpjo9YLx03e5hKHREAOw=="); }

.button_showNames                { position: absolute; border: none; margin: none; padding: none; left:     64px; top:    185px; width:     72px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAZCAMAAACl4ZgnAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABdJREFUOI1jYBgFo2AUjIJRMApGAQYAAAchAAGzzEw7AAAAAElFTkSuQmCC");        }
.button_showNames:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAZCAMAAACl4ZgnAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAALNJREFUOI3Nk9sOgDAIQxv+/6PVhEtBplP3IMmcTHJk7QbIkgCO8T12yhLOTvolSMXKc7eGrK5Xekf6zrM0a+CfGB1q1wuQbcUSNb8H2WMMqomB5AJEu5gARauoyRAElmAGFMZG01XMAMksiNqgnlxsG7X4BtS4Jn2xU05bS/Vsf1HKV1tQNnkSZB0PQFJBeAYSE6dqdAHSNOmXrjDS7efPyS4SgiOofo5WxC9BS0gs2bfABuFIBaeJ0OewAAAAAElFTkSuQmCC");  }
.button_showNames:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAZCAMAAACl4ZgnAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAALtJREFUOI3Nld0OwyAIhc/tkvP+zztby+9wcxsXJbEIkq8IGoFHiwDH+F8GpYUzSLcE8ZAxD7ry2cp0wk3PjK651yx88D8R+ql+A82tUI0ZugDJZw3KhoD4BuR2sQGyVJGNJQiuBFsgaoQlnYtpIO6CXBouJy22jBz8AVR0jXWwUl62FuJ9+1Ol1FuCYpM3QZLxAsQMwncgQjuUT/YSdJmhfuEKI9x+vxzaZYWgF6PqOeqQW4K6XpGud+0JNCEfq44N6zgAAAAASUVORK5CYII=");  }
.button_showNames:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAZCAMAAACl4ZgnAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAK1JREFUOI3NlNENwCAIRG8A9p+3iRHhEKtt+NCkpSg+8dACdU0KWhWnkS4EqVBksz4b6evzp6XlLJI+8YsovZl/oL6V4cAY8yR9rUHRURBeQG4XByBLVaKzBEmUYAeywlrSUUwD4RTk0nA5DYA+MXgDSqqGPHhQpq1RvC9/UGr0piAu8iFIgxYgRJB8A8HEiSd7Ceou6UdXWOj2+2EqFwnhZ3NRbvyxVYFKSKhrDxCYMk2Na7A7AAAAAElFTkSuQmCC"); }


.button_partNext                 { position: absolute; border: none; margin: none; padding: none; left:    141px; top:    186px; width:     40px; height:     21px;
                                   background-image: url("data:image/gif;base64,R0lGODdhKAAVALMAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4ACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAKAAVAAAEHxDISau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd84GQEAOw==");        }
.button_partNext:focus           { background-image: url("data:image/gif;base64,R0lGODdhKAAVALMAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4ACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAKAAVAAAERBDISau9OOvNu//gxYxhKTEAaYJo2oZjLM/xVLOri+dq9669zQ84xBRhR1FO50n6nCKa9OaCLlMn6xUb3Bq73rB4fI0AADs=");  }
.button_partNext:hover           { background-image: url("data:image/gif;base64,R0lGODdhKAAVALMAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4ACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAKAAVAAAESRBIwKq9OOs7p+1gKI6fVI1oKp6U6r4MFb80Wda4d+c4x+e+Xy0ohO2KKiIypVzaWE7mMRpqUjvWqyk201a3XhB06pxuzmhMJwIAOw==");  }
.button_partNext:active          { background-image: url("data:image/gif;base64,R0lGODdhKAAVALMAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4ACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAKAAVAAAEehBIwKq9OOs7pyVgKI5kCVoeY65sWUlqu34tQ8Wy21Q1nZOMxg7n8p02G+GQKLqMgsqodCrkAY0EKHUrtTaxWq54+ASPz+SQs4kWe4/vbHsbz5rnXSaciUxW63s/Omkma4JsgF8Uh2V6QDCOjCwvkJGSXzYdN32cSB0RADs="); }




.input_partText                  { position: absolute; border: none; margin: none; padding: 4px; left:      8px; top:    240px; width:    184px; height:    225px; font-size: 8px;
background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAADhCAMAAABMbI/KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAA69JREFUeJztmIuuqyAQRb1tDyQm0///3AsMj0FttdrshmSvk6OAtS7HYdRO8+y9O4n/GfM8BW85Ky6/IphPF7x/RzCfRvSO5tPpBP8tFEdDcTQUR0NxNBRHQ3E0FEdDcTQUR0NxNBRHQ3E0FEdDcTQUR0NxNBRHQ3E0FEdDcTQUR0NxNBRHQ3E0FEdDcTQUR0NxNBRHQ3E0FEdDcTQUR0NxNBRHQ3E0FEdDcTQUR0NxNBRHQ3E0FEdDcTQUR0NxNBRHQ3E0FEdDcTQUR0NxNBRHQ3E0FEdDcTQUR0NxNBRHQ3E0FEdDcTQUR0NxNBRHQ3E0FEdDcTQUR0NxNBRHQ3E0FEdDcTQUR0NxNBRHQ3E0FEdDcTQUR0NxNBRHQ3E0FEdDcTQUR0NxNBRHQ3E0FEdDcTQUR1PEnwNhxZ/zQDyb+HP++zfOXzJP4mN5q3kWj70L/J3dP3p8fiwjHo57ZYqf3j+Yf7rjvIj4m/293yuZaf97JHR0fS/UkW6LsUiNh2IadbSudTkfj/gB8bi/BB8JHV1L9m4jdovYM46IBCmRJCeh059N2piX34+4K4E04e1GzJbujF2x1KXYttTrUD7y/YinUKqXpFWI3K54i5hxC/GX0paV+Pcj3nvldhG+d6v+jFfiq5HrEffe9Go77y957slx8Y2IP9pAHXkb8SjRrKqUb7SO3WKOn8VL00T/aMSlFRVNd80Vk+nriBs/t+Had/QzIRdTuxzfTMiVeKuD7yJuymGJfauELyIuyaQKlqboeCS7ShV3eR6V40utgEfFlxGP39dVkrX4OsfVMy6joDaboWstXz/pF8dvNdregFpnP+Iq3/K6iku+EhtVpWl2govEb7mi1ySlSj2+KXzpInU1/UXE++rxMLLd5CziLyK+Iy6FNFrSqV3xl7ccyf8bETfi8kZcLkXcVcws3o54L24qzjri9XZji6KYe6k5q72IlxJiFG2OxxSXkjtHIh7SX8zDgG4sEXe2amtbuuR5f+dsmlJTWUxmOzNuE14ORdzJ4ikmdvTpLJfAHHdbDx/2HN5XFdfV61QhZC0rfbtG3Mw/u+5Ow85UPePmamXrCbmdiKucLnXWidR0LoXEt3HTrhHfFt/o2YhnQ/1S09Zxkb3ncS0WutQbQZlCpZCUph1uc8wO9euNXv7GfMbb39ok7Nd88HS4z+n9T7zzLSP+6Tvr1Xfe+ub76Vv26i1/oL8qPph5+0Fo3J/gxv3RczyC+JDm3k83PyS3ab4Nyfwfgr3dMvtphVkAAAAASUVORK5CYII="); z-index: 100;
caret-color: white;
color: rgb(115,121,115);
text-shadow: 0px .5px 0px rgb(  0, 161, 238);
}
.input_partText::selection      { background: rgb(115,121,115); color: rgb(  0, 161, 238); }



.input_partStyle                 { position: absolute; border: none; margin: none; padding: 4px; left:      10px; top:    244px; width:   1472px; height:    225px; font-size: 8px;
background: transparent;

transform-origin: top left;
transform: scale(0.125);

}
.input_partStyle::selection      { background: rgb(16,28,82); color: rgb(238, 234, 49); }



.input_partCode                  { position: absolute; border: none; margin: none; padding: 4px; left:      8px; top:    240px; width:    184px; height:    225px; font-size: 8px;
background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAADhCAMAAABMbI/KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAdNJREFUeJzt1euKwjAUAOHQgz+2kPr+b7tp08tWtpEtOm5hRmmjVPgIh5j6Pj7W18ki+j4V9/1TnYXfizwV99nff64iT1d0j/I0DdrzUczNxiduzV4tr/DompVHcvuJIr+1n3i1/AAeu8UEz8Wex1uu15G7rSp82tvp1s3X+gUJj0d4t7zzdpvMux1frvVVP97eCo9Y9nldzYvYwbfL/Pl3+PZ+86hU4EbtYlss8DoVP/QteIfC1xmJdREPo/J3+DzxBPxgxw/hub3jyIyvq3ic8flUqcfI7lTJ+cmp8s4db/Z/z/HL/nNeMOF0wumE0wmnE04nnE44nXA64XTC6YTTCacTTiecTjidcDrhdMLphNMJpxNOJ5xOOJ1wOuF0wumE0wmnE04nnE44nXA64XTC6YTTCacTTiecTjidcDrhdMLphNMJpxNOJ5xOOJ1wOuF0wumE0wmnE04nnE44nXA64XTC6YTTCacTTiecTjidcDrhdMLphNMJpxNOJ5xOOJ1wOuF0wumE0wmnE04nnE44nXA64XTC6YTTCacTTiecTjidcDrhdMLphNMJpxNOJ5xOOJ1wOuF0wumE0wmnE04nnE44XYFfUh6RhrhkQ+qHS9Z/A0KokMOaJTelAAAAAElFTkSuQmCC"); z-index: 100; color: white;
caret-color: magenta;
color: rgb(180,133,205);
text-shadow: 0px .5px 0px rgb(139, 56, 0);
padding-top: 20px;
}
.input_partCode::selection      { background: rgb(180,133,205); color: rgb(139, 56, 0); }


.randomTipMarquee {
position: absolute;
border: none;
margin: none;
padding: none;
padding-top: 8px;
left:     61px;
top:    469px;
width:    131px;
height:     22px;
outline-offset: -4px; 
caret-color: rgb(16,28,82);
color: rgba(140,140,140, 0.15);
text-shadow: 0px .5px 0px rgba(24, 117, 189,0.15);
background-color: lightgrey;
font-size: 6px;
}



.input_pathEntry                 { display: none; position: absolute; border: none; margin: none; padding: none; left:     61px; top:    469px; width:    131px; height:     22px; outline-offset: -4px; 
caret-color: rgb(16,28,82);
color: rgb(16,28,82);
text-shadow: 0px .5px 0px rgb(24, 117, 189);
}
.input_pathEntry::selection      { background: rgb(16,28,82); color: rgb(24, 117, 189); }






.button_notesTab                 { position: absolute; border: none; margin: none; padding: none; left:     11px; top:    215px; width:     58px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAZCAMAAABXXc2CAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAOxJREFUOI2lU9kOwyAM61MsVcr//+44chhKx8QildIQUzvHdePQ7gvQIwMuqByZFugZUiSghXxb0Ja8Lz7sGG3HULTHnXz3cMhhDJUzaBB+gSbX0MNpmgmHsOHlP/+qlaCIuyn8meEJSkl9gS6Ma7Q6/g9qfZCAzjos9nnuhDVjEsBQLAKMMOr0xP1tKsqFChsqctaAPjcJNWk1SESUG2R0doqiK+hQF1LnjJW1/gD1+ZamRAetGygVzHnM0MhFVeetlU7qMJ2hqzoMTiqktUR0ay9S0RYJqfEPp1qGewKkr/4lvlVZOHc9vDF8AKNQJ/fsVrwcAAAAAElFTkSuQmCC");        }
.button_notesTab:focus           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAZCAMAAABXXc2CAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAOxJREFUOI2lU9kOwyAM61MsVcr//+44chhKx8QildIQUzvHdePQ7gvQIwMuqByZFugZUiSghXxb0Ja8Lz7sGG3HULTHnXz3cMhhDJUzaBB+gSbX0MNpmgmHsOHlP/+qlaCIuyn8meEJSkl9gS6Ma7Q6/g9qfZCAzjos9nnuhDVjEsBQLAKMMOr0xP1tKsqFChsqctaAPjcJNWk1SESUG2R0doqiK+hQF1LnjJW1/gD1+ZamRAetGygVzHnM0MhFVeetlU7qMJ2hqzoMTiqktUR0ay9S0RYJqfEPp1qGewKkr/4lvlVZOHc9vDF8AKNQJ/fsVrwcAAAAAElFTkSuQmCC");  }
.button_notesTab:hover           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAZCAMAAABXXc2CAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAOxJREFUOI2lU9kOwyAM61MsVcr//+44chhKx8QildIQUzvHdePQ7gvQIwMuqByZFugZUiSghXxb0Ja8Lz7sGG3HULTHnXz3cMhhDJUzaBB+gSbX0MNpmgmHsOHlP/+qlaCIuyn8meEJSkl9gS6Ma7Q6/g9qfZCAzjos9nnuhDVjEsBQLAKMMOr0xP1tKsqFChsqctaAPjcJNWk1SESUG2R0doqiK+hQF1LnjJW1/gD1+ZamRAetGygVzHnM0MhFVeetlU7qMJ2hqzoMTiqktUR0ay9S0RYJqfEPp1qGewKkr/4lvlVZOHc9vDF8AKNQJ/fsVrwcAAAAAElFTkSuQmCC");  }
.button_notesTab:active          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAZCAMAAABXXc2CAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAOxJREFUOI2lU9kOwyAM61MsVcr//+44chhKx8QildIQUzvHdePQ7gvQIwMuqByZFugZUiSghXxb0Ja8Lz7sGG3HULTHnXz3cMhhDJUzaBB+gSbX0MNpmgmHsOHlP/+qlaCIuyn8meEJSkl9gS6Ma7Q6/g9qfZCAzjos9nnuhDVjEsBQLAKMMOr0xP1tKsqFChsqctaAPjcJNWk1SESUG2R0doqiK+hQF1LnjJW1/gD1+ZamRAetGygVzHnM0MhFVeetlU7qMJ2hqzoMTiqktUR0ay9S0RYJqfEPp1qGewKkr/4lvlVZOHc9vDF8AKNQJ/fsVrwcAAAAAElFTkSuQmCC"); }



.button_styleTab                 { position: absolute; border: none; margin: none; padding: none; left:     71px; top:    215px; width:     58px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAZCAMAAABXXc2CAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAM5JREFUOI3FlMEOxCAIRA3JJKb//8GrIjhY3Xa9LAdLsE8ZIKZLDu1KIjgykSTIR4aCzrGSyyJ0i+V3KM7Rdey/qPbKvs33RQy1nYCG/3fo2Iqo9jnXXqtf69qWsjraZiGi0NMQdHUFcK+Nj7GuFZ7JDR1eyLij9UJLZaBQmYTaAEc027xRI/yKeSOgPSHTlSWoaOuUVUdBIrgBoGbvmqMsMI7xlOGJg/7iCpv67oKKPCK0s5rhYLJ/CR7QqaivUdZ8gu5frm8o1+RH9MHkA/khIdb/wbILAAAAAElFTkSuQmCC");        }
.button_styleTab:focus           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAZCAMAAABXXc2CAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAM5JREFUOI3FlMEOxCAIRA3JJKb//8GrIjhY3Xa9LAdLsE8ZIKZLDu1KIjgykSTIR4aCzrGSyyJ0i+V3KM7Rdey/qPbKvs33RQy1nYCG/3fo2Iqo9jnXXqtf69qWsjraZiGi0NMQdHUFcK+Nj7GuFZ7JDR1eyLij9UJLZaBQmYTaAEc027xRI/yKeSOgPSHTlSWoaOuUVUdBIrgBoGbvmqMsMI7xlOGJg/7iCpv67oKKPCK0s5rhYLJ/CR7QqaivUdZ8gu5frm8o1+RH9MHkA/khIdb/wbILAAAAAElFTkSuQmCC");  }
.button_styleTab:hover           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAZCAMAAABXXc2CAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAM5JREFUOI3FlMEOxCAIRA3JJKb//8GrIjhY3Xa9LAdLsE8ZIKZLDu1KIjgykSTIR4aCzrGSyyJ0i+V3KM7Rdey/qPbKvs33RQy1nYCG/3fo2Iqo9jnXXqtf69qWsjraZiGi0NMQdHUFcK+Nj7GuFZ7JDR1eyLij9UJLZaBQmYTaAEc027xRI/yKeSOgPSHTlSWoaOuUVUdBIrgBoGbvmqMsMI7xlOGJg/7iCpv67oKKPCK0s5rhYLJ/CR7QqaivUdZ8gu5frm8o1+RH9MHkA/khIdb/wbILAAAAAElFTkSuQmCC");  }
.button_styleTab:active          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAZCAMAAABXXc2CAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAM5JREFUOI3FlMEOxCAIRA3JJKb//8GrIjhY3Xa9LAdLsE8ZIKZLDu1KIjgykSTIR4aCzrGSyyJ0i+V3KM7Rdey/qPbKvs33RQy1nYCG/3fo2Iqo9jnXXqtf69qWsjraZiGi0NMQdHUFcK+Nj7GuFZ7JDR1eyLij9UJLZaBQmYTaAEc027xRI/yKeSOgPSHTlSWoaOuUVUdBIrgBoGbvmqMsMI7xlOGJg/7iCpv67oKKPCK0s5rhYLJ/CR7QqaivUdZ8gu5frm8o1+RH9MHkA/khIdb/wbILAAAAAElFTkSuQmCC"); }


.button_codeTab                  { position: absolute; border: none; margin: none; padding: none; left:    131px; top:    215px; width:     58px; height:     25px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAZCAMAAABXXc2CAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAALFJREFUOI3FlEsOwzAIRC2xIpu5/20bYfO1I7WoVdl4POIlBpOMi5pxDSK0gmgQuBW40R7J/A4qlfVQ9FFhmyj/Ej2XFNHUMEfXjHDNcZ9SiqM+YEFvUqaIMuo+pZwiWdq9ocunoqG1hoIrKuv9ipQzZT77A1r6+T1UP7gjqm1anWOTlnLssC6wg6FeTpwbRWO6bRB9lygjgejPC0Z6prr2V/FBjB2Yu+TDNG/ox/En9AVI0Svv1MOCmQAAAABJRU5ErkJggg==");        }
.button_codeTab:focus            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAZCAMAAABXXc2CAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAALFJREFUOI3FlEsOwzAIRC2xIpu5/20bYfO1I7WoVdl4POIlBpOMi5pxDSK0gmgQuBW40R7J/A4qlfVQ9FFhmyj/Ej2XFNHUMEfXjHDNcZ9SiqM+YEFvUqaIMuo+pZwiWdq9ocunoqG1hoIrKuv9ipQzZT77A1r6+T1UP7gjqm1anWOTlnLssC6wg6FeTpwbRWO6bRB9lygjgejPC0Z6prr2V/FBjB2Yu+TDNG/ox/En9AVI0Svv1MOCmQAAAABJRU5ErkJggg==");  }
.button_codeTab:hover            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAZCAMAAABXXc2CAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAALFJREFUOI3FlEsOwzAIRC2xIpu5/20bYfO1I7WoVdl4POIlBpOMi5pxDSK0gmgQuBW40R7J/A4qlfVQ9FFhmyj/Ej2XFNHUMEfXjHDNcZ9SiqM+YEFvUqaIMuo+pZwiWdq9ocunoqG1hoIrKuv9ipQzZT77A1r6+T1UP7gjqm1anWOTlnLssC6wg6FeTpwbRWO6bRB9lygjgejPC0Z6prr2V/FBjB2Yu+TDNG/ox/En9AVI0Svv1MOCmQAAAABJRU5ErkJggg==");  }
.button_codeTab:active           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAZCAMAAABXXc2CAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAALFJREFUOI3FlEsOwzAIRC2xIpu5/20bYfO1I7WoVdl4POIlBpOMi5pxDSK0gmgQuBW40R7J/A4qlfVQ9FFhmyj/Ej2XFNHUMEfXjHDNcZ9SiqM+YEFvUqaIMuo+pZwiWdq9ocunoqG1hoIrKuv9ipQzZT77A1r6+T1UP7gjqm1anWOTlnLssC6wg6FeTpwbRWO6bRB9lygjgejPC0Z6prr2V/FBjB2Yu+TDNG/ox/En9AVI0Svv1MOCmQAAAABJRU5ErkJggg=="); }



.styleContainer {
position: absolute;
left: 0;
top: 256px;


}





.input_styleFG {
position: absolute;
left: 0px;
top: 16px;
width: 480px;
height: 256px;
}
.input_styleBG {
position: absolute;
left: 480px;
top: 16px;
width: 480px;
height: 256px;
}
.input_styleOL {
position: absolute;
left: 960px;
top: 16px;
width: 480px;
height: 256px;
}



.styleMask {
position: absolute;
left: 0px;
top: 15px;
width: 144px;
height: 26px;
transform-origin: top left;
transform: scale(10);
background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAAaCAMAAABvsyU0AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAWBJREFUSInFltkSwyAIRRme+P8vbgeVC5pFTGyZtopN5CiLkiwIzcrK3BtxlpDILERTznTX/TasUptvp4rT0MW7oelbM0CGMQAdKdrjshZuiyqWmaG1bjGRAKIIJGhN6YHMGoDUctAY44tACI/oyTDWA7H7pVFxQHeB48yfADnlGEhj6AxFw+vXQEQjEI9/vgjkg2cCyPX3Akk3cA1Elu4AKqJO1I8+Is3xGKtWXgYy6XZIPVqM41sIWSre+Q65rL8HCjG9AYha0EwCid8mQu2eB1IkXdF7QGGfJKTbJND0Dpl67TJ5ApSKoXsgH9S7gJz92cJYOUp9jDHUnMpwbdF5Le1TQFQL9o7CmDs6UOj+BcQcg9ql3MbDdeL6camsA/W70QBCEbgA8pEkLYUApK+GJnlj7IDCQ+MVtqaVG2bjWQFCrQGZR5JYj2i45LcjDMPPLvlZoYzkZ88DJZAW5v4AJM5GK/JNEnUAAAAASUVORK5CYII=");
pointer-events: none;
image-rendering: crisp-edges;
image-rendering: pixelated;

}



</style>
`;