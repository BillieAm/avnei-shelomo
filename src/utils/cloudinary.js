import pkg from 'cloudinary';
const { v2: cloudinary } = pkg;

cloudinary.config({
  cloud_name: import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

export async function getFolders() {
  try {
    const result = await cloudinary.api.root_folders();
    return result.folders;
  } catch (error) {
    console.error('Error fetching folders:', error);
    return [];
  }
}

export async function getAudioFiles(folderPath) {
  try {
    const result = await cloudinary.search
      .expression(`resource_type:video AND folder:${folderPath}`)
      .sort_by('public_id', 'desc')
      .max_results(100)
      .execute();
    return result.resources;
  } catch (error) {
    console.error('Error fetching audio files:', error);
    return [];
  }
}

export function getAudioUrl(publicId) {
  return cloudinary.url(publicId, {
    resource_type: 'video',
    format: 'mp3',
  });
}
