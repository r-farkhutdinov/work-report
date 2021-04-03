export interface NamesProps {
  /** list of all available names */
  names: string[];
  /** function to update the names are checkec */
  setNames: (names: string[]) => void;
}
