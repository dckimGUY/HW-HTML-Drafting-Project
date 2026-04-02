shelfMenuHTML.tab5.folder1.style = `
<style>

.filterBrightness    { position: absolute; top:  250px; left: 21px; height: 24px; width: 173px; background-color: transparent; }
.filterContrast      { position: absolute; top:  274px; left: 21px; height: 24px; width: 173px; background-color: transparent; }
.filterIntensity     { position: absolute; top:  298px; left: 21px; height: 24px; width: 173px; background-color: transparent; }
.filterAntique       { position: absolute; top:  322px; left: 21px; height: 24px; width: 173px; background-color: transparent; }
.filterGrayscale     { position: absolute; top:  346px; left: 21px; height: 24px; width: 173px; background-color: transparent; }
.filterInvert        { position: absolute; top:  370px; left: 21px; height: 24px; width: 173px; background-color: transparent; }
.filterOpacity       { position: absolute; top:  394px; left: 21px; height: 24px; width: 173px; background-color: transparent; }
.filterBlur          { position: absolute; top:  418px; left: 21px; height: 24px; width: 173px; background-color: transparent; }

.filterReset         { position: absolute; top:  248px; left:  1px; height: 47px; width: 19px; background-color: transparent; }
.backdropFilter      { position: absolute; top:  296px; left:  1px; height: 87px; width: 19px; background-color: transparent; }
.setFilter           { position: absolute; top:  384px; left:  1px; height: 63px; width: 19px; background-color: transparent; }



.filterReset:hover         { background-color: rgba(255,0,0,0.35); }
.backdropFilter:hover      { background-color: rgba(255,255,0,0.35); }
.setFilter:hover           { background-color: rgba(0,0,255,0.35); }

.filterReset:active         { background-color: rgba(255,0,255,0.35); }
.backdropFilter:active      { background-color: rgba(255,0,255,0.35); }
.setFilter:active           { background-color: rgba(255,0,255,0.35); }

.useAllLayers        { position: absolute; top:   0px; left: 26px; height: 35px; width: 66px; background-color: transparent; border-radius: 12px; }

.newStateBlock       { position: absolute; top:  87px; left: 6px; height: 25px; width: 86px; background-color: transparent; }
.singleState         { position: absolute; top: 118px; left: 6px; height: 21px; width: 86px; background-color: transparent; }
.rStepState          { position: absolute; top: 145px; left: 6px; height: 21px; width: 86px; background-color: transparent; }
.lStepState          { position: absolute; top: 172px; left: 6px; height: 21px; width: 86px; background-color: transparent; }
.rAnimState          { position: absolute; top: 199px; left: 6px; height: 21px; width: 86px; background-color: transparent; }
.lAnimState          { position: absolute; top: 226px; left: 6px; height: 21px; width: 86px; background-color: transparent; }
.loopState           { position: absolute; top: 253px; left: 6px; height: 21px; width: 86px; background-color: transparent; }
.noname1             { position: absolute; top: 280px; left: 6px; height: 21px; width: 86px; background-color: transparent; }
.noname2             { position: absolute; top: 307px; left: 6px; height: 21px; width: 86px; background-color: transparent; }
.noname3             { position: absolute; top: 334px; left: 6px; height: 21px; width: 86px; background-color: transparent; }
.noname4             { position: absolute; top: 361px; left: 6px; height: 21px; width: 86px; background-color: transparent; }
.noname5             { position: absolute; top: 388px; left: 6px; height: 21px; width: 86px; background-color: transparent; }
.noname6             { position: absolute; top: 417px; left: 6px; height: 33px; width: 86px; background-color: transparent; }

.stateHover          { border: 0px; margin: 0px; outline: 0px; padding: 0px; }
.stateHover:hover    { background-color: rgba(  0,255,  0,0.25); }
.stateHover:active   { background-color: rgba(255,  0,255,0.25); }




.classListEntry {

padding: 0px;
margin: 0px;
border: 0px;
outline: 0px;
position: absolute;
top:  459px;
left: 14px;
height: 26px;
width: 172px;
background-color: transparent;
resize: none;

font-size: 12px;
color: rgb(24,117,189);

}















.sidebarOpener5 {
position: absolute;
border: none;
margin: none;
padding: none;
left: 0px;
top: 35px;
width : 32px;
height: 39px;
image-rendering: crisp-edges;
image-rendering: pixelated;
background: transparent;
background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAnCAMAAABZobp+AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABJJREFUOI1jYBgFo2AUjIIRDQAFBwABw3vlBwAAAABJRU5ErkJggg==");
z-index: 500;
}

.sidebarOpener5:focus           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAnCAMAAABZobp+AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABJJREFUOI1jYBgFo2AUjIIRDQAFBwABw3vlBwAAAABJRU5ErkJggg=="); }
.sidebarOpener5:hover           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAnCAMAAABZobp+AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAFBJREFUOI3tlDsOACAIQ5sYJkh6/9sqxo1oVwdg4FPyNgoAfAS2bn7LvNh65DS8dnmwKnPDqJ1xAS4aD4GuCNaEJjThS4L6bukP2mGkRwmXm8JtLnHK7RqLAAAAAElFTkSuQmCC"); }
.sidebarOpener5:active          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAnCAMAAABZobp+AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAFBJREFUOI3tlDsOACAIQ5s4Yuj9b6sQN6JdHYCBT8nbKADwEUjd7ZZxkfqMaVjt4mBXxoazds4NuGg8BJoieBOa0IQvCeq7pT9oh5EeJVxuASnJO7tHUadBAAAAAElFTkSuQmCC"); }

.sidebar5 {
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
background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAHPCAMAAAD9DRGXAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAFRJJREFUeJztnYt6q6wShovRWNN09f7vditzRjwDmv0Lz2oENb5+DsMw7Uq+vubL4/F4by79SQtvm6kQ69/qQsSn0f5V3bb6dxLvQLue8v14P/jnGbyPLbSeVH6eg7vFCryu+PMc3E12q9X9K487bQug4Jy6J1iDtwXF8CaSh6+BqlbdE6wBbAEZ6N9b2JWmSle8p+LW0Iv71zGJsgBNxXYQqvuXWd4ai8bttLrACNzKGrAVqpvXGur6t3FD/WVgHGmkrraDyPgK1c061upf11D9rRlXqyuj7aG98VvUL6aup4XrCy96XX7y/NTf8vyNn7Dq5htrA63oRbwPP9LEUrWNCq2yZKtuNlyi9bYgvDSnGVWtpzUW/HjLz5zq1ooWeRF3www8qrlwB58AVust128N8uqI4THS09R3ZH82XBploDCQ14G68Shhbn82XDXOkNxbg4nH5tWN7c+vrvJmdRDtblc3l98VdRV3HcSP7FMDKhuNmT0F1GXuqLrKo/FcEY0XiqjrGtmqOSJTKgax5PCv6zp1B0rlbBGZndOA1swTpO7jrbfwXyexj7GUjHOwjDBlC9YazPPXVqHso9L+OV+EI/MEvVLQ8I6oS1RsHUEPzdM5AzKZ14TWWAPZJreCyFern9cWkFfG268K0COeQXk0Yx3VUIqsJb5oLdFoWm0NKuI16qpYuBqWTmQf2Vdqv7SWMKu1t3r6MpJkrSYqV3Xbl5osN/dCeLS0/NqUgexpf5+/z4H3rAzklvxuj9vT/va45+V3N2TPRd3c2fMqSWF1p4sMZ6ybL+JpR2/DVdH4cT/elgYONeyBrhpaeGgfitiyA9fTvge2hxtvMVPrYepgWzeQAHuGrnr4KcdWjQ7j2FVvxO2p6oGvfo+38HH113x6y2w9w/O7r17JvvF49pW4+te2/ab9/T7YD6pXMw9vLa5/kxhpLerCKPoF20Savg6IzwfWFo9pn7Jf9j48bwLb9be8oC6OIk/ktW1BYa9fr2wrvF7bFhX2vKR/nUbdZlldHEWeGkjIPFuwBLACf09+b13jUZ4T7qYe1D081NaoW6FdttoaPCFZg2+QLXgDF3VreAaDusFIe+dRV9ku6orEcBtETOp6XKVu3bK6JWwXdWvV025FvcB2Z9UtYrs0X4Ht4hiDsQRWCfoqdetLqEueoW3Z9z58P1gD+7FWq2/UPT7UNtsu+1XWVduu8rtjdY/Pauv97jOcB1A3TWt5z7FddmTIQ3MATMI4p9ETQG8Btov7aJ4oNKtR+IJzQzzE4cgGDiUb5miioLoaupoMIPme2O/iPjqkyKw2875mF4SPLcU+MF+YUmJW46g7Qqt3cVwBEQWoa48vYLtxnRAQV2fQ0PMHj0VTSthu3UZ0IkJZnZG1sh9rIyZUwDOgNUZxI+rSamJ2jbm7JFe3Er+VBXeluuKsKvJMpC42UN3ATwWL4X3+S+GuUxcngBa9Ki4icZaTFSVPFa2coRbDZobJqC7HWbKaeai4x6wo/ZG0xmh9FOHvyt/mhM9IrC5xjOJbXiEr2qeO09Qd1To6yqou+X0TEbYcB4NlcJTQkrK4xuAshXqnfbyrPUPNMRZHhLzK4NkXxh3uxRUw6sqxZXvEcaz3DC1ZA6sb9bt+64HrNbQGWjeRNRzBPa4u4tIzpmhcq1u37ENozjtP3bpW6tbT6j6vYbsmwm3biO2Cujqq2Me73jOIuphXqFX+gdUftONMVKhuK7HlTmtYzkDW4VqRc4pqxUnqj48ytqveaacxLOV3tW9v1crX8rI1sHemYwJ1j9EuZ88VRU2jHTO6tazowSMwS7g+5nlCZbJ34i79boKyj638AkLadWxfPVofRxfRO3GXfvNjl63BMja2jzfVRnQRvQt3/8nli7eFC5Ul3J72+0JlEfdStMu4JWES/EL4E3F/ypREuD8/a/7C4nhNhbvB9R0pqXDrMiUV7m+Zkgr3Waakwv1XpiTDLVNT4b7aIjUFrvt2P5PxedqaALen/Th1N10Vyh7eVOqGT+01QL1e0JLlmXOuHf7cfCiPlrmhlLCFCXVf/m/gX9DquPSI/c/fuq/SSfsLqjt63l1X9wC4/VsD4wDc1b9YifuBryvsI5W69qkNig488HxbIfwlbYEXqfF12RqO08bU7QX1ig3P/gVKi5aw7VvUj68F1R3ZLVH19vsCdrQH3/8Am0BmYCdLL+wZUE2yzxatoTfRjgk1O/07zTMoW607HGv9SHp0bK9syfq+TvIM7YgC1GuNut5SZNytsoUcniG03cahui0/98F2weOSBa+yhdyewc9sY3XZM7Rswau8bsaYoUO7BU/hn/ZD+TOwFD/6/JMYHkNB2w2eGs9q4im0ryW77sTDded5hlcYM5g5V15p9l09B2eLGTAiI0+hi4rITH9J2x09N//uEkuqouNd03+WZ8hXE+BuX03srylwh5XwCh+/puZ3DYD7YeoWSZfeCdM7YXonTO+Eac6EaVempMAdJuFHV6QmwPUhTvdnahe019al81KpG1y1cSvpum3nZVLXNV1A1bF6su2jFkNszyujbocq0ZU7H011ng8YO+6lVuy8MuoCU8dKSfwnhM72R8/LqW6/PsSqmagNyjrcRhtQ/bHzojWZuk+uyNOz+BZueRrP9uxIaekfnxevqdS176qvSjSakchRXX3sLG2KmCFU97mobmftGO/neZK6MoLWqDuU2Hl51ZXxACxARiPtV6n7y+p2MMai58VrKnXNzDRcs3M4Q4nPJZY/Upc9Q+y8C/hdZFH+7CS/Oz2r6dlLq3uVWS2c+yU26ERj375GzPA3Ukiimi6IckK6hQgymbpl4vMU6n7Y4udOOt1JJ4N7J53KJp0GU/ucpFP1dE9XXTXpNB7EPe3zkp7BJ52qsHp1R73x454LPVwT4PpJuGqDCuqGvePq2fr7Cs6cODeVunEOoRhK7PoxtvEdcE2sbsVc1naf2Gq5R7HRGereyqhbsS6gEOokW5VsyV1VzK01z68uE1aVon0q9spsa0pr67nV/Vf9Q03ICkjDivorug/alnOGLbIX2xvUZOoOVQh/kPoHt6QHemUvvf6wJdleW1OpK7xATOx0bRpvxP5U91CNeHWvqUnVZR/ANiEUyo4n1JW7LaOu5RyrK3YcU7dStPnV/YecPGawValxU8HecITx6HqOesOaSl30RUhHHsu3eAQqz8Bey/hdmTHK+l0iivha63XP8rtq/kcWbpn+KqAlP6wJq0LqVqMnquwA+2ncjeMZfQcl1KUYR29zbDBhlWdFZMtxOMfepk0jc65Hagp1N6VFJJLYU5Lhrk0bDep+TtKJxtzJ6q5MGqFdfkzSyWt0J5024t5Jpzvp9HUnne6k05S6FXNtTzrB+RyIFlD3SNKJ2GNhZh51ZXm+Pelk7Se3useTTmQxn5F00imn6yedLO3Vk07kz1T66dJJJ+KtCqn7X0s6kWc4we/uSDqV9btq/nf7kk5CWRVS91jSiWKGO+k0VvdOOkVKMtw76ZRR3TvpdCedvqaTTpvK8HGepyadNlX/yaNNwaRTgg9KXXNcClyfdGqGCp/P2jQPruOeWAXc+WN8TYALn37x6it+mqzfpopdpm9c1xwz1FTqTrHF7iBWh7JMm+IDD+SzRRq0QNfATwdbvpdbuMcexZ8gMP7QAFOTq8uailqibsPqN8MLDrAX3gUdOaN0MnUtpbYJ20u2IXEAf4Iy3cyMHadS97sZ6nCh4ZUuHOlF44DeRvNCH9/Dd6wmU1dsF2wQLhr2NmLhitOpGyHcvLYL76avI1eVXp4TuHdMTepGeTOp69gedW9orw1Tqz6w4cLqCq30ajudVJdwM6tLY6mh0VXpEdbwSPs2tkvjcKxudKRl9LvijagXmbANP7W6L6Puhfwuq/sSdvEWal7J5XfFdsVXkTfQHk14te3G+vLaro1nZB4lEopjyFAEkBoVPxP9bM6PyBqOE+gOGtM3EzUkUxfiZ2DTEfW450hNoW6Cxc/akgr30H+au27S6WBJhbs7jXTtpNPBkgr3TjrdSaevO+l0J51G6m4JcWJ1KMu0uZJOapn+AUmn0SLCaH29pNOLl1+fkHSyaSfqvW7SiTA+I+lkryjbPCdMp0VY3XJJJ3vF6yedLK/uNUrG1L2TThF1Q7+r007Ui0wXTDot+N2LJZ30CPuEpJNELURCPXfSaY+6d9IpUlLh3kmnWEmFeyedyied4FvtPyXpBN/W0R5MSBVLOhHuwZRUhqTTRBlwr/aNtz7pFK2AG9+3qybA9ZPwzytaQd34vj01lbrxdwfcdLTJQpwPs90FXPjQSd3bce+WO0qm7pztaq6XbsjHZ17IdvUnhr50w2yXtd13tI5wf0a4bDLxd7A1lbrxd/8hKG5BD96Jb8hdreAtoS6zaELNLvdwqxtXd8YzdDSzESGNQppF1s8mqdSd8wzEogkte8d3dIFZraN5QDkD2+AjCkwTy7Oa8Ve6YXoK4U7bLk23s363W20JmW1XQgXBepkZeSttOtuNRdMhFxwlIY6Ywdr4PIW6M4ufhbLBapPZ7v6kk196fk7SCXA/Junkca+YdHJ9Gfd63Aslnai4v764UUrKe4hNSalUuPO5IsBNkJNKhjtbEXeUlBrKKUmndrYA7vwxq0oKXJ90aucq4M4fs6omwPWT8Px3qaK61/hOVh/izF4FcBN8h2w2dZ0voK0DXCiRvap1jroAOCCiJUhxrZO9Tu3leymurjN0Aa5pO3s3S7x51HWglVWTnrmjbbkbaZ6nrrJV7Rlk27HYjp/IAm8edfkJ08hSJLKtcKm1ZA151FXW+wHqOrZFrdxV1aUxJHpdWl3Sj7yrUtS5eXVP8QxIQLiiqCO3q56+0/d2it9FVxraru9y7OXIK5vWGeraWY2fu9F63FoxB5eIGSy/C/fyrLbImlLdUUTuC7c57hrt9bhr4/MU6i4vfpYWRqvXRalw9//1ksf9iKSTLx73I5JOvnjciyWd5vJRA+61kk5L+ahxQurUpNNSPmqckDo16TSbkBrKtZJOyUoK3OWkU7KaAHdF0mltdUvBQyp14d04MogS0NYohdPS2eiJp4P0pOqKtyceTQCbjo5yIZ+aKyZ5E6trpquAwJlX4R4fO82bVF1P4h8v8AAZNWHvi3r9Kx1Le+nkKftNr65r5bm/wDKdqMl7SU9ORdVEKVtF1KUrwpaIPVKXn7+z7DPWkFddp81zpK6yV7ZoObq8usHoCdQVKUfHnqNurUbaSF2yEH1r7LcLegbWz9poqK7xHnhv6Kun54ks6hrBXqFnMJ6L7Te8t4J+14yeoB3YBk9s7HfnRlquWQ2eZ2ysSTOcdY0XKamu2J4e/WM7DWIaaU7RZvIMQVW/pICteERmYrXM6kICacDNGZ+nUFcWP6DuxRc/knTyuMf/E12ppJPH3Z9/Kp10cjTsc5VUuJA/Aub9CaiySSfE3Z2AKp108m5zd/7pI5JOF/xLp0v53f+TpNNiCmmqTp+XSl1eBKgU09sXpxmcpuEeG9TgidFQJ5m6Di7hiBBhiZfhHe6hV3+Oc3Kf6sSM6spVNAvxqiaJR31O9dojI7zJ1JVnyCzwsP1VHbT0EUgW3hmfqOwoS3iur8428RJ6xEcishdn9XSkqrxDHnXN1RWefcbO0R3o++NznJwYtYb06r74Ykoz3efG6jpH3cGJ+dUFr6UoWalp2w1w+bwCtvtqzfbgWYNRv6iu8d/l1DUjzbEvNq2oulMjLemspq9A/oiJ3my8/MDfom7rnL4z3pd3Vgt4pUdPE6aFyvIdlp7VVAJH84u06l6UzxPbKBMz0F85q/e2o9u08FiT0pH9JSKyIjWZumXi8xTqftji5/5MpzJJp+wlFe7arNHgoq6SdFouPj15ICuVCndl0ghwPybpBLgfk3QC3HP97oakE+JeMukUqYA7c8RCkiqVuitDFFRX8dswztm9+UIcufoLg0XWSweGHleSY/h7F/4T9fBucqnbtEMlGmDwPQyEe6W4RnU4dT68V7QmU9e/mwt4NKFrQlzT7nmV+FO8adVtSFj/6pCfMBprDP5eYHN0N1O8adUlPvU6cHHLPG3Zhq3wyRRQlxmYheWDlthpo5SO4JZVtwULdMFoGqk7YcoTtNnUjRBF1dWEyrTLeAbL0+pxN2W7kr4Lzy6u7niEKVtRbKxnYb8bU9fFuB3ZqrWQYuryjOsvqCMEMQaeZX2P+N1KzikbM9DocYa+Ur1Ot5zdVzwiY9wg4pJehev34vbaD0NIpi7EzzTKw6hcesUThHvupNMk7p10ipVUuHfS6U46fd1JpzvpZHD/w0mnhZpK3ZXXW0o6FQtx5Oqv/UmnYura5Rcw+J5NSafFmkzdyOJ2a9JJBZeFlpZHkk4mdC+8tNyRdDozLbIj6XRmSm9H0knZdqmE6aGkU8NDrZBnOJp0WqxZ1d2cdFqs+dXdknQqpi7PuP7SOkLYlHQqGzMcTzoVjcjupNOddLqTThMlFe7/adLpYEmFuz+PdOWk09GSDLdMTYX7LlNS4Pqk07tITYCLfyofVPke1eErhX1b+kZHr62p1B3Ryhe4DJtNgxvYtZc3p7oeDF4ZF9rN1dTta4M6Wlzfvp66aA8NvArucB/HbJe+Wnj4dmH/sumLhjeq68fd7gqXBDzGHbbTqstjDvuOqBvDXV9WqWtx+YjNWifA3Wa7yus227W2uGjCm74je7NnaFnRxmh9VXVF0eaYutlsd2JWa1Kpm9gzhLhJ1U3jd1sa9350YazTGG+wU90jZVLdFXWnuodwR+pSjChK2i3HHhfUlZjSal9GXXSnNJthTKa2qKORUQhjko8rqW7TaSY1wMJG12hcp/ZN8mZQlzQjKVFXK6yKgsmCG/UkpngzqNtaXL660HMkoZh5/+zqKJu6TMp+VuNSa3w/xW0X1gtau5i6bSNjkJ69xG4l1TXryil1DR/7tlGMWUjdADeirrmvhiIM9hOl1W007oy6Dc4V2qYnefOpa3BZybG6jflJT2bCGrKoC2tzfX3rb4OIzPjnk2y3MfGusWTmNfNZo48r6RmQgq+sYgEz8rmbXsvFDF+GlzJ540jLzFq0zX2LEdlx3iPx7vaaQN0hHV0ov3s8H100e54Kt8wvLRP82rLoby1T4d6/tcz5W8tCv7ZMhLv3m9GLfBd6BDdf+Y/jZuZNjJubNzXu18Unhk8u/wMpy+wvytJ+sgAAAABJRU5ErkJggg==");
}



.stateDel        { position: absolute; border: none; margin: none; padding: none; left: 86px; top: 215px; width: 45px; height: 22px; }
.stateDel:hover  { background-color: rgba(0  ,255,  0,0.25); } .stateDel:active { background-color: rgba(255,  0,255,0.25); }
.stateIns        { position: absolute; border: none; margin: none; padding: none; left: 140px; top: 215px; width: 45px; height: 22px; }
.stateIns:hover  { background-color: rgba(0  ,255,  0,0.25); } .stateIns:active { background-color: rgba(255,  0,255,0.25); }






.popStyle1        { position: absolute; border: none; margin: none; padding: none; left: 40px; top: 78px; width: 41px; height: 33px; }
.popStyle1:hover  { background-color: rgba(0  ,255,  0,0.25); } .popStyle1:active { background-color: rgba(255,  0,255,0.25); }
.popStyle2        { position: absolute; border: none; margin: none; padding: none; left: 88px; top: 78px; width: 41px; height: 33px; }
.popStyle2:hover  { background-color: rgba(0  ,255,  0,0.25); } .popStyle2:active { background-color: rgba(255,  0,255,0.25); }
.popStyle3        { position: absolute; border: none; margin: none; padding: none; left: 137px; top: 78px; width: 41px; height: 33px; }
.popStyle3:hover  { background-color: rgba(0  ,255,  0,0.25); } .popStyle3:active { background-color: rgba(255,  0,255,0.25); }

.stateFrameLeft               { position: absolute; border: none; margin: none; padding: none; left: 43px; top: 182px; width: 29px; height: 18px; }
.stateFrameLeft:hover         { background-color: rgba(0  ,255,  0,0.25); } .stateLeft:active { background-color: rgba(255,  0,255,0.25); }
.stateFrameRight              { position: absolute; border: none; margin: none; padding: none; left: 128px; top: 182px; width: 29px; height: 18px; }
.stateFrameRight:hover        { background-color: rgba(0  ,255,  0,0.25); } .stateRight:active { background-color: rgba(255,  0,255,0.25); }

.activeStateEdit          { position: absolute; border: none; margin: none; padding: none; left: 6px; top: 149px; width: 41px; height: 22px; }
.activeStateEdit:hover    { background-color: rgba(0  ,255,  0,0.25); } .activeStateEdit:active { background-color: rgba(255,  0,255,0.25); }

.firstFrame          { position: absolute; border: none; margin: none; padding: none; left: 13px; top: 182px; width: 25px; height: 18px; }
.firstFrame:hover    { background-color: rgba(0  ,255,  0,0.25); } .firstFrame:active { background-color: rgba(255,  0,255,0.25); }
.lastFrame           { position: absolute; border: none; margin: none; padding: none; left: 162px; top: 182px; width: 25px; height: 18px; }
.lastFrame:hover     { background-color: rgba(0  ,255,  0,0.25); } .lastFrame:active { background-color: rgba(255,  0,255,0.25); }



.statename       {
position: absolute;
border: none;
margin: none;
padding: none;
left: 55px;
top: 150px;
width:  130px;
height: 20px;
background: transparent;
resize: none;
padding: 0px;
margin: 0px;
border: 0px;
outline: 0px;
font-size: 20px;
color: rgb(24,117,189);
}


.stateFrame      { position: absolute; border: none; margin: none; padding: none; left: 78px; top: 181px; width: 44px; height: 20px; pointer-events: none; color: lime; font-size: 20px; }
.stateTiming     { position: absolute; border: none; margin: none; padding: none; left: 14px; top: 215px; width: 63px; height: 22px; color: lime; font-size: 22px; }





</style>
`;

