import  { useState } from 'react';
import '../assets/styles/input-styles.scss';
import PropTypes, { func } from 'prop-types';

export function StyledFileInput(){
    
    return (
        <div class="mt-4 w-3/4 flex items-center justify-center">
        <input id="Legal Documents" type="file" class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"/>
                </div>
    );
}