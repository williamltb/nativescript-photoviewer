var frameModule = require("ui/frame");

module.exports = {
    showViewer: function (imagesArray) {
        var photosArray = new java.util.ArrayList();

        imagesArray.forEach(function (imgUrl) {
            photosArray.add(imgUrl);
        });

        var activity = frameModule.topmost().android.activity;
        var intent = new android.content.Intent(activity, com.etiennelawlor.imagegallery.library.activities.ImageGalleryActivity.class);
        intent.putStringArrayListExtra("images", photosArray);
        //intent.putExtra("palette_color_type", com.etiennelawlor.imagegallery.library.enums.PaletteColorType.MUTED);

        activity.startActivity(intent);
    }
};