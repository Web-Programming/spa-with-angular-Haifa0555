import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { LokasiPerumahanComponent, Housing } from '../lokasi-perumahan/lokasi-perumahan.component';
import { LokasiPerumahan, Housing } from '../lokasi-perumahan/lokasi-perumahan';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, LokasiPerumahan],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent implements OnInit {
  housingList: Housing[] = [
    {
      id: 1,
      name: 'Griya Asri Residence',
      location: 'Jakarta Selatan',
      price: 850000000,
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
      rating: 4.5,
      status: 'Available',
      type: 'rumah',
      postedDays: 2,
    },
    {
      id: 2,
      name: 'Bukit Harmoni Estate',
      location: 'Bandung',
      price: 650000000,
      bedrooms: 2,
      bathrooms: 1,
      area: 90,
      image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c',
      rating: 4.2,
      status: 'Available',
      type: 'villa',
      postedDays: 5,
    },
  ];

  filteredList: Housing[] = [];
  selectedFilter: string = 'all';

  ngOnInit() {
    this.filteredList = [...this.housingList];
  }

  filterByType(type: string) {
    this.selectedFilter = type;
    if (type === 'all') {
      this.filteredList = [...this.housingList];
    } else {
      this.filteredList = this.housingList.filter((h) => h.type === type);
    }
  }

  isFilterActive(type: string): boolean {
    return this.selectedFilter === type;
  }
}
