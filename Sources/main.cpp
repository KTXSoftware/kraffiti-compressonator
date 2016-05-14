#define dynfunc extern "C" __declspec(dllexport)

dynfunc char* format() {
	return "astc";
}

dynfunc void encode(int width, int height, int stride, int format, unsigned char* pixels_, int* out_width, int* out_height, int* out_size, void** out_data) {
	
}
