shelfMenuHTML.tab4.folder2.style = `
<style>

.button_clip:hover  { background-color: rgba(  0,255,  0,0.35); }
.button_clip:active { background-color: rgba(255,  0,255,0.35); }

.button_clipCSS {
position: absolute;
border:  none;
margin:  none;
padding: none;
left:    30px;
top:     76px;
width:   43px;
height:  22px;
}

.button_clipHTML {
position: absolute;
border:  none;
margin:  0px;
padding: 0px;
left:   78px;
top:    76px;
width:  50px;
height: 22px;
}

.button_clipCODE {
position: absolute;
border:  none;
margin:  none;
padding: none;
left:  133px;
top:    76px;
width:  57px;
height: 22px;
}

.button_textFlow {
position: absolute;
border:  none;
margin:  none;
padding: none;
left:   14px;
top:   358px;
width: 172px;
height: 24px;
}

.button_save200                  { position: absolute; border: none; margin: none; padding: none; left:     13px; top:    111px; width:    174px; height:     26px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABtJREFUWIXtwTEBAAAAwqD1T20ND6AAAAAA+DcRxgABfkW4HwAAAABJRU5ErkJggg==");        }
.button_save200:focus            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABtJREFUWIXtwTEBAAAAwqD1T20ND6AAAAAA+DcRxgABfkW4HwAAAABJRU5ErkJggg==");  }
.button_save200:hover            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAaxJREFUWIXVl8uShSAMRMPamv//3Tuiku5OeNRcFiOWpRAhh05ANbPymmJ20h4vKSfvSfvzilJ5K63tKxQ5rEE4zxuNsvfhkVq18v7ibqXFpQC1+7Y9YbxkyJzO++KtuFsgyY25WuCRca0ZUlzv3pq+wJVIlaOgJcF23CLXe64R1yRFGFcJJAMxsBJGOEk0SllTGVO+XlVxmYCristpV5U9msILuCt8U1zQkULpfcGIY56cpeXDDLdswo12BIxzgIajHtwlwbWrYYkv4aHcxVRIcEtYROYsDy1NJsUlrYdyRpxsqREJ5gbjejnoGG1kopm7GuBiq25kbkee28SysV3V5YkybuTJcaPCjiuDR2lkYBEizV3w2KuM1I09Orgi5BS3szP0cFdyNw0OJMMMl99OvJg6+27ExTlPlhrJ1MN9hovJoG6xCc8JrgjwZ9wk8akhCCMN8Zsh4jYJ1nHJyfCbgZuKWPXhfK9SXLL3cVsQ2MvGD0jmS3F7V5PXizloiruVlz2AS8oz3bylzj0f2gt3K6/mdKtLWk1xQ77dPz/v+rW0d/24h0+Af1zMPoMFK2p6/G9DAAAAAElFTkSuQmCC");  }
.button_save200:active           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAbJJREFUWIXVl8GOwyAMRC2t1Av8//e2kBTPjE2IdjlskKoADvgxNpSYWX1MMWu0Pw8pjbfRvh5ROm+ntX2FIoctCGeraJR9DM80mp33g7uVFrcCtM7qeMN4y5A5XffB23F3QBZyY64WeGRcG4YU14ePrj/gSqRKLWhJsB23yvNTy3FNUoRxhUAzEAPLYSzwI9EoZU1lTPlmTcVlAm4qLqddV7YOhW/g3uFb4oKOFEofC0acs3HWkQ8r3LoJN9oRMK7Ba6UzFR6S4NrRcYsv4aHcxVRIcGvYRGetmDMVW+GS1pdyRpxsqyGJtwMulAK1cnWQiWbu6gIXe/UgczvinCaWDWgTdXmhjBt5ctyosOPK5FEamZhnznMXPM4aV+rGERNcEXKJOzkZZrh3cjcNDiTDChfHiXV27kZcXPNiq5FMM9zvdDEZ1C12Tf7VsnEiwK9xk8SnjiAMdyR3hog7JLiPS04u7wzcVcWqL4cbWYpL9jnuCAJ72XiBZL4Ud/Y8+IyXpdEF3K287AFcUp7p4S1tHvmlPXC38ooTdypptcQN+XZ+/Dzr09Ke9eEebiz/uJi9AaKHWQJZif+VAAAAAElFTkSuQmCC"); }




.button_save300                  { position: absolute; border: none; margin: none; padding: none; left:     13px; top:    141px; width:    174px; height:     26px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABtJREFUWIXtwTEBAAAAwqD1T20ND6AAAAAA+DcRxgABfkW4HwAAAABJRU5ErkJggg==");        }
.button_save300:focus            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABtJREFUWIXtwTEBAAAAwqD1T20ND6AAAAAA+DcRxgABfkW4HwAAAABJRU5ErkJggg==");  }
.button_save300:hover            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAF5JREFUWIXt2LEJwDAQQ1F1gRTef1znhAdwI8IH/QleeTpJDyZptC+k8Y52IbLXWgGy9+MytPaa+7fjtnKTlZus3GTlJis3WbnJyk3G5EK85zyHeM/4YU1L2HBnvUU2weMuxViaIzoAAAAASUVORK5CYII=");  }
.button_save300:active           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAF5JREFUWIXt2MEJwDAQA0FBIC/3X69zwgX4I8KCtoJ5nk7SwiSN9oE03tG+iOy1VoDs/bgMrb3m/u24rdxk5SYrN1m5ycpNVm6ycpMxuRDvOc8h3jN+WNMSNtxZb5ENpfYgBZxvS4EAAAAASUVORK5CYII="); }




.button_save500                  { position: absolute; border: none; margin: none; padding: none; left:     13px; top:    171px; width:    174px; height:     26px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABtJREFUWIXtwTEBAAAAwqD1T20ND6AAAAAA+DcRxgABfkW4HwAAAABJRU5ErkJggg==");        }
.button_save500:focus            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABtJREFUWIXtwTEBAAAAwqD1T20ND6AAAAAA+DcRxgABfkW4HwAAAABJRU5ErkJggg==");  }
.button_save500:hover            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAJdJREFUWIXlmMEKwDAIQ3PX///eVedgt+4QHaGB7hjfgrS1AFxGQNCaiII3aP9O7ZuS9/4KKHkXrgZt8iYuxYthsqtBwyX99L4IoZC/Vqc4uOlgAwmz0g2bgX5g9e7ysIHupeA6ihfd3cvArWRtIOED0y0fmd5V2xnk9l0onWqPU7uOvZGNyBWv5yK8NfxojZZig7vWs8gFjpU47MfcvRIAAAAASUVORK5CYII=");  }
.button_save500:active           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAJdJREFUWIXlmEEKwDAIBIVCLvr/9zZKW3rrZRWGDuQaBlmixswCg1naHhDSN20XgvItWwNQvluXYVu+pau4yxWXfKDT9RjwFen663Si0a3KxkCFVdXdnjGQB1V2vXpOe3oluml5t8heY4XuzsDT05vz8MPqJqTs0l4G3LtrpK6WkGaGhDWRjbCI4znE91p+WKslbHFnfYucN1oj2YeFu1kAAAAASUVORK5CYII="); }




.button_save800                  { position: absolute; border: none; margin: none; padding: none; left:     13px; top:    201px; width:    174px; height:     26px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABtJREFUWIXtwTEBAAAAwqD1T20ND6AAAAAA+DcRxgABfkW4HwAAAABJRU5ErkJggg==");        }
.button_save800:focus            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABtJREFUWIXtwTEBAAAAwqD1T20ND6AAAAAA+DcRxgABfkW4HwAAAABJRU5ErkJggg==");  }
.button_save800:hover            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAF5JREFUWIXt2LEJwDAQQ1F1gRTef1znhAdwI8IH/QleeTpJDyZptC+k8Y52IbLXWgGy9+MytPaa+7fjtnKTlZus3GTlJis3WbnJyk3G5EK85zyHeM/4YU1L2HBnvUU2weMuxViaIzoAAAAASUVORK5CYII=");  }
.button_save800:active           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAF5JREFUWIXt2MEJwDAQA0FBIC/3X69zwgX4I8KCtoJ5nk7SwiSN9oE03tG+iOy1VoDs/bgMrb3m/u24rdxk5SYrN1m5ycpNVm6ycpMxuRDvOc8h3jN+WNMSNtxZb5ENpfYgBZxvS4EAAAAASUVORK5CYII="); }




.button_save1000                 { position: absolute; border: none; margin: none; padding: none; left:     13px; top:    231px; width:    174px; height:     26px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABtJREFUWIXtwTEBAAAAwqD1T20ND6AAAAAA+DcRxgABfkW4HwAAAABJRU5ErkJggg==");        }
.button_save1000:focus           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABtJREFUWIXtwTEBAAAAwqD1T20ND6AAAAAA+DcRxgABfkW4HwAAAABJRU5ErkJggg==");  }
.button_save1000:hover           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAJlJREFUWIXlmDEOgDAMxJKB/P/JNKEDEzBcg6xagrGyTqeSYGaBwSxtDwjpm7Z/p/aN8r3eAMp36DJsy7d0FWe54pAXdLoeDb4iXb89K9HoVrLRkLAq3eHpDX1QdXeYRkN7JbrV2mm71lihO5ONhoQ3TDchdffWB4XTA5veu0b6qiWkmSFhTWQtBHE8h/jO5Ye1WsIWd9ZvkRPHzRq3GDaZQgAAAABJRU5ErkJggg==");  }
.button_save1000:active          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAJdJREFUWIXlmEEKwDAIBIVCLvr/9zZKW3rrZRWGDuQaBlmixswCg1naHhDSN20XgvItWwNQvluXYVu+pau4yxWXfKDT9RjwFen663Si0a3KxkCFVdXdnjGQB1V2vXpOe3oluml5t8heY4XuzsDT05vz8MPqJqTs0l4G3LtrpK6WkGaGhDWRjbCI4znE91p+WKslbHFnfYucN1oj2YeFu1kAAAAASUVORK5CYII="); }




.button_save1200                 { position: absolute; border: none; margin: none; padding: none; left:     13px; top:    261px; width:    174px; height:     26px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABtJREFUWIXtwTEBAAAAwqD1T20ND6AAAAAA+DcRxgABfkW4HwAAAABJRU5ErkJggg==");        }
.button_save1200:focus           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABtJREFUWIXtwTEBAAAAwqD1T20ND6AAAAAA+DcRxgABfkW4HwAAAABJRU5ErkJggg==");  }
.button_save1200:hover           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAF5JREFUWIXt2LEJwDAQQ1F1gRTef1znhAdwI8IH/QleeTpJDyZptC+k8Y52IbLXWgGy9+MytPaa+7fjtnKTlZus3GTlJis3WbnJyk3G5EK85zyHeM/4YU1L2HBnvUU2weMuxViaIzoAAAAASUVORK5CYII=");  }
.button_save1200:active          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAF5JREFUWIXt2MEJwDAQA0FBIC/3X69zwgX4I8KCtoJ5nk7SwiSN9oE03tG+iOy1VoDs/bgMrb3m/u24rdxk5SYrN1m5ycpNVm6ycpMxuRDvOc8h3jN+WNMSNtxZb5ENpfYgBZxvS4EAAAAASUVORK5CYII="); }




.button_save1500                 { position: absolute; border: none; margin: none; padding: none; left:     13px; top:    291px; width:    174px; height:     26px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABtJREFUWIXtwTEBAAAAwqD1T20ND6AAAAAA+DcRxgABfkW4HwAAAABJRU5ErkJggg==");        }
.button_save1500:focus           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABtJREFUWIXtwTEBAAAAwqD1T20ND6AAAAAA+DcRxgABfkW4HwAAAABJRU5ErkJggg==");  }
.button_save1500:hover           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAF5JREFUWIXt2LEJwDAQQ1F1gRTef1znhAdwI8IH/QleeTpJDyZptC+k8Y52IbLXWgGy9+MytPaa+7fjtnKTlZus3GTlJis3WbnJyk3G5EK85zyHeM/4YU1L2HBnvUU2weMuxViaIzoAAAAASUVORK5CYII=");  }
.button_save1500:active          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAF5JREFUWIXt2MEJwDAQA0FBIB/3369zwgX4I8KCtoJ5nk7SwiSN9oE03tG+iOy1VoDs/bgMrb3m/u24rdxk5SYrN1m5ycpNVm6ycpMxuRDvOc8h3jN+WNMSNtxZb5EN5gAeeZBj5fcAAAAASUVORK5CYII="); }




.button_save1800                 { position: absolute; border: none; margin: none; padding: none; left:     13px; top:    321px; width:    174px; height:     26px;
                                   background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABtJREFUWIXtwTEBAAAAwqD1T20ND6AAAAAA+DcRxgABfkW4HwAAAABJRU5ErkJggg==");        }
.button_save1800:focus           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAABtJREFUWIXtwTEBAAAAwqD1T20ND6AAAAAA+DcRxgABfkW4HwAAAABJRU5ErkJggg==");  }
.button_save1800:hover           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAJZJREFUWIXlmDEKgEAMBFPZhPz/u15iCjst9iKDA1oew7KciWbmGMzS9oCQvmn7dWrvKN/rDaB8ly7DtnxLV3FWKA55QKcbPuAr0o3bsxONbiXrAwmr0l2eMdAHVXeXqQ+0V6JbrW3bvcYK3U7WBxL+YboJqbu0mwF37xrpq5aQZoaENZGN4MTxHOLbyw9rtYQt7qzfIidJDS6ISyU8mQAAAABJRU5ErkJggg==");  }
.button_save1800:active          { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAJZJREFUWIXlmEEKwDAIBIVCL/r/9zYrLfTWy0YYOpBrGGQxmohIDBGyPSDIV7YngvZt2wDQvkuXYdu+reu4Kx2XfODTzRrwNenm6+zEo9uVrYEKu6q7PGsgD67sZont6bXoyrJ1Y3d6HborA/WwOQ8/rK4gZZfWGXB9N0ivmiDNDII1kY1wEsdziO+9/LBWS9jizvoWuQB3ZCJN0y2QuQAAAABJRU5ErkJggg=="); }



.button_header0 {
position: absolute;
border:  none;
margin:  none;
padding: none;
left:   17px;
top:   394px;
width:  12px;
height: 12px;
}
.button_header1 {
position: absolute;
border:  none;
margin:  none;
padding: none;
left:   32px;
top:   394px;
width:  12px;
height: 12px;
}
.button_header2 {
position: absolute;
border:  none;
margin:  none;
padding: none;
left:   47px;
top:   394px;
width:  12px;
height: 12px;
}
.button_header3 {
position: absolute;
border:  none;
margin:  none;
padding: none;
left:   62px;
top:   394px;
width:  12px;
height: 12px;
}
.button_header4 {
position: absolute;
border:  none;
margin:  none;
padding: none;
left:   77px;
top:   394px;
width:  12px;
height: 12px;
}

.button_footer0 {
position: absolute;
border:  none;
margin:  none;
padding: none;
left:  111px;
top:   394px;
width:  12px;
height: 12px;
}
.button_footer1 {
position: absolute;
border:  none;
margin:  none;
padding: none;
left:   126px;
top:   394px;
width:  12px;
height: 12px;
}
.button_footer2 {
position: absolute;
border:  none;
margin:  none;
padding: none;
left:   141px;
top:   394px;
width:  12px;
height: 12px;
}
.button_footer3 {
position: absolute;
border:  none;
margin:  none;
padding: none;
left:   156px;
top:   394px;
width:  12px;
height: 12px;
}
.button_footer4 {
position: absolute;
border:  none;
margin:  none;
padding: none;
left:   171px;
top:   394px;
width:  12px;
height: 12px;
}

.headerText {
position: absolute;
border:  none;
margin:  0px;
padding: 0px;
outline: none;
resize: none;
font-size: 6px;
background: rgba(255,255,255,0.5);
left:   11px;
top:   409px;
width:  84px;
height: 79px;
}
.footerText {
position: absolute;
border:  none;
margin:  0px;
padding: 0px;
outline: none;
resize: none;
font-size: 6px;
background: rgba(255,255,255,0.5);
left:   105px;
top:   409px;
width:  84px;
height: 79px;
}

















</style>
`;

