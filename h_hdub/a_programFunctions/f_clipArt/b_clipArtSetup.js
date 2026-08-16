function clipArtSetup() {
const windowReference = insertNewWindow([null,78,78,false,false,false],false);
setTimeout( () => {
windowReference.copyOpenerContents();
windowReference.hotDog = true;
windowReference.spaceViewOn([null,32,32,false,false,false]);
windowReference.removePointerEventsNone();
}, 500);
}