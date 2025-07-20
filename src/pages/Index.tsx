import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [loyaltyPoints, setLoyaltyPoints] = useState(2450);
  const [loyaltyLevel, setLoyaltyLevel] = useState('Золото');
  
  const menuItems = [
    { id: 'dashboard', label: 'Дашборд', icon: 'Layout' },
    { id: 'profile', label: 'Профиль', icon: 'User' },
    { id: 'cart', label: 'Корзина', icon: 'ShoppingCart', badge: 3 },
    { id: 'orders', label: 'Заказы', icon: 'Package' },
    { id: 'favorites', label: 'Избранное', icon: 'Heart', badge: 12 },
    { id: 'notifications', label: 'Уведомления', icon: 'Bell', badge: 5 },
    { id: 'support', label: 'Поддержка', icon: 'HeadphonesIcon' },
  ];

  const recentOrders = [
    { id: '#ORD-001', item: 'iPhone 15 Pro Max', date: '15 июля', status: 'Доставлен', amount: '124 990 ₽' },
    { id: '#ORD-002', item: 'MacBook Air M2', date: '10 июля', status: 'В пути', amount: '89 990 ₽' },
    { id: '#ORD-003', item: 'AirPods Pro', date: '5 июля', status: 'Обработка', amount: '24 990 ₽' },
  ];

  const favoriteItems = [
    { name: 'Samsung Galaxy S24', price: '79 990 ₽', image: '📱' },
    { name: 'Sony WH-1000XM5', price: '29 990 ₽', image: '🎧' },
    { name: 'iPad Pro 12.9"', price: '109 990 ₽', image: '📱' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">TechStore</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                {loyaltyPoints} баллов
              </Badge>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <Icon name="User" size={20} className="text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-3">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                        activeSection === item.id
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon name={item.icon} size={18} />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      {item.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            {activeSection === 'dashboard' && (
              <div className="space-y-6">
                {/* Welcome Section */}
                <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2">Добро пожаловать, Александр!</h2>
                        <p className="text-blue-100">Статус: {loyaltyLevel} • {loyaltyPoints} баллов</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold">{loyaltyPoints}</div>
                        <div className="text-blue-100">баллов</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Icon name="Package" size={24} className="text-blue-500 mx-auto mb-2" />
                      <div className="text-2xl font-semibold text-gray-900">12</div>
                      <div className="text-sm text-gray-600">Заказов</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Icon name="Heart" size={24} className="text-red-500 mx-auto mb-2" />
                      <div className="text-2xl font-semibold text-gray-900">12</div>
                      <div className="text-sm text-gray-600">Избранное</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Icon name="ShoppingCart" size={24} className="text-green-500 mx-auto mb-2" />
                      <div className="text-2xl font-semibold text-gray-900">3</div>
                      <div className="text-sm text-gray-600">В корзине</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Icon name="Star" size={24} className="text-yellow-500 mx-auto mb-2" />
                      <div className="text-2xl font-semibold text-gray-900">{loyaltyLevel}</div>
                      <div className="text-sm text-gray-600">Статус</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Orders & Favorites */}
                <div className="grid grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Icon name="Package" size={20} />
                        <span>Последние заказы</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentOrders.map((order) => (
                          <div key={order.id} className="flex justify-between items-center p-3 rounded-lg bg-gray-50">
                            <div>
                              <div className="font-medium text-gray-900">{order.item}</div>
                              <div className="text-sm text-gray-600">{order.id} • {order.date}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-gray-900">{order.amount}</div>
                              <Badge 
                                variant={order.status === 'Доставлен' ? 'default' : 'secondary'}
                                className="text-xs"
                              >
                                {order.status}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Icon name="Heart" size={20} />
                        <span>Избранное</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {favoriteItems.map((item, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                            <div className="text-2xl">{item.image}</div>
                            <div className="flex-1">
                              <div className="font-medium text-gray-900">{item.name}</div>
                              <div className="text-sm font-semibold text-blue-600">{item.price}</div>
                            </div>
                            <Button size="sm" variant="outline">
                              <Icon name="ShoppingCart" size={16} />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Loyalty Program */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Award" size={20} />
                      <span>Программа лояльности</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Icon name="Trophy" size={24} className="text-gray-400" />
                        </div>
                        <div className="font-medium text-gray-900">Серебро</div>
                        <div className="text-sm text-gray-600">0-999 баллов</div>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Icon name="Crown" size={24} className="text-yellow-600" />
                        </div>
                        <div className="font-medium text-yellow-600">Золото</div>
                        <div className="text-sm text-gray-600">1000-4999 баллов</div>
                        <Badge className="mt-1 bg-yellow-100 text-yellow-800">Текущий</Badge>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Icon name="Gem" size={24} className="text-gray-400" />
                        </div>
                        <div className="font-medium text-gray-900">Платина</div>
                        <div className="text-sm text-gray-600">5000+ баллов</div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">До статуса Платина</span>
                        <span className="text-sm text-gray-600">{5000 - loyaltyPoints} баллов</span>
                      </div>
                      <Progress value={(loyaltyPoints / 5000) * 100} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Other sections placeholder */}
            {activeSection !== 'dashboard' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name={menuItems.find(item => item.id === activeSection)?.icon || 'Settings'} size={20} />
                    <span>{menuItems.find(item => item.id === activeSection)?.label}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Icon name="Construction" size={48} className="text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Раздел в разработке</h3>
                    <p className="text-gray-600">Этот раздел будет доступен в следующих обновлениях</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;