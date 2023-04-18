const imageCroppedUrl = (url: string) => {
  if (!url) return;
  const targrt = "media/";
  const index = url.indexOf(targrt) + targrt.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
export default imageCroppedUrl;
