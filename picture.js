const video = document.getElementById('mainVideo');
const pipButton = document.getElementById('pipButton');

pipButton.addEventListener('click', async () => {

    if (document.pictureInPictureElement) {
    
        await document.exitPictureInPicture();
    } else {
        try {
        
            await video.requestPictureInPicture();
        } catch (error) {
            console.error('Error with Picture-in-Picture:', error);
        }
    }
});