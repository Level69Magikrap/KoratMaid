package entity

import "gorm.io/gorm"

type Report struct {
	gorm.Model
	Detail  string
	Picture string

	MemberID *uint
	Member          Member `gorm:"foreignKey:MemberID"`
}
