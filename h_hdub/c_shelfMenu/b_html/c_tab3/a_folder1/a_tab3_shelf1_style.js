shelfMenuHTML.tab3.folder1.style = `
<style>

.quad  {
position: absolute;
 border: 0px;
 margin: 0px;
padding: 0px;
 width: 54px;
height: 54px;
border-radius: 4px;
}
.quad        { background-color: transparent; }
.quad:hover  { background-color: rgba(  0,255,  0,0.35); }
.quad:active { background-color: rgba(255,  0,255,0.35); }
.quad1 { top: 21px; left: 24px; }
.quad2 { top: 21px; left: 86px; }
.quad3 { top: 83px; left: 24px; }
.quad4 { top: 83px; left: 86px; }



.wide  {
position: absolute;
 border: 0px;
 margin: 0px;
padding: 0px;
 width: 116px;
height: 30px;
border-radius: 4px;
}
.wide        { background-color: transparent; }
.wide:hover  { background-color: rgba(  0,255,  0,0.35); }
.wide:active { background-color: rgba(255,  0,255,0.35); }
.wide1 { top: 186px; left: 24px; }
.wide2 { top: 224px; left: 24px; }
.wide3 { top: 262px; left: 24px; }
.wide4 { top: 300px; left: 24px; }

.tall  {
position: absolute;
 border: 0px;
 margin: 0px;
padding: 0px;
 width: 21px;
height: 86px;
border-radius: 4px;
}
.tall        { background-color: transparent; }
.tall:hover  { background-color: rgba(  0,255,  0,0.35); }
.tall:active { background-color: rgba(255,  0,255,0.35); }
.tall1 { top: 358px; left: 24px; }
.tall2 { top: 358px; left: 55px; }
.tall3 { top: 358px; left: 86px; }
.tall4 { top: 358px; left: 117px; }







.sidebarOpener3 {
position: absolute;
border: none;
margin: none;
padding: none;
left: 0px;
top: 0px;
width: 16px;
height: 463px;
image-rendering: crisp-edges;
image-rendering: pixelated;
background: transparent;
background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAHPCAMAAABtMqodAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAB5JREFUWIXtwTEBAAAAwqD1T20MH6AAAAAAAAAA4G4evwABDZzvuQAAAABJRU5ErkJggg==");
z-index: 500;
}

.sidebarOpener3:focus           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAHPCAMAAABtMqodAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAB5JREFUWIXtwTEBAAAAwqD1T20MH6AAAAAAAAAA4G4evwABDZzvuQAAAABJRU5ErkJggg=="); }
.sidebarOpener3:hover           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAHPCAMAAABtMqodAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIBJREFUWIXt2bERwCAMQ1FDReP91w0E4zjRBrnvcyPd20BmeX2eWc2t1Wbl2qw8xmxqXt9fOYvIforMUWQOUfJdlLxFzVFk9iwcgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgfiyeZhffZVW2V11ndb/VhVc3YF2JdUfWpVm36LNWX6oPjKW0570KAAAAAElFTkSuQmCC"); }
.sidebarOpener3:active          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAHPCAMAAABtMqodAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAIBJREFUWIXt2cENwDAIQ1GUiFv2n7dJQyitN6g+4mLrbWCzvDbPrOYxarNybVbufTY1r2+vnEVkP0XmKDKHKPkuSt6i5igyexaOQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQPxZPs4vvsirbq66zut/qwqsbsK7EuiPr0qxb9FmrL3TO379ZRdsPAAAAAElFTkSuQmCC"); }

.sidebar3 {
position: absolute;
border: none;
margin: none;
padding: none;
left: -16px;
top: 36px;
width: 174px;
height: 463px;
image-rendering: crisp-edges;
image-rendering: pixelated;
background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAHPCAMAAAD9DRGXAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAFM1JREFUeJztnYti46gOhrtsz3RImvL+b3tswCCBACHAdrslk0xqfPn8R5YBC3h7C0ltyX269O6TytI7Snl+ugZvXSovTZDWbRF2/fIpP+gLJQrrVUi1dUunCBOi3Xnj5n98yg/6ByUK608h1dYtnSJMkHY/QfXOO82LEqTd/6n9v+dtX4jW417NVHlB2sf3UPegfX0LdQPt13dQF9A63Ft7BkD7tLj39ruQdse9+V1NRVqr7s3LDDvuQbvjWs/28SZO26aPoa3racf1tM+AO3DAx9DJNg9s1fW0v+r2b11P31zdj0d46c4ENt1eI1vXcUl1tz387UrbBlFd+dZ96tqFD3s8QTpsd2DrNi6hrta7V/7ak/XPzz2l38zx7VhvO6JVd9/aLXFr5J8x14TlbmuJuo62G3fj3dW1W/fjPu3WEnXluB/HyYpwZepqOa62W9Nk5DmYuNxdbv3q6r9S3H+13VqI+y8LN1fXHjDnQ9/MltJl3bhuJ324lLpNXPPPlkwBt2K16EzMXtA1wXbXqbvRmv09hLvRmv3dhytQd9fW2I8B3F1bYz8Wq2stwSVD4bK8mImVImcPA+omfNhHANrdfuN6PbgGVuIME/f9tVVBvbrb1/dvgHuoOw83/d0pbozLtN016i7FlaurxnC3LxuqmqBu1TOYA1U515B5hqI3QE7Xs6oJttvEVWp/qxHcl8W1Eo96hhausq/9/0FcJ/FydT0urW7Fi+FLTVlT2G13O5/FtjuMq7zl9uEyPAP+BnBV3TNUcdXL+wU1rC4H119qBG6TNXiGV/+lJlW37HeZuEopgSOTqGu/D+L6NMPvttVl3YRLn5ulTi0zULXKsAzjgvVOwaXUvTHufHUDE8d2Z5R3b4z7A9StegbbJHIkmFuwXZob72TMduu4pW9duNnnMnUvxZ2vbomy1F423EZ2Y9x6K0691RTnXqbuGC7HUkW2u0bdpbj/eXWZniv5vMwzLMWl1L0x7nx1m2SkR7tM3aW4P0Dd0rVf9xY9NeGptntj3P+8unUbLX1epu5S3FxdLfUMPkBAiMsLEMjU/ZDjumgRjqUS5V1e+EWm7kOO66JFpLis4JZcXR861Iu7/ZgPt7UElxs6lKsrD636GA3rEqlrj/hvV3IXymNo6251B4IKUUzhSEiiRF1hGoswFdvuwAHHwmnrKVV3Uoxo/9asANOyuvqKCNOmumQb2ViM6MDWTdslWyBtjOjuuXcffvxv30aRy/33GGG6+f0Hepvkb+LtbjISdV1EazduKDNsx09eJluSvxhlBlpddxcl3qaw3L+PMkOunWlpu70ZZQa6fVeO6wqQInW/dLsAWW49T39o+93gZchQnrEmnGvHsN2xJ+4Ern3owcG1R4fabqml7Wa7I9EiuY7mc0umagwBF+lmAyXb+g5Fi2S4G63Z3xzcB9TX7E+2HG9F28FokRRm19aYXF9oEKTt7toaw9B3iu0edvsZkmniBoKHtwSXSvoe94mRZ8K5toCXNAb/c2LbBbQtfYeeCQ/hAg+GcCvasnDLLZAYBuOWLjbCdhN1B2233L47ggvvvg11YRlnpI0MX0QBV0VjSA2G9Lshbl/NsN1yG1mKqxwqDxfarmdVlLqId4rtOqgDd1MqMQZ43yNt1+FaiU+wXYTr9G3iYtvdSR2zqWg7ZLu5I9tblyxupdxA2q4lVXP8bkld0u/ycTPbVblnyHhn+91gDPlFVvG7AVed7HfDpdbCzW3XX2oVbYf9LryQDlzoyJi269Nyv5vhfrJxiTID8rsk7/IyQ1oJunmZoYTbKDMUeCfYblZm6Pe7M8u7LdsV4tbKu0XeoboablS6SXm3XFcbwV1mu612hvCG8aDP9GSO/6l2BrhhTdsp7QyldwOXJqre0ya3M3De5TYyzntmO0MXbkNbeZmh1c5QKsyw/W7He0I7gxC3pa20vMu3Xc4J3Mh2e3AZ2srqatw2stLf2KFdbrtCXI62knaGX7+b2m79tajMcG+/O4jL1ba3fZdX3j0uqpITq9TVzrLdEdwObYG+k2yXgqRvGrewXQFuj7ZB3+l+t1XguZnf5eJ2avsYtN1igED17R/xayqegWW7vAABKlpEiuvDL3q1tfoywy+oaJGy86r9fQS3CG2XF9xCRDptvALcGDokUZcbOkREOt05MIuKIxuIEX3It+4eS++yYSvRxlXcmRGmJ4RszowwPSEg9lddYfrp6t47ZeoWB9W+RcrUfX//58YpU3ej/exIwctnC+DydCVqRf3JSLm6G+2TeO07zJb6rkF78rk6tTa9bxv+APvL7FKTx8UvQt3P53v+0u5oeOm28O///MvlavW/v/il9Lbt8VfcQ1wG16SOjF60utas7S/kTdztXWlk9wmbzU15/UKwBtpjtj3nUsvU3ctl7tfytRFHoVDd5CBTKhxvX5gywDU12tyv4VK6d6bfdeqGvfl9HOpiXL8GpPHfd4C4fVSXOlt3oSkWbVHd47j2cNopiMcfjmv4ywaQhXNgqOsFYdGW1MWKxWsFiAD0dwKhc9B8dVmcVXU1sMfsisqOhyQXqtuBm6kbCaNlxiXJ8f4qYCSXqAs9pb/K7J7xMTX0ugraAn391dRlmm7BdnW8sh2jCj4nu9ag6pEB0jA8A9MxlDxDtD0VfavSWuMjKnhfgzoqxVZXub3wHVnV70J1sd89koq81L2qoW52TUjUfWuqG8stgJcqM1ynLrotR/2i1xOoazXg3oPb6hY8A/R1ubo9tusu0Y5LrapuycZynxV1PhRLLLrid3scWb3MAEu1xF0C2S7tvVJ1dfHeIVU33pX0G7BIVGRIbQGqi9RLSzOKshCevqUyQ7zDukKO/56VDrxFY52L6up4XYFfp+NG0SgzoGNX/WblzgtLF+4aVEeZ9FjGLZ83ygzo2HRtIp4VXTJSuXcjl7GsuFxmCLeBQl0tOWJSh6T8MiTLl/1lVNZKNWFQ/y/WhEM5yB+rUO7sUFdYE2a2M2jYzoBaGfQbaFwg2xTyZSpvx+C0M4y04sC/wHeqxSZbxmnG+e5tZN+sBfLe6Waz18nGFrl3Y/+vusL009UdeKpr0x7MINsQPhQu4pJP3KmhYkzfwDG9SfPGdCLjGaiIBCPSrCtJx8V5EFMZHpN2wGXPyrL6t7hF/MYZj4xWl5hsbz0uZ7Q3Wt2rcGXq6hQ3jB+/GHcgSi/uyvgx+o9p/JbhjkSYhmO4WQDdJ4tFeB6T5qi6E257DFM8W8MNcOtjmOLZyW6Ay1BX3Qi3PnY0np1snKr4bc7I3Hh2shvgttWN033dALep7r1w2epebwzteX7w7GTSey3j3ObMooQd2Q1wm+ra/2+Dy1A33IRvgNuYowrOxisuJy5WF+wP4opZGN9mzVGFiufX47ZnUQKVn+txhXNU3VfdW+HW62pz7rD1vdhceX81fQ2ucITYj6twxa041+BKWyAd77m44rGjxR3ARhtMxe27/V24xpKWjXs+0AHMpodt75dsyOoAVlRXmBY/+Sk+m5AfcOWTn1Tdn/LkZ35Cz5L05Cc/81P2LGnsyY/z4e7T+fj6Es6a8LtJth188nM27uCTnwtwxU9+ZDT8z2P0N7itlj/5WYtr/FTNxiDcoXaGdbjGobopxrtxC3W13t+3wxIALjjnsZrwMtxk0u5e3LPV3XC3rxuqEuEWasJddtlj6+blWZUz3gm2uxb3ZXGtxP2456trcZ3Ec9Qd9F/VXOPFBZeaXT7PM8zGVd5yJbjnq6te3i+oSeqKOJi5Hld6qZU9wzJcpZTYkZ2vrk/z/C7Tf4k+8U3YnsOdywyQ1xd571xmGMTtKe/y7bW2h1g8h8vHnlouxD0qP3j5bdWlc2fYrqzmyOcG64xFi9wVN48WKUwPvRqXN7l0Htnfmm95lr2m7QzCyP6rcKX9JhrTQy/B5Tz5KfWbOKHBNEsjvVL0LZ/8pOqOPvkRJ/7Qf799foTpp/X5KaqrG09+JvcB0rJ53I/fpKnGgj5ActsFk0sf7+TvMAtYY71sOcxH3zlPfkplhibGfFxOtEi5zEAfNLyrE/W24am3tMygW7hH1WU27kB0NPWjuf+Nn1KJB8w/iaHaRBHXTdrsPq/A5cwABi8ygCv60UvwE+dXA3YLRyDIJoY7AZcze11882YJLDus8joT5waEuPlksqfi1mYNzZ07nkx2xAjS94Q5WYu4jflDF+LybXeH400mS59s/eSm267D/WRMJrsQt8/v4slkS2CtN7XeOr+bzdt8Im7ZdqmdciaTlVyAE/xuEbdxm1iKy7Hd+GPzZrisgZcK9BNtF9gm4DUMzabj9pUZYBmnpwDZBl9SZpAWz6fhcmYaT4FblR/JxTZxHvf+63wJbnsWpVpBkFNI5BiC+z5ljqrb4dJ9fsaMQfJmVNzLfX6uwB2I3y03DvF/aO5NwhvDQJ+f83F/+/xc/eTnt8/Pb5+fkH77/GSJ85BI36fPD/ch0Uifny/O5IO8l2Hti/Xkp1RmEE1MWXgb5noDZYZ52u7qTpsosvTkZ5q2rp7EWlfLn/xM0tYG4j33yh2Dd6SuNkVb41DtJ8N2R2rCM+wW4jJsd6QmPMNunyC1eQfUlWqLcmPUvrWGu9uueXpWhzvBdsvxu1JtwRoHrpXYoDWEtluJ351iuzupY55iuyV1R7QNa3l1lbvUiLW6bbeo7kTbPXAvsF2etl+ZuiqoO2S7q/2uco0J6hK/y9f2y6nrkwK2W9b3er+LcCfYbk+ZoU/bL6DuM1H3nrYLCw2MMvpU2+3W9gvjtre62nb3usRRPGesP9F2Jdo6+3UjG3C2vNx2+97TbFesbdfW19tu13ugz888bfl7YFbcqfjdS2xXHr87U1vuXkb6/Jxvu799fq5+8jO7z8/iJz+/fX5+Z1EK6Ueqa2p3R5RJqFvdGGd3q+tSnC/O/a1NujzmhcyQknVsfrINSOm+8zViymevs5vEAQncLrR5T5bHvJAZUrKOzU+2ASndd3OyPTTzot3sT0huF9oPUPAHpRfODClZx+Yn24CU7jtfI6Z85kXy9DIB2Znt/NbmMOXqbrTP7KVNviy8tuNVcpv51X0nL0Ld7iO2jtfIb50tfP2q25v/zdQ17Yluw4vpGUxtqt9Bz1Ddd5KYftfoit89MoV+N913l9+l72qHAnjjkjzJOo27WrrvLnXpMoPRlTLDkSksM6T77iozHMWqpNSEikwfhUw6G+Tn2a7Bj1seY5V34S4/iN0CXCob5KfZsTk1Zrdxq+rGqTzCsXA2kKdTXRg+kJxIDbemLpy67i3TJw4l9RbPk61uiitQN43Sg7gokG7PhkOn4kwY42fDyIhs/KCFVW9vjc+AJ/kB+thsiBuj7FCMnzMWGIQXt0bRDjJ1jx/tUAbNtBetz2Vib6+T7H2N0H9F59k42oETo1cbn8GeOZ6gSh/6uNh0PNJrGFk7ju4A+2t/wWzbhIejHTgxerXxGQJunGnPN8C67HykV5id44Js11SKox04MXrl9t2IC2ba8w2wj4D7esGRXmO2e8ye9GyL2a6JNAkfYLTulqP0FDIGP3Wdu2D8zC/HCH7HSK9hahad4SqPe2Qf6ia4zab+5ux1Ca571nGMaolHeg2PQsJwCUn38pj9gLZ7hL4wHqQ057XEM+3luGCk1zKusn1eAS6y3SOwiIXbmJMVz7QHeVQYOjUM+wvPxhkD7F7+BLjedlH4ABu3MotS4shI3Hip5bgqdi9/EuqKcOvqWisu4SoFRnqF2XZj3L08t114E+bZLkfdcBOGP+cXGNvTDwhewVWE7SbhA0Pqes+AZtp7lnBfKS5wZHEkh9R2Hyg4Y8x2Obho6NRnGdc5sq9MXRyMPEXdZyye41/bngvAVQXb/Sz6XWu/MdR7irrPZxwdNcNNRnot4qaXGv0Ae4q6z/gtx8UjvWJjyLqXZ7bbHR5QjRax5gmZEc9T4WEcv+BdrYUrDL6oxeKM4B5dE2PxfFuTsl0YHnCdurEn5THFJMIlwwtWqhso4WfqyJL3hbY7iEtZw5C6Caml/2Ljkl1uV9puAxdSBgtm49LBIgvVbeCSXZjrtnului3cC2wXerHcdolu4TXbHVU3uf8SnmEAV267jdqEEDc1BAtctl2+uu0Zbyt3teSTjyu2XaG6DVziJlH2u9er28Cdb7vRH0TmJ9t2yeEkaNudo+5a3Om2O4bLtt2T1M1tt1DevYftNnDTm0TBdvvVbd/VInPVM3ThTi8zNHAhJWm7jPLuieqO4c4v747hMsq7p6rLKDNcWd5te4a+MgMR4D+zNjEXd3ldjbirJV6MtN1CAZLsPLFS3THc0223gdv0u0THlJWtOHn55nlpO8MYbuMmTHb6uVDd08sMDdzmTZjtd89tgRThXud3adw4+iB5Eya7vJ17V0Pl3QbuDcoMPZUfsjvhhere1nbhZ/kmTNruzNbzSFovnotwr6ur0bjksKBY3Yx3fW0iubexcU+vqzVwm7ZL8F6o7um2O+YZmo5stu0uxpXa7mg8g9DvSm2XES1C4UKrDd9PsF2hug3cpiOT2m5lPDJubUKAK45nqMzWvC5AYL7fXYpLlR+vjBY53e82cPO7Wld5VxxHNlSbKOJSw7Mvtd2luFS9/doywyK/u6rM0Pa7qb53rqtdUt5NPnv9LtZ3fW2iiHu6312LS7VHL64J56UcbAzwYsueTZxsu2O4mbon+N0a7um2y7qrVcq7fbb7GLNdXcDFHcAy3NjDi7wJh2zadrkdwCq9AVPcoz9fATd096NxcW/AVN0JvQFTXNQbMIvFAdnExZb2BkxtV9wb8CN0DUW4x3BsH75raIKLsnNcmE3FBzDGeusc7S329F2XLVL3LRvtTcfh2MjB4OrZja01b6y3ntHekl7fK7MF6tKJHCJganY9dY5HRg4RMDW7nqy6nvebqBt4i2OLqGx5bRyQfI3WFtx13vaRZQ7e9+LILUd6JYkeXyVfo7UFd503BXmL4+Ic6U+SUvx8rXQJvQV3nTfI+14cdegu6Q3xFsd0usvrDfK+F0fMusvrDfJ+D3UD7zdRN/B+E3U970Z6f88Qed/f1e39LuQN98K4Aj67dHNag3yN1hbcdWDpwd6T711m+D8u8isrlFaoegAAAABJRU5ErkJggg==");
}






















.input_pos {
position: absolute;
border:  none;
margin:  none;
padding: none;
width:   26px;
height:  26px;
border-radius: 0px;
}
.offscreen {
position: absolute;
left:   0px;
top:    0px;
width:  0px;
height: 0px;
opacity:  0;
}








.button_gridLock                 { position: absolute; border: none; margin: none; padding: none; left:     19px; top:    241px; width:     77px; height:     49px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAxCAMAAACoN9Q4AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABpJREFUSIntwQENAAAAwqD3T20PBxQAAAC8GQ7uAAFI6p6gAAAAAElFTkSuQmCC");        }
.button_gridLock:focus           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAxCAMAAACoN9Q4AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABpJREFUSIntwQENAAAAwqD3T20PBxQAAAC8GQ7uAAFI6p6gAAAAAElFTkSuQmCC");  }
.button_gridLock:hover           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAxCAMAAACoN9Q4AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAS1JREFUSIndlusShCAIheGH7//Ku5saHPBCWc1OzE7qpl/AQYuIrzOi7+8y43+iJbwWWvpZaaU5SyvDBM2Y461JoxAt5Nv2iGVa9jQnzdNKMUmfhzQMcUjLoydpqYbarJAmbaJp1Ka+3UFj0St3MEI1ZU7Dk0WPTBumSTkpwK5CwURorOayaWQAeRtoihlr0djSJr55mvb7TTSvAtw7oCmWWJe2T/AbFfeCnqwWqT1icIF9OqIp3iFa0J6ioaZT9Hajf5IjLcEjRjSvaaUp+UM0E2+Lpmacp+Grcp2mzdBM8RVa6bZp/goHMuyGPq3xvVNl2hnmwrVHsjzom5SOoYFiZ2mSvxfSuJk3Yva0rqKzCqGVeoMATeARGq6VvzAHUdpBu4V2kV1Ng7fyotEH3CcKfVNuxtsAAAAASUVORK5CYII=");  }
.button_gridLock:active          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAxCAMAAACoN9Q4AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAS9JREFUSIndl+sOgzAIhUn6c7z/827aVjgUW9RqFsnSy2w/oQd0I/rMM6LfZ5p9/omWsC20tFjppTtLK9MEXZ/TmkujEC3k23qLy7TsaT60lsaL6TF3aRhil5ZnT9JSDdXNEJc20DRqQ9/uoLHolQcYoVoyprEYTJhMH6ZJOinApkLBRGis1rLpZALn1tEUT8yjsaUNfGtp2u830VoV4NoBTTHFdmnbgrZQsRb0YrVJ1YjBBeq0R1O8Q7SgPUVDTYfo9cL+kxxpCW7Ro7WaVpqSP0Qz8Xo0teI8DV+V12naDM0kX6GVoU9rW3ggQzXs05zfO1WmjWEariOS7UHfJHUMDRQ7S5PzeyGN3XMjXTcjTWmUIXQl3yBAE3iEhnvlKzyDKO2g3UKbZLNpU/+ffgGrwjHUNK+EJwAAAABJRU5ErkJggg=="); }









.input_buttonFace                { left:     78px; top:     60px; }
.input_buttonShadow              { left:    104px; top:     60px; }
.input_buttonLeft                { left:    130px; top:     60px; }


.input_buttonTop                 { left:     78px; top:     86px; }
.input_buttonRight               { left:    104px; top:     86px; }
.input_buttonBottom              { left:    130px; top:     86px; }


.input_textRight                 { left:     78px; top:     112px; }
.input_textBottom                { left:    104px; top:     112px; }
.input_textFace                  { left:    130px; top:     112px; }


.input_textHover                 { left:     78px; top:     138px; }
.input_textActive                { left:    104px; top:     138px; }
.input_textFocus                 { left:    130px; top:     138px; }


.covering {
pointer-events: none;
position: absolute;
width: 84px;
height: 107px;
top: 158px;
left: 98px;
background-image: url("data:image/png;base64,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");
}












.buttonScale {
position: absolute;
top: 0px;
left: 0px;
}





.yourButtonIsHere {
position: absolute;
top: -16px;
left:  2px;
z-index: 500;
}

.buttonMakerContainer {
position: absolute;
top: 100px;
left: 22px;
}








.button_cycleColourLeft          { display: none; position: absolute; border: none; margin: none; padding: none; left:     20px; top:    295px; width:     78px; height:     23px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAXCAMAAACS9YkQAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAJpJREFUOI3t1cEKhDAMBNASFB2w+P9/u02amOzeFkbw4Bx6mJZ3atMGrKx0oPE09dpYhRP1Bid9o0Qmd2nQ1AN/Fl8csGhyFzg0tTg1tdg1UVRuYgb62SMSxRmJYo/gl0vNvdTcS8291Ny7jauaeVUzr2rmVW16L8fgnn1R2K+C/WY31kRZSfPOxqcQh7v0Bp4n468ASF+FDA0fzYYzZLqXWHwAAAAASUVORK5CYII=");        }
.button_cycleColourLeft:focus    { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAXCAMAAACS9YkQAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAJpJREFUOI3t1cEOhCAMBFBsNDqJ/P/vLi2t7e5tkzHx4Bw4DOSdoDRgY6UDjaep18YqnKg3OOk7JTK5S4OmHviz+OKAQ5O7wKqpxampxaKJonITM9DPrpEozkgUSwS/XGrupeZeau6l5t5tXNXMq5p5VTOvatN7OQb37IvCfhXsN7uzJspGmnc2PoU43KU38DwZfwVA+ipkaPgAtLcr5i3PHp4AAAAASUVORK5CYII=");  }
.button_cycleColourLeft:hover    { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAXCAMAAACS9YkQAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAJpJREFUOI3t1bEOwyAMBFDiIclJQfn/vy02dux0q3SVMuQGhgO9CUwDFlY60Hiaem2swol6g5O+USKTuzRo6oEfixsHHJrcBU5NLXZNLVZNFJWbmIF+9oxEsUeiWCP45lJzLzX3UnMvNff+xlXNvKqZVzXzqja9l2Nwz74o7FfBfrMba6IspHln41OIw116A8+T8VcApK9ChoYPxbQuphLE/vcAAAAASUVORK5CYII=");  }
.button_cycleColourLeft:active   { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAXCAMAAACS9YkQAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAJpJREFUOI3t1bEOwzAIBFCHIcpJQf3/v43BEGi2SlepQ2/wcLbeZOMBbKwoMHiaeWOuwol5kxM9KZHF3Ros/cCHxRsHvCy1CxyWXuyWXqgli84tzME4e2Sy2DNZaAZPrrTwSguvtPBKC+9rXNfc65p7XXOva8v7cwzuty8K+1Ww3+zJmigbad75+BTicBcd4Hky/wqA9FXI1HAB3bs5L5tOE+EAAAAASUVORK5CYII="); }




.button_cycleColoursRight        { display: none; position: absolute; border: none; margin: none; padding: none; left:    103px; top:    295px; width:     78px; height:     23px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAXCAMAAACS9YkQAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAJlJREFUOI3t1bEOgCAMBFAsIeSG/v/vSiuV6mZyJg7e4HCSN2iBAjRWFCg8zbwynsKJeYMT7ZTIwZ0aLHnBw+LCAZtlvQWqJRdqyYV/sigyd2AOzrU1EoVGojj/Ae7c0qa3tOktbXp5JvAqlzX3suZe1ty7Dix+jsR9e1DYu4K9ZzvrRGmk886PT2m8iBbwPBl3BUC6KmRo2AFilipL4FiACgAAAABJRU5ErkJggg==");        }
.button_cycleColoursRight:focus  { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAXCAMAAACS9YkQAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAJlJREFUOI3t1bEOgCAMBFAsIeSG/v/vSiuV6mZyJg7e4HCSN2iBAjRWFCg8zbwynsKJeYMT7ZTIwZ0aLHnBw+LCAZtlvQWqJRdqyYV/sigyd2AOzrU1EoVGojj/Ae7c0qa3tOktbXp5JvAqlzX3suZe1ty7Dix+jsR9e1DYu4K9ZzvrRGmk886PT2m8iBbwPBl3BUC6KmRo2AFilipL4FiACgAAAABJRU5ErkJggg==");  }
.button_cycleColoursRight:hover  { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAXCAMAAACS9YkQAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAJlJREFUOI3t1b0OgCAMBGCog7mh8f3fVgqtFDeTM3HwBoeDfIP8FaCyokDhaeaV9hVOzGuc6E6JDO7SYMkTHhYLBxyWOeqLlIvNkgu1RJG5gXXQ515/OIotEoVGcOem5l5ecayae1Nz7zUua91btyNWrXtZG97PMbhvbxT2qWCf2Z11o1TSfdevT6m8iBbwPGlvBUB6KqRpOAFNeinVY1rX5gAAAABJRU5ErkJggg==");  }
.button_cycleColoursRight:active { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAXCAMAAACS9YkQAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAJpJREFUOI3t1bEOgCAMBFCoi5dI/P+/lRYKxc3kTBy8weEkbyAFEpBZKUDiaeql+hVO1KuclIMSadzQoIkLHhYLB+ya+Rc4NbGwHYrFpvEicg0zsK89PV6MLfdi8+DOTa17U+teHAGsWvde46JmXtTMW+cTq9a8n2Nw3x4U9qlgn9mDdaNk0n1n16dkXqQk8DypbwVAeiqkargAvsYxKHdOoqYAAAAASUVORK5CYII="); }




.button_navPoint7                { position: absolute; border: none; margin: none; padding: none; left:     20px; top:    322px; width:     24px; height:     24px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAH9JREFUKJGdkssKxTAIRGXgohDy/79bNQn4Wl0XrcxpppMYIvr12kSj7sReKOXkfMAsa8l74oBtJOqyLvClUX+AUd0eEBS3C7QvbhdYn90esB7umVMdB2C3VJx3EVIVPaTKekyVV8VU01k1/e9U/e8+QYwzhw59IvBrUq+CluofwVMQEtkvgWgAAAAASUVORK5CYII=");        }
.button_navPoint7:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAFpJREFUKJHV0jsOwDAIA1DkDky5/3VLnfSH3QPUSyReBiQTEZtmRNg55XjQQpkf8hVMGCoLILIgRU4QuaDLDU0ewBUtJPABdqs/gQobhO0cVboT8Ez6KVRqvgPcoAzJB5jevwAAAABJRU5ErkJggg==");  }
.button_navPoint7:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAGdJREFUKJG90tEKwCAIBVB3IQTB///dOTM2vD5PiMBTiKiIXBwuMuZTngstUvYDXWrvwQZnKQBJgZIULJLzg6TASM6PEucaKfChho19GMm3ho19dPmvBktOEOPMEUOfBLkmfRUiIn8DNacLj0NDiEoAAAAASUVORK5CYII=");  }
.button_navPoint7:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAFpJREFUKJHV0jsOwDAIA1BkqRu5/3VLnfSH3QPUSyReBiQTEZtmRNg55XjQQpkf8hVMGCoLILIgRU4QuaDLDU0ewBUtJPABdqs/gQobhO0cVboT8Ez6KVRqvgPWIhO7t5n7zgAAAABJRU5ErkJggg=="); }




.button_navPoint8                { position: absolute; border: none; margin: none; padding: none; left:     47px; top:    322px; width:     24px; height:     24px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAHtJREFUKJGdkuEKwCAIhEWIgvD9X3fmLTjLH2N3MKxr7gsnIu2WiZT7kfhToVSZB2qjL68lKkVgY4ZXgGq+wYQalwj2MXoZraJxtOr7cxF0qHGJ4KQaH6n8ZjUVOVORMxUpU5EzFTlTkf5S3VgxQS1nrj70KtH4TfSW7z8RJRAutiw4iAAAAABJRU5ErkJggg==");        }
.button_navPoint8:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAEpJREFUKJHVkjEOACAIA5s6MPH/71rBAQMf8AYC3EQKgNVxYNyHUWXydC5Bt+CM2THFnYqwH4Qum0XhS9FNJMgxcyr0yTDehB3tNwfjDOFEFNvsAAAAAElFTkSuQmCC");  }
.button_navPoint8:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAF1JREFUKJHNkksKADEIQ52AFATvf91GnUU/HqAuguaRRUlF5LvHRVo/CRU12+YE8GHD1OJUix0FPFzeAaz2H9iZ0IcSfFmfWHRPLPpyguRIZINoOwdL7wjym+Ae+hOSZAyz8UQvcQAAAABJRU5ErkJggg==");  }
.button_navPoint8:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAEpJREFUKJHVkjEKADAIA0Ogm/7/u021g0U/0BtEvUkigNVxYNyHUWXydC5Bt+CM2THFnYqwH4Qum0XhS9FNJMgxcyr0yTDehB3tNxz1E+NSwuCnAAAAAElFTkSuQmCC"); }




.button_navPoint9                { position: absolute; border: none; margin: none; padding: none; left:     74px; top:    322px; width:     24px; height:     24px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAHtJREFUKJGdklEKACEIREVYCsL7X3fVstbJr/VjkHkwDBkRPfcIUek7UWWYSdSX1voYPfQJIMczNTfAl5jfF4AcMXUAOboHyDnOZ1TO0R1b7R1bMa+9aBWZ2Opk5landW61tXyrqtXWv61u4ofi8uasR68I+zfBv6Cj/gsCGxA6lMjRmQAAAABJRU5ErkJggg==");        }
.button_navPoint9:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAFlJREFUKJHV0jEOwDAIQ1HLGZi4/3VLSCO1sXuAMmT4T5kAwNBJwPaWennMkuoZrxkbtKeD2cNAdwOrK9xdYHcDGRbID3h+/R+o9KJod85auhP2mZy3UFP9Ag37DOf58rsAAAAAAElFTkSuQmCC");  }
.button_navPoint9:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAGhJREFUKJG9kuEKAEEEhFFSW97/dU977G3G71M2fdOaBBExhhONfCvxSotXCe62TL/kEpB7CsCtfnSuKQA38Ei+ukdx8Dh19xDJepxj8rh79jlmj5P/ebAiD0HGnUssfVJkn0m/hYjgD4pFC7c2Rc3RAAAAAElFTkSuQmCC");  }
.button_navPoint9:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAFlJREFUKJHV0jEOwDAIQ1HLUja4/3VLSCO1sXuAMmT4T5kAwNBJwPaWennMkuoZrxkbtKeD2cNAdwOrK9xdYHcDGRbID3h+/R+o9KJod85auhP2mZy3UFP9AjpfE/cUoRJOAAAAAElFTkSuQmCC"); }




.button_navPoint4                { position: absolute; border: none; margin: none; padding: none; left:     20px; top:    349px; width:     24px; height:     24px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAFlJREFUKJHNkjsKwEAIRIeB4MLi/a+7rgkR1CJVWAuL95jCD4CrlgItd2OdudwY1zHnEInOWxQu8ggp5r9ETJUSIb4m3k3kxKGTa+Um2N6cdvTO0N+k/AI3X5l5D8uxsi5AAAAAAElFTkSuQmCC");        }
.button_navPoint4:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAEtJREFUKJHNkjEOADAIAgkdnPz/d2tp0ibq1qUMDtyEAGBUOdD6InGZJRK+WxI3KL7ZB+CmegbnExl8mrwQNci2c0bpHaFmUrbA5U+mnwx+jxDSHAAAAABJRU5ErkJggg==");  }
.button_navPoint4:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAGNJREFUKJFjYGBgxAS8DAxYxcEyQJIJHYBlgOK87FyokAkigSHOzgWV4GJFhwR1YMhAJTBMIqQD4Ss0OxASaK7CqQMeErwUu4oeYYVpFjgGmbDGORMw0rHJMIGTCUZaYAKJAwBlfwxQnhXH4wAAAABJRU5ErkJggg==");  }
.button_navPoint4:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAEtJREFUKJHNkjEOACAIA5smbvD/74o10QTYXOzA0JtKC2BUOdD6InGZJRK+WxI3KL7ZB+CmegbnExl8mrwQNci2c0bpHaFmUrbA5U/uUROAe0MaRAAAAABJRU5ErkJggg=="); }




.button_navPoint5                { position: absolute; border: none; margin: none; padding: none; left:     47px; top:    349px; width:     24px; height:     24px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAHtJREFUKJGFklEKACEIREUQg+j+112zdDdNtg+reWGTBgCUxwC46kokYhxKRB/MrffGbDMuMOZ6KRYNmOZ0A9/7iQ1CHokGTHNqqaKrdrqi18fpir5nfsDaSS1CqvLy0m75wLIkZRGrslNqlHYQrz1HafqNoH6T9Bdw6g8y1xBO/4rP9QAAAABJRU5ErkJggg==");        }
.button_navPoint5:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAE1JREFUKJHNkjEOACAIA5s6MPH/74q4GMrmoB0I6U3QAhgqB1o/SUxWJQnfrYgbiG/2ERjnegfiFz14eqAAJZkg28wZoXeEWRPpApc/AT1ZDPwDVxTzAAAAAElFTkSuQmCC");  }
.button_navPoint5:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAHVJREFUKJGlUosKwCAIVCGEwP//3blbW2U5BlOM8M7MBxHxKka09QPxU6IAcb9p1TKaXIAN3nZrQOC73RGBr6UBkV/0bw7unDkH91fnHAwO9ImAei8sqaO+/CqrI6s869XXHGsXMUHZzlx86DtEsCbLLsjpPwDX6QvYTjfT3QAAAABJRU5ErkJggg==");  }
.button_navPoint5:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAE1JREFUKJHNkjEOACAIA5smbvD/74q4GMrmoB0I6U3QAhgqB1o/SUxWJQnfrYgbiG/2ERjnegfiFz14eqAAJZkg28wZoXeEWRPpApc/AdBTFD6XRmNYAAAAAElFTkSuQmCC"); }




.button_navPoint6                { position: absolute; border: none; margin: none; padding: none; left:     74px; top:    349px; width:     24px; height:     24px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAFlJREFUKJHNkjsKwDAMQ4UgOBB8/+vWdQtNIkPH1oOH99DgD4Cm5UDJ00TnXmmCex+jmz2dlxBudgsT80VimXBO7OI9Me3kv5M3Vx6C5c0ZR68M803kF3jyA7O7D9v+9qzNAAAAAElFTkSuQmCC");        }
.button_navPoint6:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAEpJREFUKJHNkiEWADAIQnksmLz/dedY2dS2MoKBnxAAjCoHWl8kLrNEwndL4gbFN/sKXAnfwPGTjwImUIlysO2cUXpHqJmULXD5E61xDH7AWtQyAAAAAElFTkSuQmCC");  }
.button_navPoint6:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAGRJREFUKJFjYGBgxAS8DAxYxcEyQJIJHYBlgOK87FyokAkigSHOzgWV4GJFhwR1YMhAJTBMIqgDiY/kQ2RXoUvg1gH3MSJMKHUV7cIK0yywP5iwxjkTMNKxyTCBkwlGWmACiQMAcd0MUiuAiyAAAAAASUVORK5CYII=");  }
.button_navPoint6:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAEpJREFUKJHNkrESACAIQjnu2vT/fzejpdStJQYH3oQAYFQ50PoicZklEr5bEjcovtlX4Er4Bo6ffBQwgUqUg23njNI7Qs2kbIHLn/lbE4BEr1ofAAAAAElFTkSuQmCC"); }




.button_navPoint1                { position: absolute; border: none; margin: none; padding: none; left:     20px; top:    376px; width:     24px; height:     24px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAHVJREFUKJGlkssKQCEIREWIgvD/fzezl9dxd1u4mAPTISOigkeI0tyITo7HiObSe6u1vckLiM/WPADIBg3IBh3IAUBOFZCfVr7TWxXf6azmk0liZXliZXli9e15VqHnWsWeaxV75t0KON0569IzwvZN4C/wzAcSwxAHQiCm/QAAAABJRU5ErkJggg==");        }
.button_navPoint1:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAFhJREFUKJHV0jsWwCAIRFHOUFC5/+2KJP4YsoBQWLxrpYiI8jSRsof4iTwh3pulwQPUzf4M540T9AP0epoNd9+Q+oLcJ1B/gfsC7g4o/xz+6ZUg1oR2AaN3Hx8MvmyNHCMAAAAASUVORK5CYII=");  }
.button_navPoint1:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAGpJREFUKJG9ksEKACEIRE2QIPD/f3fNtXIbzxvU4T10ICWihkeJSu7GXr6PG+Mqo498+RXAZYQA3kMA3xXQ6/eM3DNntNwzZcwv0yLjy0/GxXfFzVcG8KhALksgN8HlzNmGXhn2NYFd4Mkf0qAMbi4JsaAAAAAASUVORK5CYII=");  }
.button_navPoint1:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAFlJREFUKJHV0jsSwCAIRVHmzdDh/rcrkvjjkQWEwuIeK0VElKeJlD3ET+QJ8d4sDR6gbvZnOG+coB+g19NsuPuG1BfkPoH6C9wXcHdA+efwT68EsSa0Cxi9A45nE7CZ8RjgAAAAAElFTkSuQmCC"); }




.button_navPoint2                { position: absolute; border: none; margin: none; padding: none; left:     47px; top:    376px; width:     24px; height:     24px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAHBJREFUKJGlkuEKwCAIhEU4DEbv/7prLenUfm0KIR56H5iIoEYXOfanMl7NMZXR75ZCX6E3y7mEq+V0oYSvKiNLKBa+KkOZ/aUCl0yFPRypsO0iFbhkKvAwU4HtvlG5SaxEjzfXcfSTovOblL+gT/8GDmkQLm845TgAAAAASUVORK5CYII=");        }
.button_navPoint2:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAEVJREFUKJHVkjEOADAIAgkOTv7/u7U2TVr1AzIY5EYAIFUGtHkQv8wK4rlpEg8ouepoIK8dCO77O7DtnF56RxgzKVvgzhc0tgzh2N0EUQAAAABJRU5ErkJggg==");  }
.button_navPoint2:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAFVJREFUKJHVkkEKADEIA9PAIgj+/7ur6cLS1g/UQw4ZcpAEwDgvgNYXSeV+IumH+ePmv3KCWN3SD/iesBsS9W+bKHBBQmRJqEG2nTNL7wg1k2MLLP8FGFoMszQAjlsAAAAASUVORK5CYII=");  }
.button_navPoint2:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAEVJREFUKJHVkjEKADAIA0PATf//3VpLoVU/YAaJuTEBIFUGtHkQv8wK4rlpEg8ouepoIK8dCO77O7DtnF56RxgzKVvgzhezQBPjxo9F4wAAAABJRU5ErkJggg=="); }




.button_navPoint3                { position: absolute; border: none; margin: none; padding: none; left:     74px; top:    376px; width:     24px; height:     24px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAHNJREFUKJGlkkEKwDAIBGUhRAj9/3ebamzB3VtzkDADsqhmNvhdZpKH2RX9hdn8mr6Wz68iBXGfRxAvQdxLdL6qVecliPv/VO+/pxqVpKeKIclUYWQqZDeRKrupWYWRs8JZ4aCZIAXkzrGXrgziTOgW8PAbFwAQBxw/4LYAAAAASUVORK5CYII=");        }
.button_navPoint3:focus          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAFtJREFUKJHV0jESwCAIBMCbs6Di/98NQUzh3QdC4ShbgAMAlkYCNt9SJ+9oqXzGFdwg+Yifw3dXmMcNPCI1jmjxEdPVFtdui/0HZ4TLS4J25qyhO2GviewC3/wDIsMMvlwJ5/IAAAAASUVORK5CYII=");  }
.button_navPoint3:hover          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAGpJREFUKJHFklEKwCAMQ2tgCELvf91pbcdm8r9CRfLQEFoza1xuJvUg88RZQabuffTr3djAv+rqBINIvSCSgH7qf3g899OjFTk9UIQ8inCOJCLHJipHEJkDOcKmiRvkzDGHrghiTWgXsPQbxD8LhOJ6Z8oAAAAASUVORK5CYII=");  }
.button_navPoint3:active         { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAFtJREFUKJHV0jEOwDAIA0DLUjb4/3dLCekQ+wNliBJugAgALI0EbL6lTt7RUvmMK7hB8hE/h++uMI8beERqHNHiI6arLa7dFvsPzgiXlwTtzFlDd8JeE9kFvvkHlsETsNxJIpoAAAAASUVORK5CYII="); }




.button_navPoint7                { position: absolute; border: none; margin: none; padding: none; left:     18px; top:    160px; width:     24px; height:     24px; }
.button_navPoint8                { position: absolute; border: none; margin: none; padding: none; left:     45px; top:    160px; width:     24px; height:     24px; }
.button_navPoint9                { position: absolute; border: none; margin: none; padding: none; left:     72px; top:    160px; width:     24px; height:     24px; }

.button_navPoint4                { position: absolute; border: none; margin: none; padding: none; left:     18px; top:    186px; width:     24px; height:     24px; }
.button_navPoint5                { position: absolute; border: none; margin: none; padding: none; left:     45px; top:    186px; width:     24px; height:     24px; }
.button_navPoint6                { position: absolute; border: none; margin: none; padding: none; left:     72px; top:    186px; width:     24px; height:     24px; }

.button_navPoint1                { position: absolute; border: none; margin: none; padding: none; left:     18px; top:    213px; width:     24px; height:     24px; }
.button_navPoint2                { position: absolute; border: none; margin: none; padding: none; left:     45px; top:    213px; width:     24px; height:     24px; }
.button_navPoint3                { position: absolute; border: none; margin: none; padding: none; left:     72px; top:    213px; width:     24px; height:     24px; }

.button_cycleColourLeft          { position: absolute; border: none; margin: none; padding: none; left:     18px; top:    240px; width:     78px; height:     23px; }
.button_cycleColoursRight        { position: absolute; border: none; margin: none; padding: none; left:     18px; top:    266px; width:     78px; height:     23px; }






.button_readButtonBack           { position: absolute; border: none; margin: none; padding: none; left:     16px; top:     92px; width:     87px; height:     42px;
                                   background-image: url("data:image/gif;base64,R0lGODdhVwAqALMAAAAAAAD/ABAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4ACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJMgAAACwAAAAAVwAqAAAEghDISau9OOvNu/9gKI5kaZ5oqq5sxrxwLDNtzc04bO9YnvNAig8XLA5nxeBRlgQuY03eUxe1TV9V6zVbu9K4LC84vB2rxOYUOn1as0vu9yguD9Hrnzu+o99v+n4uZYF5g4R8hod/iYqCU42Ij5CLkpOOT5YagJabk52Qn5mio6SlIxEAIfkECTIAAAAsAAAAAAEAAQAABAIQRAA7");        }
.button_readButtonBack:focus     { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAqCAMAAADxqjdBAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAGxJREFUSInt1zsSwCAIBFC24P5XTpeABFcLG2e3c4Tnp8PsYBBjzpLra142n+HkFg7MC/DDlmXfRwrGqn23/gPkyiXufuTKlStXrtyw3RbKlXufS+AFt+uZNXxjDB1X6gXGh6RHLY9X4R/O5QGpqgPvMpKWnQAAAABJRU5ErkJggg==");  }
.button_readButtonBack:hover     { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAqCAMAAADxqjdBAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAUdJREFUSInNl9kOhDAIReGh///Lk6lKWQuokwyJ++XQ0ooW4IeG3GBkJvXWCCtjjKQVA3EvQHEYgy5rfongUvlcIalyp+IBV6bT49KQHFzEkz/9DmekgIvU5U7kajrCCiObn3FNHgKuSdN/cI/unvtzRzlvcm9Zn4vhJKpzL8Ii2bfdxDHlIOQynS4jJo5TZpw86HIkeAAiMuj7Gy5wopBLLqB6XuKSUKWVO/Dor3OxzyX1buDCsF2uvbzNFTI1T57kwXDZk0f5VRwxr+Qwl7ne6yB4ZlgbXO5nODWuVWi3JjjkBnWS3ytwXzfLNT9R6Jw5sj/jamGZ+/0az20dDmckJe5kAXcAiS7tgPn/QxXmexbLWtyTt+ZTLLvBTdvbyO/sXJ7fJYu4ofnzITHkPd1xc53js3NYy5h0uWIbgBuD8vJqU4fesw9QMQb917FsGAAAAABJRU5ErkJggg==");  }
.button_readButtonBack:active    { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAqCAMAAADxqjdBAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAWdJREFUSInNl+sOgyAMhbUJP0ia+P5vO0HAXijQ6ZKdbOrw9CurbNotnjreVUJuCRuojn0m7tc6Lu4RkCiEHcfaQxgbEnhr2BjLKCJM4iaJE3hrs+1zoW0c3BP8iAtZI24sKtxkzq8cdwWXMTZfLzcjy77Mt6bhdZhxVR0Mbt7/Hzeb67ZsWs2d3K/k54K5iNa5lXCT4JaVRxpsLvGBAKs8OnGvDiA4jIfIMqMcH3CREpmdcxHE+SVuM4qykgCW/XUu+LnNPbpwZlovV3/8mkttcp08qYPikjOP6is4bF3xy7zM7f0cGE9dVgeXxinOGlc7ZJgTbHKN/0k6tsB9XZoblaVz1LH9GVc8Nqxz0904v+/dFVxo5TZs2gxuxGaq3oj5+afOEtKRbXNxr/nW5WRy3fMldRjN11Hf/OXm9b1tFtdUfz1MdHLjBNxfvzOs7lukpbUx+7ShIdhOnyWbpuX2SvZZP+kLP+zRih/UIZarAAAAAElFTkSuQmCC"); }






#buttonWordList            { position: absolute; border: none; margin: none; padding: none; left:    102px; top:    296px; width:     77px;
height:    128px; outline-offset: -4px;

background-color: transparent;
font-size: 8.5px;
padding: 2px;
border-radius: 0px;
text-align: center;
}
#buttonWordList:focus      { background-colour: white; }

.button_popColours               { position: absolute; border: none; margin: none; padding: none; left:     21px; top:    297px; width:     73px; height:     33px; outline-offset: 1px;
                                   background-color: transparent; border-radius: 2px; }
.button_popColours:focus         {  }
.button_popColours:hover         { outline: 2px dotted lime; }
.button_popColours:active        { outline: 2px dotted magenta; }
.button_popButton                { position: absolute; border: none; margin: none; padding: none; left:     21px; top:    339px; width:     73px; height:     33px; outline-offset: 1px;
                                   background-color: transparent; border-radius: 2px; }
.button_popButton:focus          {  }
.button_popButton:hover          { outline: 2px dotted lime; }
.button_popButton:active         { outline: 2px dotted magenta; }
.button_ringButton                { position: absolute; border: none; margin: none; padding: none; left:     20px; top:    380px; width:     75px; height:     43px; outline-offset: 1px;
                                   background-color: transparent; border-radius: 70px;


font-size: 12px;
color: transparent;


}
.button_ringButton:focus          {  }
.button_ringButton:hover          {

color: lime;
text-shadow:
-1px -0px 0px black,
-0px -1px 0px black,
-0px -0px 0px black,
-1px -1px 0px black,
 1px -0px 0px black,
-0px  1px 0px black,
-0px -0px 0px black,
 1px  1px 0px black;


}
.button_ringButton:active         {

color: magenta;
text-shadow:
-1px -0px 0px black,
-0px -1px 0px black,
-0px -0px 0px black,
-1px -1px 0px black,
 1px -0px 0px black,
-0px  1px 0px black,
-0px -0px 0px black,
 1px  1px 0px black;

}




.navUpscale         {
position: absolute;
border: none;
margin: none;
padding: none;
letter-spacing: 4px;
left: 43px;
top: 447px;
width: 47px;
height: 27px;
background-color: transparent;
font-size: 32px;
color: lime;
}





.navAlphabet               { position: absolute; border: none; margin: none; padding: none;
left:    103px;
top:     431px;
width:    75px;
height:   22px;
outline-offset: 1px;
background-color: transparent;
border-radius: 2px;
}
.navAlphabet:focus         {  }
.navAlphabet:hover         { outline: 2px dotted lime;    }
.navAlphabet:active        { outline: 2px dotted magenta; }





.navNumber               { position: absolute; border: none; margin: none; padding: none;
left:    103px;
top:     459px;
width:    75px;
height:   21px;
outline-offset: 1px;
background-color: transparent;
border-radius: 2px;
}
.navNumber:focus         {  }
.navNumber:hover         { outline: 2px dotted lime;    }
.navNumber:active        { outline: 2px dotted magenta; }














.input_buttonTooltip             { display: none; position: absolute; border: none; margin: none; padding: none; left:      0px; top:    328px; width:    152px; height:     16px; resize: none; padding: 2px; border-radius: 2px; outline: 2px solid grey; text-align: center; }
.input_buttonTooltip:hover  { outline: 2px solid cyan;    }
.input_buttonTooltip:active { outline: 2px solid magenta; }
.input_buttonTooltip:focus  { outline: 2px solid lime;    }

.input_buttonLink             { display: none; position: absolute; border: none; margin: none; padding: none; left:      0px; top:    358px; width:    152px; height:     16px; resize: none; padding: 2px; border-radius: 2px; outline: 2px solid grey; text-align: center; }
.input_buttonLink:hover  { outline: 2px solid cyan;    }
.input_buttonLink:active { outline: 2px solid magenta; }
.input_buttonLink:focus  { outline: 2px solid lime;    }


</style>
`;
