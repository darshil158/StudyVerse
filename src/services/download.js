/**
 * Resource handler for viewing and downloading documents
 */

export async function downloadResource(resource, onToast) {
  try {
    const filename = `${resource.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.${resource.type === 'ppt' ? 'pptx' : 'pdf'}`;
    
    // Create an anchor and trigger immediate browser download
    const link = document.createElement('a');
    link.href = resource.fileUrl || 'https://raw.githubusercontent.com/mozilla/pdf.js/master/examples/learning/helloworld.pdf';
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
        title: 'Download Failed',
        message: 'Could not trigger automated download. Opening file in new tab.',
        type: 'error'
      });
    }
    window.open(resource.fileUrl, '_blank');
    return false;
  }
}

export function viewResource(resource, onToast) {
  try {
    const url = resource.fileUrl || 'https://raw.githubusercontent.com/mozilla/pdf.js/master/examples/learning/helloworld.pdf';
    window.open(url, '_blank', 'noopener,noreferrer');

    if (onToast) {
      onToast({
        title: 'Document Opened',
        message: `Viewing "${resource.title}" in a new preview window.`,
        type: 'info'
      });
    }
  } catch (error) {
    console.error('View document error:', error);
  }
}
