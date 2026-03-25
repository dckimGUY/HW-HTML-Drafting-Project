shelfMenuHTML.tab6.folder2.style = `
<style>



.coordinates {
position: absolute;
border: none;
margin: none;
padding: none;
left: 11px;
top: 58px;
width: 160px;
height: 20px;
font-size: 18px;
background-color: transparent;
color: white;
}




.siteMap {
position: absolute;
border: none;
margin: none;
padding: none;
left: 6px;
top: 98px;
/*
width: 376px;
height: 728px;
*/
width: 0;
height: 0;
overflow: visible;
}

.siteMapInners {
position: absolute;
border: none;
margin: none;
padding: none;
left: 0px;
top: 0px;
background-color: transparent;
}


.shadowTree           { position: absolute; border: none; margin: none; padding: none; left:     0px; top:     463px; width:    200px; height:     37px;
background-color: transparent; z-index: 500;
                        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAlCAMAAAAwXFbwAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAcxJREFUWIXdmVuWhDAIRIX9L3qmfZEqIImtzhjz0TYmAS6P6DlO0zTJ8GOax397ccVYOXTwMZO8gGMheQPHh8SByJ4iKZL1JNzVl89laRAdFkS23xpIhCLPaqTVdS3iOyqIWFo2D8NmR5SHYeicCItwXlojgHD7OpCHF9U2Nq+WhtfzIB3pai7Bd40mw7YHlQcgiFLORnY6jN8BonZaJc1+A0g7qxbZr+u4+UCM/vPqkyA19d3jzSBlntvFOziI3fAOxHeafmSLyHwW1vQ1vpaJcoZXJXZ5LcaKri5QqXgOBKaqhiRdWgdJVbDYAVLJtrmlYFlBVFyDheoeuAEtvBTG4mUgvhbATXQ2kIyZY44x0ETsA+FIIiELqHrfaZKUkjRAOLWxeAlILfcY1ByE1cQgpBG2HQBxO2CKQZzZFCQ8Flyw7wSBGBII0l0EQrZTX5ulFdGZaQ8Sux6CYPf+MYii6QpIZe4ISKDw2Kkl4peTznppUUP7DT4sDAJniBfPgzj3ombHMyyYMxDekxhj8QhI1iXonZLckJTzs084o+R4xvEViCuEAiQ+jVAyFR0grjISp2aQyoMih3nWkPS7wlggsn/pGX685dvbL8QPR6Yu/3NaWi4AAAAASUVORK5CYII=");        }
.shadowTree:focus     { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAlCAMAAAAwXFbwAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAcxJREFUWIXdmVuWhDAIRIX9L3qmfZEqIImtzhjz0TYmAS6P6DlO0zTJ8GOax397ccVYOXTwMZO8gGMheQPHh8SByJ4iKZL1JNzVl89laRAdFkS23xpIhCLPaqTVdS3iOyqIWFo2D8NmR5SHYeicCItwXlojgHD7OpCHF9U2Nq+WhtfzIB3pai7Bd40mw7YHlQcgiFLORnY6jN8BonZaJc1+A0g7qxbZr+u4+UCM/vPqkyA19d3jzSBlntvFOziI3fAOxHeafmSLyHwW1vQ1vpaJcoZXJXZ5LcaKri5QqXgOBKaqhiRdWgdJVbDYAVLJtrmlYFlBVFyDheoeuAEtvBTG4mUgvhbATXQ2kIyZY44x0ETsA+FIIiELqHrfaZKUkjRAOLWxeAlILfcY1ByE1cQgpBG2HQBxO2CKQZzZFCQ8Flyw7wSBGBII0l0EQrZTX5ulFdGZaQ8Sux6CYPf+MYii6QpIZe4ISKDw2Kkl4peTznppUUP7DT4sDAJniBfPgzj3ombHMyyYMxDekxhj8QhI1iXonZLckJTzs084o+R4xvEViCuEAiQ+jVAyFR0grjISp2aQyoMih3nWkPS7wlggsn/pGX685dvbL8QPR6Yu/3NaWi4AAAAASUVORK5CYII=");  }
.shadowTree:hover     { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAlCAMAAAAwXFbwAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAxZJREFUWIXdWe2OozAMbEdq//X9X/dKQuwZ2yFcb6WlB9olgXzYHntsyu12u90f337e2vHbUvyUJu8rvvxommx6PF/ffTZNoh6bhrG1tX9dWpKwS4/tbzuaJm9EREZsHgdttfZlNNllwRYRPUKw3YuItGeAtJ7bjMv4H5p923/0SEeFyAuGhLUYmwuc2DFARwVdwhQjGZOO4GUQaXbF8KguWYVIxqT1rqNHj5Ih/yxGQnRgZJwr6bFL1S0NlDGCMjowxaPT3/GuOJjva4zjtCbEXAUiCIwl0ZH3MdZYWe8AUfPe9VoyB7x/hYhgAoqOiruw9jss5IPocdKHsY8jz0mIKCbj6YS7VlL6mkfWtXxwPu8GL8mslRnLs3zBXScQWWah4cHN1z/MVvPMTquP+rKS+AcQYTt9psWrziOMs0QhcY/xS4FI4p4TdcEBIwQ2G901Ir7qNApBPD50LJ7ZvmM2yWRVa786++wVh8nqGZllq2QuMzujkWzAa8fMr/uSLWRstFW4wnFmOV7CcOHdo0LkeTQjrB3G6b7sm5BnOLzCV2SvSCsuEdFIqXQ0f+GdbV9wD56RoiYDeWYtGeWeK7shR90UEa7HQu0AXyv5At9F0GeXgXums7PWaNF9f4/QFc8hwrmdvJ7j26OUduyHzTR/84h3DDGuxFpqGduJtLMIllp3johYkucVMWK2Eh8e2iP3HsKIGREUozx2gmVXiDAjEWtxfgw+FeJAMIiIKEskRF6ObFhR5v0FIsWMe44RsnrwixkiJb85IuITdrhVY05cI1LMEK8WREQaqz/niCgfCCIkwfADivGU248QmbypQ22YEVGeMu4MkpIvLhCh9ztd/yQiszpOogEFIoGTQzSx5rA3pAkikok8EotK9UQeSfWLxJsiUnPRffYM/BuVxl7km7uO+wCRohIrpCvrzHkPgWV9ryjlP9daVO/FqpyrF6uKzGaaZcoeUt7zvZL1oJ4xq5w6IoUmB7nnyb+dDCZMdw56u0RcrxujxnpojESxd/CSyfcR0ePy308e9qXn68//5dvbW4k/DU+j0peYnPcAAAAASUVORK5CYII=");  }
.shadowTree:active    { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAlCAMAAAAwXFbwAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAc5JREFUWIXdmdmShDAIRX2liv//3pl2I/cCSWx1xpiHtjEJcFiiVU7TNMnwY5rHf3txxVg5dPAxk7yAYyF5A8eHxIHIniIpkvUk3NWXz2VpEB0WRLbfGkiEIs9qpNV1LeI7KohYWjYPw2ZHlIdh6JwIi3BeWiOAcPs6kIcX1TY2r5aG1/MgHelqLsF3jSbDtgeVByCIUs5GdjqM3wGidlolzX4DSDurFtmv67j5QIz+8+qTIDX13ePNIGWe28U7OIjd8A7Ed5p+ZIvIfBbW9DW+lolyhlcldnktxoquLlCpeA4EpqqGJF1aB0lVsNgBUsm2uaVgWUFUXIOF6h64AS28FMbiZSC+FsBNdDaQjJljjjHQROwD4UgiIQuoet9pkpSSNEA4tbF4CUgt9xjUHITVxCCkEbYdAHE7YIpBnNkUJDwWXLDvBIEYEgjSXQRCtlNfm6UV0ZlpDxK7HoJg9/4xiKLpCkhl7ghIoPDYqSXil5POemlRQ/sNPiwMAmeIF8+DOPeiZsczLJgzEN6TGGPxCEjWJeidktyQlPOzTzij5HjG8RWIK4QCJD6NUDIVHSCuMhKnZpDKgyKHedaQ9LvCWCCyf+kZfrzl29svxA9DuDnqE/ozGwAAAABJRU5ErkJggg=="); }



</style>
`;

