

export const COURSES: any = [

  {
    id: 1,
    description: "Angular Fundamentals",
    iconUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
    courseListIcon: 'https://angular.io/assets/images/logos/angular/angular.svg',
    longDescription: "Una intro a angular",
    category: 'BEGINNER',
    lessonsCount: 10
  },
  {
  id: 2,
    description: 'Angular Intermediate',
    longDescription: "Angular Intermedio",
    iconUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
    courseListIcon: 'https://angular.io/assets/images/logos/angular/angular.svg',
    category: 'ADVANCED',
    lessonsCount: 11
},
 {
  id: 3,
    description: 'Angular Avanzado',
    longDescription: "Aprender Pwa",
    iconUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
    courseListIcon: 'https://angular.io/assets/images/logos/angular/angular.svg',
    category: 'ADVANCED',
    lessonsCount: 8
}, {
  id: 4,
    description: 'Flutter Fundamentons',
    longDescription: "Aprender flutter y supera lo nativo",
    iconUrl: 'https://flutter.io/assets/flutter-lockup-4cb0ee072ab312e59784d9fbf4fb7ad42688a7fdaea1270ccf6bbf4f34b7e03f.svg',
    courseListIcon: 'https://flutter.io/assets/flutter-lockup-4cb0ee072ab312e59784d9fbf4fb7ad42688a7fdaea1270ccf6bbf4f34b7e03f.svg',
    category: 'BEGINNER',
    lessonsCount: 8
}

];


export function findCourseById(courseId:number) {
    return COURSES.find(course => course.id == courseId);
}
