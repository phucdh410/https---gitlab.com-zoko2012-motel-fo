import {
	Abc,
	BarChart,
	CalendarMonthOutlined,
	CloudUpload,
	DatasetLinked,
	DesktopMacOutlined,
	FontDownload,
	LiveTv,
	Mic,
	NotificationImportant,
	People,
	ReceiptLong,
	Save,
	SettingsInputComponent,
	Speed,
	TouchApp,
	ViewCarousel,
} from '@mui/icons-material';

export const NAVIGATIONS = [
	{
		title: 'Dashboard',
		icon: <Speed />,
		in: false,
		children: [
			{
				title: 'Biểu đồ',
				icon: <BarChart />,
				path: '/dashboard/chart',
			},
		],
	},
	{
		title: 'Hệ thống',
		icon: <DesktopMacOutlined />,
		in: false,
		children: [
			{
				title: 'Tài khoản',
				icon: <People />,
				path: '/system/account',
			},
			{
				title: 'Quyền hạn',
				icon: <ReceiptLong />,
				path: '/system/role',
			},
			{
				title: 'Thông báo',
				icon: <NotificationImportant />,
				path: '/system/notification',
			},
		],
	},
	{
		title: 'Lịch trình',
		icon: <CalendarMonthOutlined />,
		in: false,
		children: [
			{
				title: 'Bài đăng',
				icon: <CloudUpload />,
				path: '/calendar/post',
			},
			{
				title: 'Nguồn api',
				icon: <SettingsInputComponent />,
				path: '/calendar/source',
			},
		],
	},
	{
		title: 'Livestream',
		icon: <LiveTv />,
		in: false,
		children: [
			{
				title: 'Bình luận viên',
				icon: <Mic />,
				path: '/live/blv',
			},
			{
				title: 'Nguồn live',
				icon: <DatasetLinked />,
				path: '/live/source',
			},
			{
				title: 'Lưu trữ live',
				icon: <Save />,
				path: '/live/save',
			},
		],
	},
	{
		title: 'Quảng cáo',
		icon: <FontDownload />,
		in: false,
		children: [
			{
				title: 'Banner',
				icon: <ViewCarousel />,
				path: '/live/blv',
			},
			{
				title: 'Text scroll',
				icon: <Abc />,
				path: '/live/source',
			},
			{
				title: 'Nút cược',
				icon: <TouchApp />,
				path: '/live/save',
			},
		],
	},
];
