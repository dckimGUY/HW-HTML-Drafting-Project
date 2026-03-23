function copyStateCode(layerInput) {

copyToClipboard(`try { go; } catch { try { changeLayer('${layerInput}'); } catch {}; };`);

}