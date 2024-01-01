// api.js
const BASE_URL = import.meta.env.DEV ? 'https://api.screenshotone.com/api' : 'https://api.screenshotone.com/api';

export const captureScreenshot = async (live) => {
  const accessKey = 'DQgRsYHKh2QJVw'; // Replace with your actual access key

  try {
    const response = await fetch(`${BASE_URL}/take?url=${encodeURIComponent(live)}&access_key=${accessKey}`);

    if (!response.ok) {
      throw new Error('Failed to capture screenshot');
    }

    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
