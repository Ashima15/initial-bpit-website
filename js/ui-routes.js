
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    
        .state('home', {
            url: '/home',
            templateUrl : '/pages/home.html'
        })
        
        .state('about', {
            url: '/about',
            templateUrl: "/pages/about/about.html"
        })
        
        .state('certificates', {
            url: '/certificates',
            templateUrl: '/pages/about/certificates.html' ,
            controller: function($state){
                $state.go('about.certificates');
            } 
        })

        .state('chairmans-message', {
            url: '/chairmans-message',
            templateUrl: '/pages/about/chairmans_message.html' ,
            controller: function($state){
                $state.go('about.chairmans-message');
            } 
        })
    
        .state('college_profile', {
            url: '/college-profile',
            templateUrl: '/pages/about/college_profile.html' ,
            controller: function($state){
                $state.go('about.college-profile');
            } 
        })  
    
        .state('pillars', {
            url: '/pillars',
            templateUrl: '/pages/about/college_profile.html' ,
            controller: function($state){
                $state.go('about.pillars');
            } 
        })
    
        .state('principals-message', {
            url: '/principals-message',
            templateUrl: '/pages/about/college_profile.html' ,
            controller: function($state){
                $state.go('about.principals_message');
            } 
        })

        .state('trust', {
            url: '/trust',
            templateUrl: '/pages/about/college_profile.html' ,
            controller: function($state){
                $state.go('about.trust');
            } 
        })
    
        .state('vision', {
            url: '/vision',
            templateUrl: '/pages/about/college_profile.html' ,
            controller: function($state){
                $state.go('about.vision');
            } 
        })
    
        .state('about.college-profile' ,{
            url: '/college-profile',
            templateUrl : '/pages/about/college_profile.html'
        })
    
        .state('about.certificates' ,{
            url: '/certificates',
            templateUrl : '/pages/about/certificates.html'
        })
    
         .state('about.chairmans-message' ,{
            url: '/chairmans-message',
            templateUrl : '/pages/about/chairmans_message.html'
        })
    
         .state('about.pillars' ,{
            url: '/pillars',
            templateUrl : '/pages/about/pillars.html'
        })
        
        .state('about.principals-message' ,{
            url: '/principals-message',
            templateUrl : '/pages/about/principals_message.html'
        })
    
        .state('about.trust' ,{
            url: '/trust',
            templateUrl : '/pages/about/trust.html'
        })
    
        .state('about.vision' ,{
            url: '/vision',
            templateUrl : '/pages/about/vision.html'
        })
        
        .state('academics', {
            url: '/academics',
            templateUrl: "/pages/academics/academics.html"
        })
    
        .state('postGrad', {
            url: '/postGrad',
            templateUrl: '/pages/academics/eligibilityMba.html' ,
            controller: function($state){
                $state.go('academics.eligibilityMba');
            }
        })
        
        .state('underGrad', {
            url: '/underGrad',
            templateUrl: '/pages/academics/eligibilityBtech.html' ,
            controller: function($state){
                $state.go('academics.eligibilityBtech');
            }
        })
    
        .state('academics.eligibilityBtech' ,{
            url: '/eligibilityBtech',
            templateUrl : '/pages/academics/eligibilityBtech.html'
        })
    
        .state('academics.eligibilityBba' ,{
            url: '/eligibilityBba',
            templateUrl : '/pages/academics/eligibilityBba.html'
        })

        .state('academics.eligibilityMba' ,{
            url: '/eligibilityMba',
            templateUrl : '/pages/academics/eligibilityMba.html'
        })

        .state('academics.fees' ,{
            url: '/fees',
            templateUrl : '/pages/academics/fees.html'
        })

        .state('academics.getRegistered' ,{
            url: '/getRegistered',
            templateUrl : '/pages/academics/getRegistered.html'
        })

       .state('departments', {
            url: '/departments',
            templateUrl: "/pages/departments/departments.html"
        })
        
        .state('appliedSciences', {
            url: '/appliedSciences',
            templateUrl: '/pages/departments/appliedSciences.html' ,
            controller: function($state){
                $state.go('departments.appliedSciences');
            } 
        })

        .state('bba', {
            url: '/bba',
            templateUrl: '/pages/departments/bba.html' ,
            controller: function($state){
                $state.go('departments.bba');
            } 
        })
    
        .state('cse', {
            url: '/cse',
            templateUrl: '/pages/departments/cse.html' ,
            controller: function($state){
                $state.go('departments.cse');
            } 
        })

        .state('ece', {
            url: '/ece',
            templateUrl: '/pages/departments/ece.html' ,
            controller: function($state){
                $state.go('departments.ece');
            } 
        })
    
        .state('eee', {
            url: '/eee',
            templateUrl: '/pages/departments/eee.html' ,
            controller: function($state){
                $state.go('departments.eee');
            } 
        })

        .state('it', {
            url: '/it',
            templateUrl: '/pages/departments/it.html' ,
            controller: function($state){
                $state.go('departments.it');
            } 
        })
    
         .state('mba', {
            url: '/mba',
            templateUrl: '/pages/departments/mba.html' ,
            controller: function($state){
                $state.go('departments.mba');
            } 
        })
    
         .state('departments.appliedSciences.home' ,{
            url: '/home',
            templateUrl : '/pages/departments/applied_home.html'
        })
        
        .state('departments.appliedSciences' ,{
            url: '/appliedSciences',
            templateUrl : '/pages/departments/appliedSciences.html'
        })
    
        .state('departments.cse' ,{
            url: '/cse',
            templateUrl : '/pages/departments/cse.html'
        })
    
        .state('departments.cse.about' ,{
            url: '/about',
            templateUrl : '/pages/departments/cse_about.html'
        })
        
        .state('departments.cse.events' ,{
            url: '/events',
            templateUrl : '/pages/departments/cse_events.html'
        })
        
        .state('departments.cse.faculty' ,{
            url: '/faculty',
            templateUrl : '/pages/departments/cse_faculty.html'
        })
        
        .state('departments.cse.hod' ,{
            url: '/hod',
            templateUrl : '/pages/departments/cse_hod.html'
        })
        
        .state('departments.cse.lab' ,{
            url: '/lab',
            templateUrl : '/pages/departments/cse_lab.html'
        })
        
        .state('departments.cse.objective' ,{
            url: '/objective',
            templateUrl : '/pages/departments/cse_objective.html'
        })
        
        .state('departments.it' ,{
            url: '/it',
            templateUrl : '/pages/departments/it.html'
        })
    
        .state('departments.it.about' ,{
            url: '/about',
            templateUrl : '/pages/departments/it_about.html'
        })
        
        .state('departments.it.events' ,{
            url: '/events',
            templateUrl : '/pages/departments/it_events.html'
        })
        
        .state('departments.it.faculty' ,{
            url: '/faculty',
            templateUrl : '/pages/departments/it_faculty.html'
        })
        
        .state('departments.it.hod' ,{
            url: '/hod',
            templateUrl : '/pages/departments/it_hod.html'
        })
        
        .state('departments.it.lab' ,{
            url: '/lab',
            templateUrl : '/pages/departments/it_lab.html'
        })
        
        .state('departments.it.objective' ,{
            url: '/objective',
            templateUrl : '/pages/departments/cse_objective.html'
        })
        
        .state('departments.ece' ,{
            url: '/ece',
            templateUrl : '/pages/departments/ece.html'
        })
    
        .state('departments.ece.about' ,{
            url: '/about',
            templateUrl : '/pages/departments/ece_about.html'
        })
        
        .state('departments.ece.events' ,{
            url: '/events',
            templateUrl : '/pages/departments/ece_events.html'
        })
        
        .state('departments.ece.faculty' , {
            url: '/faculty' ,
            templateUrl : '/pages/departments/ece_faculty.html'
        })
        
        .state('departments.ece.hod' ,{
            url: '/hod',
            templateUrl : '/pages/departments/ece_hod.html'
        })
        
        .state('departments.ece.lab' ,{
            url: '/lab',
            templateUrl : '/pages/departments/ece_lab.html'
        })
        
        .state('departments.ece.objective' ,{
            url: '/objective',
            templateUrl : '/pages/departments/cse_objective.html'
        })
    
        .state('departments.eee' ,{
            url: '/eee',
            templateUrl : '/pages/departments/eee.html'
        })
    
        .state('departments.eee.about' ,{
            url: '/about',
            templateUrl : '/pages/departments/eee_about.html'
        })
        
        .state('departments.eee.events' ,{
            url: '/events',
            templateUrl : '/pages/departments/eee_events.html'
        })
        
        .state('departments.eee.faculty' ,{
            url: '/faculty',
            templateUrl : '/pages/departments/eee_faculty.html'
        })
        
        .state('departments.eee.hod' ,{
            url: '/hod',
            templateUrl : '/pages/departments/eee_hod.html'
        })
        
        .state('departments.eee.lab' ,{
            url: '/lab',
            templateUrl : '/pages/departments/eee_lab.html'
        })
        
        .state('departments.eee.objective' ,{
            url: '/objective',
            templateUrl : '/pages/departments/cse_objective.html'
        })
        
        .state('departments.bba' ,{
            url: '/bba',
            templateUrl : '/pages/departments/eee.html'
        })
    
        .state('departments.bba.about' ,{
            url: '/about',
            templateUrl : '/pages/departments/bba_about.html'
        })
        
        .state('departments.bba.events' ,{
            url: '/events',
            templateUrl : '/pages/departments/bba_events.html'
        })
        
        .state('departments.bba.faculty' ,{
            url: '/faculty',
            templateUrl : '/pages/departments/bba_faculty.html'
        })
        
        .state('departments.bba.hod' ,{
            url: '/hod',
            templateUrl : '/pages/departments/bba_hod.html'
        })
        
        .state('departments.bba.lab' ,{
            url: '/lab',
            templateUrl : '/pages/departments/bba_lab.html'
        })
        
        .state('departments.bba.objective' ,{
            url: '/objective',
            templateUrl : '/pages/departments/bba_objective.html'
        })
        
        .state('departments.mba' ,{
            url: '/mba',
            templateUrl : '/pages/departments/eee.html'
        })
    
        .state('departments.mba.about' ,{
            url: '/about',
            templateUrl : '/pages/departments/mba_about.html'
        })
        
        .state('departments.mba.events' ,{
            url: '/events',
            templateUrl : '/pages/departments/mba_events.html'
        })
        
        .state('departments.mba.faculty' ,{
            url: '/faculty',
            templateUrl : '/pages/departments/mba_faculty.html'
        })
        
        .state('departments.mba.hod' ,{
            url: '/hod',
            templateUrl : '/pages/departments/mba_hod.html'
        })
        
        .state('departments.mba.lab' ,{
            url: '/lab',
            templateUrl : '/pages/departments/mba_lab.html'
        })
        
        .state('departments.mba.objective' ,{
            url: '/objective',
            templateUrl : '/pages/departments/bba_objective.html'
        })
        
        .state('facilities', {
            url: '/facilities',
            templateUrl: "/pages/facilities/facilities.html"
        })
    
        .state('bookBank', {
           url: '/bookBank',
            templateUrl: '/pages/facilities/bookBank.html' ,
            controller: function($state){
                $state.go('facilities.bookBank');
            } 
        })

        .state('canteen', {
            url: '/canteen',
            templateUrl: '/pages/facilities/canteen.html' ,
            controller: function($state){
                $state.go('facilities.canteen');
            } 
        })
    
        .state('edusat', {
            url: '/edusat',
            templateUrl: '/pages/facilities/edusat.html' ,
            controller: function($state){
                $state.go('facilities.edusat');
            } 
        })
    
        .state('hostel', {
            url: '/hostel',
            templateUrl: '/pages/facilities/hostel.html' ,
            controller: function($state){
                $state.go('facilities.hostel');
            } 
        })

        .state('library', {
            url: '/library',
            templateUrl: '/pages/facilities/library.html' ,
            controller: function($state){
                $state.go('facilities.library');
            } 
        })
    
        .state('medicalRoom', {
            url: '/medicalRoom',
            templateUrl: '/pages/facilities/library.html' ,
            controller: function($state){
                $state.go('facilities.medicalRoom');
            } 
        })

        .state('seminarHall', {
            url: '/seminarHall',
            templateUrl: '/pages/facilities/seminarHall.html' ,
            controller: function($state){
                $state.go('facilities.seminarHall');
            } 
        })
    
         .state('sportsRoom', {
            url: '/sportsRoom',
            templateUrl: '/pages/facilities/library.html' ,
            controller: function($state){
                $state.go('facilities.sportsRoom');
            } 
        })
    
        .state('facilities.bookBank' ,{
            url: '/bookBank',
            templateUrl : '/pages/facilities/bookBank.html'
        })
    
        .state('facilities.canteen' ,{
            url: '/canteen',
            templateUrl : '/pages/facilities/canteen.html'
        })
    
        .state('facilities.edusat' ,{
            url: '/edusat',
            templateUrl : '/pages/facilities/edusat.html'
        })
    
         .state('facilities.hostel' ,{
            url: '/hostel',
            templateUrl : '/pages/facilities/hostel.html'
        })
    
         .state('facilities.library' ,{
            url: '/library',
            templateUrl : '/pages/facilities/library.html'
        })
        
        .state('facilities.medicalRoom' ,{
            url: '/medicalRoom',
            templateUrl : '/pages/facilities/medicalRoom.html'
        })
    
        .state('facilities.seminarHall' ,{
            url: '/seminarHall',
            templateUrl : '/pages/facilities/seminarHall.html'
        })
    
        .state('facilities.sportsRoom' ,{
            url: '/sportsRoom',
            templateUrl : '/pages/facilities/sportsRoom.html'
        })
        
        .state('placements', {
            url: '/placements',
            templateUrl: "/pages/placements/placements.html"
        })
    
        .state('experts', {
            url: '/experts',
            templateUrl: '/pages/placements/experts.html' ,
            controller: function($state){
                $state.go('placements.experts');
            }
        })

        .state('industrial', {
            url: '/bookBank',
            templateUrl: '/pages/placements/industrial.html' ,
            controller: function($state){
                $state.go('placements.industrial');
            }
        })
    
        .state('list', {
            url: '/list',
            templateUrl: '/pages/placements/list.html' ,
            controller: function($state){
                $state.go('placements.list');
            }
        })

        .state('recruiters', {
           url: '/recruiters',
            templateUrl: '/pages/placements/recruiters.html' ,
            controller: function($state){
                $state.go('placements.recruiters');
            }
        })
    
        .state('team', {
            url: '/team',
            templateUrl: '/pages/placements/team.html' ,
            controller: function($state){
                $state.go('placements.team');
            }
        })

        .state('training', {
            url: '/training',
            templateUrl: '/pages/placements/training.html' ,
            controller: function($state){
                $state.go('placements.training');
            }
        })
    
        .state('placements.experts' ,{
            url: '/experts',
            templateUrl : '/pages/placements/experts.html'
        })
    
        .state('placements.industrial' ,{
            url: '/industrial',
            templateUrl : '/pages/placements/industrial.html'
        })
    
        .state('placements.list' ,{
            url: '/list',
            templateUrl : '/pages/placements/list.html'
        })
    
        .state('placements.recruiters' ,{
            url: '/recruiters',
            templateUrl : '/pages/placements/recruiters.html'
        })
    
        .state('placements.team' ,{
            url: '/team',
            templateUrl : '/pages/placements/team.html'
        })
    
        .state('placements.training' ,{
            url: '/training',
            templateUrl : '/pages/placements/training.html'
        })
    
        .state('studentLife', {
            url: '/studentLife',
            templateUrl: "/pages/studentLife/studentLife.html"
        })
    
         .state('achievements', {
            url: '/achievements',
            templateUrl: '/pages/studentLife/achievements.html' ,
            controller: function($state){
                $state.go('studentLife.achievements');
            } 
        })
    
        .state('culturalSocieties', {
            url: '/culturalSocieties',
            templateUrl: '/pages/studentLife/culturalSocieties.html' ,
            controller: function($state){
                $state.go('studentLife.culturalSocieties');
            } 
        })
        
        .state('events', {
            url: '/events',
            templateUrl: '/pages/studentLife/events.html' ,
            controller: function($state){
                $state.go('studentLife.events');
            } 
        })

        .state('examinations', {
            url: '/examinations',
            templateUrl: '/pages/studentLife/examinations.html' ,
            controller: function($state){
                $state.go('studentLife.examinations');
            } 
        })
    
        .state('projects', {
            url: '/projects',
            templateUrl: '/pages/studentLife/projects.html' ,
            controller: function($state){
                $state.go('studentLife.projects');
            } 
        })

        .state('publications', {
            url: '/publications',
            templateUrl: '/pages/studentLife/publications.html' ,
            controller: function($state){
                $state.go('studentLife.publications');
            } 
        })
    
        .state('sports', {
            url: '/sports',
            templateUrl: '/pages/studentLife/sports.html' ,
            controller: function($state){
                $state.go('studentLife.sports');
            } 
        })

        .state('technicalSocieties', {
            url: '/technicalSocieties',
            templateUrl: '/pages/studentLife/technicalSocieties.html' ,
            controller: function($state){
                $state.go('studentLife.technicalSocieties');
            } 
        })
    
        .state('studentLife.achievements' ,{
            url: '/achievements',
            templateUrl : '/pages/studentLife/achievements.html'
        })
    
        .state('studentLife.culturalSocieties' ,{
            url: '/culturalSocieties',
            templateUrl : '/pages/studentLife/culturalSocieties.html'
        })
    
        .state('studentLife.events' ,{
            url: '/events',
            templateUrl : '/pages/studentLife/events.html'
        })
    
        .state('studentLife.examinations' ,{
            url: '/examinations',
            templateUrl : '/pages/studentLife/examinations.html'
        })
    
        .state('studentLife.projects' ,{
            url: '/projects',
            templateUrl : '/pages/studentLife/projects.html'
        })
    
        .state('studentLife.publications' ,{
            url: '/publications',
            templateUrl : '/pages/studentLife/publications.html'
        })
    
        .state('studentLife.sports' ,{
            url: '/sports',
            templateUrl : '/pages/studentLife/sports.html'
        })
    
        .state('studentLife.technicalSocieties' ,{
            url: '/technicalSocieties',
            templateUrl : '/pages/studentLife/technicalSocieties.html'
        })
    
        .state('contact', {
            url: '/contact',
            templateUrl: '/pages/contact.html'
        })
        
        .state('disclosures', {
            url: '/disclosures',
            templateUrl: '/pages/disclosures.html'
        })
        
        .state('nirf', {
            url: '/nirf',
            templateUrl: '/pages/nirf.html'
        })
        
        
      
});


