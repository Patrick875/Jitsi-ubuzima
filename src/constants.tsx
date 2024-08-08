import { LuLayoutDashboard } from "react-icons/lu";
import { PiNotepadThin } from "react-icons/pi";
import { FaUserDoctor } from "react-icons/fa6";
import { LiaUserNurseSolid } from "react-icons/lia";
import { LiaHospitalAltSolid } from "react-icons/lia";
import { FaRegHospital } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import { LuCalendarCheck2 } from "react-icons/lu";

import { navitem } from "./Types";

export const adminNavs: navitem[] = [
	{
		page: "Dashboard",
		link: "",
		icon: <LuLayoutDashboard />,
		location: "admin",
	},
	{
		page: "Consultations",
		link: "consultations",
		icon: <PiNotepadThin />,
		location: "consultations",
	},
	{
		page: "Doctors",
		link: "doctors",
		icon: <FaUserDoctor />,
		location: "doctors",
	},
	{
		page: "Nurses",
		link: "nurses",
		icon: <LiaUserNurseSolid />,
		location: "nurses",
	},
	{
		page: "Health Centers",
		link: "health-centers",
		icon: <LiaHospitalAltSolid />,
		location: "health-centers",
	},
	{
		page: "Hospitals",
		link: "hospitals",
		icon: <FaRegHospital />,
		location: "hospitals",
	},
	{
		page: "Reports",
		link: "reports",
		icon: <TbReportSearch />,
		location: "reports",
	},
];

export const DoctorNavs: navitem[] = [
	{
		page: "Dashboard",
		link: "",
		icon: <LuLayoutDashboard />,
		location: "admin",
	},
	{
		page: "Consultations",
		link: "consultations",
		icon: <PiNotepadThin />,
		location: "consultations",
	},
	{
		page: "Agenda",
		link: "agenda",
		icon: <LuCalendarCheck2 />,
		location: "consultations",
	},
];
export const nurseNavs: navitem[] = [
	{
		page: "Dashboard",
		link: "",
		icon: <LuLayoutDashboard />,
		location: "admin",
	},
	{
		page: "Consultations",
		link: "consultations",
		icon: <PiNotepadThin />,
		location: "consultations",
	},
	{
		page: "Agenda",
		link: "agenda",
		icon: <LuCalendarCheck2 />,
		location: "consultations",
	},
];

export const patientMaritalStatus = [
	{
		value: 'single',
		label: 'Single'
	},
	{
		value: 'married',
		label: 'Married'
	},
	{
		value: 'cohabitating',
		label: 'Cohabitating'
	},
	{
		value: 'separated',
		label: 'Separated'
	},
	{
		value: 'divorced',
		label: 'Divorced'
	},
	{
		value: 'widow',
		label: 'Widow(er)'
	},
]
export const drugsAbuseHist = [
	{
		value: 'no',
		label: 'No'
	},
	{
		value: 'yes',
		label: 'Yes'
	},
	{
		value: 'past',
		label: 'No (used to)'
	},

]
export const bloodGroups = ['A Positive',
	'A Negative',
	'AB Positive',
	'AB Negative',
	'B Positive',
	'B Negative',
	'O Positive',
	'O Negative']
export const bloodGroupOptions = bloodGroups.map(g => {
	const b_type = g.split(" ")[0];
	const e_type = g.split(" ")[1] === "Positive" ? "+" : "-"
	return { value: g, label: `${b_type} ${e_type}` }
})

