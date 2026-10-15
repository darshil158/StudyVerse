/**
 * Resource handler for viewing and downloading documents
 * Supports direct links, Google Drive folders/files, and YouTube playlists
 */

export async function downloadResource(resource, onToast) {
  try {
    const url = resource.fileUrl;
    if (!url) {
      if (onToast) {
        onToast({
          title: 'Resource Unavailable',
          message: 'The requested resource link is currently synchronizing.',
          type: 'error'
        });
      }
      return false;
    }

    // Google Drive folders and files
    if (url.includes('drive.google.com')) {
      window.open(url, '_blank', 'noopener,noreferrer');
      if (onToast) {
        onToast({
          title: 'Opening Google Drive',
          message: `Opening verified Google Drive repository for "${resource.title}".`,
          type: 'success'
        });
      }
      return true;
    }

    // YouTube playlists and video series
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      window.open(url, '_blank', 'noopener,noreferrer');
      if (onToast) {
        onToast({
          title: 'Opening Video Playlist',
          message: `Redirecting to YouTube playlist for "${resource.title}".`,
          type: 'info'
        });
      }
      return true;
    }

    // Direct binary download for files
    const extension = resource.type === 'ppt' ? 'pptx' : 'pdf';
    const filename = `${resource.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.${extension}`;
    
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = filename;
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (onToast) {
      onToast({
        title: 'Downloading Resource',
        message: `Saved "${resource.title}" to downloads.`,
        type: 'success'
      });
    }
    return true;
  } catch (error) {
    console.error('Download execution error:', error);
    if (onToast) {
      onToast({
        title: 'Opening Resource',
        message: 'Opening repository in new tab.',
        type: 'info'
      });
    }
    if (resource?.fileUrl) {
      window.open(resource.fileUrl, '_blank', 'noopener,noreferrer');
    }
    return false;
  }
}

export function viewResource(resource, onToast) {
  try {
    const url = resource.fileUrl;
    if (!url) {
      if (onToast) {
        onToast({
          title: 'Resource Unavailable',
          message: 'Preview is not available for this item.',
          type: 'error'
        });
      }
      return;
    }

    window.open(url, '_blank', 'noopener,noreferrer');

    if (onToast) {
      const isDrive = url.includes('drive.google.com');
      const isYT = url.includes('youtube.com') || url.includes('youtu.be');
      onToast({
        title: isDrive ? 'Google Drive Opened' : isYT ? 'Playlist Opened' : 'Document Opened',
        message: `Viewing "${resource.title}" in a new preview window.`,
        type: 'info'
      });
    }
  } catch (error) {
    console.error('View document error:', error);
  }
}
