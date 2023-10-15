package entity

import "gorm.io/gorm"

type Review struct {
	gorm.Model
	Rate   int
	Detail string

	// ServiceID *uint
	// Service Service `gorm:"foreignKey:ServiceID"`
}
