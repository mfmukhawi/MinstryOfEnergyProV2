import { Component } from '@angular/core';

@Component({
  selector: 'app-legal-management-process',
  templateUrl: './legal-management-process.component.html',
  styleUrl: './legal-management-process.component.scss'
})
export class LegalManagementProcessComponent {
  customCardTitle = "رد المتهم بالمخالفة";
  parentContentArr = [
    { content: 'إذا تم رصد مخالفة دمج وقود مع منتج بترولي آخر، فإن محضر الضبط سيتضمن التفاصيل التالية', subContent: ['تاريخ ووقت رصد المخالفة، بالإضافة إلى موقعها', 'فاصيل المخالفة، تفاصيل المخالفة، وهي دمج وقود مع منتج بترولي آخر'] },
    // { content: 'content 2', subContent: ['subContent', 'subContent', 'subContent'] },
    // { content: 'content 3', subContent: ['subContent'] },
  ];

  items = [
    { title: 'ثبوت المخالفة لأحكام نظام التجارة بالمنتجات البترولية وذلك بـ:',
    subItems: ['استخدام المنتجات البترولية المسعرة لقيماً بعد الحصول عليها بالسعر المسعر.', 'تغير حقيقة منتج بترولي مسعر، ليبدو كأنه منتج بترولي غير مسعر.', 'استخدام المنتجات البترولية لغرض تجاري بما يخالف أحكام المادة (الرابعة) من هذا النظام.'] },
    { title: 'وإيقاع العقوبة:', subItems: [' مالبة بغرامة مقدارها  1000 ريال سعودي', ' إدارية - ايقاف عقود الامداد'] }
  ];


  fakeCitiesData = [
    { name: 'الرياض', value: 'city1' },
    { name: 'مكة المكرمة', value: 'city2' },
    { name: 'المدينة المنورة', value: 'city3' },
  ];
}
