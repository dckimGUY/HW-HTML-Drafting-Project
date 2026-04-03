#include <stdio.h>
#include <emscripten.h>

int main() {
    printf("C Engine: Active\n");
    printf("WebAssembly: Loaded and Running\n");
    
    // Trigger a browser alert from C
    EM_ASM(
        alert("Verification Success!\n\nSystem: Windows/MinGW\nEngine: Emscripten 5.0.4\nStatus: Fully Primed");
    );
    return 0;
}