export const rwandaLocations = {
	provinces: [
		{
			province: "Kigali",
			districts: [
				{
					district: "Gasabo",
					sectors: ["Bumbogo", "Gatsata", "Jabana", "Kacyiru", "Gisozi", "Kimironko", "Kinyinya", "Ndera", "Nduba", "Remera", "Rusororo", "Rutunga"]
				},
				{
					district: "Kicukiro",
					sectors: ["Gahanga", "Gatenga", "Gikondo", "Kanombe", "Kicukiro", "Kigarama", "Masaka", "Niboye", "Nyarugunga"]
				},
				{
					district: "Nyarugenge",
					sectors: ["Gitega", "Kanyinya", "Kigali", "Kimisagara", "Mageragere", "Muhima", "Nyakabanda", "Nyamirambo", "Nyarugenge", "Rwezamenyo"]
				}
			]
		},
		{
			province: "Northern Province",
			districts: [
				{
					district: "Burera",
					sectors: ["Bungwe", "Butaro", "Cyanika", "Cyeru", "Gahunga", "Gatebe", "Gitovu", "Kagogo", "Kinoni", "Kivuye", "Nemba", "Rugarama", "Rugengabari", "Ruhunde", "Rusarabuye", "Rwerere"]
				},
				{
					district: "Gakenke",
					sectors: ["Busengo", "Coko", "Cyabingo", "Gakenke", "Gashenyi", "Janja", "Kamubuga", "Karambo", "Kivuruga", "Mataba", "Minazi", "Mugunga", "Muhondo", "Muyongwe", "Muzo", "Nemba", "Ruli", "Rusasa", "Rushashi"]
				},
				{
					district: "Gicumbi",
					sectors: ["Bukure", "Bwisige", "Byumba", "Cyumba", "Giti", "Kageyo", "Kaniga", "Manyagiro", "Miyove", "Mukarange", "Muko", "Mutete", "Nyamiyaga", "Nyankenke", "Rubaya", "Rukomo", "Ruvune", "Rushaki", "Rutare", "Rwamiko", "Shagasha"]
				},
				{
					district: "Musanze",
					sectors: ["Busogo", "Cyuve", "Gacaca", "Gashaki", "Gataraga", "Kimonyi", "Kinigi", "Muhoza", "Muko", "Musanze", "Nkotsi", "Nyange", "Remera", "Rwaza", "Shingiro"]
				},
				{
					district: "Rulindo",
					sectors: ["Base", "Burega", "Bushoki", "Buyoga", "Cyinzuzi", "Cyungo", "Kinihira", "Kisaro", "Masoro", "Mbogo", "Mbuyi", "Murambi", "Ngoma", "Ntarabana", "Rukozo", "Rusiga", "Shyorongi", "Tumba"]
				}
			]
		},
		{
			province: "Southern Province",
			districts: [
				{
					district: "Gisagara",
					sectors: ["Gikonko", "Gishubi", "Kansi", "Kibirizi", "Kigembe", "Mamba", "Muganza", "Mugombwa", "Mukindo", "Musha", "Ndora", "Nyanza", "Save"]
				},
				{
					district: "Huye",
					sectors: ["Gishamvu", "Huye", "Karama", "Kigoma", "Kinazi", "Maraba", "Mbazi", "Mukura", "Ngoma", "Ruhashya", "Rusatira", "Rwaniro", "Simbi", "Tumba"]
				},
				{
					district: "Kamonyi",
					sectors: ["Gacurabwenge", "Karama", "Kayenzi", "Kayumbu", "Mugina", "Musambira", "Ngamba", "Nyamiyaga", "Nyarubaka", "Rugarika", "Rukoma", "Runda"]
				},
				{
					district: "Muhanga",
					sectors: ["Cyeza", "Kabacuzi", "Kibangu", "Kiyumba", "Muhanga", "Mushishiro", "Nyamabuye", "Nyarusange", "Rongi", "Rugendabari", "Shyogwe"]
				},
				{
					district: "Nyamagabe",
					sectors: ["Buruhukiro", "Cyanika", "Gasaka", "Gatare", "Kaduha", "Kamegeri", "Kibirizi", "Kibumbwe", "Kitabi", "Mbazi", "Mugano", "Musange", "Musebeya", "Nkomane", "Tare", "Uwinkingi"]
				},
				{
					district: "Nyanza",
					sectors: ["Busasamana", "Busoro", "Cyabakamyi", "Kibirizi", "Kigoma", "Mukingo", "Muyira", "Ntyazo", "Rwabicuma"]
				},
				{
					district: "Nyaruguru",
					sectors: ["Busanze", "Cyahinda", "Kibeho", "Kivu", "Mata", "Muganza", "Munini", "Ngera", "Ngoma", "Nyabimata", "Nyagisozi", "Ruheru", "Ruramba", "Rusenge"]
				},
				{
					district: "Ruhango",
					sectors: ["Byimana", "Bweramana", "Kabagali", "Kinazi", "Mbuye", "Mwendo", "Ntongwe", "Ruhango"]
				}
			]
		},
		{
			province: "Eastern Province",
			districts: [
				{
					district: "Bugesera",
					sectors: ["Gashora", "Juru", "Kamabuye", "Mareba", "Mayange", "Musenyi", "Mwogo", "Ngeruka", "Ntarama", "Nyamata", "Nyarugenge", "Rilima", "Ruhuha", "Rweru", "Shyara"]
				},
				{
					district: "Gatsibo",
					sectors: ["Gasange", "Gatsibo", "Gitoki", "Kabarore", "Kageyo", "Kiramuruzi", "Kiziguro", "Muhura", "Murambi", "Ngarama", "Nyagihanga", "Remera", "Rugarama", "Rwimbogo"]
				},
				{
					district: "Kayonza",
					sectors: ["Gahini", "Kabare", "Kabarondo", "Mukarange", "Murama", "Murundi", "Mwiri", "Ndego", "Nyamirama", "Rukara", "Ruramira", "Rwinkwavu"]
				},
				{
					district: "Kirehe",
					sectors: ["Gahara", "Gatore", "Kigarama", "Kigina", "Kirehe", "Mahama", "Mpanga", "Musaza", "Mushikiri", "Nyamugali", "Nasho", "Nyarubuye"]
				},
				{
					district: "Ngoma",
					sectors: ["Gashanda", "Jarama", "Karembo", "Kazo", "Kibungo", "Mugesera", "Murama", "Mutenderi", "Remera", "Rukira", "Rukumberi", "Rurenge", "Sake", "Zaza"]
				},
				{
					district: "Nyagatare",
					sectors: ["Gatunda", "Karangazi", "Katabagemu", "Kiyombe", "Matimba", "Mimuli", "Mukama", "Musheri", "Nyagatare", "Rukomo", "Rwempasha", "Rwimiyaga", "Tabagwe"]
				},
				{
					district: "Rwamagana",
					sectors: ["Fumbwe", "Gahengeri", "Gishari", "Karenge", "Kigabiro", "Muhazi", "Munyaga", "Mwulire", "Nyakaliro", "Nzige", "Rubona"]
				}
			]
		},
		{
			province: "Western Province",
			districts: [
				{
					district: "Karongi",
					sectors: ["Bwishyura", "Gashari", "Gishyita", "Gishari", "Mubuga", "Murambi", "Murundi", "Rwankuba", "Rubengera", "Ruganda", "Rwankuba", "Twumba"]
				},
				{
					district: "Ngororero",
					sectors: ["Bwira", "Gatumba", "Hindiro", "Kabaya", "Kageyo", "Kavumu", "Matyazo", "Muhororo", "Muhanda", "Ndaro", "Ngororero", "Nyange", "Sovu"]
				},
				{
					district: "Nyabihu",
					sectors: ["Bigogwe", "Jenda", "Jomba", "Karago", "Kintobo", "Mukamira", "Muringa", "Rambura", "Rugera", "Rurembo", "Shyira"]
				},
				{
					district: "Nyamasheke",
					sectors: ["Bushekeri", "Bushenge", "Cyato", "Gihombo", "Kagano", "Kanjongo", "Karambi", "Karengera", "Kirimbi", "Macuba", "Mahembe", "Nyabitekeri", "Rangiro", "Ruharambuga", "Shangi"]
				},
				{
					district: "Rubavu",
					sectors: ["Bugeshi", "Busasamana", "Cyanzarwe", "Gisenyi", "Kanama", "Kanzenze", "Kivumu", "Mudende", "Nyakiriba", "Nyamyumba", "Rubavu", "Rugerero"]
				},
				{
					district: "Rusizi",
					sectors: ["Bugarama", "Butare", "Bweyeye", "Gashonga", "Giheke", "Gihundwe", "Gikundamvura", "Gitambi", "Kamembe", "Muganza", "Mururu", "Nkanka", "Nkombo", "Nkungu", "Nyakabuye", "Nyakarenzo", "Nzahaha", "Rwimbogo"]
				},
				{
					district: "Rutsiro",
					sectors: ["Boneza", "Gihango", "Kigeyo", "Kivumu", "Manihira", "Mukura", "Murunda", "Mushonyi", "Mushubati", "Nyabirasi", "Ruhango", "Rwankuba"]
				}
			]
		}]
};
//disability select 

//if yes show options 


export const redirectUrl = "https://google.com"