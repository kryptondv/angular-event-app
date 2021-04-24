import { AbstractControl, ValidatorFn } from '@angular/forms';

export const restrictedWordsValidator = (words: string[]): ValidatorFn => {
  return (control: AbstractControl): { restrictedWords: string[] } | null => {
    const invalidWords = words
      .map((word) => (control.value.includes(word) ? word : null))
      .filter((i): i is string => typeof i === 'string');

    return invalidWords && invalidWords.length > 0
      ? { restrictedWords: invalidWords }
      : null;
  };
};
