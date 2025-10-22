const defaultUIshelf = `
<div style="position: fixed; top: 0px; right: 0px; width: 404px; height: 1098px; transform-origin: top right; transform: scale(1); z-index: 2;">

<style>
.hdub-btn {
	cursor: pointer;
	border: none;
	border-radius: 6px;
	outline-offset: -3px;
	background-color:
	transparent;
	position: absolute;
}

.hdub-btn:hover {
	border: 3px dashed lime;
}

.hdub-btn:active {
	border: 3px dashed magenta;
}

.hdub-num {
	cursor: text;
	box-sizing: border-box;
	resize: none;
	border: none;
	color: black;
	font-size: 32px;
	text-align: right;
	padding-right: 32px;
	font-family: monospace;
	background-color:
	transparent;
	position: absolute;
}

.hdub-num:hover {
	border: 3px dashed lime;
}

.hdub-num:active {
	border: 3px dashed magenta;
}

.hdub-text {
	cursor: text;
	box-sizing: border-box;
	resize: none;
	border: none;
	color: black;
	font-size: 32px;
	background-color:
	transparent;
	position: absolute;
}

.hdub-text:hover {
	border: 3px dashed lime;
}

.hdub-text:active {
	border: 3px dashed magenta;
}

.hdub-feed {
	cursor: text;
	box-sizing: border-box;
	resize: none;
	border: none;
	color: white;
	font-size: 24px;
	background-color:
	transparent;
	position: absolute;
}

.hdub-feed:hover {
	border: 3px dashed lime;
}

.hdub-feed:active {
	border: 3px dashed magenta;
}

.hdub-select {
	color: transparent;
}

.hdub-select:focus {
	color: black;
}

.theImage {
	position: absolute;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	border: none;
}

.theTopImage {
	position: absolute;
	left: 0px;
	top: 0px;
	width: 404px;
	height: 66px;
	border: none;
}

.hdubShelf {
	position: absolute;
	cursor: default;
	top: 0px;
	left: 0px;
	width: 404px;
	height: 1098px;
}
</style>

<div class="hdubShelf">
	<div id="lowerShelf" class="hdubShelf" style="display: block;">
		<div id="folder1" class="hdubShelf" style="display: block;">
			<div id="folder11" class="hdubShelf" style="display: block;">
				<img class="theImage" src="iconSet/shelf-menu/folder-1-1.png" />
				<input    type="number" id="partTop"    class="hdub-num" style="left: 149px; top: 253px; width: 234px; height:  46px;" readonly />
				<input    type="number" id="partLeft"   class="hdub-num" style="left: 149px; top: 309px; width: 234px; height:  46px;" readonly />
				<input    type="number" id="partWidth"  class="hdub-num" style="left: 149px; top: 385px; width: 234px; height:  46px;" readonly />
				<input    type="number" id="partHeight" class="hdub-num" style="left: 149px; top: 441px; width: 234px; height:  46px;" readonly />
				<input    type="value"  id="partName"   class="hdub-text" style="left: 149px; top: 517px; width: 234px; height:  46px;" spellcheck="false" />
				<button                 id="notesLeft"  class="hdub-btn"  style="left:  41px; top: 569px; width:  79px; height:  67px;"></button>
				<button                 id="notesRight" class="hdub-btn"  style="left: 284px; top: 569px; width:  79px; height:  67px;"></button>
				<textarea               id="partNotes"  class="hdub-text" style="left:  21px; top: 642px; width: 362px; height: 435px;" spellcheck="false"></textarea>
			</div>
			<div id="folder12" class="hdubShelf" style="display: none;">
				<img class="theImage" src="iconSet/shelf-menu/folder-1-2.png" />
				<select             id="rssFeed"  class="hdub-feed hdub-select" style="left:  18px; top:  220px; width: 168px; height:  39px;">
					<option value="1">words</option>
					<option value="2">words</option>
				</select>
				<input type="value" id="feedName"          class="hdub-feed" style="left: 190px; top:  220px; width: 196px; height:  39px;" />
				<textarea           id="feedDescription"   class="hdub-feed" style="left: 190px; top:  260px; width: 196px; height: 107px;"></textarea>
				<input type="value" id="feedLink"          class="hdub-feed" style="left: 190px; top:  368px; width: 196px; height:  40px;" />
				<input type="value" id="feedLanguage"      class="hdub-feed" style="left: 190px; top:  409px; width: 196px; height:  39px;" />
				<input type="value" id="itemTitle"         class="hdub-feed" style="left: 111px; top:  518px; width: 275px; height:  39px;" />
				<input type="value" id="itemLink"          class="hdub-feed" style="left: 111px; top:  558px; width: 275px; height:  39px;" />
				<textarea           id="itemDescription"   class="hdub-feed" style="left: 111px; top:  598px; width: 275px; height: 165px;"></textarea>
				<button             id="feedGoButton"      class="hdub-btn"  style="left:  18px; top:  690px; width:  85px; height:  73px;"></button>
				<textarea           id="feedTextual"       class="hdub-feed" style="left:  18px; top:  824px; width: 368px; height: 202px;"></textarea>
				<button             id="feedCopyButton"    class="hdub-btn"  style="left:  18px; top: 1031px; width: 368px; height:  49px;"></button>
			</div>
			<button id="folder11button" class="hdub-btn" style="left:  12px; top: 158px; width: 188px; height: 56px;"></button>
			<button id="folder12button" class="hdub-btn" style="left: 204px; top: 158px; width: 188px; height: 56px;"></button>
		</div><!-- This is the minor wrapper -->

		<div id="folder2" class="hdubShelf" style="display: none;">
			<div id="folder21" class="hdubShelf" style="display: block;">
				<img class="theImage" src="iconSet/shelf-menu/folder-2-2.png" />
				<input    id="filenameEntrySaves" type="value" class="hdub-text" style="left: 24px; top: 253px; width: 356px; height: 51px;" />
				<button   id="saveSingleParticle" class="hdub-btn" style="left: 20px; top: 315px; width: 363px; height: 57px;"></button>
				<textarea id="headerEntry" class="hdub-text" style="left: 24px; top: 408px; width: 356px; height: 269px;"></textarea>
				<textarea id="footerEntry" class="hdub-text" style="left: 24px; top: 716px; width: 356px; height: 129px;"></textarea>
				<button   id="saveFullHTML" class="hdub-btn" style="left: 20px; top: 856px; width: 364px; height: 57px;"></button>
				<button   id="saveWithProgram" class="hdub-btn" style="left: 20px; top: 920px; width: 364px; height: 57px;"></button>
				<button   id="openFile" class="hdub-btn" style="left: 20px; top: 983px; width: 179px; height: 94px;"></button>
				<button   id="appendFile" class="hdub-btn" style="left: 206px; top: 983px; width: 178px; height: 94px;"></button>
			</div>
			<div id="folder22" class="hdubShelf" style="display: none;">
				<img class="theImage" src="iconSet/shelf-menu/folder-2-1.png" />
				<input id="filenameEntryLayers" type="value" class="hdub-text" style="left: 22px; top: 257px; width: 360px; height: 55px;">
				<button id="setLayer1"  class="hdub-btn" style="left:  70px; top: 352px; width: 48px; height: 48px;"></button>
				<button id="setLayer2"  class="hdub-btn" style="left: 124px; top: 352px; width: 48px; height: 48px;"></button>
				<button id="setLayer3"  class="hdub-btn" style="left: 177px; top: 352px; width: 48px; height: 48px;"></button>
				<button id="setLayer4"  class="hdub-btn" style="left: 231px; top: 352px; width: 48px; height: 48px;"></button>
				<button id="setLayer5"  class="hdub-btn" style="left: 285px; top: 352px; width: 48px; height: 48px;"></button>
				<button id="setLayer6"  class="hdub-btn" style="left:  70px; top: 406px; width: 48px; height: 48px;"></button>
				<button id="setLayer7"  class="hdub-btn" style="left: 124px; top: 406px; width: 48px; height: 48px;"></button>
				<button id="setLayer8"  class="hdub-btn" style="left: 177px; top: 406px; width: 48px; height: 48px;"></button>
				<button id="setLayer9"  class="hdub-btn" style="left: 231px; top: 406px; width: 48px; height: 48px;"></button>
				<button id="setLayer10" class="hdub-btn" style="left: 285px; top: 406px; width: 48px; height: 48px;"></button>
				<button id="setLayer11" class="hdub-btn" style="left:  70px; top: 460px; width: 48px; height: 48px;"></button>
				<button id="setLayer12" class="hdub-btn" style="left: 124px; top: 460px; width: 48px; height: 48px;"></button>
				<button id="setLayer13" class="hdub-btn" style="left: 177px; top: 460px; width: 48px; height: 48px;"></button>
				<button id="setLayer14" class="hdub-btn" style="left: 231px; top: 460px; width: 48px; height: 48px;"></button>
				<button id="setLayer15" class="hdub-btn" style="left: 285px; top: 460px; width: 48px; height: 48px;"></button>
				<button id="setLayer16" class="hdub-btn" style="left:  70px; top: 514px; width: 48px; height: 48px;"></button>
				<button id="setLayer17" class="hdub-btn" style="left: 124px; top: 514px; width: 48px; height: 48px;"></button>
				<button id="setLayer18" class="hdub-btn" style="left: 177px; top: 514px; width: 48px; height: 48px;"></button>
				<button id="setLayer19" class="hdub-btn" style="left: 231px; top: 514px; width: 48px; height: 48px;"></button>
				<button id="setLayer20" class="hdub-btn" style="left: 285px; top: 514px; width: 48px; height: 48px;"></button>
				<button id="setLayer21" class="hdub-btn" style="left:  70px; top: 568px; width: 48px; height: 48px;"></button>
				<button id="setLayer22" class="hdub-btn" style="left: 124px; top: 568px; width: 48px; height: 48px;"></button>
				<button id="setLayer23" class="hdub-btn" style="left: 177px; top: 568px; width: 48px; height: 48px;"></button>
				<button id="setLayer24" class="hdub-btn" style="left: 231px; top: 568px; width: 48px; height: 48px;"></button>
				<button id="setLayer25" class="hdub-btn" style="left: 285px; top: 568px; width: 48px; height: 48px;"></button>
				<button id="cycleLayerLeft" class="hdub-btn" style="left: 19px; top: 352px; width: 46px; height: 264px;"></button>
				<button id="cycleLayerRight" class="hdub-btn" style="left: 339px; top: 352px; width: 46px; height: 264px;"></button>
				<button id="coin28671" class="hdub-btn" style="left: 83px; top: 895px; width: 302px; height: 57px;"></button>
				<button id="coin34642" class="hdub-btn" style="left: 83px; top: 959px; width: 302px; height: 57px;"></button>
				<button id="coin44227" class="hdub-btn" style="left: 83px; top: 1023px; width: 302px; height: 57px;"></button>
				<button id="coin99183" class="hdub-btn" style="left: 19px; top: 895px; width: 57px; height: 185px;"></button>
			</div>
			<button id="folder21button" class="hdub-btn" style="left: 12px; top: 158px; width: 188px; height: 56px;"></button>
			<button id="folder22button" class="hdub-btn" style="left: 204px; top: 158px; width: 188px; height: 56px;"></button>
		</div><!-- This is the minor wrapper -->

		<div id="folder3" class="hdubShelf" style="display: none;">
			<div id="folder31" class="hdubShelf" style="display: block;">
				<img class="theImage" src="iconSet/shelf-menu/folder-3-1.png" />
			</div>
			<div id="folder32" class="hdubShelf" style="display: none;">
				<img class="theImage" src="iconSet/shelf-menu/folder-3-2.png" />

<!-- THE CONTAINER -->

<div id="wonkie" style="display: block; user-select: none; position: fixed; top: 220px; right: 20px; padding-bottom: 4px; padding-left: 16px; padding-right: 16px; background-color: grey; width: 160px; height: 452px; border-bottom-left-radius: 16px; outline: 2px solid #DEFF1C; outline-offset: -2px; transform-origin: top right; transform: scale(1.9);">

<!-- TITLE -->

<div style="height: 24px;"></div>
<div style="padding-top: 16px; padding-bottom: 0px; z-index: 1;">
<button class="wonkie" style="height: 56px; border: 0px; margin: 0px; padding: 0px;"><img src="data:image/png;base64,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" /></button>
</div>
<div>

<!-- HEADINGS -->

<div id="wonkieGridHeader" style="display: flex; justify-content: right; height: 16px; padding-bottom: 8px;">
<button style="border: 0px; margin: 0px; padding: 0px;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAOkSURBVFhH5Vc/k5pAHH0mnUkJXOldidIm6Tz0MzBSp3X4DueHcGyTFmN9JTp0ybX8qa8F2rs2ebsLiuh54qXITN7IAMsu7O/t+73f2rm7u/uN/xgXEmDAGo8w0IE8XiOIsrLZgjsayEtdFw9z/mKsgwhlD/YZw5v01TPRJ1nCjwyMOY5323FJ/b01GNYYI7vPvhyfNN59Ad6V5xZgkLMpbD1HHOfQ7SlmrqUeZRH8GDBNTm+zxFI8HzqYemNSViILMN/k0EwTerKBH3D6HBfIcSaD2iBheENnCm+8HSVhuR6mzlAFDxOmeHf17QvRmgDLdWCmK8z9AFEUwJ+vkJo2GnNFnmWMi8EuQhTaEKMj88wZ+D4K5BHJ8JcIC0AbTnbvpXJsU0MRLjCf+/CX/K5o1wewGt9ug5YEWBiYQBrXJm4YXBEN/ZdmQSJynnT2Ox8Zgo0Ir/ZeQ3yFLXp5L9Q2m2FGMo5kytloR4A1oPBS1OOvJlbB4P1fQZZTD/WA1T1Mh6lh7VLqjWhFwNHgojXCcIWlyOUDCLO0SZpKiQpnkVQqh9JRwQrvEOnES03kPlffY/6/lYj2JljkDdelXA+cWMNw4sGjWTpD5i09w2+mewPnkUISGPhiFSIVHkE17BnsBWinAL0u9tMoSILsXYRYvhb9KeQ00/KygjBXf76QRkk5HDXYc9FeARVEPRcmVB77JatgeWf7iQrwKqS5ygumkQvX5bH3jcoodwZrjak6zz2oSKfQioAslzakIOW4wErMIeUqlx6wpxI6dcIh5mCfgWNKUm1Mr8ZyFznVw82R3FuctHt6RZ+q08yXK9IRtCOATgytX6u7lKck5VCmCuI5TyZrtWo4H2V1UeYprjThh3uwRE0mVJ8MERWRpik2LepiuxSQpWi/5suVq5z6CBRBulD0AU7tDVRw3BgxlihWUjcdtyRfpIUHR8a/K8tZFnN3yi1lC7QkIIBIO23IbarISa+cxFYVJKJh5lI1ddLoHeXCyRqvWhvj5K5P+OcSMrOiWO36WFCdqfAcVV0EinCNymKtkQPHcWDXFug1vLdte1Zen4UsLnBl9dHr6dC7Xbk1vX80cG1wf34z4X+EZzw/c6q3Nyg2HYymt+gUVIF+i88fEzwPbAw6og+P3jU6yS88fflKIrt8u46+bcP+9AGP4Xd82+4tMsTJO1zd9PjNsqlIEd7/gP9zJ3fjykK/18XjwwPi7KlsPY03/B0WLJ+fa/8mgD9p04T1442z8QAAAABJRU5ErkJggg==" /></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="this.parentNode.parentNode.children[1].style.display='block';this.parentNode.parentNode.children[2].style.display='none';this.parentNode.parentNode.children[3].style.display='none';"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAQCAYAAAB3AH1ZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAF3SURBVEhLxZWxUsJAEIZ/HXtCEMoECosII5oHyAw+BBSU9r4CPoO9hYWdzwAzts7ATCaQIgUkJYSQPIHuXU6MMxlJjoKvyO5eiv1vb/fubDQafT2+vOEUPD8McSF8Dlv4j2rnA7dtEcy7mDgVEfi4G/hQuK8g3sSYjS0e5ZHd8LmwB5Mzdo4OGB60OrDcJ2foWG220IwtCbuh5F2xnk82115AMWh3IZnLNMpSqUfcxmsecb8IJQX84KHVES4nQZWqIoOkAEBr+8IjGj70nKoUQUpAEqrUCz6aIkYjLlH0v8hVYGHCDn+Podn2APcKQRqWoqSAGAovtYLVQhXH4KNlqLAnNCESSPfAbmwiMKboDabQXBMz3v3lkRbAZn/pRjT7EYK53O4ZRwigZtxQM0IVsy/HUQJ26xp9a2TTWIajBMCx8PpkYcX8RpIZxUTYw+wFFHkRm9RwFXYHXI/Ru89eRDZ6/U8gjKD3bXqY3sWPfLK5TvwcD/ENRplsgqcFcy8AAAAASUVORK5CYII="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="this.parentNode.parentNode.children[1].style.display='none';this.parentNode.parentNode.children[2].style.display='block';this.parentNode.parentNode.children[3].style.display='none';"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAQCAYAAAB3AH1ZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAFZSURBVEhLxZXPSsNAEMY/fYGkRXLUiORQKPXktaHiWRQCPfael0j6DuKtLyA5eZaE9iqoBLGHXpoeS2ybJ0hns4m2JztbpD+YzO5sYL79NwvP83IgP4iJ3Efi0+/7EHie9P/NZr7jokWoJK8ZCcxmVvZ2ZzPXjwAWRow7f4Bb9wW2E6Dnj2CWQ1yUBJidV2jpFYaPDp5HFkUmsLuJHGSiICDBeaOO+KmF6VzDMrxEnFK4Qdshf2DBF2Bk0LCATn6bbzoTZZOB0hZkaR0rkiFZQT8hl17QisgIB76AeQvRwz3eP8t+M8EpuezrDEsZYaG0Ar8k6DgT8hY+wmpFeOwloHb9Vsx+FrQxlSE26gKoFtjtBTC+QVRthwJqAkQhcqkW0NIPI51OfyatHObAFmB2B+gVyQVUgNyAKqKwEOY+17B6IP5CzFJcQ2GzsVWY7MvxXdjKddjn2MvXkyvk3JLJ5eMAAAAASUVORK5CYII="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="this.parentNode.parentNode.children[1].style.display='none';this.parentNode.parentNode.children[2].style.display='none';this.parentNode.parentNode.children[3].style.display='block';"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAQCAYAAAB3AH1ZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAF0SURBVEhLxZWxSsNQFIZ/fYFUaTO2BXGIhmAsXa2BPkCHEidx6CZ9h/QhSjcnJ6VDyRwUuwatBrGDS9KxLaR5Aj03CSW6mHuF9oPLTc69cP7k/OfeHcuyvm5Pn7ENLl9q+CGABTZBNt9u/ETwJ49QVT0YFx7NURrLRzbXWgAXsodWb4hG24VUcmke4qrrYS9d5kFAQATdpMTLOuxeB6N+B/Z4Hyi6OFHTLRwICFihUCQZCwlhGgnfD0gWIMl8pWAICChgtaRkpUjol/9GQICECfvtfQ1Qg9iIreukJE8PUronP2ImJELWBedOYkQWyJSEB2EBDP++DXvQhDelF8WBsRETygF01vsyffGcjQomd03MaKl8HCR7OOAWoJsONIV638z0Pbk/LgMZkxduAeEimaOPyrrmVSPxAYvxwi3Af6wnPX/0RsfwGEb3Bg2FrRzi9T9dkPtGnGsYkfFm+ERZocEOpSm14OAMfrrlL7K5tnwd1/ANmD17egQlCuMAAAAASUVORK5CYII="/></button>
</div>

<!-- METRIC -->

<div id="wonkieGridM" style="display: none;">
<div style="display: flex; justify-content: right; height: 32px;">
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=1;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAHpSURBVFhHzZcxS8NAGIZf21AcikNnKTSIkzg4dyilIPgvnNz1B9TRxdFB8Bd0qItFKFGQdvYHtJBiOzkIDoqltI33xbs2SVN7uWuiDxx3+Qj3vvfdJXe3Ua1WHUSgUqm4dbFYdGtBu912a8uy3FoWKQNClAgKBxFGCBkzKw2Q+CrRZZCZVSbSpVLpnLd9kLBpmsriRD6fh2EYbj+2bfOon1ADYtTUgS7UhzASZiLF6xk6Kf8N6tO7lgQ+A3GJC8JMLGQgaWYG4h69IJgF14CyuP2IkUWlxwNyeE1oTcHo6gQfx6zcRzPgRd2AfYNhjbd1aLVaTnRs5+tox3nb5uX0gcejQdqKGShgs9FE9ukaGR5RJaW+8gvImLypCGlrLUL2b8WUVcZu4edZAT0Da0AzA12MeVOVlPcAkTSk/edTkGZ79Tnt1fJ7fw/DswsMmxZGd3VMXoHp+ycmzxaLvcA4PJAalTgtKWSgh3GtjlGtw76APRj7rKDDnutsPZhI87dkUTBQRnbQRW5wi63GvOQodlnm78jjGqBUJLkYvYfVWQaSMuEVJxSmYL34DMSdheDoiYUMxGUiTJwIvRfQ+Z3+Df1+X/tuQMLUT5g4sfRmRCaEEVUTYtTLbkXE/7+cBhFmgkaEsIzoHOAbZdhIm5JzUogAAAAASUVORK5CYII="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=2;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAHYSURBVFhHzZcxbsIwFIYflK13YIjEJVIGBqYcJJygM9275DIlCxuIE1QdCGLgIu77HT/qmNDYToP6SZbtIPn/33PysEfr9VpRAMvlUvfz+Vz3wn6/1/12u9W9L14GRBS4wi5iBPiY6TQA8S7Re8BMl4mnxWLxZsYNIJwkSbQ4mE6nNJlM9Drn89k8bdJqQKLGAn3BGmKkzcTY9Ff6pPw3sKb9LgkNA0OJC20mbjLwaK4Gho5ecLOgDcSKn05EZWkmAdgm4raAhV9GRLMZUZZxMeFxhA9NlIHyneiQEm0qoqqon2Wrug9mt9upUHJSqqjMhClSxdVUqY2Z+wLt8Axw+j+5++LoXY78WzDGjD8cec4RF1a4yAjxMysp3oQbcGEjCCMtzDyQ3gZ09NxC91/oZaDiqCGex6ozUV+Bhjc8RfS5mUcQ9xUAFCIuQgcebl7riqhb/WsQY5xY7GNUFyUXnJERBxmPURHRPgIcyGnJZOC57jw4cku5CqLled1kHoM+Ez7qn9CmkYHQbeiLfVi9voSPMmGLg7iv4A9pGBg6C2704CYDQ5loEwet9wKc33GOv1wuve8GEMY6beLg7s0IJsRIrAmJ+t6tCPz/y6mLmHGNiLCP6A9E35HWlwongIhgAAAAAElFTkSuQmCC"/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=5;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAJsSURBVFhHzZc/bFJBHMe/RVbcG5XER0I7sDVNFwZsGIkOOLk4MbzFTjA1gaGrjZuJTl1c1AHj4ECrCc/BVDaHUlNQ/u7g/vz9jjv6eH2VO14hfpKX+5PHfb/3e7877tbK5bILA7LZrCjT6bQoFY7jiLJWq4lSFy0DSpTxC/tRRhgdM3MNsPg80etgM/NM3MpkMhVZn4GFLctaWJyJx+OIRqNinFarJXtnCTSgZs0DhIXHUEaCTERkOSVMyP8Fj+nNJcWMgWWJK4JMXInAqpkaWPbsFf4oCAOrEld4TRh/gvbwEI8ahyg13uH18BtO1HPO7Z58Sx9jA/fp+dH/jOa4g5+Dr/jUfIPC6QEKZ0f4OJ68Y0S9XneNGDx3reoz99VItpnRW/dhNecWB7KtCWvfzCqI3cMGLNkwY42dyLoelAOJ09/Ibz6BndwRnyQMxgba53vInnm21NsW8htF2Ot3FzJjHgH00BbJ1kf7T5eSsI73IzJ0Zx8XWzviDSPYgBld93jQlfUJx99zlJjmSchEvAcIHU4aNi07G6Wh7CB2t/aRp7I5NtsHWFuuAv0fXlD4UxRue112MOMumrJqSoRPLI7zSzbnk4jRRkTlZcL1aBc8oj4LOUpEXdRpyXgf2E0+Rap/gMSXPZToSXygT9KnqGwWUSBzpphvRLHHeLH9ACnKfJH9NPP89ktUk/qz9zI9lK76H7FSmZwEpxGY5ILZilgE1lDizM38F4RgxsCyo6Ay38uVCCzLRJA4E3gv4PM7n+M7nU7ouwEL8zhB4sy1NyM2oYwsakLNOuhCovj/L6d+lBm/ESWsI3oJ8BdWT+znbvENdAAAAABJRU5ErkJggg=="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=10;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKWSURBVEhLtZa/a9tAFMdfbSFCaijpHAoWickg/BcYaopJIVnSDN4NBU9ZkkGjlyweMhYiGvDuQZ1CoDgBY69ZjAfj0BM4cwqlxjGq7PZJd9XPk+Q4zgeju3ene9/37odPr2q1GiRRKpXwWSgUqIl0u118tlotasYQJ0D9Il7XXqgMEqOULhaLrOoHvaPfdzasKQTtRQRBIISwVj8cAXQtSVJU1FyoBo4KywQFnMCZvTB2JpxUUqy0od6ZsRQ43Fk5iivwfO+UgIYvg5eACawqfIo3CWuR47yTG+NWnxFISxusxeF/F0gb4XlwFjxhiowv1XGlOr7Sme3QUn6+t7squ7/2lal6MWMdQWIFyMW0yap+bsYVDfLKm/u7t21F6GmT08s//HMG0Ol0/vIhj3tbD5v27/iatdmY5wcPmwePP6h1/Rtf2PtqUssPOo/JILt2+T3TVkVmusyGfYBcSrLqxknVwKIXmUEqdvNkRduLH30+AMhvp7FqzaG83lAE6Js8AXSesMhAyBxAyGWZ6UOfHtXN8tEaJwiXJIFoZurxpHeYOfvA7AgSM7gzWc1Prz4+7YuNurVC1juyEJFHyrk0Fiab2rHLspqxT6txpTlrHgCdLzNF6ZxsFQNiEN1QP43xrJQ/hjcbxboyeX8V+vTk3JqcgWb0cM8cijswh+3XZ5/T2LW/O8FGF3m9/S281Bg+XqVRGehmUzOawzlObl4WYGg0NRMka2ta5wMPsCrm7RdBFhsc7w5RGawANwMsnr7UCVDvWGFTtFoNxzuyzC56Eq7AqpLwho/4Mni+RsA7EvwuwksOr7rRaIR3HmtaDHSNowLeEc6XHWpQmcU1aOA4itkeOAIUqoFBxWRDo0bCgTu88Oc7wD8R4njq0AFXJQAAAABJRU5ErkJggg=="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=20;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAJsSURBVFhHzZc9ctswEIVXsbrcQYXGSpEjUCpUqLEOQpdW4y4zSp+GLpN7hGzUSfYJMi5MjwpdhH4L7iogBBKwFWryzcCLHwr7dgnA4GC9Xlf0DhaLhbGz2cxYZbfbGbvZbIyNJUqAOmVcxy4qhIkRExTAzkNO22AxIRFX8/n8u9QbsOPxePxh58xoNKLhcGjm2e/30tvEK0Cj5gnOhedQIT4Rn8QeOSflXfCc9lpSGgL6cq74RJxk4NIcBfQdveJmwQiIdf76SlQU0vAh41xQbcUWEfcKMNt0QDSZEC2XODxQP9GBjoGMc5lMiR4euoUwUQKKH0RPCVFeEpVZ3be8ra1yC6eEZ0ocaxWeS56IViui3yEF2+22CpFSVWWlNECWVOymyqVdZnXbfoZ/Q3jO6jqBfYczgAj+wDwjKpcXia58ru2X69oWyM4vriALwQyImHYQQopIMg0XuNGZjGgbfxLOBp5nm1q/8xEW4IIJWXaCtCu2AFNPUREhIQFxu8DCLDbw7a62NiVW/Qppz39KRwwiJApdbG5UuigbY5Ipe2H6iNoFBkmpSa9Djj4jwBrTvq43ELcLGKzkKQ4ZZJfyezTRNqUepclXqWC7FOgs8CqWvA1Sopt6pB2+EXVl4Ridp2h67VfgG/fBPtm3ZOBzbTy8oCQ44bikiIiLtpW7R7jDOZFafWmOfjkXujB3wkv9J7TR+6LJAFfs22zf2JfV4yK8lAj3pvzug+hf0xDQdxbc6JmTDPQlwuec8X4X8P2d7/GHw+HsbwN2zPP4nDOtX0YsQoV8VIRG3fZVxPz/H6cuKsYVoo5jnP6F6A36qG8ELLpHtQAAAABJRU5ErkJggg=="/></button>
</div>
<div style="display: flex; justify-content: right; height: 32px;">
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=50;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAM/SURBVFhHzZcxTFpBGMf/pYyF3WJphJR2YDPEJrUJEEZrB526dGJwqUkTjIOJDgyNTU2ZTMrE0kUZbFcCTWCoMWwMihFaCrjz3F+/7707eDze46EW019C7t157/7/++6789697e1tFdcgkUho5eLiolZKKpWKVhYKBa2clIkMSFHGLGxGGmEmMeNogMWdRO1gM04m7kej0R3xPAQLBwKBG4szfr8fbrdbG6fRaIjWYSwNyFnzALeFx5BGrEy4RNnnNiEfB49pzCXJkIFpiUusTIxE4K7pG5j27CXmKGgG7kpcYjQxdgmal3t4Xd3DRvUQ2ctjFOWvzvW26GVAkX3aaIomJ9yitGSOfrVOCfDGgG4L58pv5Hv6Vgo/e47kjPaoQ2aDJ9RXQu9sPvQjEVrVxrGlXC6rtnQ/qYGjd+qXnqgzvQN1+WhJTXVFXeOnmqK2QOlAbXBV9Bl51wRrX38XeB7hKQKiotOsf0We2jbnxWy1PoT3JRIefrDHNUnyndO6DtZ0AbvLGewawt9UeFkeIyjEitU0GSJ6ZRQUrckS1h6fhLTmQAP50zQS314h+GMdGyMJ1sYFi3j9+uyVQ2Q6FI3IW4Tp3fMrbrRnrIG5UAqF2D79tpClAVeoLX+yhkT1WO8wQhvZag413xskH4gmBxxzoEkzmPMsID6zit1oBlkfNXbSFAn970aa9Y/40IshO78gWpxxGS8QZorVNSRpxkax+PyWFokzxXQO9HJInjawEnmPONevWqhRYj4ZEwnWFhGwOFQIXtuwbwtrxv2u/MGZeNSZ7ScfqK9MzmKXz4RBYtrh4htLpfJLVIfhl2tUDg6SNp2CtMY0s6WZWdHGSyS2JZkrUmSK9XUkO1T3vdCjYYG8LY09CeMhyuRSGkEloCdg/xRMIdmfWRuFrrho8DKUcvoznwsh51wYn4SeVXyOxBAmYV2cjET2cRQazJ6XIBn9jgvaKSte0aT1yxhM2tO/lN71f8SdHf0m2I+Angv2O+JfwRpSnHE8B6bNkIFpR0FmvpGRCEzLhJU4Y/ldwPd3vse3Wq1bfxuwMI9jJc7YfhmxCWnkpibkrK0+SCT//8epGWnGbEQKTyI6APgLSP6znR0XMBoAAAAASUVORK5CYII="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=100;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKsSURBVEhLtZa/ixpBFMcnulnECOGuzRFwiXLF4l9gIUESuINwucI+ELC65q6wtLnG4srALQnYW5hKAsE7EG3TiIV4ZBdMfWkinmxWkzfzJrM/nWyi90GcffN23/e9+bGzD+r1Ovkb5XIZ/ovFIprAYDCA/263i6YEmQDGBbyhvaAMIFFKlkolfukHokPcpwzeFQK9gKIopmnyXj8RAhBa07R1WUeCGvBUWCYoIBLndmxYJRGlJHjLwOjc+C/gcTFziCuweXQkoOGr4D7gAttKH/EWQSfZF928tr9YS5MktR3eI/jjItpOsPCQS0y4wkwX+1111iKkYuyWs7wL6da+v2nz68Jx+lXuYfVtEk2JKzgH5ocFRI/gegYhCrXH3252ezVl2J6fd37y1ShxMfr9/i+OeXfw7HaP/U6veB/DuTy63Tu6+4rW1Q+44eC9wwyJC4Dg3gqyqc7nTM9QuemynIwIySc0em2fVW1ohjxNiQtJ+BdPVmW3+rFWYxjcHB1WOoZ6ullTyMihUSQuCgQPLgdimitClLx/hjnW4qThVE5SUUmsc4UE1rM0TufD48zFc257kLjCFdw4/MrPsDE7H6nNBp0heo+uiGQlLhAQh8Z6sol91laMDNue9idY9TixEhcFgscaomRep83YtE3LNl6znfgSF5vEhdAjk70qnizOLungjNv2kG5IdZ+sSO7RBexJa3H4Yg6dLnq695HNp8RF04ejVFRgOa223ZqsYAQLukImdqvtEI3t+GyqA7vUUAvsRqKrTR5C6uKICrb2KhW4FUATY6r/DYwOF3yItqshogOxVtEmuALbKsKbPuCrYHONQHQg+F1EDzlFmU6ncObxrnhAaHgqEB2I+LIDDZSJr4GJw1Pc9hAhgKAGJCWpBrMGwokL7vnznZDfzxa+45rD0eMAAAAASUVORK5CYII="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=200;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJfSURBVEhLtZaxcptAEIaXWF26PEAKjZWHwCpUqLEeIG06VKIHyIweIA0q7fcINOokM6M+48LHqNCLXP673QMO0EUT428Q3O7Cv7sciIu22y39i+Vyif18PmcTHI9H7Pf7PZsBQglYF7Sl23AaEMh0t1gsZOgDdeh+tYirB0fBZDI5n8/i9RlIAOnpdHqt6kE4B67qp+kmqAsX+2ZsJwOtfJKjhdXF+C9weT1zTJPg/epMJ4fXwUcgCcYqn2k3YSa5o15VdDrRbCZmQ0XFyUSjGX0Rl6MXqifcv0UVPURGerWiKKJCvJbCXAw/ttkD7XY41xEIdeag+EVlTLkilRlztbZey3pFFJPSpBXFJW029NvJBEKGw+GgHQnpTMk4izWRzu1YZWZch3AaxZqtQAhAvNVBRX+IXpVYzJutRb2a/bd7sy/W9IxDKWUGQoLkAkonsc64Zr8W0w2PlY5Rb272iT0zEGJaHdzT0wulj3ZcmFri7/B57H5QmVDaf8Cuh/ynyGHmjehnag2H2tGmpPxJzDaBUOsWOXje2m3yhDfOvJnYQIjxniKDvZWUiMXkiVVxTjZF8HoIQNxPwOo4Q2nFG7ttT5hM+HMeO8VACJgE+GRyDqnF3zr3oeMPhyALcZ7kz/i94bGJzZYkZuMxk76YtzRxZpJT6h6vQIgxH/1x/0prsCTAYsB0gEO9PhgLVsdA3oNxc9TqYPhFG5EmwVhNtMsHXgfvz9FRB911ET5y+NRdLhd888R1G5DGVR11MLCyQw5Oc3sOLhxXid1iIAHDOVBUoBuuGvQLr/ng5TvRX2PqmaaUbag1AAAAAElFTkSuQmCC"/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=500;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMWSURBVEhLtZY9bNpAFMevlLGwJxAqjEI6sEUolZpKGHlMs5CpSyYPLE1ViYgBKQtDlapRmSKViaVLykC7WlAJhkYRG0M+FNMQPnY7O/3b7zCGYCdtyG/A9+5x7//efdj3ZG9vj92FJEn4XV9fJxM0Gg38KopCpgtuAhQX2EPbIRngovQ0kUjw5iSIjrghE951C/ICr9erqirvnWSGAEILguCU9UxIA6Nuy0wLWIlz+96YlcwoxcOfJhSdG/8FhlsrR4wFHh6dmNKYqOAx4ALzSp+wF2EIzDc6YWl4yQbtwcH7PlthoeXFpQh16deXvpfyQpAsA/24eoNHILwQDFOPhYNrLIDeVq/G/CLrdy70q7Jm7LbYCwiQn7HBQeSkxtt+MbsYkqJbPNYsFzfr9fqQ6H8WKu++atwaakeblY1Mn1vD4e9MZUOoHalomi7bnx1dCO68i3xLK0zgbUzg+bcyE7KrZsqGC5m+lnx3uIBnankvBsdt3lzb3yzsj+anrWPGnkfMYdVmvoyHVlf0O1wIPq6grV8xppZP89KPN5FfO7uD7kgJdC8xwB8yctS/F3pCNr4dY+qFsaouLoOxQDiaUcRDRcwV49spxsonaal5zH1jusVmqRV4Kz/jto3Zrok1aN+wsG8tubC1nygUA4z18rsD7iLa558+amJxdY3bNpxcHuujUW2m5ZO0FTG5mkMdZ3qX20AryadqKv4hifZNp8WEZStZBxeCUwVGFExlLJBLW7tevz7jLRCkNWSBHC17tY9dTwvr4jLw4GvXaPxBC10t87iZdKvnJSSyMTrGYZ+5ZfXrqg7XjtxDxFdGvs4upI/g45OcjG7HavmILhgrzI9xRuaJdJW++RnBVNRKZo+QjdJ0u7gMbIvs2/oSF2OaakYXUvHDStR6CwXlxM9LMZfykwlvYaTt4jLgt4q5v1BpftDgFZgrwbfTw7Gig4lz8BiMBeZVhD19MFHBwzWmooPpexFuNbjbdDqdf70aITRGTUUHM2520CCZ+2tQ4hjFbRuOd1PSQFIu1VDW4HbiFo98fWfsL3cI0bEuwPk6AAAAAElFTkSuQmCC"/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=1000;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAIZSURBVFhHzZcxbsIwFIZfW87BgGiHKiewGBhY2kuwZaw4QCU4QjJyg6p7w8IWxAmqDnXEwEVc/45fCIlTUqcgPgk94xf7/XbeA/tmPp8r+gOTycTY0WhkLLPZbIxdr9fGtqWVAA4KqoGrsBDQRsxJAQh+KmgTEHNKxN14PF7Y9hEIPBgMvIODfr9PvV7PzLPb7WzvMU4BvGpM0BXMwUJcIm6tLeiy5b+BOcu5xBwJOFdwxiWitgOXphBw7tUz1V0wAi4VnCmLuJ5XUJBltFqtYOpkK4rjWPsdTl9fmqaqjIwEfhlVmNgORkZK6H4RhrkVQkWymw+xjwXYh10CklAP5pFJqJ8JFT/i6zMCbNsilZSJCmsCyn1SRQIieSW+vpxKDgxpOLTNMtk3fZKgx3vdjKc0CxKKxJa+ZAefpaEK8kE1ZEzT94CSpcPp6XNUAVS72NLseUbB65KezPeySF+fFlA+QDQyfKAANkxoiVmyD3rfBvSA1+Xr05jYhypIdQLqJIyQqUInjm7jY3x5MukxinQZGVtkqa/PVgFORGikby+2BIWp1XxQZAXoHNbVkWcx+g+lBHx8iInY5kh26f8CwMe16/gvgJJWyfiP8GG12IFLiUCMxeJwDL2OV8Ccexc48crUduBcIlzBgfNegPM7zvH7/b7z3QCBMY8rOGi8GUEEC/EVwatuuhWB67+cVmExVSEcuE3QA0Q/wtCqiOq2sngAAAAASUVORK5CYII="/></button>
</div>
</div>

<!-- COMP.2X -->

<div id="wonkieGrid2" style="display: block;">
<div style="display: flex; justify-content: right; height: 32px;">
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=1;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAHpSURBVFhHzZcxS8NAGIZf21AcikNnKTSIkzg4dyilIPgvnNz1B9TRxdFB8Bd0qItFKFGQdvYHtJBiOzkIDoqltI33xbs2SVN7uWuiDxx3+Qj3vvfdJXe3Ua1WHUSgUqm4dbFYdGtBu912a8uy3FoWKQNClAgKBxFGCBkzKw2Q+CrRZZCZVSbSpVLpnLd9kLBpmsriRD6fh2EYbj+2bfOon1ADYtTUgS7UhzASZiLF6xk6Kf8N6tO7lgQ+A3GJC8JMLGQgaWYG4h69IJgF14CyuP2IkUWlxwNyeE1oTcHo6gQfx6zcRzPgRd2AfYNhjbd1aLVaTnRs5+tox3nb5uX0gcejQdqKGShgs9FE9ukaGR5RJaW+8gvImLypCGlrLUL2b8WUVcZu4edZAT0Da0AzA12MeVOVlPcAkTSk/edTkGZ79Tnt1fJ7fw/DswsMmxZGd3VMXoHp+ycmzxaLvcA4PJAalTgtKWSgh3GtjlGtw76APRj7rKDDnutsPZhI87dkUTBQRnbQRW5wi63GvOQodlnm78jjGqBUJLkYvYfVWQaSMuEVJxSmYL34DMSdheDoiYUMxGUiTJwIvRfQ+Z3+Df1+X/tuQMLUT5g4sfRmRCaEEVUTYtTLbkXE/7+cBhFmgkaEsIzoHOAbZdhIm5JzUogAAAAASUVORK5CYII="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=2;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAHYSURBVFhHzZcxbsIwFIYflK13YIjEJVIGBqYcJJygM9275DIlCxuIE1QdCGLgIu77HT/qmNDYToP6SZbtIPn/33PysEfr9VpRAMvlUvfz+Vz3wn6/1/12u9W9L14GRBS4wi5iBPiY6TQA8S7Re8BMl4mnxWLxZsYNIJwkSbQ4mE6nNJlM9Drn89k8bdJqQKLGAn3BGmKkzcTY9Ff6pPw3sKb9LgkNA0OJC20mbjLwaK4Gho5ecLOgDcSKn05EZWkmAdgm4raAhV9GRLMZUZZxMeFxhA9NlIHyneiQEm0qoqqon2Wrug9mt9upUHJSqqjMhClSxdVUqY2Z+wLt8Axw+j+5++LoXY78WzDGjD8cec4RF1a4yAjxMysp3oQbcGEjCCMtzDyQ3gZ09NxC91/oZaDiqCGex6ozUV+Bhjc8RfS5mUcQ9xUAFCIuQgcebl7riqhb/WsQY5xY7GNUFyUXnJERBxmPURHRPgIcyGnJZOC57jw4cku5CqLled1kHoM+Ez7qn9CmkYHQbeiLfVi9voSPMmGLg7iv4A9pGBg6C2704CYDQ5loEwet9wKc33GOv1wuve8GEMY6beLg7s0IJsRIrAmJ+t6tCPz/y6mLmHGNiLCP6A9E35HWlwongIhgAAAAAElFTkSuQmCC"/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=4;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAHqSURBVFhHzZc/bsIwFMYflHMwoNCpJ3AZGFjIJbrBSG8AAwcIY7v1ECQLG4ETIJZEqEK9R+rn+JE/DcV+aVB/knFsJH+fX2znuTWfzxOwYDQaqXowGKiaCMNQ1ZvNRtWmGBkgUaQsXIaMICZmbhpA8Vui10Azt0w8DIfDhX4ugMK9Xo8tjnS7Xeh0Omqc0+mke4tUGqBZ4wB1wTHISJWJtq4v1An5b+CY+bVEFAw0JU5UmfgRgXtzMdD07IlyFJQBvngMQRDIEuu2GXkTtV5BMO2D67rgLtfSCg+2gXj1DO47gBBC9zDZbreJNZGXSNlEeJF8FAlMfP2HHajNiEAA0/4r7IUHHzMHouNe9zPRZozxJyC/HSKRk8/azAggdgb8CX64VOhTosQT2PblEw+WgaqSmbKjhT9yAGPiOL/h1vAi1wN4vlwPY3B0rw3tfAJhguM4WdF9AH2WOGrrXfCVVkyeHjnyKW3MWMLwUzctiY7A3YSULfGP4lieB8uDOgkPy9X9j2JwxvC228FOlRlrDSDKQPoa7BZjXShZvUTgXiZQY7HI0lD+K/gjCgaajgKt/Dw/ItCUiSpxpPJegPk75vHn87n23QCFcZwqceTqzQhNkBGuCZr1tVsR8v8vp2XITNkICZuIZgB8A50UjwhASs6LAAAAAElFTkSuQmCC"/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=8;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAImSURBVFhHzZcxbsIwFIYflHMwoMDUExgGBpbQhalHMGNZOsMRnLE9AlOXJgsbaU6AGEiEKtR7uH6JnSYhNLFpUD/JvMQg/38ez47dWi6XHDSYTCZxHI1GcVT4vh/HzWYTx7rUMqBEkaJwEWUEqWOm0gCKV4leAs1Umbgbj8creZ0DhXu9nrE40u12odPpxOMcj0fZm6fUgHpqHOBacAxlpMxEW8aUa1L+GzhmtpYUOQNNiSvKTJxl4NakBpp+ekUxC7GBW4krsiaM/4Io8sBx5jB3PPAi2WmAkYHIGUK/P4XFege7xRSm/RYMHUMX2+2W6xFyRoATFsp70cOIWE0pd+V9XVDbIAMh7AN5KbEG9+JzBweTJEgzGiQZAEI5c13uMsqJGAYIE9/oY2BA4ErRtBGe+Ue00DcQslScECKaNEF1KyBB04BMPxZc5omTIjTLQju7gahGFiCdgW0lPYj18AgEAtiHsqMmqC1nwVcS6rI7QK7grQHE88BgGrRxx+L7n/K2ChtmVIRgDe8Zrch7g1cR7weZtFSgdkva64D9zOJ0L3D1Gw5Fa0F/ivIUZnbyGx30FyLrCT5CBlRMhSAIRBPlRyi44YvIjz7ppvTWb8TVKtkJphlIakFnRpiBGkocMXgX/C05A01nQVV+lrMMNGWiTBwpPRfg/h338afT6eqzAQrjOGXiyMWTEZpQRkxNqKe+dCpC/v/htIgyUzSihOuI/gDwDbj6CEiAt6LvAAAAAElFTkSuQmCC"/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=16;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAJiSURBVFhHzZc/cuMgFMZfsj6HC0+UIpMTEBcu3MRVTkHavYFdbLeNUkanSCU17uzVCTwujMaFZ++hvIdAAQUEiUee/DIaMDB8H48/gavlclnDF5jP5zKdTqcy1Wy3W5mu12uZxhJlQIsSXeEu2ggRYyZogMRDoj7ITMjEr9lstlJ5CxKeTCbfFifG4zGMRiPZz/F4VKU2TgN61NTBuVAf2ojLxLVKW84JeR/Up7mWNJaBocQ1LhOfInBpWgNDj17TjYI0EBSvCigK+ipV4EG3CzQzTURNQfF3AYsFfm9ClTgonuEqUe2SZyhUcYiwgeoF/mQq7wPbPCwy4LkAkXNgsINDIAotm82m9iPqlAGdlM3Hc1Vug5pNnUhrhu1YKlRNP6QdMECIOhd5zb0GqI7VkZoW0oDKB+gxkHOMDquZESnGU7QdR9w5UB1wVlHmLml+G1QHqinxj0MuaA2kANlvSB5eIGoZKCP99MytnH/gGCMDFZWYaYmLgNjjCF1UIAPAn+CxKWhI7nAnlLDv2bWaa/MCYRO7jxx4DduQtorA/yaxiLAPN3B7j8nuYNitoHijg4PDkxUWD3Qj8m3FlPOa06dXOGt+W6tczjfVsaZOtsW8+8hoIU3S7l0D+yyDLNvhDmDYP36Yy7CshFscu+LxFUSKJ0FZyjoaeS7+wWvM6BF5J7zUf0ITfV+UEaCMfzEOg76stlNwKROksVp9XEPjzoEBsQwMHQU97yafIjCUCZc44XwX0P2d7vGn0+nstwEJUz8uccL7MiIT2sh3TehR+15FxM9/nHbRZrpGtHCM6AcA79qzAgq77i9RAAAAAElFTkSuQmCC"/></button>
</div>
<div style="display: flex; justify-content: right; height: 32px;">
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=32;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAJ9SURBVFhHzZe9ktowEMfXCc9BwcQpMjyBjoKCJn6J6+zyaNJlBvpr7JYHkRs6Pp7AkwJ5KMiDKLuyZPwhW75jzOQ3oxPIe/r/tWsbydtsNhI+wGq1Uv1isVC94Xg8qn6/36t+KIMMGFGiKdzEGCGGmHEaIHGXaBdkxmXi63K53OrPNUh4Npt9WpyYTqcwmUzUPNfrVY/WsRowq6YJHoXmMEZsJr7ovuSRlPdBc1bvJUPNwFjiBpuJVgaeTWlg7NUbmllQBtziOaRpAlGUYJ/rMTt5njpjqibcJcgTePF8CII1ZNkaex+8lwQtNVBxHvh+UMR4EaT6Uh8OAzkkr2s4sxiElHA6SRAxAziv4b0xe/pexHEhMCbEkR0E0QALh8NBdsMlTiVZyPV3RMQSLUgWo6USimPyPiQk+sQ3bIhXuiFtRwZ8+EELzi7tlFfJL5DBGf6IZlQGl/7bAZcyAFqY4FxyXqweWKzGSjArIcMMlMstMteKszDIwD2lulVLYoOHKq5eJjsdBpr/KKQQ1LjE+0tN3u1Br95Rf0N/BpRgLHnNjxbocIBPicNgnd6noEx7tZb6KbDW11wbqE7a2sDfYqQB1+mu1tI2pjDilHpVLt30ZRvKAO2IOrNQrjaUYYitvBHr9TWm2q36bqhDmqQ9wcBuvr3BSXyH6DWA3a4YYmEMv3+9wc/iK5LDBf8yhlaR+Xyu+izLVO9C7Qmf9UtYxewX1ZuQPlR3s8/AbFbLV/GzTJDGdnvfhrp/jkemZmDsLJi6V2llYCwTNnHCei6g/Tvt42+328NnAxKmeWziROfJiEwYI581YVbddSoi/v/DaRNjpmnECA8RvQPwD6bILxIWNqcvAAAAAElFTkSuQmCC"/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=64;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAJwSURBVFhHzZc9juIwFMffMJyDAsFUcwKHgoIGqjlF0u4NoOAAoYRTbLNJQwfLCdAU4wit0N7D+54/gkli7AEF7U+ynBjj/9/Pjj9e5vO5gG8wmUxkPhqNZG7Y7/cy3263Mg8lyIARJarCVYwRIsSM1wCJ+0RdkBmfidfxeLzQz1eQcL/fv1uc6PV60O12ZTun00mXXtNowPSaGngUasMYaTLR0XnJIyG/BbVpzyXDlYG2xA1NJmoReDalgbZ7b6hGQRoIFi9yyHNMhX53Uqh6joq2ifAhyBN4Gc5gNsM0TCDXxU3kyVDVW/5CK7cJM1CsIJptIM448CwGBkf4crRcrCLAqsAY0yUedrud8IGaAtWF4KnAZgVLuf6lgvU7T5n6zw1IO8BAJrDPwqV5geqhUZYKqlqavoE0oJ/dZDHuFUxgRGnPkInFSsRGClpGQwwQXgMylLJnscg4hjZTYTY9lUiT9tBwkaJhlmY1o1W8BlTPUFy/S3RUSj1toCk554vGY0D1pBZKPdnsYk7RKZOZjP4IdOwDRDD8Ew760TAYDC5JlwEMrec6pK3Xgb8qqzGAt3fMjl/WgoKr3E/80CGGj6kqcfH+dkte0aETy37/R7/WmX7gx3X4AcMogiRJIIpwldswHJU1OPUbIlTFnJb8K+F0DTzFleBwgM1G9Tzjv2HtUsf9Ilke5Up4XK68S7E8Ez5rJ7S5ioAahjsm4wOYw2o5BM8yQRqLxeUYGrYbtsiVgbajYMbdphaBtkw0iRON9wI6v9M5/nw+P3w3IGFqp0mccN6MyIQxcq8J02vXrYj4/y+nVYyZqhEjHCJ6AeAfprBh+7U2qYUAAAAASUVORK5CYII="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=128;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAL3SURBVFhHzZexbtswEIYvqZ+g6OwhsDMUfgImg4csSZdOXbPJY7x0K2AP3dJBGeOlKLJl6hJ58WZbgHchgyV4MPoezB3Fk0iKShwbNvoBChXypPvveKSpo8FgIOEdXFxcqPb8/Fy1zGw2U+1kMlHtpmwkgJ0SrmMXFkJsIuZNAeT8Lad1kJi3RHzodrtDfW9Bjk9OTrZ2TjSbTWg0Guo9q9VK99p4BXDU9IJdoXewEJ+IY90W7JLy16B3mrXEWAL25Zzxiahk4NAUAvYdPeNmQRVhxXk2hvEigyw7gnb7o+6skqHdYlFvQ+MPD7/g96IBjU9tYDOrKGkfmE6n0iQKgPYGCUGkexzSUAoaL65AupZpKPIxIQpbEaZ6VCqf5LtaA9kd/Bzp+xrGt32IRQhRmkIaBtgzgqveOB9UZPD0GAM6BDmfw1xKtBMQ92/BtFLY0acS7crIvBmIZABClsHwM2YWyMaOGNOKNuZzeRacDLTgZp5iZBFQXF6yJSQQw3Oa6Q4mgWXR1YbPmPf48RbuxlhPdz04u8K0im/wpaVNGC3GIY/AmwGc/wDnNSyGtK0IMRcGGLFdJ3b0jF+ALjIrhXWo1Dq2RpEKKkKeVk9AOwrQ0Vvzb9SEpYlWRTULfgG+qDzwUrMDq5k+HZTbfWweIN4FLtfrfoyBRnB/qftMkiUuRoPWKXSwScpKVecFvQr+4eVW9Sug87M27gW4VqLvbdzxaNfESw1ewldaQvEjPBmvzMZ/cbcA6Jw6y6DcCSMZBoEM6OKiEfn/IigrvNglK5cxv3VFaNQK74QNHNBcwvPoClUK3D3por4ERqM8zbnuDJb4l8aJToeSilZJotqC1g3gdgK96z6MYnweESKAH3/u0YuNOhMe6pfQhM+LqgboZuti3BI+rBZb8aFEkI/hsDyGVn8ND4wlYN9Z4Hk3qWRgXyJ8zgnvdwEdlejItF6vd/42IMf0Hp9zovbLiESwkG1FcNS+DxLm//84dWExrhB2vInTEoAXC6Gq1a46lAgAAAAASUVORK5CYII="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=256;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAL0SURBVFhHzVe9choxEN44vEVmXDCGwsMTKBQUNMSNq7R0Smk3rqFPcylx5y6lK9HQwfgJGBenG0+GyXtcdler+9GJn5iB8TcjBHur/b5d6YT0aTKZ5PAfGA6H3Pf7fe49VqsV94vFgvtDcZAAT0oIiUN4IYRDxOwVQOT7SLeBxOwT8XkwGEzlew1E3G63301OuLy8hFarxXHe3t7EWkdUgM+aAhwLiuGFxERcSF/gmJLvAsWsriWPmoBTkXvERDQqcG4UAk6dvUdYBRZwLnKPqogWf0aQZXOwtgOj0ZVYHLL5Dxg/A/TgGq5vu9AVO6QppN0buAv8GRhrbrHvjKDxmDai5XKZF7BJrgBoc5KmcyOPGEazXSmda41NqcJXJVacKhD/MBZx8iZYI0cYjY4qyY21qEUG64oEDqjyGpeIrroxCjvGwnEqGEfcgQCT65qTzRNVVx4VIONCAZwMGUVIWCEWIN8dKorFIAIqhCJAJwaf7kKYTBwNATSnGFtAQdyUFJKScs65oT+XWJ4XEKGKE3BN6TKOR11ACA4Slg7JaH1YkxvjBDNBUP9CKC5WXk/oy4u7kgxhhwDJPnwLcLgppsiB5xp962s1MjayfhpvgYfPILqwGnYntqyUrJ1wcPC2ELdsxX9d55H9gvH9CyZgYDYSGyODdI05oP2has9SQPN+2FfAqDVc0IlltfojPxFI/rVzj44azEMHd8TMNX54Bd0ecJByQ8tg/pP8FXy/8VbnB+tUxhHQ7/kRew23KL44Lbmd8DeXxJe32SrzJmXk1b9rF5QFzH64Y7q3odwrqPzELf8FX/gzxabQk9DrUQqYxDoo7tUdPJlXGH97BMoHR+BMPeFUBZv8aAY2AZxK9HvB+iisqJ01/guKQ+m5/xGnU3cSLM4Dbi2UR+pTgTg8OeHjnIgIp65C7J7QqMCpRMTICdF7AZ3f6Ry/2WyOvhsQMcWJkRO23oxIhBfyXhE+6223IsLHv5yG8GJCIZ74ENISAP8AxEk3im51hQsAAAAASUVORK5CYII="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=512;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAMUSURBVFhHzZe9UuMwEMf/4fIcFIydgskTCAoKmoTmKtp0pkwaaijorjEl7mivcnNyQ8fHE3hSWB4KXsS3qw/Hsh2SIxPmfhPHtlbW/rVayfLg5uamwj9wfn6uz6enp/rseHl50eenpyd93patBDinTNtxGyeE2UbMRgHsfJPTdbCYTSJ+nJ2d3dprD3Z8dHT0ZefM4eEhhsOhbuf9/d2W+vQKcL3mBnaF23BC+kQc2HPNLiH/DG6zmUsOT8C+nDv6RHQi8N3UAvbde0c7ClrAdzl3NEUM9b+lzK4wS4ExjnH8c4SRLUdRoBhdYD4JbIGlzJApvggxadsalFRPqf46Xg6w+S1JkOdLLNMU6d0dptMpposFfhemTpPsF9nYnmoVXcp7nAwGCEOuF2IwuEJmTTXPz89VjYxoVRRVrOw9o+JKAFUk7b3DllMTFTpGg4zIJuJKKkXVuW2/LvvePAuCEQ0JufIocT9b4M3e9ZMhTQTixzkmQYBgfo2Ym0lSLwoHfcm3/JORC8cED9UrHib2VhNg/qoglURkSzqUBXKSuFSrlgw5ClvEvr0IlEVO/29IFlOENHaDkxNcZWVDTJOAemYv1zAWgtLZVVJYcsjEJS6az9nhsNBY8XgpWUkZV5EQn46xywPhJc0adH5163YESOlX0IlED/Zq2FqArGioqJ2Irny8WdDvzDzc62RNr9qo2ESy3YnGLDC7GE4BEUlcNxNOJ9MO0FowW9DgU7t+IhsOeMfidlGjMaegWZAMJS02PN0ELr3M2RJeiEJ+PoK8DmlFpITmg0z1bom3ZPUwuMWFkq9OwE6IVRVHURXxIYydwqbvRRST1eCGs3uYhY59sm/vXUCrBR7lErNpgkQXCIrcI4Wu2XuaTrRcJ2QTNM3oR+RIEhNmU7MEr9xsZ8ZjCi2R593BrDel3/1GvL01O8F6ITK5sNpS7wv24Zwzm98Fe8YTsO8o9H0ndCKwLxF9zpne7wLev/M+/uPjY+dvA3bM7fQ5Z9Z+GbEIJ+SrIlyv130VMf//x2kbJ6YtxDnexukK4C/dLf3J+tQ1fQAAAABJRU5ErkJggg=="/></button>
</div>
</div>

<!-- COMP.3X2X -->

<div id="wonkieGrid3" style="display: none;">
<div style="display: flex; justify-content: right; height: 32px;">
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=1;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAHpSURBVFhHzZcxS8NAGIZf21AcikNnKTSIkzg4dyilIPgvnNz1B9TRxdFB8Bd0qItFKFGQdvYHtJBiOzkIDoqltI33xbs2SVN7uWuiDxx3+Qj3vvfdJXe3Ua1WHUSgUqm4dbFYdGtBu912a8uy3FoWKQNClAgKBxFGCBkzKw2Q+CrRZZCZVSbSpVLpnLd9kLBpmsriRD6fh2EYbj+2bfOon1ADYtTUgS7UhzASZiLF6xk6Kf8N6tO7lgQ+A3GJC8JMLGQgaWYG4h69IJgF14CyuP2IkUWlxwNyeE1oTcHo6gQfx6zcRzPgRd2AfYNhjbd1aLVaTnRs5+tox3nb5uX0gcejQdqKGShgs9FE9ukaGR5RJaW+8gvImLypCGlrLUL2b8WUVcZu4edZAT0Da0AzA12MeVOVlPcAkTSk/edTkGZ79Tnt1fJ7fw/DswsMmxZGd3VMXoHp+ycmzxaLvcA4PJAalTgtKWSgh3GtjlGtw76APRj7rKDDnutsPZhI87dkUTBQRnbQRW5wi63GvOQodlnm78jjGqBUJLkYvYfVWQaSMuEVJxSmYL34DMSdheDoiYUMxGUiTJwIvRfQ+Z3+Df1+X/tuQMLUT5g4sfRmRCaEEVUTYtTLbkXE/7+cBhFmgkaEsIzoHOAbZdhIm5JzUogAAAAASUVORK5CYII="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=2;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAHYSURBVFhHzZcxbsIwFIYflK13YIjEJVIGBqYcJJygM9275DIlCxuIE1QdCGLgIu77HT/qmNDYToP6SZbtIPn/33PysEfr9VpRAMvlUvfz+Vz3wn6/1/12u9W9L14GRBS4wi5iBPiY6TQA8S7Re8BMl4mnxWLxZsYNIJwkSbQ4mE6nNJlM9Drn89k8bdJqQKLGAn3BGmKkzcTY9Ff6pPw3sKb9LgkNA0OJC20mbjLwaK4Gho5ecLOgDcSKn05EZWkmAdgm4raAhV9GRLMZUZZxMeFxhA9NlIHyneiQEm0qoqqon2Wrug9mt9upUHJSqqjMhClSxdVUqY2Z+wLt8Axw+j+5++LoXY78WzDGjD8cec4RF1a4yAjxMysp3oQbcGEjCCMtzDyQ3gZ09NxC91/oZaDiqCGex6ozUV+Bhjc8RfS5mUcQ9xUAFCIuQgcebl7riqhb/WsQY5xY7GNUFyUXnJERBxmPURHRPgIcyGnJZOC57jw4cku5CqLled1kHoM+Ez7qn9CmkYHQbeiLfVi9voSPMmGLg7iv4A9pGBg6C2704CYDQ5loEwet9wKc33GOv1wuve8GEMY6beLg7s0IJsRIrAmJ+t6tCPz/y6mLmHGNiLCP6A9E35HWlwongIhgAAAAAElFTkSuQmCC"/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=3;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAIgSURBVFhHzZcxbsIwFIYflHMwIGCoOEFgYGABdla2MMLSrRLsXZKxOUIPYBY2Uk4QdSAIVaj3cP0cOyQhIbHToH6S9YKD/P95sZ3n2nq9pqDAaDTicTAY8ChxXZfH3W7HY1EKGZCiSFI4iTSCFDGTawDF80SzQDN5Jp6Gw+FGXMdA4VarpS2ONJtNaDQafJzz+Sx646QakE+NA5QFx5BG0kzURQwpk/J74JjRuSSJGahKXJJm4iYDjyY0UPXTS5JZ4AYeJS6JmijxCk6w3dqwWNgsnkSfOnoGTjb0ax2YTFbgeSsWO1Dr28ySBvv9nqrhU8sACobFrkSPZeBuSk0iOgqC2hoZ8OHrAGD0utAWPe3pDAwWvaN6Durqk68Dz0zt4B31Uh6Ba4tsZCCTfAve8QmhhFiU+Ym9EhVyDNxDzAUUx6Y6AQSlDPg+NkItMzCh40F9FXBBi5JYvgk1NbIQWQU/QSiAPZ/AymFrfx5Z96cjeBg1JmYdKxbX/RY/8+n2gmjMpuEy3L6tgK3MWF8eslpS3gfGLxZf84ePN7YNL2DRr8HEwTsmvC6Lyl9R34jaS/j0CZNzwHFYw03JtID47zAWf1EhLEof/UXcbIJKMMxAMBeuJXVVoIYURzS+BX9LzEDVWUg7J9xkoCoTaeJI6rkA63es4y+XS+mzAQrjOGniSObJCE1II7om5FNnnYqQ/384TSLNJI1I4SKiVwB+Aak7FdJOpT+fAAAAAElFTkSuQmCC"/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=6;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAISSURBVFhHzZcxbsIwFIYflHMwIOhQ9QQuAwMLmTiFGXsEOEI6hlN0ShY2CCdADDhiQL2H+55jBxJCExuC+knRS4Lk/3/PdnhuzedzCRaMx2MVh8OhiobNZqPiarVSsS61DBhRoihcxBgh6pipNEDiVaK3IDNVJl5Go9FC3+cg4V6v5yxOdLtd6HQ6apzj8ajf5ik1YLKmAe6FxjBGyky0dcy4p+R/QWNeriVDzkBT4oYyE1cVeDaZgaazNxSroAw4iycRRBFeiX6uyaUJ9ymIZtAaeOB5eA1mEOnXtrgZSL7gw1sCDwWIkAODHRwsq5CxXq+lLagpUV1K4UsGIJkv9C92kLaDgVBiztJRM4cyoO/rE3L872CSMawCZk8X47509WNtQPgsFWZchkJIEabTAMzNhLUBNf+A4vpZoaviMi2WuyCBww4Dn8IkfZEyeMOdsIW90M8WtC8bCGfEHuXtIW1dgZ80VNKH13cMuwPWwpBA9L3EyGGaK0tNqCOy2opqvmnRMck517sB73OLohrSJG37L+EkAOHjl2C7heUyzTwUMQQu2SNOn+L+ZwBxuoMgjgOY9PUPDigD1Dg+ZDFaYJrVrALPMkEai8W5DXWagkeSM9B0FWjs4jnhqgJNmSgTJ0rPBdS/Ux9/Op3uPhuQMI1TJk7cPBmRCWPE1YTJ+tapiPj/h9MixkzRiBGuI3oG4Bce73N7IbE+eQAAAABJRU5ErkJggg=="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=12;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAJoSURBVFhHzZe7cuIwFIaPWZ6DgsHNDk+gpaCgibffdjtRJs12OwNFujROGT9FKrmhg+UJPBTIQ8Hse3jP0QWMsS0FArPfRMhIQv+vo0vkYDabFfABJpOJykejkcotq9VK5YvFQuW+eBmwokRVuIo1QviYcRogcZdoE2TGZeLLeDyem+cTSLjf718sTvR6Peh2u6qf3W5nSk+pNWBHTR1cC/VhjdSZ6Jj8wDUhb4P6LK8ly4mBW4lb6kycReDeHAzcevSWahSUAad4nkKaUspNQT25atfehiib8JqC9CWCKML0Lk1JhfwVvgUBhCG1CyEIppCaKhduA9j5c2KeG0hfnmDNYhBSgow5liQQTT0tLJfLohlZxAzopNSJC1NeRhQcWBFL8/XwG4417ZC2IwIDePwjcWQCaFy15FvIYA0bWZ37DLbu5QAd98ofwMPAPDYwZAy+YjuNhM0aM/YDvjt+p7RNNNqRccGwKTvGuRnB1XR5tUW8doE/KUwjWrEcfj86hm/wMyA3OMtu8tdnXP8oL97gQRc56ZQvEFeB2/XnE9rkAt481UnbROCvzi6FDqIQzwIMvfgV4omY62SqW6EbUf1ZgPuZ84JTsmcB098Zj7FWI7ipO0vls+Ec0iTtLjZuALdTkuCcMmC4zfAPySBJdJj1Esthi59UTwyHQ5VnWaZyH9Sd8F7/CcvY+6JaA/TwaYvRE3tZPWzDe5kgjfn8eA395IPo45wYuHUU7LyXOYvArUzUiRO17wV0f6d7/H6/v/rdgISpnzpxovHNiExYI5easKNueisi/v+X0yrWTNWIFfYRPQLwD/QzIv3QIblcAAAAAElFTkSuQmCC"/></button>
</div>
<div style="display: flex; justify-content: right; height: 32px;">
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=24;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAJySURBVFhHzZe/btswEMZPrp/DgxFlKPQEjAcPXqruWbtJY7p0tgdvXeQ1Wx4i0uLNgp9A8GAKRmH0PdQ7ipT1hxKZGDb6AxSaFMPv0/FEkc5yuSzgAywWC1HOZjNRKtI0FeV2uxWlLVYGlCjRFm6jjBA2ZowGSNwk2geZMZn4Mp/PV/J3AxKeTqefFicmkwmMx2Mxzul0kq1NtAbUU9MA10JjKCM6EyNZVlwT8iFozHouKRoGbiWu0JnoRODeVAZu/fSKdhSEARvxPE8gSXJZGyLHfsN96ybMU5Bv4MlxwHV98H0XHCeERN7SkYQu9sO+63e0YsZoIPn9E/Ysgphz4FGALa/gh3oL+eYJ/FcAxphssWC32xX9xEUArIi4rBa8iBjgyhngnRY8KlC2YNiZR6yAoNOjA2kPRyA/QgZ7OPB2MDM4NpoSCN0yUm8vD8APe9luZmRKPg/D+RUeZI2DGJs9w3fVhCShjxPDIHp7qXraILRlNOyIA/pwiTBXdNrKaWJRjL/MfMAA5YNm/qUB3dUw2oO1AZFYOKgutzjHxKsulYyWERh+CyRyUJvMrr8NJmpvwd+y0EELEWU4BBD/cnFFzMtL3u7De7RLxxHtWNL0j6w2SUIHHCFO4ALkurgi0vUD3vsc8IPsP4zaLY1lXUMOR/yrVjXP80SZZZkoteD3Ilxn4n+y9Qbyb+bXUuwJ7/UlrKMiIHKgnIbLbvYeqM1qtRTfywRprFaXbajxa3hrGgZuHQU173U6EbiVCZ04oT0X0P6d9vHn8/nqswEJ0zg6caL3ZEQmlJHPmlBP3XcqIv7/w2kbZaZtRAnbiF4A+AeJsxlUBJisoQAAAABJRU5ErkJggg=="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=48;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAKJSURBVFhHzZc/ktowFMYfG85BwdhUnMBQUNDgaqu06UwZmtRQcAC7TLq0W6VZu6GD+ASeLVYeJsPkHsp7tuQ/WhlplzGT34yQZcv6Pj1LQhpst1sO72C5XBb5fD4vcsnpdCryw+FQ5LZYGZCihCqsIo0QNmaMBkjcJNoFmTGZ+LRYLHbiugUJj8fjD4sTo9EIhsNh0c75fBZ322gNyF5TA7dCbUgjOhMPIq+4JeTXoDabY0nSMtCXuERn4k0E7k1loO/eS9QoFAbuJS5pmnjHJ8ghSRJMuSi3yfMEomgN6wjr6KtosTaQrF3wfR/8/TNaaZNHM3BdHzZPGWQbrOMOYBZZujgej9wECz1aLbnnYe6FnIn7JYyHHj4L67tl/YDHotwFaZsjkEfwZZOiLoOfn7E8nYBTPhEweEnFpcCZTPE3g1ebIAgzHcQ8wCqy13GA14HarzIC4AU8jGMehwH3Gu+YuGqgEASPy+jqDSCxEK1S/Y6JbgPYKDVWf1v5reN2z1hYidMY8SgaVNYZ1WA0oEuqqWLANVyVg9AuCldnAWOskcqetiMgxojaW1HXFITGLPhbZgqO49RJ3ANwlVmAZK/ttcGZQDEPLKbBA+1YTqc/omhmOmnKr+ARQwDpEzw3tPLkF/zAvF23jdwt2S/F7AWU6V6w+haCh082tPrNZpgG4PokH8DjqqxzDTsDuM6v9xngKIdsHynh/gq/WQgBfvQ0TTHh8PMCiNl3jI+ZalN673/E3a7cCVYRKMdCvaXuC9KQ4oT9GOiJloG+o6A7J7yJQF8mdOKE9lxA+3fax18ul5vPBiRM7ejEic6TEZmQRj5qQva661RE/P+HUxVpRjUihW1EawD+AYJ8TlzE19UlAAAAAElFTkSuQmCC"/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=96;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAKZSURBVFhHzZc/ktowFMYfhHNQ7Ky3YPYEMgUFDa64wXZyGW4ARbo0Tom73CBN7IYO4hPsUKw9TIbJPZT3ZAlkIyMDgclvxiNb0uj79PTHUmc+nwu4gPF4LNPhcChTzWazkelqtZJpW1oZ0KJEXbiONkK0MeM0QOIu0SbIjMvEp9FotFDvFUj46enpanGi3+9Dr9eT7ex2O5VbxWpA95oauBVqQxuxmeiq9MAtIT8HtWnOJU3FwL3ENTYTJxF4NAcD9+69ph4FaeBR4hrTRLshKFII/Q50OvT4EKaFKrCAddMUnzNVTNwGim/gewHEGQPOOXCWQRx4aEKVm6QhdLBuEODjhWCrcsJ6vRbnSDjgTslFor4xR3DAPH7MkeSRYJjPk1zkCcd3JqJclTVA2o4IFPDxjgmfwqTMQDwYoFKd9OsMMp7A0vsJb0EMEH2Hz8+q8BzKTCMyAiwSx87YIkB57h7bcBpAB/SzQhNcREkkOKMhAcFMNVmHCabKZDk3TTfjNoDkEY0pNcwETkT5bhrII1YKo8kkpzlQzodq5Oy0MlBBRcQcgdOJiqiouIalax4g2lDIWWlim6iINwAGGWxz9W2BtNUq+FMmrWEw8NRrE/kW5d106cSy2fxWn27ybb3ZZ3h5xeT9A2OhKSD9gUsROEwrYTmiT0vttuIDKtzwCi/GGp9McWFmM/B83KbDEHzfgyDGnTNZVofFwkUG0vANZrglM4jhC+7Fhx5PloArBViG23Rc9jzJf8HSpY4cDqWP/iMuFuVJ8BCBci5ctiKugTS0OHHhHPj3VAzcOwp65pucROBeJmzihPVeQOd3Osfv9/ub7wYkTO3YxInGmxGZ0EauNaF73XQrIv7/y2kdbaZuRAu3ET0C8BeEPvrWLSw8KwAAAABJRU5ErkJggg=="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=192;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAALNSURBVFhHzZe9ktowEMcXwnNQMPiKG55AUFDQcGmuSksnl6FJDQVdGlyeHyF97IYOwhN4KLCHyTB5D2dXH0aWxeGDwOQ3aGSkZfcvaSXkxmw2y+EDjEYjUQ8GA1FrNpuNqFerlajrUkuADkrYgW20EKKOmIsCKPiloOcgMZdEfBoOh3P1XIICdzqdq4MT7XYbWq2W8HM4HFRrGacAPWpycCvkQwtxiWiquuCWKX8P8mnmkqYk4F7BNS4RlRl4NIWAe49eY8+CEPCo4BpThHsJshjimEqmGiyw3+83oNGg0gf/nB2SCV/n+4EOovV6nZtEHOhwyoFHqsUgXeaM+oDlnPOcM2lbMS3sdOG5aUIxxSFoBy/90CFAijOdRTl32Ao7tsyjNEWX3OmPYlsC0nypRuQWoPpL7a42EsXyZaq+Fn6rs9AsJ18Xvv5KIUojwFE56MJTD6tkD6dVTWG3VY+abA8JbGGX2mufwN5ootiOJOzCuKseHYxfUdp2Cl7fhyAOMBlfIMR29uxJA0WPMXhGXxIlkn2Bz7ZvNRtlVB6w0xyWoDU1E/E9W0Ekc8Blc5WAEsp5JV0KVJJa669pmheIgnSHK1iPbJ+oJzdZsBBLxKM3GMumAoqtcuCPrK4G17ucApIsgMkUh8IjeLOjK5p0Y9lsfquvHyetbAEFBu97U5xJDtE3D0/ETBbVrW9Lxi7IIPB98KksaNIw2X98F9/7fmBsO5MM5Ar04MnI7tjHI1oEJ0J48TzwRJnAT8tRS9UIbpUwRHMGDLcQfpAEwlBOoWtnxv4Eplu0xV8t/FfwcJ67JAr7yAfR69HBgZ4Sd64Ul9JH/yPO5/ImWCyBzAXHjvjHUAwdnHD/HT+QkoB7z4LOfJPKDNxLhCs44XwvoPs73eOPx+PN7wYUmPy4ghNn34xIhBZyrQg96nNvRcT//3Jqo8XYQnTgOkFPAPwFomH5ouBPA9QAAAAASUVORK5CYII="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="T=384;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAALpSURBVFhHzVe9juIwEB72eA4KFKh4gkCxBQ1ssxUtXSiP5rqToN8mabe7dqtrLmnoQDwB2oJE6ITuPXIztsexHbNwi0D3SV4vzjDf5/kxTmOxWJTwDxgOh2IeDAZiZmw2GzGvVisxX4qLBDApwSV2wUIIl4g5K4DIz5GeAok5J+LL4+PjUv1vgYjb7fanyQmtVguazabwczgc1KoNrwDeNTm4FuSDhfhEPKhZ45qQfwTyadYSwxJwK3KGT0QtAveGFnDr3TPcKAgB9yJnmCI8KSggyxKYzRKcC7VWR1FkkCQzmCUZfGBmgPyirWtMB9F6vS4F8rgMAehgKsNQzhDGZS6fauRxqJ6FlX3sWtlII9sfcYpDUJPjckykBiETRalaEJB2JqG0i0rLzAD7CVGw6Z+4jRTk8L4FCHtdCNRK8DQB3CHs9mbYpJ2JoNvDvzuwzBhFAtP5Fnlz+DHBz4Z/ASUGUY8Ap8QOL9tFZZymZRpHMg2eVGHgy8h4JtJgh7M0BEiQYU6OU1UPPsepItUjLH0lIPNePbtIgN4hO3e+wFGhZ5RTXayuHYoUNloZ105qbcgrIM9ppGWsKrfyzeKw4AwvssicKCgBvmGmtOoCQRhbjtGLzKFW4H5WUFGpLYuN8OB6qiJgdMEfSKZjmL/OYTxN8MhQKPZY24jdvlojuJ+DLog+cNogCIJqqDWAjtUFD3Rj2Wx+g+gkRDh50gbZyxyo46q1ETxjCGD7Br8MriL7Ca8497pWg3nBNnxb0ufA6Fssen779oLHMB6x/QaMyStE8P1r5VjabWHeaUC/38fRgI4wjOB5JG28yN/FZmqwj2LMsdEBYa0mFDCflh2eCV47hvBLHUNDtjVxEre+lN77F3G5lDdBnQJZC9WV+lYgDiYneH6O7wtLwK2j4HtPqEXgViJ85ATvewHd3+kefzwer343IGLy4yMnnHwzIhEs5LMieNen3ooI///LqQsW4wph4ktIKwD8BVng1yNYgMFqAAAAAElFTkSuQmCC"/></button>
</div>
</div>

<!-- GRID LINE WIDTH -->

<div style="display: flex; justify-content: right; height: 32px;">
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="if (Cur.style.display=='none') { Cur.style.display='block'; } else { Cur.style.display='none'; };"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAH6SURBVFhHzZYxUsNADEXjHAFa6KDhDMlBKDlJJieh5CDJGWiggxauYPwd/USWv3Y3gYI3o0Fj7P3aL62dbrPZ9Isz2G63lmmG9Sxro6kAL/p1c2eZ5vrz3bK2Ypb2NwXiEGXU8PfW3AKpA3xYiV59vFk25fv23rITdCRzQxbAXXu86H6/t2zKarWybF4MClFFzArIxKPoer227MBut7PsAIvxhagiJjMQxSGsxEnf92Mo8Ex0Qc1FOoQUzsRrPDw+WVbmWICy/lKUOGcoujAWoKz/y52/vjxbdsAXMWtBTRzDh/C9R45rJXGsSRc86QwoKKwGT7Uv7lzRDdG32B937VEvICWOoxmP5cSBc3rfdd0YStx/DzxZG+DAGGB4oWCbs/DwGp/zQfyzDKwNeC+upTOANXxEhgUsO+F3V3uenDWERIlnttdIC2CPGaS159nzkckpKA0hTkFp595mCMaPE/EnYXYK8A//SfVkPa/12BOPIVji81jrX+ndHint3gNNaFeHUImXet4i7pkV4NuQvdsh4geLwiVxZT8YC1BtaPmqtRLFaT84OuCLUJVeKh7x4qA6A+A3O8+sJ5MCVCsw7ZyJCAdPQeHMevL/fpYT/mTKXkAKZTUdVeIgLYAoN1rJdu2pDiEWwEKMGv7emjioOhBhazJaRE8sFj+p8q0veIf4QQAAAABJRU5ErkJggg=="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="gW=1;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAF8SURBVFhH1Za/SgQxEMb3tLaw9ErxD4ggaKfN1iKWduIj6Busj6Cltd2VovgE2mkhIniKjcWVgi+g+W6/wK7ZuZ0kC/F+MMyQXG6+ZHY30yuK4idLyAx9MpILCCrB5eYDozqHj1uM9KgFVJN+7F8zqrN4tcdIL0YlAMmlpBIQoxExm+f5KWMHJH5aGHknB1+rw+zze268fmPU56iL+BDaXYvJ3431aDsYcLHrpWcGhL8FN/SRNAporTl2f1KGGiadgiOgNTk4ovdAEhFWggP6M/oIwgQcG3srw1hqAlTHb1miB+v0LTSVIewELC/0EcQJ6IApF/BMH8H/OgHcXtUrtZV7eiVNN2Q3J7BGH4CfgFtjuAcAYsuAHnPnZajFETCxDENjy8ZwBe9igKAUGMOc8G2QGpTGExBF2D/fFkxASg78SnBhDA3cnWCYw288EFsytFFoqeZfV8btVQjYOdZLuwfJm9LpaMv/0tTZAG3SKkECuqSbL2EEiQVk2S+gy5MnIt2i5wAAAABJRU5ErkJggg=="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="gW=2;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAHaSURBVFhH1Za9SgNBEMcvWlhZWCrYiMZGELRTkGv9wDewtjRvcBY+gJba+gbixxMoWGhhIRhFC4uUgi+g87/M6N7d7rqzCSz+4M/sJVxmdmYzO62iKL6yhIywTUbyAKJKcLp0x6sqO/fLvAonOADT6ev2Oa+qzJxt8So8mKAA4Nzl1AWCCQliNM/zfV43gOOHyZ7aOfiY72bvn+Pl+4u9Kf60ifMQyq6tzq9Iq6QWC+sXUg1533VmgP5fAOcbpJvyqQ/Wc/2lFmsA3pofsL0kPbMVdtnW8GWhEYDXOdKM3R6S1kmzbPEMTthacAWhK8EF2zZbwXy2nAUf+jMApAxCl20ElQC86TdZYCs8sgUoiwNbGXQZ2COhbR2XT79I7eUsKIgrgckRW7DJVsHgAXTYYvee9LsYLADzf4/yRBAfADqi1N5sRkoqAeD2Mq9UL2jHQJpSALYbUp8BNBpcPmCFZKZe2YSALgDUHJeOXESwciNC+A6lUdAIwFkG7M7T6//CNaBYBxIMEBgmMFT8cEt6I02TUHP8Vl1jpDVS7Wr2TUfhJYDTaxY6oU34LvBACs6RTLIw8dSuZkIBdo73XbsHyYfS/zGW17FNNiDUqUlUAMNE3wmHTOIAsuwbeXyndl8lnNMAAAAASUVORK5CYII="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="gW=4;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAGtSURBVFhH1ZY/SgUxEMaj1h5AS/EPiCBop822ingDsdNSG+u18ADa2okXEBG9gZ0WFhYqNhavFLyA5ns7A9lssjuTXQj+YJjZhffm28lMkomyLH9NRibJZyO7gKQluF57oqjO3vM6RXLEAtykn7t3FNWZu92hSC5GJADJY0ljQIxExFRRFKcUN0Dil5mROjn4XnozXz/T49+vjmbpbZNoBcRf/UEezJP3aKtGvyl4sLZAto8XeoICxF+/Tb4D/JfbxC4NAeLkm+QPyHcQE5G2BBfWHqvQnJBfIa9ELwBNd1yF5p58D2oCROVHw4Fza1tVKCW0DLoKHJLfsHZUhead/DJ5JXIBGLnLKjRX5AdALoBHDqUHEAS7GT8Z82oNz0rkAnjc0IDoAwiCcVXgWYwCuQCMG7reN/QDQGV4JBXUBGC/do/UGtjn0fW+MYvWImcBEzoT5BWIwRtSIv0FMLw/KGkIaF0GH/co7iB2JAcrIBbBm1AHseQgfQkw82fWMAUw3AcUFWFa74S8b4uO5wBcxdjXg+yX0v9xLffxj1RGmtQlScCQDLcRJZJZgDF/tL6VY1lL+MgAAAAASUVORK5CYII="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="gW=6;Z();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAHPSURBVFhH1ZY7SgRBEIZnNfYAGooPEEHQTJNJFfEGpqZ6AGEM9gAaauoFRERPoJkGIgarmBhsKHgBrX+3SnpmumaqmoXBD4rqWVjq73p0d68oip+sQ6bYd0bnApJKcLn+yKsy+08bvLJjFhAG/di74VWZ+etdXtnFmAQguBZUA2IsIqbzPD/hdQ0Efp4duoODr+VB9vk9M/r/2nCOf62jNqHsujX4O/sI8n+tZ0D6FNyR9cgW2eM7gaiA1poj2M54+UeffYSmLNQEtAYHEvyNDC28OfpqRBPhL8EZ+1syCED6H8iOyRLwCzgiw4632Q7IIAbrBEoCTLUH4W7PyYzBY2XwZeAq8Ei92BZZwzg24RPwwv6CPdKPcqAHMI4Jo2gXgB0iEEBQdD/Sf0+GHgDV0TRgF4COFxA0BD0go+jMgq8EAGmPscp+wN5ISQBur/BKjbLCPoHYDenPwCv7KtKgS+yN2AWgy4EECkHdpUGdB1JNgFqGBTIZOZl7GI5m6f5T9hG0B0o0A6oIOQFl7mE4mgGCH46XVbTgwNcDSK/MvICpwIgqwdtofBPKud16PStIFrXdg84fpf/jWV6leqUK1qAhSQImif8knDAdC8iyX44Qo75rki/QAAAAAElFTkSuQmCC"/></button>
</div>

<!-- V-Document-Flow and Z-Index -->

<div style="display: flex; justify-content: right; height: 32px;">
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="reflowGlobal(rev,0);"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAHLSURBVFhH7ZcxboMwFIb/Vr0FQgJmDoAieeEA2ZCqLsnaJVu3SDlADsCcrVK3HIAFKeIAniMkh3O0z9gQUIbgpzYs/SRkA4N//vc/WzztdrtvzMizHWejd2C9XiMMw/bhI6B123Ek4HK5tA//GiFEL2D2EvwLeLHjXZqvd7wWQGzvIYH0M0fm0bzaQxzO13fpFnn74j6THfAWK2xoVSnNFW22ZnFN8oZ9Spr0uyjFajFtcc30EngJstXS3iwhRl/owbezpciQTF/fMQN+YG0+QzXtpEfVVBMtLDH3U3ET4PmI2olErdqJpUJ5pCEOeiem4tgFPgKbtGNZmYmmUeQJEflUDDccBVCtjQVUBYW+CqrWTUH1d/SfcBRAgRc2iLJGV4XK+I/A1X/CWcBtEBso4z98V/8JdwGDIBYnrUDBNICAewE4AgZBlLoVqhKmARj+EwwB4yBWxn9qAIb/BEPAMIgFDgVvA+pgCbgGUZ8LNDA2oA6egD6IhjhdOG9AHTwBgyBquPXXMAUMgsjcgDqYArrNxzA+mNzgCWhOKGSMONaXHB9MjjBDmCEvc+S5vkqUH8weJJgl+D1mFzD6M3oU+hfw5tdsLmYuAfAD7HCJvNb4uEUAAAAASUVORK5CYII="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="manageGlobalZ(0);"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAG7SURBVFhH7ZcxasMwGIVfS29RAo1nHcAUtPgA2gwhS7J68eatkCWbtyyds4SCNx8gS6D4AJpNIPE5WsmWnTh1iSTTeGg+I2RLhv/pf5IlPywWiy8MyKOqB6PJwHw+x3g8LhtvgYhb1i0Bx+OxbPxrKKWNgMEtuAt4UrUeRYJguQUcB45qapMjz0XlveHdf66armCeAc7B0xRpZxF9ot8Z6QWXWFhAwOIYcV3CEIwxEKK6BfmhUHfXMRNw2IOzGSLXhVsX30cUUThcvQOGmWb6JWYC3Agfkasezsh2SNUtCafoeONXjC3oGlu2a8LDe9UfvcRiDlySoYkv7DHIfklvAUWyVuknCKcmya/oKaDA51bNPovRS/oJyDZYlfHtRi/pJaCZfMSD4dxrsBcgPstrFZ/N/M7VoYO1gGyzQuU+A7XLfomlgPOlR40+PJdYCTgtPRm/Hb5IYiT6W4GFAOH9spr6ArkDFeKqybBZpdgf1KMGZgKyGMGk9l7CkUYTTMQZj9IAAY1EZgheRqpbA+MMnIJfIs4C6s4EcwvExk8IK88AP4vs40YW3I/lgwtoWXAr5C9gbcF//zsGvgFzZJzIDSt2GwAAAABJRU5ErkJggg=="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="lowerGlobalZ();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACUSURBVFhHY6yvr//PMICACUoPGICHQEJCAoOioiJYkB4AaC+YRnHAkydPwIK0Bra2tnAHDHgUjDpg1AGjDhh1wFB0wFOGp09xYagSEgALlCYaPF3dwhAx6QqUhw78GLoPlzJYQHnEADJCQIlBR0cHB4YqIQGM1oajDhh1wKgDRh0w6gCUuoBeANQFhNUFI713zMAAAP3UPZvfeB3RAAAAAElFTkSuQmCC"/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="raiseGlobalZ();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADcSURBVFhHY6yvr//PMICACUoPGICHQEJCAoOioiJYkB4AaC+YRnHAkydPwIK0Bra2tnAHDHgUjDpg1AFD2wFPnz6FYCifHEC+A56uZmiJiGCIAOKW1eQ7YTQNDCEHABPbiRMnEPjYA6gEEDw4hiIHVEo0YIHShMHjZQylpZugHFRwZdMkBmQpv+7DDKXSUA4BMISiwKKU4fDhwwi8Io9BByqlk7cCRa7UAipBBBjNBaMOIN8B0qEM06GJbnookXkOCxiNglEHDLgDUHpG9AKgLiBG12ygwABHAQMDAM0OW0k4zJb3AAAAAElFTkSuQmCC"/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="ceilingGlobalZ();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAC4SURBVFhH7ZdtEoAQEIbVTRzEXdzE4VzFPSqKkRF2+9h+7PNHqeFpX2M0GWMWQch8tGSkCmithZQydH7BNm9oTwLOudD5NkqpJEAewb/WQB6BL9NTWGuPq51fRYBahLXqlF/Z4lYFrqLBRgYS6E2CkRgWyAcvy53fQyWGBFqTR7ASoAh6C633vMaQgB94dHDIux5QBd6ABViABViABdACcc+H7Ps1OILTofQr/C9gPJQmASqIIxBiBfZMUwuaq7ZpAAAAAElFTkSuQmCC"/></button>
</div>
<div style="display: flex; justify-content: right; height: 32px;">
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="reflowPerTrip(keyInfo);"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAHaSURBVFhH7Ze9TsMwFIVPEok+QH+ijF1apTB0RmolGFh5AJYObH0EkLrAI7DxLAwMnSsVqGCuVKVpZoTaJFzHdpuoA7YFzcInWb6x0+TE9+i6tkajUYoSsUVfGtsVGAwGaDab2eAhoPdmfUHAfD7PBv+aXq+3FVB6Cv4FKAtYjSu4fazgQbb7Cp4jMflxVJwbq3+X8p219gYXdPsi4M09W6NfFZOtDa464HP1BOftREz8jLrUaox+PxYXMY5P8y9JUBdR11/Dl8IU0PNANYWXBRZCufyCMGSPImEtfq2KpoAEbhbYWBYEOHh9oc5Ntyuhip4ApGhwBZjMHB4wIhsB6yn/tWxAHU0BlGv5ibTkKxEisrCgrutLj6ijKQDw5UsC8gGPMMtWI0FDw3wSbQH7RrTJgKyn/B9GwM6I03f2cwtLZoCTGH42roe+gJwRF6FFVdDBhGKvbva/xkBA0YizFYkg3Jp69ctjICBvRBtPb+wR+gVIYiRgZ0S2L1BnUIAkhgKkETleJ9YuQBIzATkjMkzzzzAUkDOiYQGSGAqQxYdT3Jj0MBMQOZgGCTyXNbu4MWliaMI1hjdfGF6z9om7S/1NSGKYgt+jdAGFk9GhYEfAvaNZWZScAuAbgVSTqGjW4bIAAAAASUVORK5CYII="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="manageTripartiteZ(0);"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAHgSURBVFhH7Ze/SwJhGMe/NXiTuYRUVMeRU5sKBR3iLAguEYiLQYNTQ9DQZHtbra4ubYLQ7GBQkP4DhVxeKdKiTudS753vnd6lde8reosfeHmf932F9/s+P957Xcnn89/wkFXae4blgWw2C0mSjMlFQPY1epsAVVWNyXkTi8UsAZ6HYCnAfQ60HhC6ewJ2t6HRKTsqhHfSHeXwmtwYTk2BPwcaCnyVKvwTG1kj69rW35s7YQyBiP7lOVSzZU7Qj8sYjFWv8NmmljvcC2h9wBdPoRkJo2e2ZALNXBRag/4GMjr/uN+JewGRM7zlwnQwRu0FfmoOMkn0qO0WphBMSr615yq1RPSibKfXYcwBJ3UEKtQk4elsUpuBmQQI5RJ1v4iv1ITwuGAGAW0EHpWhyXl6HX4BtTLWjeznP70OtwAr+aRDdDlPr8MngFzLQZp8/ePElKvZHVwC1kr38BmWjG7EMLjhEDBeelHmi8cJs4BR6RH3H9iTTygXEGzRgUvYBJDY7xRp6ZHs10tRGA4IdQSLVQhzE1ArIHRhxl5Hgf/mCnvpU+ynrxFK3xLPiNAYK4LJA6PNnZC3ALVYYQuBJJJvv2y8AX43fU1hDsHyWe65AFsIFoX+F9AMgSXAKzwOAfADxyWjXt6kfCYAAAAASUVORK5CYII="/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="lowerTripartiteZ();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACjSURBVFhHY6yvr//PMICACUoPGICHQEJCAoOioiJYkB4AaC+YRnHAkydPwIK0Bra2tnAHDHgUjDpg1AGjDhh1wFB0ABvD09+4MFQJCYBkBzz9IMkQ8UQeB5ZkOAFVRywgIwR+Meiw4cJQJSQAkh0gLfCcYbr0Qxz4OYMFVB2xYCgmQuqCUQeMOmDUAaMOGHAHoPSM6AVAXUCMrtlAgQGOAgYGAFeVRqhqyrwvAAAAAElFTkSuQmCC"/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="raiseTripartiteZ();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADcSURBVFhHY6yvr//PMICACUoPGICHQEJCAoOioiJYkB4AaC+YRnHAkydPwIK0Bra2tnAHDHgUjDpg1AEUOeDFv3cQDOWTA8h3wL8TDNM/zGYoB+Lp399BBUkHo2lgCDkAmNjO/7qFwD/fQCWA4B+SOBC/+AcVJwIQ74A/xxgmfFmPwN+vMjyASj34eRBFbvMfqAQRYMCjgPzaEJgN6z8cBIeCAmcqQyOnEEScCDBaGyKDUQeQ7wAmC4ZGoXKGhUBMSgJEB6NRMOqAUQeg1AX0AqAuIKwuGOm9YwYGAL6bZ8w6/QkHAAAAAElFTkSuQmCC"/></button>
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="floorGlobalZ();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACqSURBVFhH7ZeBCYAgEEWtTRzEXdzE4VzFPaoTFQtMz8hTuAdhSPgfd1G6GWMOQcgeRjJSBbTWQkrpJ0dw5frxJuCc85N/o5RKAuQtWFcAyhivL3ALWIAFWIAF1hDAfPOx/wdUBWoLY4IjTQLW2nBXDsnn8+drNFfgTaI3HEC1oLY4NhxACQClkJ5woLgp7XmhSjzlYO1pNqW8LZ+rBaOAI2BsQRKggrgFQpxri0gx6ftp5QAAAABJRU5ErkJggg=="/></button>
</div>

<!-- DRAG-EDGE THRESHOLD -->

<div style="line-height: 0px;">
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="
if (utilityLayer0.children.length>0&&T<=128) {
const delta = parseInt(T - edgeQ);
edgeQ = T;
localStorage.edgeQ = edgeQ;
redraw();
this.nextElementSibling.value = T;
}
"
><img style="width: 160px; height: 16px; background-image: url('data:image/png;base64,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');" /></button>

<input type="range" style="width: 160px; height: 16px; margin: 0; padding: 0; border: 0;" min="0" max="64" step="4" value="16" 
onfocus="
       if (T%6==0) {
this.setAttribute('step' ,  6);
this.setAttribute('max'  , 72);
this.setAttribute('value',  0);
} else if (T%5==0) {
this.setAttribute('step' ,  5);
this.setAttribute('max'  , 75);
this.setAttribute('value',  0);
} else if (T%4==0) {
this.setAttribute('step' ,  4);
this.setAttribute('max'  , 64);
this.setAttribute('value',  0);
} else if (T==1||T==2||T==3) {
this.setAttribute('step' ,  2);
this.setAttribute('max'  , 36);
this.setAttribute('value',  0);
}






"
oninput="
if (utilityLayer0.children.length>0) {
const delta = parseInt(this.value - edgeQ);
edgeQ = parseInt(this.value);
localStorage.edgeQ = edgeQ;
redraw();
}
"
/>
</div>

<!-- GRID SEE-THROUGH -->

<div style="line-height: 0px;">
<img style="width: 160px; height: 16px; background-image: url('data:image/png;base64,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');" />
<input type="range" style="width: 160px; height: 16px; margin: 0; padding: 0; border: 0;" min="0.00" max="1.00" step="0.01" value="0.50" oninput="
K = parseFloat(this.value); Z();
" />
</div>

<!-- P, ENTER, and ESC -->

<div style="display: flex; justify-content: right; height: 32px; padding-top: 4px;">
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="pasteSingle();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAKJSURBVFhH3ZcxaBNRGMf/FRfBKAgOaQKSVG2RrMUlAVsy1nZoEdQhiGRIBwVn4S7gUDqI7WCHQ5xKQXRo6CimkCwluBVBJA3UrA4mAcd4/3f3ri/JXWq9FwP+jpf3vbvLvXff//vuvpswDKN7ofga4+CXsYqJNVztcpCPXxY7/xVW86foz/FHTv5l563Xj8qWY++G6YEf8etdSlGpVLqjhnOwcU7OLSSQq7ny/Zvoq9Wq6EkmnUGlWgltk3Q6LXpe/9b9R44MqgeI9AQ0b/LOieqB82JJfXDlJFlaEH1Yjhb3erzBu/eQHmAj9ABXnNxdEO3kHv5uU68z1AObjx/CtPuiWXR22HDlYb2gXoNe4EpURBqqGKbhWv6kYjlYs8/xcW7La9ZsDsuXku4ZwfhJ4C3gyZtt1xrOYfsYddxGIhJHwh43OsB8dAXrdzZQn8sh5Zw2FPksIN4CKAFRJfClVcZeu+nYnXfI1wqYKr3EJ44jK3g1E+wJGdwqZ5bAnzLynw+ElYhmAr2gRQIdhJMggFQk5hidYxw61gDaJJi2A/CEJJZntrB7k/uasL6Wnd0+6Jcg+gz1xQ2sc/L2Aaz9AtZa7rEh6JOg/R5L+0+xVLqLqfKLUyfXnwXUu3UUqHk//0sWJHHjomueES0SpGIPkI24g+g9WLHT3wESLRJMT9rvATvdGvbjuIE45ievuUf+nFASfKjZEV8qIFu2G6O/Fpz3/fhJ4FuS9RcSYTa/gkQWQD0FiZDAZEniIAsJHWUZr6VCCWQcDFREhIFIKfr/GAYR3Fl3oDCQBabrBf5BZoQuW5blahb0xICMg1HCOdSitOfDRGYCYUzIsW6bPeGHydg/Tsf8eb6K3966/tmXqC2lAAAAAElFTkSuQmCC"/></button>


<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="hotDog = true;spaceViewOn([,32,32,,,]);removePointerEventsNone();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAgCAYAAACFM/9sAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAARiSURBVGhD7Zo7aBRBGMc/H4UiKMjdVQoqvvLAQgubM5iYQsRGFEXEQoKIIjZiIRa3wUJF0kiIiAQrEUGxExGMR5LGRgvvEl+ooNXlFLQRq/P/n8c6t+7t7Z65NLc/mJvHbmZ2//N9881NblGhUKgtHx6TlOT8KpyRRVclW2Pl5JpVqjElHre//lD5Yn5Y8Wbu3fHztBxetnWrmbJAVm4MHZPBwUHJ5/PqQko409PTKu8+ekJZoS8gWf3lvcrtTSSf34X6VMeXiTUu6mMFFAr4bc3GGoMJYT41NYWSpMlJ1ETrUlM5NaN2dS7seZ5Jw0pp8bbovNPx3qqM1kgr/L52k6rXWSAT0ZYI1QtbdArMRMclR4dYFoi4otRV1kflO90KrQbGCkVqdWvgUtPq43mFvy4cl4GbCEvI53S1nvVoPy+SHUH5k67LM5H715EfEDl7CtfRnkX7DO4T3NeNelhfvId9zCBrNl5pn0j/hr9tWWQcpzyKa2XdnBDtwjoCW9Q+kJwbv2tKLVD5iI9+kS4n8WVVeR2u44GfQzRVx63lx+rPRB6JFPFSbM8gty+WMX0EUwZ9CcaKM14FEzRn2rIUHSmL8qGHmLQLaphWsXtB4gtIFyaJrY+U8LDF56byWWRsq8joXnSGfBJ1UoFoVRYcoYgSA1QpDOu4PnkRfRwUmdWXoL6uPzBjxBmPsC8F+p44jXvQB58hMyTSq68kgduaIL6AFrrwfzF7SwthmcCLlUxZASsY6DHlECpPcT8sk1bkwnqJItD1HZqO54I+ZozAuYhnaABdmMy/C5Mc3CUufWdNIYQKxTPlKJKMF0Z2sykkZ/5duCGY5dCZhhUeQQCJBH/HhT8RgfGCIvci2PVxHQVlTFRCFsaFu65AHDwok4cFOxdwRQvvi7sOcX1sRJzxuOZ5bxBAMHGkOh7h5o1prwu72MjIBT7MHWdNADiEl54Pmo3nUsXYwXU0Ie114UlEOkZDD/kk6jndXEcZwUBFWLz04T2q6V+wRmVMMYo449HieF1FYIwZFcQiWBgX9oErRUXE+9iqELW3mw+ajOdG4G5sslugvS6cjRCiziqsm2ERd/dsSYkzXvCeEjbzJAOrD7PUmCxgFAaMfP0NIu4E9nCNyG00hYREjVf5YAoQtgUB2+fCfGh+RSN9/Kr0xCQT+ebe4YHtmuY+PNrVt5MA3Ir0I3JaGEXddSvWeBDRboNocb3c4jiTsht9JBSxfS7cg4euwh1tCqP3FD7MdRt9B0a0qMGvVzlstCmQ3yfK7uY77ngZex2T1oMJVJNi2hhMKGoLuC6cHmc1o8lxVuiRfvAgsaNTyIGqPYCuO1Al/KdSeqQfgrE+roE80m9qgb4VpslP1CTsSD8kCnMdZM6TaR2R07Iu239rulG4LogQK2BKONSHP0CwLrxkUFZ4O1Yuk52vXsuL7dukWCyqtO34Sbn283taDpSp0f5Ll5WYL3/+Tn9c1CoqgID0523/wa/CGfkD8jPaE2sWhHsAAAAASUVORK5CYII="/></button>


<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick="hotDog = false;spaceViewOff([,32,32,,,]);restorePointerEventsNone();helpMenuOverlay.style.display='none';"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgCAYAAABU1PscAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAONSURBVFhH1Zixa1NRFMZPdFEEndw6Jh1K6aCD8Fq3LK0OXUWkiPQVOmgXJwtJ0UG31EFoRZykf4HpWkgNuOhg6dDX0VXBLuIUv+/mnut57yVp2ghJfuTk3nfeuS/n3HvuPeEVKpVK6/LGGxlHfldWpfBSrrd4sTxxzSnHhbfff7n2Ar/U+cOd96Ed5T5Rn90K8OL1o/tSLpdlbm7O3RhV9vf3XTt176FbBbcC5PG7D8F5GqkUzPWw+yQ3wVyBHxPFFjczYdtoNFqC/igJfaIQtvSZvocVsNzWKBn6KAgIPgGmj5JKoRR+oPCMGqYQ9cWjG5mEALiJyUa16loHH2BnYhiiQQC7CkouhSo2AENUE0kSkXq9i+C+JYqhg70bg3uR11ucDcbSJkEbdzIyNPxGtikUNjGFcBO7jYOv0EKiuNVKEmfyD1yrqo77ahvXvdICnd6n1LLP8tSitB0+oe20iXOnkBtA8YNSD4OTiv2hqGYCgN4GxXsOKGM/JugAdRGk5oOO/TODQBdaZ3FKAN1WwIkGkJnNlJgAnDO4jjGOQkdpowuUmm0/rp8VoL8aQPdTqAPRlO/0ool89t0tdGrTItvbbWniniDv59u35ZDXCvpLsyJrVteF/k+hPokym+/Fpu8URZ5sYf4QCPx2hEnYRVC+q7gAezDQKZQCU8hTw50gWOB1zLKluSYyuwIfj70CgXA1GOf0ZFt1HjqdQmdKIUsRQcxD4JscHbR1liamd6HUDsQBw3VdhgEZOIWOkSIFFBnKLPqTfgVqeqb72SYMZAXpQkpIn4Ojdl8Q3CnHfo7/l0IGpsuCT+ZDSJFL8hF6p8nTpBGBXSbzcnspy8Ap1Ct/7Y8X75jZReepP3YSOo90062xmEmp9U/YV32kmU2hMxUyrbAJCpHVsz4krA1aJwCrdh06rQlEi5St1HU8i/Uh9sXNVnQn0IXWWZyzkPGvhPld5xmd1L8XGlTKxpAK2hetTuQmBzptBypk04s4dbD2xypen2UBxSgcnwT9TZxEJeyVADZIKWsHdnEgLFm7Lpw7hYYi1hcIsSnU+xTS/+PDFPrgOdspxMGEDximEPXF07OQkbAKdiaGKaBbfcqlUNUbcoAOGoU+0VcqNoVSL7aIBjCq0D++gGMQfLF1sSxXqjevXpJbX7/J5xszsre352TmwbK8Ovk5cn1y99lz1345+TP+L3fH/PX6qvwFNz/Rhn5dE6IAAAAASUVORK5CYII="/></button>
</div>

<!-- SET THE DEFAULT PART -->

<div style="display: flex; justify-content: right; height: 32px; padding-top: 8px;">
<button class="wonkie" style="border: 0px; margin: 0px; padding: 0px;" onclick=""><img src="data:image/png;base64,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" onclick="setDefaultTemplate();"/></button>
</div>












</div>

</div>
			</div>
			<button id="folder31button" class="hdub-btn" style="left: 12px; top: 158px; width: 188px; height: 56px;"></button>
			<button id="folder32button" class="hdub-btn" style="left: 204px; top: 158px; width: 188px; height: 56px;"></button>
		</div><!-- This is the minor wrapper -->
		<button id="folder1button" class="hdub-btn" style="left: 11px; top: 84px; width: 125px; height: 64px;"></button>
		<button id="folder2button" class="hdub-btn" style="left: 140px; top: 84px; width: 125px; height: 64px;"></button>
		<button id="folder3button" class="hdub-btn" style="left: 268px; top: 84px; width: 125px; height: 64px;"></button>
	</div><!-- The midway wrapper -->
	<img class="theTopImage" src="iconSet/shelf-menu/TOP-CLIP.png" />
	<button id="shelfToggle" class="hdub-btn" style="left: 338px; top: 10px; width: 56px; height: 56px;"></button>
	<button id="savePage"    class="hdub-btn" style="left: 66px; top: 10px; width: 272px; height: 56px;"></button>
	<button id="F1button"    class="hdub-btn" style="left: 10px; top: 10px; width: 56px; height: 56px;"></button>
</div><!-- This is the major wrapper -->
</div><!-- CLOSING IT UP -->
`;
