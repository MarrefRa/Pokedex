import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            let hit = false;
            const keys = Object.keys(it);
            for (const key of keys) {
                if (typeof it[key] === 'string') {
                    const property = it[key] as string;
                    if (property.toLowerCase().includes(searchText)) {
                        hit = true;
                        break;
                    }
                }
            }
            return hit;
        });
    }
}