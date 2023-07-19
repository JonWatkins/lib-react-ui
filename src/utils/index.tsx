
export const padding = (size?: string): string => {
  switch(size) {
    case 'xl':
    case 'large':
      return 'pt-3 pr-3 pl-3 pb-3';
    case 'medium':
      return 'pt-2 pr-2 pl-2 pb-2'
    default: 
      return 'pt-1 pr-1 pl-1 pb-1';
  }
}
