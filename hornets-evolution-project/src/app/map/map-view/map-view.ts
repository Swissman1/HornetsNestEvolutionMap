import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-map-view',
  imports: [],
  templateUrl: './map-view.html',
  styleUrl: './map-view.css',
})
export class MapView implements AfterViewInit {
  ngAfterViewInit(): void {

  }
    
    ngAfterViewInit(): void {
        
        // --- CHECK 1: The OpenLayers Global Object ---
        if (typeof ol === 'undefined') {
            // This forces a BIG error in the console if OpenLayers hasn't loaded
            throw new Error("CRITICAL ERROR: OpenLayers object (ol) is undefined. Check paths in angular.json -> scripts.");
        }
        
        // --- CHECK 2: The Map Target Element ---
        const mapElement = document.getElementById('map');
        if (!mapElement) {
            // This forces a BIG error if your HTML element isn't in the DOM yet
            throw new Error("CRITICAL ERROR: Map target element with id='map' not found in the component's HTML.");
        }
        
        // --- CHECK 3: The Initialization Function ---
        if (typeof initializeMapForAngular === 'function') {
            console.log("Pre-checks passed. Executing map initialization...");
            initializeMapForAngular();
        } else {
            // This forces a BIG error if you forgot to wrap your script in main.js
            throw new Error("CRITICAL ERROR: 'initializeMapForAngular' function not defined. Check your 'main.js' file.");
        }
    
}
