package entity

import (
	"time"

	"gorm.io/gorm"
)

type History struct {
	gorm.Model
	Date time.Time
	Time time.Time
	Num_of_hour float32

	PaymentID *uint
	Payment Payment `gorm:"foreignKey:PaymentID"`

	// ServiceID *uint
	// Service Service `gorm:"foreignKey:ServiceID"`
}