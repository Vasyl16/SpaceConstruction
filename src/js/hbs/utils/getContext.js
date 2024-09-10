export const getContext = (filePath, contexts) => {
  const fileName = filePath
    .replace(/^\//, '') // Remove leading slash
    .replace(/\.\w+$/, '') // Remove file extension
    .split('/') // Split by slash to handle nested paths
    .pop(); // Get the last part

  return { ...contexts[fileName] };
};
