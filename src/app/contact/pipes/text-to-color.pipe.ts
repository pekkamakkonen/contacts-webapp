import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textToColor'
})
export class TextToColorPipe implements PipeTransform {

  defaultColor = '#03A9F4';
  colors = {
    'a': '#F44336',
    'b': '#E91E63',
    'c': '#9C27B0',
    'd': '#673AB7',
    'e': '#2196F3',
    'f': '#009688',
    'g': '#00BCD4',
    'h': '#FFC107',
    'i': '#00BCD4',
    'j': '#4CAF50',
    'k': '#BDBDBD',
    'l': '#90A4AE',
    'm': '#00BCD4',
    'n': '#E91E63',
    'o': '#00BCD4',
    'p': '#FFC107',
    'q': '#E91E63',
    'r': '#00BCD4',
    's': '#E91E63',
    't': '#BCAAA4',
  };

  transform(value: any, args?: any): any {
    if (value == null || value === '') {
      return this.defaultColor;
    }
    const firstChar = value.charAt(0).toLowerCase();
    return this.colors[firstChar];
  }
}
