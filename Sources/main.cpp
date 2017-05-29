#include "../Compressonator/Compressonator/Examples/Compressonator_Test_Helpers.h"
#include <stdio.h>

#define dynfunc extern "C" __declspec(dllexport)

dynfunc const char* formats() {
	return "DXT1|DXT3|DXT5|DXT5_xGBR|DXT5_RxBG|DXT5_RBxG|DXT5_xRBG|DXT5_RGxB|DXT5_xGxR|ATI1N|ATI2N|ATI2N_XY|ATI2N_DXT5|BC1|BC2|BC3|BC4|BC5|BC6H|BC7|ATC_RGB|ATC_RGBA_Explicit|ATC_RGBA_Interpolated|ETC_RGB";
}

static bool CompressionCallback(float fProgress, DWORD_PTR pUser1, DWORD_PTR pUser2) {
	UNREFERENCED_PARAMETER(pUser1);
	UNREFERENCED_PARAMETER(pUser2);
	//printf("\rCompression progress = %2.0f", fProgress);
	return false;
}

dynfunc void encode(int width, int height, int stride, const char* format, unsigned char* pixels, int* out_width, int* out_height, int* out_size, void** out_data) {
	wchar_t wformat[64];
	mbstowcs(wformat, format, 64);
	CMP_FORMAT destFormat = ParseFormat(wformat);

	CMP_Texture srcTexture;
	memset(&srcTexture, 0, sizeof(srcTexture));
	srcTexture.dwSize = sizeof(srcTexture);
	srcTexture.dwWidth = width;
	srcTexture.dwHeight = height;
	srcTexture.dwPitch = stride;
	srcTexture.format = CMP_FORMAT_ARGB_8888;
	srcTexture.dwDataSize = CMP_CalculateBufferSize(&srcTexture);
	srcTexture.pData = pixels;

	CMP_Texture destTexture;
	destTexture.dwSize = sizeof(destTexture);
	destTexture.dwWidth = srcTexture.dwWidth;
	destTexture.dwHeight = srcTexture.dwHeight;
	destTexture.dwPitch = 0;
	destTexture.format = destFormat;
	destTexture.dwDataSize = CMP_CalculateBufferSize(&destTexture);
	destTexture.pData = (CMP_BYTE*)malloc(destTexture.dwDataSize);

	CMP_CompressOptions options;
	memset(&options, 0, sizeof(options));
	options.dwSize = sizeof(options);

	sprintf_s(options.CmdSet[0].strCommand, "Quality");
	sprintf_s(options.CmdSet[0].strParameter, "%s", "0.5");  // Use user specified Quality (lower values increases performance)
	sprintf_s(options.CmdSet[1].strCommand, "ModeMask");
	sprintf_s(options.CmdSet[1].strParameter, "207");          // 0xCF
	sprintf_s(options.CmdSet[2].strCommand, "NumThreads");     // Use Multi Threading for fast performance
	sprintf_s(options.CmdSet[2].strParameter, "8");
	options.NumCmds = 3;

	CMP_ERROR  cmp_status;
	cmp_status = CMP_ConvertTexture(&srcTexture, &destTexture, &options, &CompressionCallback, NULL, NULL);
	if (cmp_status != CMP_OK) {
		if (srcTexture.pData)  free(srcTexture.pData);
		if (destTexture.pData) free(destTexture.pData);
		printf("Compression returned an error %d\n", cmp_status);
		return;
	}

	*out_width = srcTexture.dwWidth;
	*out_height = srcTexture.dwHeight;
	*out_size = destTexture.dwDataSize;
	*out_data = destTexture.pData;
}
